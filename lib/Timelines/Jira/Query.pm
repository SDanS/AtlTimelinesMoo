package Timelines::Jira::Query;

use strict;
use warnings;

use Carp;
use Carp::Always;
use JSON;
use Moo;
use Type::Tiny;

use Types::Standard -types;
use URI::Escape;
use DateTime;

use Data::Dumper;

use Timelines::Jira::Issue;

# use Timelines::Jira::GoogleChart;

extends 'Timelines::Jira';

has client => (
    is       => 'ro',
    isa      => InstanceOf ['REST::Client'],
    required => 1,
);

has jira_query => ( is => 'ro', required => 1, lazy => 1 );

has start_date => ( is => 'ro', required => 1 );

has start_datetime =>
    ( is => 'ro', required => 1, isa => InstanceOf ['DateTime'] );

has end_date => ( is => 'ro', required => 1 );

has end_datetime =>
    ( is => 'ro', required => 1, isa => InstanceOf ['DateTime'] );

has query_name => ( is => 'ro' );

# has issue_list_response => ( is => 'rw', );

has issue_list => (
    is      => 'ro',
    lazy    => 1,
    default => sub { $_[0]->create_issue_list }
);

has issues => (
    is      => 'ro',
    lazy    => 1,
    default => sub { $_[0]->create_issues },
);

has GC_query_overview => (
    is      => 'ro',
    lazy    => 1,
    default => sub {
        my $query_overview = [];
        foreach ( @{ $_[0]->issues } ) {
            push @{$query_overview}, $_
                foreach ( @{ $_->{issue_obj}->GC_json_ref } );
        }
        return $query_overview;
    }
);

sub BUILD {
    my $self = shift;
    $self->write_issue_level_files;
    $self->ov_menu_css;
    $self->ov_index_html;
}

sub create_issues {
    my $self = shift;
    my $story_ref;
    my $issue_list = $self->issue_list;
    ### Must create directories before subtasks are processed.
    $self->create_directories;
    foreach ( 0 .. $#{$issue_list} ) {
        ### An array of all of the individual issue objects.
        $story_ref->[$_]->{issue_key} = $issue_list->[$_];
        my $issue = Timelines::Jira::Issue->new(
            client         => $self->client,
            issue_key      => $story_ref->[$_]->{issue_key},
            start_date     => $self->start_date,
            start_datetime => $self->start_datetime,
            end_date       => $self->end_date,
            end_datetime   => $self->end_datetime
        );
        $story_ref->[$_]->{issue_obj} = $issue;
    }
    return $story_ref;
}

sub create_issue_list {
    my $self       = shift;
    my $jira_query = $self->jira_query;
    my @issue_list;
    my $req_fields   = '&fields=key';
    my $query_string = 'jql=' . uri_escape($jira_query);

    ### Get a list of issues keys.
    $self->client->GET( 'rest/api/2/search?' . $query_string . $req_fields,
        $self->client->{auth_headers} );
    my $issue_list_response = from_json( $self->{client}->responseContent() );
    foreach ( @{ $issue_list_response->{issues} } ) {
        push @issue_list, $_->{key};
    }
    return \@issue_list;
}

sub write_issue_level_files {
    my $self = shift;
    foreach ( @{ $self->issues } ) {
        ### Print TimelineJS files.
        $_->{issue_obj}->write_TJS_js;
        $_->{issue_obj}->write_TJS_html;
        ### Print Google Timeline.
        $_->{issue_obj}->write_story_GC_ov_html;
        $_->{issue_obj}->write_story_GC_ov_js;
        ### Print colors.js.
        $_->{issue_obj}->write_colors_js;
    }
}

sub create_directories {
    my $self = shift;
    mkdir './' . $self->query_name or die "$!";
    foreach ( @{ $self->issue_list } ) {
        mkdir './' . $self->query_name . '/' . $_ or die "$!";
    }
    chdir './' . $self->query_name or die "$!";
    return $self;
}

sub ov_index_html {
    my $self = shift;
    my $story_ref;

    # $self->{sprint_name} = $self->{dir_name} if $self->{dir_name};
    (   my $html_tag_open = qq{
        <html>
        <title> Report: $self->{query_name}</title>
        <head>
            <meta charset="UTF-8" />
            <link rel="stylesheet" type="text/css" href="menu.css"/>
        </head>
        <body>
        <h2>Report: $self->{query_name}</h2>
        <script type="text/javascript" src="https://www.google.com/jsapi?autoload={'modules':[{'name':'visualization',
         'version':'1','packages':['timeline']}]}"></script>
    }
    ) =~ s/ {4,8}//mg;
    (   my $html_tag_close = qq{
        </body>
        </html>
    }
    ) =~ s/ {4,8}//mg;
    my $div_ul_open  = '<div class="menu_sprint">' . "\n" . '<ul>' . "\n";
    my $ul_div_close = '</ul>' . "\n" . '</div>';
    my $combined_chart_div
        = '<script type="text/javascript" src="./combined_chart.js"></script>'
        . "\n"
        . '<div id="combined_chart_div" style="height: 500px;"></div>' . "\n";
    my $index_html = $html_tag_open . "\n" . $combined_chart_div;

    foreach ( @{ $self->issues } ) {
        my $key = $_->{issue_key};

        # print Dumper $_->{issue_response}->{subtasks}->{status_counter};
        (   my $script_loader = qq|
        <script type="text/javascript" src="./$key-gc.js"></script>
        <div class="div_simple" id="$_->{issue_obj}->{story_div}" style="width: 100%; height: 200px;"></div>
        </div>
        |
        ) =~ s/ {4,8}//mg;
        $index_html
            .= '<div class="menu_sprint><ul><li class="menu_simple"><a href="'
            . "./$_->{issue_key}.html" . '">'
            . $_->{issue_key} . ": "
            . $_->{issue_obj}->summary
            . '<br><span style="color: red;">'
            . 'Subtasks count: ['
            . $_->{issue_obj}->subtask_count
            . ']</span></a></li><br>' . "\n"
            . $script_loader
            . '</ul></div>' . "\n";
    }
    $index_html .= $html_tag_close;
}

sub ov_menu_css {
    my $self = shift;
    (   my $css = qq[
/* CSSTerm.com Simple CSS menu */

.menu_simple ul {
margin: 0; 
padding: 10px 7px 5px;
width:185px;
left: 10px;
list-style-type: none;
position: fixed;
max-height: 500px;
overflow-x: hidden;
overflow-y: auto;
}

.menu_simple ul li a {
    text-decoration: none;
    color: black; 
    padding: 10.5px 11px;
    background-color: #005555;
    background-color: #FFFFFF;
    display:block;
    border-color: #5FD367;
}
 
.menu_simple ul li a:visited {
    color: purple;
}
 
.menu_simple ul li a:hover, .menu_simple ul li .current {
    color: purple;
    background-color: #5FD367;
}

.body_offset {
    margin-left: 225px;
    margin-top: 0px;
}
 
.menu_sprint ul {
    margin: 0;
    padding: 10px 7px 5px;
    width:1000px;
    left: 10px;
    list-style-type: none;
    position: relative;
    max-height: 800px;
    overflow-x: hidden;
    overflow-y: auto;
}

.menu_sprint ul li a {
    text-decoration: none;
    color: black;
    padding: 10.5px 11px;
    background-color: #005555;
    background-color: #FFFFFF;
    display:block;
    border-color: #5FD367;
}

.menu_sprint ul li a:visited {
    color: purple;
}

.menu_sprint ul li a:hover, .menu_simple ul li .current {
    color: purple;
    background-color: #5FD367;
}
]
    ) =~ s/ {4}//mg;
    my $fh;
    open $fh, '>', './menu.css' or croak "Cannot open filehandle, $fh: $!";
    print $fh $css or croak "Cannot print to filehandle, $fh: $!";
    return $self;

}

1;
