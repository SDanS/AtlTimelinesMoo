use strict;
use warnings;

{

    package Test;
    use Carp;
    use Carp::Always;
    use JSON;
    use Moo;
    use Type::Tiny;
    use Data::Dumper;

    use Types::Standard -types;

    has a_name => (
        is      => 'ro',
        builder => 'new_name',
    );

    has another_name => (
    	is => 'ro',
    	builder => 'get_another_name',
    	# lazy => 1,
    	);

    has attribute => (
    	is => 'ro',
    	builder => 'get_another_attibute',
    	);

    sub new_name {
    	my $self = shift;
    	return "hi";
    }

    sub get_another_name {
    	my $self = shift;
    	print Dumper $self;
    	return 'hi';
    }

    sub get_another_attibute {
    	my $self = shift;
    	# print Dumper $self;
    	return $self->a_name . "2";
    }

}
use Data::Dumper;
my $hi = Test->new();
print Dumper $hi;