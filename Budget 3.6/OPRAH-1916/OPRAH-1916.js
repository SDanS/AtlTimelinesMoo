var timeline_json = {
   "events" : [
      {
         "background" : {
            "color" : "darkcyan"
         },
         "start_datetime" : null,
         "start_date" : {
            "month" : 12,
            "day" : 16,
            "minute" : 8,
            "hour" : 9,
            "year" : 2015
         },
         "text" : {
            "headline" : "In Progress",
            "text" : "Status changed from To Do to In Progress"
         },
         "end_datetime" : null,
         "group" : "status",
         "end_date" : {
            "year" : 2015,
            "hour" : 13,
            "minute" : 31,
            "day" : 16,
            "month" : 12
         }
      },
      {
         "group" : "status",
         "end_date" : {
            "month" : 12,
            "day" : 16,
            "minute" : 34,
            "hour" : 13,
            "year" : 2015
         },
         "text" : {
            "text" : "Status changed from In Progress to In Review",
            "headline" : "In Review"
         },
         "end_datetime" : null,
         "background" : {
            "color" : "dodgerblue"
         },
         "start_date" : {
            "year" : 2015,
            "hour" : 13,
            "day" : 16,
            "month" : 12,
            "minute" : 31
         },
         "start_datetime" : null
      },
      {
         "end_date" : {
            "year" : 2015,
            "hour" : 10,
            "minute" : 38,
            "day" : 17,
            "month" : 12
         },
         "group" : "status",
         "text" : {
            "text" : "Status changed from In Review to In Review",
            "headline" : "In Review"
         },
         "end_datetime" : null,
         "start_date" : {
            "month" : 12,
            "day" : 16,
            "minute" : 34,
            "hour" : 13,
            "year" : 2015
         },
         "start_datetime" : null,
         "background" : {
            "color" : "dodgerblue"
         }
      },
      {
         "group" : "status",
         "end_date" : {
            "month" : 12,
            "day" : 17,
            "minute" : 22,
            "hour" : 13,
            "year" : 2015
         },
         "text" : {
            "text" : "Status changed from In Review to In Review",
            "headline" : "In Review"
         },
         "end_datetime" : null,
         "background" : {
            "color" : "dodgerblue"
         },
         "start_datetime" : null,
         "start_date" : {
            "year" : 2015,
            "hour" : 10,
            "minute" : 38,
            "day" : 17,
            "month" : 12
         }
      },
      {
         "text" : {
            "headline" : "In Test",
            "text" : "Status changed from In Review to In Test"
         },
         "end_datetime" : null,
         "end_date" : {
            "year" : 2015,
            "hour" : 13,
            "minute" : 44,
            "day" : 18,
            "month" : 12
         },
         "group" : "status",
         "start_datetime" : null,
         "start_date" : {
            "minute" : 22,
            "day" : 17,
            "month" : 12,
            "year" : 2015,
            "hour" : 13
         },
         "background" : {
            "color" : "darkblue"
         }
      },
      {
         "group" : "scope",
         "text" : {
            "text" : "Summary changed from: <br>Stolen licenses detect number of Instances<br><br>To: <br>see the past instances of a license having been locked when I am managing locked licenses",
            "headline" : "Summary changed."
         },
         "background" : {
            "color" : "palevioletred"
         },
         "start_datetime" : null,
         "start_date" : {
            "year" : 2015,
            "hour" : 17,
            "day" : 1,
            "month" : 12,
            "minute" : 18
         }
      },
      {
         "group" : "scope",
         "text" : {
            "text" : "Description changed from: <br>Currently we are tracking the number of instances a license is blocked/unblocked via the email notifications when a license is unlocked.\r\n\r\nIf we can add a feature on the the Show locked licenses page to show the number of times the license has previously locked and the dates this will be helpful in determining if they should be unlocked\r\n\r\nhttps://manage2.cpanel.net/stolen.cgi<br><br>To: <br>User Story:\r\nAs a customer service representative, I want to see the past instances of a license having been locked when I am managing locked licenses so that I can better assess whether to continue the lock.\r\n\r\nCurrently we are tracking the number of instances a license is blocked/unblocked via the email notifications when a license is unlocked.\r\n\r\nIf we can add a feature on the the Show locked licenses page to show the number of times the license has previously locked and the dates this will be helpful in determining if they should be unlocked\r\n\r\nhttps://manage2.cpanel.net/stolen.cgi",
            "headline" : "Description changed."
         },
         "background" : {
            "color" : "palevioletred"
         },
         "start_date" : {
            "minute" : 18,
            "day" : 1,
            "month" : 12,
            "year" : 2015,
            "hour" : 17
         },
         "start_datetime" : null
      },
      {
         "start_date" : {
            "day" : 11,
            "month" : 12,
            "minute" : 1,
            "year" : 2015,
            "hour" : 12
         },
         "start_datetime" : null,
         "background" : {
            "color" : "palevioletred"
         },
         "text" : {
            "text" : "Description changed from: <br>User Story:\r\nAs a customer service representative, I want to see the past instances of a license having been locked when I am managing locked licenses so that I can better assess whether to continue the lock.\r\n\r\nCurrently we are tracking the number of instances a license is blocked/unblocked via the email notifications when a license is unlocked.\r\n\r\nIf we can add a feature on the the Show locked licenses page to show the number of times the license has previously locked and the dates this will be helpful in determining if they should be unlocked\r\n\r\nhttps://manage2.cpanel.net/stolen.cgi<br><br>To: <br>User Story:\r\n\r\nAs a cs rep, I would like a column on the unlock ip page to display the number of times the IP has been blocked while associated to the store user so that we can make better judgement calls when unlocking IPs.\r\n\r\nAcceptance Criteria:\r\n# need to add the column to display the count\r\n# should only include the times the IP blocked while associated to the current user\r\n\r\n\r\n{color:#654982}User Story:\r\nAs a customer service representative, I want to see the past instances of a license having been locked when I am managing locked licenses so that I can better assess whether to continue the lock.\r\n\r\nCurrently we are tracking the number of instances a license is blocked/unblocked via the email notifications when a license is unlocked.\r\n\r\nIf we can add a feature on the the Show locked licenses page to show the number of times the license has previously locked and the dates this will be helpful in determining if they should be unlocked\r\n\r\nhttps://manage2.cpanel.net/stolen.cgi{color}",
            "headline" : "Description changed."
         },
         "group" : "scope"
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "minute" : 2,
            "month" : 12,
            "day" : 11,
            "hour" : 12,
            "year" : 2015
         },
         "background" : {
            "color" : "palevioletred"
         },
         "text" : {
            "headline" : "Description changed.",
            "text" : "Description changed from: <br>User Story:\r\n\r\nAs a cs rep, I would like a column on the unlock ip page to display the number of times the IP has been blocked while associated to the store user so that we can make better judgement calls when unlocking IPs.\r\n\r\nAcceptance Criteria:\r\n# need to add the column to display the count\r\n# should only include the times the IP blocked while associated to the current user\r\n\r\n\r\n{color:#654982}User Story:\r\nAs a customer service representative, I want to see the past instances of a license having been locked when I am managing locked licenses so that I can better assess whether to continue the lock.\r\n\r\nCurrently we are tracking the number of instances a license is blocked/unblocked via the email notifications when a license is unlocked.\r\n\r\nIf we can add a feature on the the Show locked licenses page to show the number of times the license has previously locked and the dates this will be helpful in determining if they should be unlocked\r\n\r\nhttps://manage2.cpanel.net/stolen.cgi{color}<br><br>To: <br>User Story:\r\n\r\nAs a cs rep, I would like a column on the unlock ip page to display the number of times the IP has been blocked while associated to the store user so that we can make better judgement calls when unlocking IPs.\r\n\r\nAcceptance Criteria:\r\n# need to add the column to display the count\r\n# should only include the times the IP blocked while associated to the current user\r\n\r\nDEV NOTES:\r\nProbably need a new db column to track count\r\n\r\n\r\n{color:#654982}User Story:\r\nAs a customer service representative, I want to see the past instances of a license having been locked when I am managing locked licenses so that I can better assess whether to continue the lock.\r\n\r\nCurrently we are tracking the number of instances a license is blocked/unblocked via the email notifications when a license is unlocked.\r\n\r\nIf we can add a feature on the the Show locked licenses page to show the number of times the license has previously locked and the dates this will be helpful in determining if they should be unlocked\r\n\r\nhttps://manage2.cpanel.net/stolen.cgi{color}"
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
            "day" : 11,
            "minute" : 3,
            "hour" : 12,
            "year" : 2015
         },
         "text" : {
            "text" : "Description changed from: <br>User Story:\r\n\r\nAs a cs rep, I would like a column on the unlock ip page to display the number of times the IP has been blocked while associated to the store user so that we can make better judgement calls when unlocking IPs.\r\n\r\nAcceptance Criteria:\r\n# need to add the column to display the count\r\n# should only include the times the IP blocked while associated to the current user\r\n\r\nDEV NOTES:\r\nProbably need a new db column to track count\r\n\r\n\r\n{color:#654982}User Story:\r\nAs a customer service representative, I want to see the past instances of a license having been locked when I am managing locked licenses so that I can better assess whether to continue the lock.\r\n\r\nCurrently we are tracking the number of instances a license is blocked/unblocked via the email notifications when a license is unlocked.\r\n\r\nIf we can add a feature on the the Show locked licenses page to show the number of times the license has previously locked and the dates this will be helpful in determining if they should be unlocked\r\n\r\nhttps://manage2.cpanel.net/stolen.cgi{color}<br><br>To: <br>User Story:\r\n\r\nAs a cs rep, I would like a column on the unlock ip page to display the number of times the IP has been blocked while associated to the store user so that we can make better judgement calls when unlocking IPs.\r\n\r\nAcceptance Criteria:\r\n# need to add the column to display the count\r\n# should only include the times the IP blocked while associated to the current user\r\n\r\nDEV NOTES:\r\nProbably need a new db column to track count\r\n\r\n\r\n{color:#d04437}User Story:\r\nAs a customer service representative, I want to see the past instances of a license having been locked when I am managing locked licenses so that I can better assess whether to continue the lock.\r\n\r\nCurrently we are tracking the number of instances a license is blocked/unblocked via the email notifications when a license is unlocked.\r\n\r\nIf we can add a feature on the the Show locked licenses page to show the number of times the license has previously locked and the dates this will be helpful in determining if they should be unlocked\r\n\r\nhttps://manage2.cpanel.net/stolen.cgi{color}",
            "headline" : "Description changed."
         },
         "group" : "scope"
      },
      {
         "text" : {
            "text" : "Description changed from: <br>User Story:\r\n\r\nAs a cs rep, I would like a column on the unlock ip page to display the number of times the IP has been blocked while associated to the store user so that we can make better judgement calls when unlocking IPs.\r\n\r\nAcceptance Criteria:\r\n# need to add the column to display the count\r\n# should only include the times the IP blocked while associated to the current user\r\n\r\nDEV NOTES:\r\nProbably need a new db column to track count\r\n\r\n\r\n{color:#d04437}User Story:\r\nAs a customer service representative, I want to see the past instances of a license having been locked when I am managing locked licenses so that I can better assess whether to continue the lock.\r\n\r\nCurrently we are tracking the number of instances a license is blocked/unblocked via the email notifications when a license is unlocked.\r\n\r\nIf we can add a feature on the the Show locked licenses page to show the number of times the license has previously locked and the dates this will be helpful in determining if they should be unlocked\r\n\r\nhttps://manage2.cpanel.net/stolen.cgi{color}<br><br>To: <br>User Story:\r\n\r\nAs a cs rep, I would like a column on the unlock ip page to display the number of times the IP has been blocked while associated to the store user so that we can make better judgement calls when unlocking IPs.\r\n\r\nAcceptance Criteria:\r\n# need to add the column to display the count\r\n# should only include the times the IP blocked while associated to the current user\r\n\r\nDEV NOTES:\r\nProbably need a new db column to track count",
            "headline" : "Description changed."
         },
         "group" : "scope",
         "start_datetime" : null,
         "start_date" : {
            "minute" : 3,
            "month" : 12,
            "day" : 11,
            "hour" : 12,
            "year" : 2015
         },
         "background" : {
            "color" : "palevioletred"
         }
      },
      {
         "text" : {
            "headline" : "Priority changed.",
            "text" : "Priority changed from: <br>Minor<br><br>To: <br>Major"
         },
         "group" : "misc",
         "start_datetime" : null,
         "start_date" : {
            "hour" : 16,
            "year" : 2015,
            "month" : 11,
            "day" : 2,
            "minute" : 33
         },
         "background" : {
            "color" : "plum"
         }
      },
      {
         "text" : {
            "text" : "Possible improvements would be to add a history button/link/icon/thing that would show each previous date that the license was locked/unlocked and the given reason it was unlocked.",
            "headline" : "Comment added by Shavaun Tesareski"
         },
         "group" : "misc",
         "background" : {
            "color" : "olivedrab"
         },
         "start_date" : {
            "year" : 2015,
            "hour" : 15,
            "day" : 4,
            "month" : 12,
            "minute" : 46
         },
         "start_datetime" : null
      },
      {
         "background" : {
            "color" : "olivedrab"
         },
         "start_datetime" : null,
         "start_date" : {
            "hour" : 15,
            "year" : 2015,
            "month" : 12,
            "day" : 4,
            "minute" : 46
         },
         "text" : {
            "headline" : "Comment added by Shavaun Tesareski",
            "text" : "Confirmed as Major because CS can't tell any historical information about a license locking history."
         },
         "group" : "misc"
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "month" : 12,
            "day" : 11,
            "minute" : 3,
            "hour" : 12,
            "year" : 2015
         },
         "background" : {
            "color" : "olivedrab"
         },
         "text" : {
            "headline" : "Comment added by Daniel Howell",
            "text" : "Original Story:<br><br>User Story:<br>As a customer service representative, I want to see the past instances of a license having been locked when I am managing locked licenses so that I can better assess whether to continue the lock.<br><br>Currently we are tracking the number of instances a license is blocked/unblocked via the email notifications when a license is unlocked.<br><br>If we can add a feature on the the Show locked licenses page to show the number of times the license has previously locked and the dates this will be helpful in determining if they should be unlocked<br><br>https://manage2.cpanel.net/stolen.cgi"
         },
         "group" : "misc"
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "month" : 12,
            "day" : 16,
            "minute" : 35,
            "hour" : 7,
            "year" : 2015
         },
         "background" : {
            "color" : "olivedrab"
         },
         "group" : "misc",
         "text" : {
            "text" : "Customer Service processes these currently at the https://manage2.cpanel.net/stolen.cgi page.<br><br>After talking to Gillian from CS, I think the original story is correct as written.  It has no reference to a store user.  This functionality should not be linked to a store user.",
            "headline" : "Comment added by Charles Larry"
         }
      },
      {
         "text" : {
            "text" : "View the [Pull Request|https://enterprise.cpanel.net/projects/IDEV/repos/manage2/pull-requests/25/overview]",
            "headline" : "Comment added by Charles Larry"
         },
         "group" : "misc",
         "start_datetime" : null,
         "start_date" : {
            "day" : 16,
            "month" : 12,
            "minute" : 35,
            "year" : 2015,
            "hour" : 13
         },
         "background" : {
            "color" : "olivedrab"
         }
      }
   ],
   "title" : {
      "text" : {
         "headline" : "<a href=\"https://jira.cpanel.net/browse/OPRAH-1916\">OPRAH-1916: see the past instances of a license having been locked when I am managing locked licenses</a>"
      }
   }
}
