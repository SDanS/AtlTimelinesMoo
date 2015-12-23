var timeline_json = {
   "title" : {
      "text" : {
         "headline" : "<a href=\"https://jira.cpanel.net/browse/MW-1764\">MW-1764: Make TS::Config consult your $HOME first</a>"
      }
   },
   "events" : [
      {
         "group" : "status",
         "background" : {
            "color" : "darkcyan"
         },
         "text" : {
            "headline" : "In Progress",
            "text" : "Status changed from To Do to In Progress"
         },
         "end_date" : {
            "day" : 19,
            "hour" : 12,
            "month" : 11,
            "minute" : 55,
            "year" : 2015
         },
         "start_date" : {
            "day" : 19,
            "hour" : 9,
            "month" : 11,
            "minute" : 27,
            "year" : 2015
         },
         "start_datetime" : null,
         "end_datetime" : null
      },
      {
         "text" : {
            "headline" : "In Review",
            "text" : "Status changed from In Progress to In Review"
         },
         "background" : {
            "color" : "dodgerblue"
         },
         "end_date" : {
            "year" : 2015,
            "minute" : 5,
            "month" : 11,
            "hour" : 13,
            "day" : 19
         },
         "group" : "status",
         "start_date" : {
            "year" : 2015,
            "minute" : 55,
            "month" : 11,
            "day" : 19,
            "hour" : 12
         },
         "end_datetime" : null,
         "start_datetime" : null
      },
      {
         "background" : {
            "color" : "darkblue"
         },
         "end_date" : {
            "day" : 19,
            "hour" : 14,
            "month" : 11,
            "minute" : 9,
            "year" : 2015
         },
         "text" : {
            "headline" : "In Test",
            "text" : "Status changed from In Review to In Test"
         },
         "group" : "status",
         "end_datetime" : null,
         "start_datetime" : null,
         "start_date" : {
            "day" : 19,
            "hour" : 13,
            "month" : 11,
            "year" : 2015,
            "minute" : 5
         }
      },
      {
         "start_datetime" : null,
         "end_datetime" : null,
         "start_date" : {
            "year" : 2015,
            "minute" : 9,
            "month" : 11,
            "hour" : 14,
            "day" : 19
         },
         "group" : "status",
         "background" : {
            "color" : "slateblue"
         },
         "end_date" : {
            "minute" : 20,
            "year" : 2015,
            "month" : 11,
            "hour" : 9,
            "day" : 20
         },
         "text" : {
            "headline" : "Merge Pending",
            "text" : "Status changed from In Test to Merge Pending"
         }
      },
      {
         "group" : "misc",
         "text" : {
            "text" : "https://enterprise.cpanel.net/projects/CPANEL/repos/mortal-wombat-cpanel-whm/compare/commits?sourceBranch=refs/heads/MW-1764",
            "headline" : "Comment added by George Baugh"
         },
         "background" : {
            "color" : "olivedrab"
         },
         "start_datetime" : null,
         "start_date" : {
            "month" : 11,
            "hour" : 12,
            "day" : 19,
            "year" : 2015,
            "minute" : 53
         }
      },
      {
         "start_date" : {
            "minute" : 55,
            "year" : 2015,
            "day" : 19,
            "hour" : 12,
            "month" : 11
         },
         "start_datetime" : null,
         "background" : {
            "color" : "olivedrab"
         },
         "text" : {
            "headline" : "Comment added by George Baugh",
            "text" : "Pertinent testing steps:<br><br>1. run openstack-watcher.pl, make sure it loads from home rather than www/conf<br>2. Run cP::SSH::wait_for_cpanel against your sandbox, make sure it doesn't look for /var/cpanelfixup<br>3. rm ~/.seleniumrc && cpprove -s some.selenium.server ... shouldn't die."
         },
         "group" : "misc"
      },
      {
         "background" : {
            "color" : "olivedrab"
         },
         "text" : {
            "headline" : "Comment added by George Baugh",
            "text" : "(yes, I fixed some other stuff charan found"
         },
         "group" : "misc",
         "start_datetime" : null,
         "start_date" : {
            "month" : 11,
            "day" : 19,
            "hour" : 12,
            "year" : 2015,
            "minute" : 58
         }
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "month" : 11,
            "hour" : 13,
            "day" : 19,
            "minute" : 5,
            "year" : 2015
         },
         "background" : {
            "color" : "olivedrab"
         },
         "text" : {
            "headline" : "Comment added by Joshua Brandt",
            "text" : "Review looks good, moving to test."
         },
         "group" : "misc"
      },
      {
         "background" : {
            "color" : "olivedrab"
         },
         "text" : {
            "text" : "Tested per each test explanation and received expected results.<br><br>Note to self - used the following to make file to run against sandbox.<br><br>#!/usr/bin/perl<br>use strict;<br>use warnings;<br>use cP::SSH;<br>my $ssh = cP::SSH->new();<br>$ssh->wait_for_cpanel();",
            "headline" : "Comment added by Vera Hart"
         },
         "group" : "misc",
         "start_date" : {
            "year" : 2015,
            "minute" : 9,
            "day" : 19,
            "hour" : 14,
            "month" : 11
         },
         "start_datetime" : null
      }
   ]
}
