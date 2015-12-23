var timeline_json = {
   "title" : {
      "text" : {
         "headline" : "<a href=\"https://jira.cpanel.net/browse/MW-1733\">MW-1733: Update lbcl_ci.pl to no longer use runsuite.pl</a>"
      }
   },
   "events" : [
      {
         "group" : "assignee",
         "background" : {
            "color" : "seagreen"
         },
         "end_date" : {
            "day" : 9,
            "hour" : 12,
            "month" : 11,
            "minute" : 54,
            "year" : 2015
         },
         "text" : {
            "text" : "Assignee changed from George Baugh to unassigned",
            "headline" : "Assignee: unassigned"
         },
         "end_datetime" : null,
         "start_datetime" : null,
         "start_date" : {
            "day" : 28,
            "hour" : 16,
            "month" : 10,
            "year" : 2015,
            "minute" : 45
         }
      },
      {
         "background" : {
            "color" : "dodgerblue"
         },
         "text" : {
            "headline" : "In Review",
            "text" : "Status changed from To Do to In Review"
         },
         "end_date" : {
            "day" : 9,
            "hour" : 11,
            "month" : 11,
            "year" : 2015,
            "minute" : 22
         },
         "group" : "status",
         "start_date" : {
            "minute" : 17,
            "year" : 2015,
            "day" : 5,
            "hour" : 15,
            "month" : 11
         },
         "start_datetime" : null,
         "end_datetime" : null
      },
      {
         "background" : {
            "color" : "darkcyan"
         },
         "text" : {
            "headline" : "In Progress",
            "text" : "Status changed from In Review to In Progress"
         },
         "end_date" : {
            "month" : 11,
            "day" : 10,
            "hour" : 11,
            "minute" : 57,
            "year" : 2015
         },
         "group" : "status",
         "start_datetime" : null,
         "end_datetime" : null,
         "start_date" : {
            "year" : 2015,
            "minute" : 22,
            "month" : 11,
            "day" : 9,
            "hour" : 11
         }
      },
      {
         "text" : {
            "headline" : "Comment added by George Baugh",
            "text" : "at this point all that's needed is unit tests."
         },
         "background" : {
            "color" : "olivedrab"
         },
         "group" : "misc",
         "start_datetime" : null,
         "start_date" : {
            "year" : 2015,
            "minute" : 33,
            "hour" : 16,
            "day" : 28,
            "month" : 10
         }
      },
      {
         "group" : "misc",
         "text" : {
            "text" : "Anyone should be able to unit test this easily; look at t/OpenStack-Reaper.t for an example of mocking OpenStack requests.<br><br>Be sure to change the name of your MockModule, and to use said generated mockModule when not in GENERATE_MOCKS=1.",
            "headline" : "Comment added by George Baugh"
         },
         "background" : {
            "color" : "olivedrab"
         },
         "start_date" : {
            "year" : 2015,
            "minute" : 45,
            "day" : 28,
            "hour" : 16,
            "month" : 10
         },
         "start_datetime" : null
      },
      {
         "text" : {
            "text" : "We have a story for unit tests on the backlog for all the modulinos. This particular binary also has a unit test subtask on this Sprint. Please review. Discussed with George.",
            "headline" : "Comment added by Dan Stewart"
         },
         "background" : {
            "color" : "olivedrab"
         },
         "group" : "misc",
         "start_datetime" : null,
         "start_date" : {
            "year" : 2015,
            "minute" : 19,
            "day" : 5,
            "hour" : 15,
            "month" : 11
         }
      },
      {
         "background" : {
            "color" : "olivedrab"
         },
         "text" : {
            "headline" : "Comment added by Dan Stewart",
            "text" : "The linked issue may be tightly coupled to this."
         },
         "group" : "misc",
         "start_date" : {
            "year" : 2015,
            "minute" : 24,
            "month" : 11,
            "day" : 5,
            "hour" : 15
         },
         "start_datetime" : null
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "month" : 11,
            "day" : 10,
            "hour" : 11,
            "year" : 2015,
            "minute" : 57
         },
         "group" : "misc",
         "text" : {
            "text" : "This is getting handled via MW-1453.",
            "headline" : "Comment added by David Nielson"
         },
         "background" : {
            "color" : "olivedrab"
         }
      }
   ]
}
