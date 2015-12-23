var timeline_json = {
   "events" : [
      {
         "start_date" : {
            "year" : 2015,
            "minute" : 20,
            "month" : 11,
            "day" : 12,
            "hour" : 12
         },
         "start_datetime" : null,
         "end_datetime" : null,
         "text" : {
            "headline" : "Assignee: unassigned",
            "text" : "Assignee changed from George Baugh to unassigned"
         },
         "background" : {
            "color" : "seagreen"
         },
         "end_date" : {
            "hour" : 13,
            "day" : 12,
            "month" : 11,
            "year" : 2015,
            "minute" : 4
         },
         "group" : "assignee"
      },
      {
         "group" : "assignee",
         "text" : {
            "text" : "Assignee changed from unassigned to Paul Trost",
            "headline" : "Assignee: Paul Trost"
         },
         "background" : {
            "color" : "seagreen"
         },
         "end_date" : {
            "day" : 12,
            "hour" : 13,
            "month" : 11,
            "year" : 2015,
            "minute" : 13
         },
         "end_datetime" : null,
         "start_datetime" : null,
         "start_date" : {
            "year" : 2015,
            "minute" : 4,
            "month" : 11,
            "hour" : 13,
            "day" : 12
         }
      },
      {
         "start_date" : {
            "month" : 11,
            "day" : 12,
            "hour" : 9,
            "minute" : 21,
            "year" : 2015
         },
         "start_datetime" : null,
         "end_datetime" : null,
         "text" : {
            "text" : "Status changed from To Do to In Progress",
            "headline" : "In Progress"
         },
         "background" : {
            "color" : "darkcyan"
         },
         "end_date" : {
            "month" : 11,
            "day" : 12,
            "hour" : 12,
            "year" : 2015,
            "minute" : 20
         },
         "group" : "status"
      },
      {
         "end_datetime" : null,
         "start_datetime" : null,
         "start_date" : {
            "day" : 12,
            "hour" : 12,
            "month" : 11,
            "year" : 2015,
            "minute" : 20
         },
         "background" : {
            "color" : "dodgerblue"
         },
         "end_date" : {
            "year" : 2015,
            "minute" : 13,
            "hour" : 13,
            "day" : 12,
            "month" : 11
         },
         "text" : {
            "text" : "Status changed from In Progress to In Review",
            "headline" : "In Review"
         },
         "group" : "status"
      },
      {
         "group" : "status",
         "text" : {
            "headline" : "In Test",
            "text" : "Status changed from In Review to In Test"
         },
         "background" : {
            "color" : "darkblue"
         },
         "end_date" : {
            "year" : 2015,
            "minute" : 20,
            "day" : 13,
            "hour" : 13,
            "month" : 11
         },
         "end_datetime" : null,
         "start_datetime" : null,
         "start_date" : {
            "minute" : 13,
            "year" : 2015,
            "hour" : 13,
            "day" : 12,
            "month" : 11
         }
      },
      {
         "start_date" : {
            "month" : 11,
            "day" : 13,
            "hour" : 13,
            "minute" : 20,
            "year" : 2015
         },
         "start_datetime" : null,
         "end_datetime" : null,
         "background" : {
            "color" : "slateblue"
         },
         "end_date" : {
            "month" : 11,
            "day" : 18,
            "hour" : 13,
            "minute" : 10,
            "year" : 2015
         },
         "text" : {
            "text" : "Status changed from In Test to Merge Pending",
            "headline" : "Merge Pending"
         },
         "group" : "status"
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "hour" : 12,
            "day" : 12,
            "month" : 11,
            "minute" : 20,
            "year" : 2015
         },
         "group" : "misc",
         "text" : {
            "headline" : "Comment added by George Baugh",
            "text" : "https://enterprise.cpanel.net/projects/CPANEL/repos/mortal-wombat-cpanel-whm/commits/18cf434fc9d3bd6c80c9d58a3a9c85a01471b5cf"
         },
         "background" : {
            "color" : "olivedrab"
         }
      },
      {
         "background" : {
            "color" : "olivedrab"
         },
         "text" : {
            "text" : "Testing steps:  passing --bogus flag to cpprove should throw exception.<br><br>All switches for cpprove & prove, files and glob arguments should be honored and no exception thrown.",
            "headline" : "Comment added by George Baugh"
         },
         "group" : "misc",
         "start_datetime" : null,
         "start_date" : {
            "year" : 2015,
            "minute" : 22,
            "day" : 12,
            "hour" : 12,
            "month" : 11
         }
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "month" : 11,
            "hour" : 13,
            "day" : 12,
            "minute" : 14,
            "year" : 2015
         },
         "group" : "misc",
         "background" : {
            "color" : "olivedrab"
         },
         "text" : {
            "headline" : "Comment added by Paul Trost",
            "text" : "I saw no issues. false flags like --taco gave error. cpprove still took a glob of files."
         }
      }
   ],
   "title" : {
      "text" : {
         "headline" : "<a href=\"https://jira.cpanel.net/browse/MW-1761\">MW-1761: Make sure no bad args have been passed up front</a>"
      }
   }
}
