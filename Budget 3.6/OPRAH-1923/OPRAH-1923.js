var timeline_json = {
   "title" : {
      "text" : {
         "headline" : "<a href=\"https://jira.cpanel.net/browse/OPRAH-1923\">OPRAH-1923: BUG - budget item added to incorrect budget</a>"
      }
   },
   "events" : [
      {
         "background" : {
            "color" : "palevioletred"
         },
         "start_date" : {
            "month" : 12,
            "day" : 11,
            "minute" : 28,
            "hour" : 17,
            "year" : 2015
         },
         "start_datetime" : null,
         "text" : {
            "text" : "Description changed from: <br>Budget for given department existing for one year, but not for another. Attempt to create a new budget.  Items are added to the already-existing one.\n\n\nSteps to Reproduce:\n\n# Select dept & year for non-existent budget\n## eg. All Departments / 2016\n# Add item\n# Notice the UI shows the correct dept & year\n(All Departments / 2016)\n# Notice the API calls are going to the wrong budget\n(All Departments / 2015)<br><br>To: <br>Budget for given department existing for one year, but not for another. Attempt to create a new budget.  Items are added to the already-existing one.\r\n\r\n\r\nSteps to Reproduce:\r\n\r\n# Select dept & year for non-existent budget\r\n(eg. All Departments / 2016)\r\n# Add item\r\n# Notice the UI shows the correct dept & year\r\n(All Departments / 2016)\r\n# Notice the API calls are going to the wrong budget\r\n(All Departments / 2015)",
            "headline" : "Description changed."
         },
         "group" : "scope"
      },
      {
         "text" : {
            "text" : "Description changed from: <br>Budget for given department existing for one year, but not for another. Attempt to create a new budget.  Items are added to the already-existing one.\r\n\r\n\r\nSteps to Reproduce:\r\n\r\n# Select dept & year for non-existent budget\r\n(eg. All Departments / 2016)\r\n# Add item\r\n# Notice the UI shows the correct dept & year\r\n(All Departments / 2016)\r\n# Notice the API calls are going to the wrong budget\r\n(All Departments / 2015)<br><br>To: <br>Budget for given department exists for one year, but not for another.\r\nAttempt to create a new budget.  Items are added to the already-existing one.\r\n\r\n\r\nSteps to Reproduce:\r\n\r\n# Select dept & year for non-existent budget\r\n(eg. All Departments / 2016)\r\n# Add item\r\n# Notice the UI shows the correct dept & year\r\n(All Departments / 2016)\r\n# Notice the API calls are going to the wrong budget\r\n(All Departments / 2015)",
            "headline" : "Description changed."
         },
         "group" : "scope",
         "background" : {
            "color" : "palevioletred"
         },
         "start_datetime" : null,
         "start_date" : {
            "minute" : 29,
            "day" : 11,
            "month" : 12,
            "year" : 2015,
            "hour" : 17
         }
      },
      {
         "group" : "scope",
         "text" : {
            "text" : "Description changed from: <br>Budget for given department exists for one year, but not for another.\r\nAttempt to create a new budget.  Items are added to the already-existing one.\r\n\r\n\r\nSteps to Reproduce:\r\n\r\n# Select dept & year for non-existent budget\r\n(eg. All Departments / 2016)\r\n# Add item\r\n# Notice the UI shows the correct dept & year\r\n(All Departments / 2016)\r\n# Notice the API calls are going to the wrong budget\r\n(All Departments / 2015)<br><br>To: <br>Budget for given department exists for one year, but not for another.\r\nAttempt to create a new budget.  Items are added to the already-existing one.\r\n\r\n\r\nSteps to Reproduce:\r\n\r\n# Select dept & year for non-existent budget\r\n(eg. All Departments / 2016)\r\n# Add item\r\n# Notice the UI shows the correct dept & year\r\n(All Departments / 2016)\r\n# Notice the API calls are going to the wrong budget\r\n(All Departments / 2015)\r\n\r\n&nbsp;\r\n\r\n_Note: testing branch was develop + feature/OPRAH-1859-list-page-include-unstarted-budgets + OPRAH-1875_\r\n\r\n{code}\r\nbudget@john [develop] ~/git/budget $ date; git pull\r\nFri Dec 11 17:05:05 CST 2015\r\nAlready up-to-date.\r\nbudget@john [develop] ~/git/budget $ git checkout -b QA-unstarted-budgets\r\nSwitched to a new branch 'QA-unstarted-budgets'\r\nbudget@john [QA-unstarted-budgets] ~/git/budget $ git merge feature/OPRAH-1859-list-page-include-unstarted-budgets\r\nMerge made by the 'recursive' strategy.\r\n lib/Budget/Budgets.pm                     | 187 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++----------------------\r\n lib/Budget/Test/DB.pm                     |  95 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\r\n t/unit/lib-Budget-Budgets/delete.t        |  33 ++++++++++++++++++++++------\r\n t/unit/lib-Budget-Budgets/department_id.t |  16 +++++++++++++-\r\n t/unit/lib-Budget-Budgets/read_all.t      |  83 ++++++++++++++++++++++++++++++++++++++++++++++++++++++----------------\r\n 5 files changed, 363 insertions(+), 51 deletions(-)\r\nbudget@john [QA-unstarted-budgets] ~/git/budget $ git merge OPRAH-1875\r\nMerge made by the 'recursive' strategy.\r\n public_html/js/budget-list.js | 11 ++++++++++-\r\n 1 file changed, 10 insertions(+), 1 deletion(-)\r\n{code}",
            "headline" : "Description changed."
         },
         "start_datetime" : null,
         "start_date" : {
            "year" : 2015,
            "hour" : 17,
            "day" : 11,
            "month" : 12,
            "minute" : 33
         },
         "background" : {
            "color" : "palevioletred"
         }
      },
      {
         "text" : {
            "headline" : "Issuetype changed.",
            "text" : "Issuetype changed from: <br>Bug<br><br>To: <br>Sub-task"
         },
         "group" : "misc",
         "start_datetime" : null,
         "start_date" : {
            "month" : 12,
            "day" : 11,
            "minute" : 30,
            "hour" : 17,
            "year" : 2015
         },
         "background" : {
            "color" : "plum"
         }
      }
   ]
}
