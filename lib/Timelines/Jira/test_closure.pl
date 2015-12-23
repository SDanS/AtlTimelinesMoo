#!/usr/bin/perl

use strict;
use warnings;
use Data::Dumper;

my $array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];
my $c1;
my $c2;


foreach ( @{$array} ) {
    $c2 = $c1->{value};
    $c1 = counter( $_, $c2 );
    print Dumper $c1->{value};

}

sub counter {
    my $count     = shift;
    my $old_value = shift;
    my $bundle = { value => $old_value + $count, };
    return $bundle;
}
