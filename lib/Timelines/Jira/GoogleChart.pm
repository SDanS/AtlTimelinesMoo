package Timelines::Jira::GoogleChart;

use strict;
use warnings;

use Carp;
use Carp::Always;
use JSON;
use Moo;
use Type::Tiny;
use Types::Standard -types;
use DateTime;
use Timelines::Jira::Query;

extends 'Timelines::Jira';

has query_collection => ( is => 'ro' );

### Terminal dates.
has start_date => ( is => 'ro', required => 1 );

has start_datetime =>
    ( is => 'ro', required => 1, isa => InstanceOf ['DateTime'] );

has end_date => ( is => 'ro', required => 1 );

has end_datetime =>
    ( is => 'ro', required => 1, isa => InstanceOf ['DateTime'] );

### Gets the whole query.
### Iterates over stories and builds timeline from
### story GC data and subtask GC data.
has story_ov_obj => (
    is      => 'rw',
    builder => 'create_story_ov_href'
);

### Iterates over all stories within query.
### Builds timeline from story GC data.
# has query_ov_obj => (
#     is      => 'rw',
#     builder => 'create_query_ov_href'
# );

sub create_story_ov_href {
    my $self = shift;
    foreach ( @{ $self->query_collection->issues } ) {
        my $story_ov = $_->{story_ov_href} = [];
        foreach ( @{ $_->{issue_response}->{GC_json_href} } ) {
            push @{$story_ov}, $_;
        }
        foreach ( @{ $_->{issue_response}->{subtasks}->{subtask_responses} } )
        {
            foreach ( @{ $_->GC_json_href } ) {
                push @{$story_ov}, $_;
            }
        }
    }
}

1;
