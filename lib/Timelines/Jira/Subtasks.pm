package Timelines::Jira::Subtasks;

use strict;
use warnings;

use Carp;
use Carp::Always;
use JSON;
use Moo;
use Type::Tiny;

use Types::Standard -types;
use DateTime;
use URI::Escape;
use Data::Dumper;

use Timelines::Jira::Issue;

extends 'Timelines::Jira';

has client => ( is => 'ro' );
has parent => ( is => 'ro' );
has subtask_list => (
    is      => 'ro',
    builder => 'need_subtask_list'
);

has subtask_responses => ( is => 'rw', );

has start_date => ( is => 'ro', required => 1 );

has start_datetime =>
    ( is => 'ro', required => 1, isa => InstanceOf ['DateTime'] );

has end_date => ( is => 'ro', required => 1 );

has end_datetime =>
    ( is => 'ro', required => 1, isa => InstanceOf ['DateTime'] );

has status_counter => (
    is      => 'rw',
    default => '0'
);

has assignee_counter => (
    is      => 'rw',
    default => '0'
);

### A bit from Query.pm (Issues.pm atow) is duplicated here. Finding and ordering
### subtasks is a query in itself. Sacrifices were made.
sub need_subtask_list {
    my $self = shift;
    my @issue_list;
    my $jira_query
        = 'parent = ' . $self->parent . '  ORDER BY resolutiondate ASC';
    my $req_fields   = '&fields=key';
    my $query_string = 'jql=' . uri_escape($jira_query);
    $self->client->GET( 'rest/api/2/search?' . $query_string . $req_fields,
        $self->client->{auth_headers} );
    foreach ( @{ from_json( $self->client->responseContent() )->{issues} } ) {
        push @issue_list, $_->{key};
    }
    return \@issue_list;
}

sub BUILD {
    my $self     = shift;
    my $subtasks = [];
    my $status_counter;
    my $assignee_counter;

    foreach ( @{ $self->subtask_list } ) {
        my $subtask = Timelines::Jira::Issue->new(
            client           => $self->client,
            parent           => $self->parent,
            issue_key        => $_,
            is_subtask       => 1,
            start_date       => $self->start_date,
            start_datetime   => $self->start_datetime,
            end_date         => $self->end_date,
            end_datetime     => $self->end_datetime,
            status_counter   => $self->status_counter,
            assignee_counter => $self->assignee_counter,
        );

        # $subtask->create_GC_json_ref;
        $subtask->create_TJS_json;
        $subtask->write_TJS_js;
        $subtask->write_TJS_html;
        push @{$subtasks}, $subtask;
        $assignee_counter += $subtask->assignee_counter;
        $status_counter   += $subtask->status_counter;
    }
    $self->subtask_responses($subtasks);
    $self->status_counter($status_counter);
    $self->assignee_counter($assignee_counter);
}

1;
