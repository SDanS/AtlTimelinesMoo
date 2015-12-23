var timeline_json = {
   "events" : [
      {
         "background" : {
            "color" : "seagreen"
         },
         "start_datetime" : null,
         "start_date" : {
            "year" : 2015,
            "hour" : 8,
            "day" : 18,
            "month" : 12,
            "minute" : 42
         },
         "group" : "assignee",
         "end_date" : {
            "day" : 18,
            "month" : 12,
            "minute" : 5,
            "year" : 2015,
            "hour" : 9
         },
         "text" : {
            "headline" : "Assignee: Ross Steiner",
            "text" : "Assignee changed from unassigned to Ross Steiner"
         },
         "end_datetime" : null
      },
      {
         "end_datetime" : null,
         "text" : {
            "headline" : "In Progress",
            "text" : "Status changed from To Do to In Progress"
         },
         "end_date" : {
            "hour" : 9,
            "year" : 2015,
            "minute" : 5,
            "month" : 12,
            "day" : 18
         },
         "group" : "status",
         "start_datetime" : null,
         "start_date" : {
            "day" : 18,
            "month" : 12,
            "minute" : 47,
            "year" : 2015,
            "hour" : 8
         },
         "background" : {
            "color" : "darkcyan"
         }
      },
      {
         "start_date" : {
            "hour" : 9,
            "year" : 2015,
            "minute" : 5,
            "month" : 12,
            "day" : 18
         },
         "start_datetime" : null,
         "background" : {
            "color" : "dodgerblue"
         },
         "end_date" : {
            "hour" : 9,
            "year" : 2015,
            "month" : 12,
            "day" : 18,
            "minute" : 32
         },
         "group" : "status",
         "end_datetime" : null,
         "text" : {
            "headline" : "In Review",
            "text" : "Status changed from In Progress to In Review"
         }
      },
      {
         "text" : {
            "text" : "Status changed from In Review to Ready to Merge",
            "headline" : "Ready to Merge"
         },
         "end_datetime" : null,
         "end_date" : {
            "minute" : 33,
            "day" : 18,
            "month" : 12,
            "year" : 2015,
            "hour" : 9
         },
         "group" : "status",
         "start_date" : {
            "minute" : 32,
            "day" : 18,
            "month" : 12,
            "year" : 2015,
            "hour" : 9
         },
         "start_datetime" : null,
         "background" : {
            "color" : null
         }
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "hour" : 12,
            "year" : 2015,
            "minute" : 7,
            "month" : 12,
            "day" : 17
         },
         "background" : {
            "color" : "palevioletred"
         },
         "text" : {
            "headline" : "Description changed.",
            "text" : "Description changed from: <br>Steps to Reproduce:\n\n# Enter a number into the Amount Approved field\n## eg. 50000\n# Unfocus that field and allow it to save\n# Delete the entry from the Amount Approved field\n# Unfocus that field and it will attempt to save (NULL?)\n# Receive the error shown in the screenshot\n## Unprocessable Entity\n\n\n{code:title=PATCH Response}\n{\n   \"code\" : 422,\n   \"data\" : {\n      \"invalid\" : [\n         {\n            \"error\" : \"value: [] failed validation\",\n            \"name\" : \"amount_approved\"\n         }\n      ]\n   },\n   \"description\" : \"One or more bad parameters found.\",\n   \"message\" : \"Unprocessable Entity\",\n   \"success\" : false\n}\n{code}\n<br><br>To: <br>Steps to Reproduce:\r\n\r\n# Enter a number into the Amount Approved field\r\n## eg. 50000\r\n# Unfocus that field and allow it to save\r\n# Delete the entry from the Amount Approved field\r\n# Unfocus that field and it will attempt to save (NULL?)\r\n# Receive the error shown in the screenshot\r\n## Unprocessable Entity\r\n\r\n\r\n{code:title=PATCH Response}\r\n{\r\n   \"code\" : 422,\r\n   \"data\" : {\r\n      \"invalid\" : [\r\n         {\r\n            \"error\" : \"value: [] failed validation\",\r\n            \"name\" : \"amount_approved\"\r\n         }\r\n      ]\r\n   },\r\n   \"description\" : \"One or more bad parameters found.\",\r\n   \"message\" : \"Unprocessable Entity\",\r\n   \"success\" : false\r\n}\r\n{code}\r\n\r\n&nbsp;\r\n\r\nSeems similar to OPRAH-1765"
         },
         "group" : "scope"
      },
      {
         "background" : {
            "color" : "palevioletred"
         },
         "start_datetime" : null,
         "start_date" : {
            "year" : 2015,
            "hour" : 12,
            "day" : 17,
            "month" : 12,
            "minute" : 7
         },
         "text" : {
            "text" : "Description changed from: <br>Steps to Reproduce:\r\n\r\n# Enter a number into the Amount Approved field\r\n## eg. 50000\r\n# Unfocus that field and allow it to save\r\n# Delete the entry from the Amount Approved field\r\n# Unfocus that field and it will attempt to save (NULL?)\r\n# Receive the error shown in the screenshot\r\n## Unprocessable Entity\r\n\r\n\r\n{code:title=PATCH Response}\r\n{\r\n   \"code\" : 422,\r\n   \"data\" : {\r\n      \"invalid\" : [\r\n         {\r\n            \"error\" : \"value: [] failed validation\",\r\n            \"name\" : \"amount_approved\"\r\n         }\r\n      ]\r\n   },\r\n   \"description\" : \"One or more bad parameters found.\",\r\n   \"message\" : \"Unprocessable Entity\",\r\n   \"success\" : false\r\n}\r\n{code}\r\n\r\n&nbsp;\r\n\r\nSeems similar to OPRAH-1765<br><br>To: <br>Steps to Reproduce:\r\n\r\n# Enter a number into the Amount Approved field\r\n## eg. 50000\r\n# Unfocus that field and allow it to save\r\n# Delete the entry from the Amount Approved field\r\n# Unfocus that field and it will attempt to save (NULL?)\r\n# Receive the error shown in the screenshot\r\n## Unprocessable Entity\r\n\r\n\r\n{code:title=PATCH Response}\r\n{\r\n   \"code\" : 422,\r\n   \"data\" : {\r\n      \"invalid\" : [\r\n         {\r\n            \"error\" : \"value: [] failed validation\",\r\n            \"name\" : \"amount_approved\"\r\n         }\r\n      ]\r\n   },\r\n   \"description\" : \"One or more bad parameters found.\",\r\n   \"message\" : \"Unprocessable Entity\",\r\n   \"success\" : false\r\n}\r\n{code}\r\n\r\n&nbsp;\r\n\r\nSeems similar to OPRAH-1765\r\n\r\n&nbsp;",
            "headline" : "Description changed."
         },
         "group" : "scope"
      },
      {
         "background" : {
            "color" : "palevioletred"
         },
         "start_datetime" : null,
         "start_date" : {
            "month" : 12,
            "day" : 18,
            "minute" : 43,
            "hour" : 8,
            "year" : 2015
         },
         "text" : {
            "text" : "Story Points changed from: <br>undef<br><br>To: <br>2",
            "headline" : "Story Points changed."
         },
         "group" : "scope"
      }
   ],
   "title" : {
      "text" : {
         "headline" : "<a href=\"https://jira.cpanel.net/browse/OPRAH-1936\">OPRAH-1936: BUG - Approver detail view - Error removing an Amount Approved</a>"
      }
   }
}
