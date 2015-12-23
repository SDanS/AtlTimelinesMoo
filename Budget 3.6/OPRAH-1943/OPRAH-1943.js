var timeline_json = {
   "title" : {
      "text" : {
         "headline" : "<a href=\"https://jira.cpanel.net/browse/OPRAH-1943\">OPRAH-1943: BUG - UI not refreshing when switching between budgets</a>"
      }
   },
   "events" : [
      {
         "group" : "scope",
         "text" : {
            "headline" : "Description changed.",
            "text" : "Description changed from: <br>Steps to Reproduce:\n\n# Request view\n# Select dept & year of Unstarted budget\n# Switch to Approved budget\n# Switch back to previous Unstarted budget\n# Notice the lower buttons \"Add Budget\" \"Request Approval\" do not show as they should for a new budget<br><br>To: <br>Steps to Reproduce:\r\n\r\n# Request view\r\n# Select dept & year of Unstarted budget\r\n# Switch to an Approved budget\r\n# Switch back to previous Unstarted budget\r\n# Notice the lower buttons \"Add Budget\" \"Request Approval\" do not show as they should for a new budget"
         },
         "start_date" : {
            "month" : 12,
            "day" : 17,
            "minute" : 35,
            "hour" : 18,
            "year" : 2015
         },
         "start_datetime" : null,
         "background" : {
            "color" : "palevioletred"
         }
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "year" : 2015,
            "hour" : 18,
            "minute" : 37,
            "day" : 17,
            "month" : 12
         },
         "background" : {
            "color" : "palevioletred"
         },
         "text" : {
            "text" : "Description changed from: <br>Steps to Reproduce:\r\n\r\n# Request view\r\n# Select dept & year of Unstarted budget\r\n# Switch to an Approved budget\r\n# Switch back to previous Unstarted budget\r\n# Notice the lower buttons \"Add Budget\" \"Request Approval\" do not show as they should for a new budget<br><br>To: <br>Steps to Reproduce:\r\n\r\n# Request view\r\n# Select dept & year of Unstarted budget\r\n# Switch to an Approved budget\r\n# Switch back to previous Unstarted budget\r\n# Notice the lower buttons \"Add Budget\" \"Request Approval\" do not show as they should for a new budget\r\n\r\n&nbsp;\r\n\r\nh3.Environment:\r\nTested on local branch with the following merged:\r\n* OPRAH-1875\r\n* feature/OPRAH-1859-list-page-include-unstarted-budgets\r\n* develop\r\n{code}\r\nbudget@john [develop] ~/git/budget $ git log|head\r\ncommit 51529ff7ebc3ce08501bf6c7a5b2017c324b6ff6\r\nMerge: 8618ae2 ff65610\r\nAuthor: Ross Steiner <ross@cpanel.net>\r\nDate:   Thu Dec 17 13:52:52 2015 -0600\r\n\r\n    Merge pull request #68 in IDEV/budget from bugfix/OPRAH-1878-department-and-year-in-detail-view to develop\r\n\r\n    * commit 'ff656106e7d3731df1ddca79d25f8155dbf9889e':\r\n      show department and year next to the status in the budget detail view: /detail/:budget_id\r\n{code}",
            "headline" : "Description changed."
         },
         "group" : "scope"
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "month" : 12,
            "day" : 17,
            "minute" : 37,
            "hour" : 18,
            "year" : 2015
         },
         "background" : {
            "color" : "palevioletred"
         },
         "group" : "scope",
         "text" : {
            "headline" : "Description changed.",
            "text" : "Description changed from: <br>Steps to Reproduce:\r\n\r\n# Request view\r\n# Select dept & year of Unstarted budget\r\n# Switch to an Approved budget\r\n# Switch back to previous Unstarted budget\r\n# Notice the lower buttons \"Add Budget\" \"Request Approval\" do not show as they should for a new budget\r\n\r\n&nbsp;\r\n\r\nh3.Environment:\r\nTested on local branch with the following merged:\r\n* OPRAH-1875\r\n* feature/OPRAH-1859-list-page-include-unstarted-budgets\r\n* develop\r\n{code}\r\nbudget@john [develop] ~/git/budget $ git log|head\r\ncommit 51529ff7ebc3ce08501bf6c7a5b2017c324b6ff6\r\nMerge: 8618ae2 ff65610\r\nAuthor: Ross Steiner <ross@cpanel.net>\r\nDate:   Thu Dec 17 13:52:52 2015 -0600\r\n\r\n    Merge pull request #68 in IDEV/budget from bugfix/OPRAH-1878-department-and-year-in-detail-view to develop\r\n\r\n    * commit 'ff656106e7d3731df1ddca79d25f8155dbf9889e':\r\n      show department and year next to the status in the budget detail view: /detail/:budget_id\r\n{code}<br><br>To: <br>h3.Steps to Reproduce:\r\n\r\n# Request view\r\n# Select dept & year of Unstarted budget\r\n# Switch to an Approved budget\r\n# Switch back to previous Unstarted budget\r\n# Notice the lower buttons \"Add Budget\" \"Request Approval\" do not show as they should for a new budget\r\n\r\n&nbsp;\r\n\r\nh3.Environment:\r\nTested on local branch with the following merged:\r\n* OPRAH-1875\r\n* feature/OPRAH-1859-list-page-include-unstarted-budgets\r\n* develop\r\n{code}\r\nbudget@john [develop] ~/git/budget $ git log|head\r\ncommit 51529ff7ebc3ce08501bf6c7a5b2017c324b6ff6\r\nMerge: 8618ae2 ff65610\r\nAuthor: Ross Steiner <ross@cpanel.net>\r\nDate:   Thu Dec 17 13:52:52 2015 -0600\r\n\r\n    Merge pull request #68 in IDEV/budget from bugfix/OPRAH-1878-department-and-year-in-detail-view to develop\r\n\r\n    * commit 'ff656106e7d3731df1ddca79d25f8155dbf9889e':\r\n      show department and year next to the status in the budget detail view: /detail/:budget_id\r\n{code}"
         }
      },
      {
         "group" : "misc",
         "text" : {
            "headline" : "Issuetype changed.",
            "text" : "Issuetype changed from: <br>Bug<br><br>To: <br>Sub-task"
         },
         "start_datetime" : null,
         "start_date" : {
            "year" : 2015,
            "hour" : 18,
            "day" : 17,
            "month" : 12,
            "minute" : 33
         },
         "background" : {
            "color" : "plum"
         }
      }
   ]
}
