package Timelines::Jira::Issue;

use strict;
use warnings;

use Carp;
use Carp::Always;
use JSON;
use Moo;
use Type::Tiny;

use Data::Dumper;

use Types::Standard -types;
use DateTime;

use Timelines::Jira::Subtasks;

extends 'Timelines::Jira';

has issue_key => ( is => 'ro' );

has client => ( is => 'ro' );

### API response from Jira REST API (rest/api/2/issue/).
has issue_response => (
    is      => 'ro',
    builder => 'need_issue_response'
);

### Terminal dates.
has start_date => ( is => 'ro', required => 1 );

has start_datetime =>
    ( is => 'ro', required => 1, isa => InstanceOf ['DateTime'] );

has end_date => ( is => 'ro', required => 1 );

has end_datetime =>
    ( is => 'ro', required => 1, isa => InstanceOf ['DateTime'] );

has bucket => (
    is      => 'ro',
    lazy    => 1,
    default => sub { $_[0]->create_bucket }
);

has summary => (
    is      => 'ro',
    default => sub { return $_[0]->issue_response->{fields}->{summary} },
);

has is_subtask => (
    is      => 'ro',
    default => sub {0}
);

has subtasks => (
    is      => 'rw',
    default => sub { [] }
);

has GC_json_ref => (
    is      => 'ro',
    lazy    => 1,
    default => sub { $_[0]->create_GC_json_ref }
);

has TJS_json_ref => (
    is      => 'ro',
    lazy    => 1,
    default => sub { $_[0]->create_TJS_json }
);

has story_ov_GC => (
    is      => 'ro',
    lazy    => 1,
    default => sub { $_[0]->create_story_ov_GC }
);

has story_only_GC => (
    is      => 'ro',
    lazy    => 1,
    default => sub { $_[0]->create_story_only_GC }
);

has parent => ( is => 'ro' );

has story_div => (
    is      => 'ro',
    builder => sub { return 'chart-div_' . $_[0]->issue_key; }
);

has link => (
    is      => 'ro',
    builder => sub {
        return './' . $_[0]->issue_key . '/' . $_[0]->issue_key . '.html';
    }
);

has link_text => (
    is      => 'ro',
    builder => sub { return $_[0]->issue_key }
);

has histories => (
    is      => 'ro',
    lazy    => 1,
    default => sub { return $_[0]->issue_response->{changelog}->{histories} }
);

has subtask_count => (
    is      => 'ro',
    lazy    => 1,
    default => sub { return scalar @{ $_[0]->subtasks->subtask_list } }
);

sub need_issue_response {
    my $self = shift;
    $self->client->GET(
        'rest/api/2/issue/' . $self->issue_key . '?expand=changelog',
        $self->client->{auth_headers} );
    return from_json( $self->client->responseContent() );
}

sub BUILD {
    my $self = shift;
    ### Gather all the subtasks.
    if ( !( $self->is_subtask ) ) {
        my $subtasks = Timelines::Jira::Subtasks->new(
            client         => $self->client,
            parent         => $self->issue_key,
            start_date     => $self->start_date,
            start_datetime => $self->start_datetime,
            end_date       => $self->end_date,
            end_datetime   => $self->end_datetime
        );
        $self->subtasks($subtasks);
    }
}

sub create_bucket {
    my $self          = shift;
    my $temp_bucket   = {};
    my $history_items = [
        'summary', 'description', 'priority', 'issuetype',
        'status',  'Sprint',      'assignee', 'comments',
        'Story Points'
    ];
    foreach ( @{$history_items} ) {
        $temp_bucket->{$_} = [];
    }
    my $histories = $self->histories;
    foreach my $history_index ( 0 .. $#{$histories} ) {
        foreach my $item_index (
            0 .. $#{ $histories->[$history_index]->{items} } )
        {
            if (my ($bucket) = grep {
                    $_ eq $histories->[$history_index]->{items}->[$item_index]
                        ->{field}
                } @$history_items
                )
            {
                push @{ $temp_bucket->{$bucket} },
                    $histories->[$history_index];
            }
            next;
        }
    }
    $temp_bucket->{comments} = $self->get_comments;
    return $temp_bucket;
}

sub get_comments {
    my $self     = shift;
    my $comments = $self->issue_response->{fields}->{comment}->{comments};
    return $comments;
}

sub create_GC_json_ref {
    my $self        = shift;
    my $GC_json_ref = [];
    foreach my $current_bucket ( 'assignee', 'status' ) {
        ### Get all bucket items.
        foreach ( 0 .. $#{ $self->bucket->{$current_bucket} } ) {
            ### Get current bucket instance and next.
            my $bucket_instance = $self->bucket->{$current_bucket}->[$_];
            my $next_bucket_instance
                = $self->bucket->{$current_bucket}->[ $_ + 1 ];
            my $text = my $event->{text} = {};
            ### Get the start date from the Jira issue.
            my ( $event_start_date, $event_start_datetime )
                = _timeline_time( $bucket_instance->{created} );
            $event->{start_date}     = $event_start_date;
            $event->{start_datetime} = $event_start_datetime;
            ### Compare start date from the issue and start date provided as an argument.
            my $cmp = DateTime->compare( $event->{start_datetime},
                $self->start_datetime );
            ### If the start date provided as an argument is after the start date in the Jira event,
            ### use the start date from the argument.
            if ( $cmp == -1 ) {
                $event->{start_date}     = $self->start_date;
                $event->{start_datetime} = $self->start_datetime;
            }
            ### Get the end date from the next event in the Jira issue.
            if ( $_ != $#{ $self->bucket->{$current_bucket} } ) {
                my ( $event_end_date, $event_end_datetime )
                    = _timeline_time( $next_bucket_instance->{created} );
                $event->{end_date}     = $event_end_date;
                $event->{end_datetime} = $event_end_datetime;
                ### Compare the end date from args to end date in Jira issue event.
                my $cmp = DateTime->compare( $event->{end_datetime},
                    $self->end_datetime );
                ### If the argument end date is before the Jira issue event end date,
                ### use the argument end date.
                if ( $cmp == 1 ) {
                    $event->{end_date}     = $self->end_date;
                    $event->{end_datetime} = $self->end_datetime;
                }
            }
            ### If the event is missing an end date, use the end date from args.
            if ( !$event->{end_date} ) {
                $event->{end_date} = $self->end_date;
            }
            ### If the event is missing an end datetime, use the end datetime that
            ### is created from end date argument.
            if ( !$event->{end_datetime} ) {
                $event->{end_datetime} = $self->end_datetime;
            }
            ### Get the remainde of the data for the event.
            foreach ( 0 .. $#{ $bucket_instance->{items} } ) {
                my $instance_item = $bucket_instance->{items}->[$_];
                if ( $instance_item->{field} eq $current_bucket ) {
                    my $to_string
                        = $instance_item->{toString} // 'unassigned';
                    my $from_string
                        = $instance_item->{fromString} // 'unassigned';
                    my $event_type = $instance_item->{field};
                    my @row_array;
                    my $status = $to_string;
                    my ( $start_date, $end_date )
                        = date_termination( $event, $self->start_date,
                        $self->end_date );
                    ### Ensure that, no matter what, the end date comes after the start date. 
                    ### If not, the event is insane and should be discarded.
                    if (   $event->{end_datetime}
                        && $event->{start_datetime} )
                    {
                        my $cmp = DateTime->compare(
                            $event->{end_datetime},
                            $event->{start_datetime}
                        );
                        if ( ( $cmp != -1 ) ) {
                            push @row_array,
                                [
                                $self->issue_key . ': ' . $event_type,
                                $status, $start_date, $end_date
                                ];
                            push @{$GC_json_ref}, @row_array;

                        }
                    }
                }
                else {
                    next;
                }
            }
        }
    }
    return $GC_json_ref;
}

sub create_TJS_json {
    my $self         = shift;
    my $TJS_json_ref = {};
    ### Set the title while we're here.
    $TJS_json_ref->{title}->{text}->{headline}
        = "<a href=\"https://jira.cpanel.net/browse/$self->{issue_key}\">$self->{issue_key}: "
        . $self->{summary} . '</a>';
    $TJS_json_ref->{events} = [];
    ### Assignee and status are events that have a span. They require special snowflake status.
    foreach my $current_bucket ( 'assignee', 'status' ) {
        foreach ( 0 .. $#{ $self->bucket->{$current_bucket} } ) {
            ### We need the next bucket in order to set end_dates.
            my $bucket_instance = $self->bucket->{$current_bucket}->[$_];
            my $next_bucket_instance
                = $self->bucket->{$current_bucket}->[ $_ + 1 ];
            ### Define our event. Take a shortcut.
            my $text = my $event->{text} = {};
            ### A bunch of date safety.
            my ( $event_start_date, $event_start_datetime )
                = _timeline_time( $bucket_instance->{created} );
            $event->{start_date}     = $event_start_date;
            $event->{start_datetime} = $event_start_datetime;
            my $cmp = DateTime->compare( $event->{start_datetime},
                $self->start_datetime );
            if ( $cmp == -1 ) {
                $event->{start_date}     = $self->start_date;
                $event->{start_datetime} = $self->start_datetime;
            }
            ### Set the end dates by checking the start date on the next
            ### status/assignee change.
            if ( $_ != $#{ $self->bucket->{$current_bucket} } ) {
                my ( $event_end_date, $event_end_datetime )
                    = _timeline_time( $next_bucket_instance->{created} );
                $event->{end_date}     = $event_end_date;
                $event->{end_datetime} = $event_end_datetime;
                my $cmp = DateTime->compare( $event->{end_datetime},
                    $self->end_datetime );
                if ( $cmp == 1 ) {
                    $event->{end_date}     = $self->end_date;
                    $event->{end_datetime} = $self->end_datetime;
                }
            }
            if ( !$event->{end_date} ) {
                $event->{end_date} = $self->end_date;
            }
            ### Set the rest of the event object up.
            foreach ( 0 .. $#{ $bucket_instance->{items} } ) {
                my $instance_item = $bucket_instance->{items}->[$_];
                if ( $instance_item->{field} eq $current_bucket ) {

                    my $to_string
                        = $instance_item->{toString} // 'unassigned';
                    my $from_string
                        = $instance_item->{fromString} // 'unassigned';
                    $text->{headline} = "Assignee: " . $to_string
                        if $instance_item->{field} eq 'assignee';
                    $text->{headline} = $to_string
                        if $instance_item->{field} eq 'status';
                    $text->{text}
                        = ucfirst( $instance_item->{field} )
                        . ' changed from '
                        . $from_string . ' to '
                        . $to_string;
                    $event->{group} = $instance_item->{field};
                    status_colors( $event, $instance_item )
                        if $instance_item->{field} eq 'status';
                    $event->{background}->{color} = 'seagreen'
                        if $instance_item->{field} eq 'assignee';
                    ### *_datetime aren't necessary in the object, but
                    ### they do no harm.
                    if (   $event->{end_datetime}
                        && $event->{start_datetime} )
                    {
                        my $cmp = DateTime->compare(
                            $event->{end_datetime},
                            $event->{start_datetime}
                            )
                            if ( $event->{end_datetime}
                            && $event->{start_datetime} );

                        if ( ( $cmp != -1 ) ) {
                            push @{ $TJS_json_ref->{events} }, $event;

                        }
                    }
                }
                else {
                    next;
                }
            }
        }
    }
    ### Go through the rest of the fields. These don't warrant spans.
    my $scope = [ 'summary', 'description', 'Story Points' ];
    my $misc = [ 'priority', 'issuetype' ];
    foreach my $bucket_key ( @$scope, @$misc ) {
        my $current_bucket = $self->bucket->{$bucket_key};
        foreach my $bucket_instance ( @{$current_bucket} ) {
            my $event = {};
            my ( $start_date, $start_datetime )
                = _timeline_time( $bucket_instance->{created} );
            $event->{start_date}     = $start_date;
            $event->{start_datetime} = $start_datetime;
            foreach my $item ( @{ $bucket_instance->{items} } ) {
                my $field = $item->{field};
                if ( grep { $_ eq $field } @$scope ) {
                    $event->{group}
                        = 'scope';    # { %$event, 'group' => 'scope', };
                    $event->{background}->{color} = 'palevioletred';
                }
                elsif ( grep { $_ eq $field } @$misc ) {
                    $event->{group}
                        = 'misc';     #= { %$event, 'group' => 'misc', };
                    $event->{background}->{color} = 'plum';
                }
                else { next; }
                my $from_string = $item->{fromString} // 'undef';
                $event->{text}->{text}
                    = ucfirst($field)
                    . ' changed from: <br>'
                    . $from_string
                    . '<br><br>To: <br>'
                    . $item->{toString};
                $event->{text}->{headline} = ucfirst($field) . ' changed.';
                push @{ $TJS_json_ref->{events} }, $event;

            }
        }
    }
    ### Comments require special handling.
    foreach ( @{ $self->bucket->{comments} } ) {
        my $event = {};
        my ( $start_date, $start_datetime ) = _timeline_time( $_->{created} );
        $event->{start_date}          = $start_date;
        $event->{start_datetime}      = $start_datetime;
        $event->{group}               = 'misc';
        $event->{background}->{color} = 'olivedrab';
        $event->{text}->{headline}
            = 'Comment added by ' . $_->{author}->{displayName};

        $event->{text}->{text} = $_->{body};
        ### Replace line breaks and strip Jira noformat.
        $event->{text}->{text} =~ s/\r\n/<br>/g;
        $event->{text}->{text} =~ s/\{noformat\}//g;
        push @{ $TJS_json_ref->{events} }, $event;
    }
    return $TJS_json_ref;
}

sub create_story_ov_GC {
    my $self     = shift;
    my $story_ov = [];
    push @{$story_ov}, $_ foreach @{ $self->GC_json_ref };
    foreach ( @{ $self->subtasks->subtask_responses } ) {
        push @{$story_ov}, $_ foreach @{ $_->GC_json_ref };
    }
    my @header_row = (
        [   'Row Label',
            'Bar Label',
            { type => 'date', label => 'Start' },
            { type => 'date', label => 'End' }
        ]
    );
    unshift @{$story_ov}, @header_row;
    return $story_ov;
}

sub create_story_only_GC {
    my $self       = shift;
    my $story_only = [];
    push @{$story_only}, $_ foreach @{ $self->GC_json_ref };
    my @header_row = (
        [   'Row Label',
            'Bar Label',
            { type => 'date', label => 'Start' },
            { type => 'date', label => 'End' }
        ]
    );
    unshift @{$story_only}, @header_row;
    return $story_only;
}

sub write_TJS_js {
    my $self = shift;
    if ( $self->parent ) {
        my $fh;
        open $fh, '>>', './' . $self->parent . '/' . $self->issue_key . '.js'
            or croak "couldn't open filehandle $fh: $!";
        print $fh "var timeline_json = "
            . to_json( $self->TJS_json_ref,
            { allow_blessed => 1, pretty => 1 } )
            or croak "Couldn't print to $fh: $!";
    }
    else {
        my $fh;
        open $fh, '>',
            './' . $self->issue_key . '/' . $self->issue_key . '.js'
            or croak "couldn't open filehandle $fh: $!";
        print $fh "var timeline_json = "
            . to_json( $self->TJS_json_ref,
            { allow_blessed => 1, pretty => 1 } )
            or croak "Couldn't print to $fh: $!";
    }
}

sub write_story_GC_ov_html {
    my $self          = shift;
    my $subtask_array = [];
    foreach ( @{ $self->subtasks->{subtask_list} } ) {
        my $subtask_links = {};
        $subtask_links->{$_} = './' . $self->issue_key . '/' . $_ . '.html';
        push @{$subtask_array}, $subtask_links;
    }
    my $div_ul_open  = '<div class="menu_simple">' . "\n" . '<ul>' . "\n";
    my $ul_div_close = '</ul>' . "\n" . '</div>' . "\n";
    my $ov_nav_menu_html
        = $div_ul_open
        . '<li><a href="'
        . $self->{link} . '">'
        . $self->{issue_key}
        . '</a></li>' . "\n";
    foreach ( @{$subtask_array} ) {
        my ($key) = keys $_;
        $ov_nav_menu_html
            .= '<li><a href="'
            . $_->{$key} . '">'
            . $key
            . '</a></li>' . "\n";
    }
    $ov_nav_menu_html .= $ul_div_close;
    (   my $main_html = qq{
            <html>
            <head>
              <meta charset="UTF-8" />
              <link rel="stylesheet" type="text/css" href="menu.css"/>
            </head>
            <title>$self->{issue_key}</title>
            <body>
            $ov_nav_menu_html
              <div class="body_offset">
              <h2><a href="https://jira.cpanel.net/browse/$self->{issue_key}">$self->{issue_key}: $self->{summary}</a></h2>
              <script type="text/javascript" src="https://www.google.com/jsapi?autoload={'modules':[{'name':'visualization',
       'version':'1','packages':['timeline']}]}"></script>
              <script type="text/javascript" src="./$self->{issue_key}.js"></script>
              <div id="chart-div_$self->{issue_key}" style="width: 100%; height: 100%;"></div>
            </div>
            </body>
            </html>
            }
    ) =~ s/ {12}//mg;
    my $fh;
    open $fh, '>', "./$self->{issue_key}.html"
        or croak "Cannot open filehandle, $fh: $!";
    print $fh $main_html
        or croak "Cannot print to filehandle, $fh: $!";
}

sub write_story_GC_ov_js {
    my $self = shift;
    open my $story_gc_fh, '>', "./$self->{issue_key}" . '.js'
        or croak("$!");
    my $story_gc_js
        = to_json( $self->story_ov_GC, { allow_blessed => 1, pretty => 1 } );
    my $story_GC_div = $self->{story_div};
    (   my $story_script = qq{
        google.load(\'visualization\', \'1\', {packages\: [\'timeline\']});
        google.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable($story_gc_js);
            var options = {
                avoidOverlappingGridLines: false,
                allowHtml: true,
                forceIFrame: true,
            };
            var view = new google.visualization.DataView(data);
            //view.setColumns([]);
            var Container = document.getElementById("$story_GC_div");
            var chart = new google.visualization.Timeline(Container);


            chart.draw(view, options);
        }}
    ) =~ s/^ {8}//mg;
    print $story_gc_fh $story_script;

}

sub write_story_only_GC_js {
    my $self = shift;
    open my $story_gc_fh, '>', "./$self->{issue_key}" . '-gc.js'
        or croak("$!");
    my $story_gc_js = to_json( $self->story_only_GC,
        { allow_blessed => 1, pretty => 1 } );
    my $story_only_div = $self->{story_div};
    (   my $story_script = qq{
        google.load(\'visualization\', \'1\', {packages\: [\'timeline\']});
        google.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable($story_gc_js);
            var options = {
                avoidOverlappingGridLines: false,
                allowHtml: true,
                forceIFrame: true,
            };
            var view = new google.visualization.DataView(data);
            //view.setColumns([]);
            var Container = document.getElementById("$story_only_div");
            var chart = new google.visualization.Timeline(Container);


            chart.draw(view, options);
        }}
    ) =~ s/^ {8}//mg;
    print $story_gc_fh $story_script;
}

### Build google timeline data for both story with subtasks and story
### only.

sub write_TJS_html {
    my $self = shift;
    (   my $options = qq[
            {
                initial_zoom: 1,
                timenav_height_percentage: 35
            }
            ]
    ) =~ s/ {4,8,12}//mg;
    (   my $html = qq[
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        </head>
        <title>$self->{issue_key}: Timeline</title>
        <head></head>
        <body>
            <!-- 1 -->
            <link title="timeline-styles" rel="stylesheet" href="//cdn.knightlab.com/libs/timeline3/latest/css/timeline.css">

            <!-- 2 -->
            <script src="//cdn.knightlab.com/libs/timeline3/latest/js/timeline.js"></script>

            <div id='timeline-embed' style="width: 100%; height: 600px"></div>
            <script type="text/javascript" src="$self->{issue_key}.js"></script>

            <script type="text/javascript">
                var options = $options;
                window.timeline = new TL.Timeline('timeline-embed', timeline_json, options);
            </script>
            <script type="text/javascript" src="color.js"></script>
        </body>
        </html>]
    ) =~ s/^ {8}//gm;
    my $fh;
    if ( !$self->is_subtask ) {
        open $fh, ">", "./$self->{issue_key}/$self->{issue_key}.html"
            or croak(
            "Cannot open file $self->{issue_key}\/$self->{issue_key}.html: $!"
            );
    }
    else {
        open $fh, '>', './' . $self->parent . '/' . $self->issue_key . '.html'
            or croak(
            "Cannot open file $self->{issue_key}\/$self->{issue_key}.html: $!"
            );
    }
    print $fh $html or croak "Cannot print to file, $fh: $!";

}

sub write_colors_js {
    my $self = shift;
    (   my $color_js = qq|
               for (index = 0; index < document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline').length; index++) {  
                  var colors = {
                    'In Progress': 'darkcyan',
                    'In Review': 'dodgerblue',
                    'To Do': 'gray',
                    'In Test': 'darkblue',
                    'Merge Pending': 'slateblue',
                    'Done': 'indigo'
                  };
                  if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/In Progress/mg)) {
                    document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor = "darkcyan";
                  }
                  if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/In Review/mg)) {
                    document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
                      = "dodgerblue";
                  }
                  if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/To Do/mg)) {
                    document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
                      = "gray";
                  }
                  if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/In Test/mg)) {
                    document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
                      = "darkblue";
                  }
                  if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Merge Pending/mg)) {
                    document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
                      = "slateblue";
                  }
                  if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Ready To Accept/img)) {
                    document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
                      = "slateblue";
                  }
                  if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Ready to Merge/img)) {
                    document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
                      = "slateblue";
                  }                  if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Done/mg)) {
                    document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
                      = "indigo";
                  }
                  if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Assignee.*/mg)) {
                    document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
                      = "seagreen";
                  }  
                  if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Assignee: unassigned/mg)) {
                    document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
                      = "indianred";
                  }  
                  if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Comment/mg)) {
                    document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
                      = "olivedrab";
                  }                                
                  if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Summary/mg)) {
                    document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
                      = "palevioletred";
                  }             
                  if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Description/mg)) {
                    document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
                      = "palevioletred";
                  } 
                  if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Story Points/mg)) {
                    document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
                      = "palevioletred";
                  }
                  if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Priority/mg)) {
                    document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
                      = "plum";
                  }   
                  if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Issuetype/mg)) {
                    document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
                      = "plum";
                  }
                }
                var arr = document.querySelectorAll('div.tl-timegroup');
                for (index = 0; index < arr.length; index++) {
                  if ( arr[index].className.match(/tl-timegroup\$/) ) {
                    arr[index].style.backgroundColor = "lightgray";
                  }
                }
                var arr2 = document.querySelectorAll('div.tl-timegroup-message');
                for (index = 0; index < arr2.length; index++) {
                    arr2[index].style.color = "gray";
                }
                |
    ) =~ s/ {14}//mg;
    my $fh_color;
    open $fh_color, '>', "./$self->{issue_key}/color.js"
        or croak "Cannot open color.js filehandle: $fh_color";
    print $fh_color $color_js
        or croak "Cannot print to file: $fh_color";
    return $self;
}

### Deal with Jira's wacky time.
sub _timeline_time {
    my $time     = shift;
    my $datetime = dt_iso_8601($time);
    my $date     = {};
    $date->{month}  = $datetime->month;
    $date->{day}    = $datetime->day;
    $date->{year}   = $datetime->year;
    $date->{hour}   = $datetime->hour;
    $date->{minute} = $datetime->min;
    return $date, $datetime;
}

### For converting Jira's time format to something more useful.
sub dt_iso_8601 {
    my $time          = shift;
    my @stripped_time = split( '\.', $time );
    my $iso8601       = DateTime::Format::ISO8601->new
        or croak "Invalid time format: $time";
    my $datetime = $iso8601->parse_datetime( $stripped_time[0] );
    return $datetime;
}

### Set status colors for slide backgrounds.
sub status_colors {
    my $event      = shift;
    my $item       = shift;
    my $color_href = {
        'To Do'         => 'gray',
        'In Progress'   => 'darkcyan',
        'In Review'     => 'dodgerblue',
        'In Test'       => 'darkblue',
        'Merge Pending' => 'slateblue',
        'Done'          => 'indigo',
    };
    for ( keys $color_href ) {
        $event->{background}->{color} = $color_href->{ $item->{toString} };
    }
}

### Handle date cutoffs.
sub date_termination {
    my ( $event, $terminal_start_date, $terminal_end_date ) = @_;
    my ( $start_date, $end_date );
    if ( defined $event->{start_date} ) {
        $start_date
            = "Date($event->{start_date}->{year}, "
            . ( $event->{start_date}->{month} - 1 )
            . " ,$event->{start_date}->{day}, $event->{start_date}->{hour}, $event->{start_date}->{minute})";
    }
    else {
        $start_date
            = "Date($terminal_start_date->{year}, "
            . ( $terminal_start_date->{month} - 1 )
            . ", $terminal_start_date->{day},  $terminal_start_date->{hour}, $terminal_start_date->{minute})";
    }
    if ( defined $event->{end_date} ) {
        $end_date
            = "Date($event->{end_date}->{year}, "
            . ( $event->{end_date}->{month} - 1 )
            . ", $event->{end_date}->{day}, $event->{end_date}->{hour}, $event->{end_date}->{minute})";
    }
    else {
        $end_date
            = "Date($terminal_end_date->{year}, "
            . ( $terminal_end_date->{month} - 1 )
            . ", $terminal_end_date->{day}, $terminal_end_date->{hour}, $terminal_end_date->{minute})";
    }
    return ( $start_date, $end_date );

}

1;
