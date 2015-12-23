#!/usr/bin/perl
package query_to_timeline;

use strict;
use warnings;

use Getopt::Long;
use Carp::Always;
use DateTime;
use REST::Client;
use MIME::Base64;

use Timelines::Jira::Query;

my @start_date;
my @end_date;
my $username;
my $password;
my $sprint_name;
my @issues;
my $query;
my $dir_name;

GetOptions(
    "start_date=s{5}" => \@start_date,
    "end_date=s{5}"   => \@end_date,
    "username=s"      => \$username,
    "password=s"      => \$password,
    "sprint_name=s"   => \$sprint_name,
    "dir_name=s"      => \$dir_name,
    "query=s"         => \$query,
);

__PACKAGE__->run() unless caller;

sub run {
    ### Create a client.
    my $client = REST::Client->new();
    $client->{username}     = $username;
    $client->{password}     = $password;
    $client->{auth_headers} = {
        Accept        => 'application/json',
        Authorization => 'Basic '
            . encode_base64( $username . ':' . $password ),
        'Content-Type' => 'application/json',
    };

    $client->setHost('https://jira.cpanel.net');
    ### Dates are hard.
    my ( $start_date, $start_datetime, $end_date, $end_datetime )
        = date_setup( \@start_date, \@end_date );
    ### Make sure everything is defined.
    my $name       = $sprint_name // $dir_name;
    my $jira_query = $query       // "Sprint = $sprint_name";
    ### This is where the business happens.
    my $issues = Timelines::Jira::Query->new(
        client         => $client,
        jira_query     => $jira_query,
        query_name     => $name,
        start_date     => $start_date,
        start_datetime => $start_datetime,
        end_date       => $end_date,
        end_datetime   => $end_datetime
    );

    ### Print out a bunch of crap.

    ### Directory Setup.

    ### Print TimelineJS.

    # print_timelineJS($issues);

}

sub date_setup {
    my $start_date = shift;
    my $end_date   = shift;
    my ( $end_datetime, $start_datetime );
    $end_datetime = DateTime->new(
        year   => $end_date->[0],
        month  => $end_date->[1],
        day    => $end_date->[2],
        hour   => $end_date->[3],
        minute => $end_date->[4]
    );
    $end_date = {
        year   => $end_datetime->year,
        month  => $end_datetime->month,
        day    => $end_datetime->day,
        hour   => $end_datetime->hour,
        minute => $end_datetime->minute
    };
    $start_datetime = DateTime->new(
        year   => $start_date->[0],
        month  => $start_date->[1],
        day    => $start_date->[2],
        hour   => $start_date->[3],
        minute => $start_date->[4]
    );
    $start_date = {
        year   => $start_datetime->year,
        month  => $start_datetime->month,
        day    => $start_datetime->day,
        hour   => $start_datetime->hour,
        minute => $start_datetime->minute
    };
    return ( $start_date, $start_datetime, $end_date, $end_datetime );

}

1;
