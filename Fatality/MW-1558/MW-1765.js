var timeline_json = {
   "events" : [
      {
         "group" : "status",
         "background" : {
            "color" : "darkcyan"
         },
         "end_date" : {
            "year" : 2015,
            "minute" : 46,
            "day" : 19,
            "hour" : 10,
            "month" : 11
         },
         "text" : {
            "text" : "Status changed from To Do to In Progress",
            "headline" : "In Progress"
         },
         "end_datetime" : null,
         "start_datetime" : null,
         "start_date" : {
            "year" : 2015,
            "minute" : 41,
            "day" : 19,
            "hour" : 10,
            "month" : 11
         }
      },
      {
         "group" : "status",
         "background" : {
            "color" : "dodgerblue"
         },
         "end_date" : {
            "month" : 11,
            "hour" : 12,
            "day" : 19,
            "year" : 2015,
            "minute" : 0
         },
         "text" : {
            "text" : "Status changed from In Progress to In Review",
            "headline" : "In Review"
         },
         "end_datetime" : null,
         "start_datetime" : null,
         "start_date" : {
            "year" : 2015,
            "minute" : 46,
            "hour" : 10,
            "day" : 19,
            "month" : 11
         }
      },
      {
         "group" : "status",
         "background" : {
            "color" : "darkblue"
         },
         "end_date" : {
            "month" : 11,
            "hour" : 15,
            "day" : 19,
            "minute" : 20,
            "year" : 2015
         },
         "text" : {
            "headline" : "In Test",
            "text" : "Status changed from In Review to In Test"
         },
         "start_datetime" : null,
         "end_datetime" : null,
         "start_date" : {
            "month" : 11,
            "day" : 19,
            "hour" : 12,
            "year" : 2015,
            "minute" : 0
         }
      },
      {
         "start_date" : {
            "month" : 11,
            "day" : 19,
            "hour" : 15,
            "minute" : 20,
            "year" : 2015
         },
         "end_datetime" : null,
         "start_datetime" : null,
         "background" : {
            "color" : "slateblue"
         },
         "end_date" : {
            "month" : 11,
            "hour" : 9,
            "day" : 20,
            "year" : 2015,
            "minute" : 20
         },
         "text" : {
            "headline" : "Merge Pending",
            "text" : "Status changed from In Test to Merge Pending"
         },
         "group" : "status"
      },
      {
         "start_date" : {
            "year" : 2015,
            "minute" : 46,
            "hour" : 10,
            "day" : 19,
            "month" : 11
         },
         "start_datetime" : null,
         "background" : {
            "color" : "olivedrab"
         },
         "text" : {
            "headline" : "Comment added by George Baugh",
            "text" : "https://enterprise.cpanel.net/projects/CPANEL/repos/mortal-wombat-cpanel-whm/compare/commits?sourceBranch=refs/heads/MW-1765"
         },
         "group" : "misc"
      },
      {
         "group" : "misc",
         "background" : {
            "color" : "olivedrab"
         },
         "text" : {
            "headline" : "Comment added by Joshua Brandt",
            "text" : "Review looks good. Any specific steps for testing?"
         },
         "start_date" : {
            "month" : 11,
            "day" : 19,
            "hour" : 12,
            "minute" : 0,
            "year" : 2015
         },
         "start_datetime" : null
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "year" : 2015,
            "minute" : 13,
            "day" : 19,
            "hour" : 14,
            "month" : 11
         },
         "group" : "misc",
         "text" : {
            "headline" : "Comment added by George Baugh",
            "text" : "steps:<br><br>cpprove basically anything on c7 when not in --spawn mode.  It used to die there, it should not die now.<br><br>If you really want to go nuts, try it on c6,c5, but I'm pretty sure it works on c6 (my sandbox).  I'd be comfortable moving forward without testing c5, as this method is little different from cP::SSH's which does work on c5."
         },
         "background" : {
            "color" : "olivedrab"
         }
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "year" : 2015,
            "minute" : 20,
            "month" : 11,
            "hour" : 15,
            "day" : 19
         },
         "group" : "misc",
         "background" : {
            "color" : "olivedrab"
         },
         "text" : {
            "text" : "Note:  run from a CentOS7 Controller VM <br><br>root@i-000032ef [/usr/local/cpanel/t/qa]# *bin/cpprove t/Utils-SSH.t*",
            "headline" : "Comment added by Vera Hart"
         }
      }
   ],
   "title" : {
      "text" : {
         "headline" : "<a href=\"https://jira.cpanel.net/browse/MW-1765\">MW-1765: Remove usage of Sys::Info, this fails on c7 preventing cpprove runs against hosts</a>"
      }
   }
}
