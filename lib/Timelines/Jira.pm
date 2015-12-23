package Timelines::Jira;

use strict;
use warnings;

no warnings "uninitialized";

use Carp;
use Carp::Always;
use REST::Client;
use MIME::Base64 qw(encode_base64);
use DateTime::Format::ISO8601;
use Moo;
use Type::Tiny;
# use Type::Tiny::Class;
use MooX::StrictConstructor;
use MooX::ClassAttribute;
use URI::Escape;
use JSON;

extends 'Timelines';

has query_name => ( is => 'rw' );


1;

