var timeline_json = {
   "title" : {
      "text" : {
         "headline" : "<a href=\"https://jira.cpanel.net/browse/OPRAH-1907\">OPRAH-1907: BUG - Changing category doesn't unset subcategory</a>"
      }
   },
   "events" : [
      {
         "background" : {
            "color" : "seagreen"
         },
         "start_datetime" : null,
         "start_date" : {
            "minute" : 16,
            "day" : 11,
            "month" : 12,
            "year" : 2015,
            "hour" : 7
         },
         "group" : "assignee",
         "end_date" : {
            "year" : 2015,
            "hour" : 13,
            "day" : 15,
            "month" : 12,
            "minute" : 0
         },
         "text" : {
            "headline" : "Assignee: Charles Larry",
            "text" : "Assignee changed from unassigned to Charles Larry"
         },
         "end_datetime" : null
      },
      {
         "group" : "status",
         "end_date" : {
            "hour" : 13,
            "year" : 2015,
            "minute" : 0,
            "month" : 12,
            "day" : 15
         },
         "text" : {
            "headline" : "In Progress",
            "text" : "Status changed from To Do to In Progress"
         },
         "end_datetime" : null,
         "background" : {
            "color" : "darkcyan"
         },
         "start_datetime" : null,
         "start_date" : {
            "hour" : 13,
            "year" : 2015,
            "month" : 12,
            "day" : 14,
            "minute" : 46
         }
      },
      {
         "background" : {
            "color" : "dodgerblue"
         },
         "start_datetime" : null,
         "start_date" : {
            "hour" : 13,
            "year" : 2015,
            "minute" : 0,
            "month" : 12,
            "day" : 15
         },
         "text" : {
            "text" : "Status changed from In Progress to In Review",
            "headline" : "In Review"
         },
         "end_datetime" : null,
         "group" : "status",
         "end_date" : {
            "year" : 2015,
            "hour" : 10,
            "day" : 16,
            "month" : 12,
            "minute" : 16
         }
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "minute" : 16,
            "day" : 16,
            "month" : 12,
            "year" : 2015,
            "hour" : 10
         },
         "background" : {
            "color" : "darkblue"
         },
         "end_datetime" : null,
         "text" : {
            "headline" : "In Test",
            "text" : "Status changed from In Review to In Test"
         },
         "end_date" : {
            "minute" : 2,
            "month" : 12,
            "day" : 17,
            "hour" : 14,
            "year" : 2015
         },
         "group" : "status"
      },
      {
         "background" : {
            "color" : null
         },
         "start_date" : {
            "minute" : 2,
            "month" : 12,
            "day" : 17,
            "hour" : 14,
            "year" : 2015
         },
         "start_datetime" : null,
         "end_datetime" : null,
         "text" : {
            "text" : "Status changed from In Test to Ready to Merge",
            "headline" : "Ready to Merge"
         },
         "group" : "status",
         "end_date" : {
            "hour" : 8,
            "year" : 2015,
            "minute" : 33,
            "month" : 12,
            "day" : 18
         }
      },
      {
         "group" : "scope",
         "text" : {
            "headline" : "Description changed.",
            "text" : "Description changed from: <br>Steps to Reproduce\r\n\r\n# Add a Budget Item\r\n# Choose a Category that has Subcategory options\r\n# Choose a Subcategory\r\n# Change the Category\r\n# Notice the UI Subcategory options change to reflect the new Category\r\n_However, the previous Subcategory is still set in the database_\r\n# Attempting any further changes/saves results in an error\r\n\r\n&nbsp;\r\n\r\n{code:title=Response from final PATCH}\r\n{\r\n   \"code\" : 404,\r\n   \"data\" : {\r\n      \"description\" : \"The requested resource could not be found.\"\r\n   },\r\n   \"description\" : \"budget_id 232 was not found\",\r\n   \"message\" : \"Not Found\",\r\n   \"success\" : false\r\n}\r\n{code}\r\n\r\n&nbsp;\r\n\r\n{code:title=Choose Category}\r\nMySQL [budget]> select budget_item_id,budget_id,category_id,subcategory_id from budget_items where budget_id = 28;\r\n+----------------+-----------+-------------+----------------+\r\n| budget_item_id | budget_id | category_id | subcategory_id |\r\n+----------------+-----------+-------------+----------------+\r\n|            288 |        28 |          15 |           NULL |\r\n+----------------+-----------+-------------+----------------+\r\n{code}\r\n\r\n{code:title=Choose Subcategory}\r\nMySQL [budget]> select budget_item_id,budget_id,category_id,subcategory_id from budget_items where budget_id = 28;\r\n+----------------+-----------+-------------+----------------+\r\n| budget_item_id | budget_id | category_id | subcategory_id |\r\n+----------------+-----------+-------------+----------------+\r\n|            288 |        28 |          15 |            204 |\r\n+----------------+-----------+-------------+----------------+\r\n{code}\r\n\r\n{code:title=Change Category}\r\nMySQL [budget]> select budget_item_id,budget_id,category_id,subcategory_id from budget_items where budget_id = 28;\r\n+----------------+-----------+-------------+----------------+\r\n| budget_item_id | budget_id | category_id | subcategory_id |\r\n+----------------+-----------+-------------+----------------+\r\n|            288 |        28 |          12 |            204 |\r\n+----------------+-----------+-------------+----------------+\r\n{code}\r\n\r\n&nbsp;\r\n\r\nThe final entry in the budget_items table contains an illegal combination of Category & Subcategory:\r\n{code}\r\nmysql> select * from cplisc.expenses_categories where id = 204;\r\n+-----+-------+-----------+--------+----------+\r\n| id  | name  | parent_id | deptid | disabled |\r\n+-----+-------+-----------+--------+----------+\r\n| 204 | ICANN |        15 |   NULL |        0 |\r\n+-----+-------+-----------+--------+----------+\r\n{code}<br><br>To: <br>Steps to Reproduce\r\n\r\n# Add a Budget Item\r\n# Choose a Category that has Subcategory options\r\n# Choose a Subcategory\r\n# Change the Category\r\n# Notice the UI Subcategory options change to reflect the new Category\r\n*_However, the previous Subcategory is still set in the database_*\r\n# Attempting any further changes/saves results in an error\r\n\r\n&nbsp;\r\n\r\n{code:title=Response from final PATCH}\r\n{\r\n   \"code\" : 404,\r\n   \"data\" : {\r\n      \"description\" : \"The requested resource could not be found.\"\r\n   },\r\n   \"description\" : \"budget_id 232 was not found\",\r\n   \"message\" : \"Not Found\",\r\n   \"success\" : false\r\n}\r\n{code}\r\n\r\n&nbsp;\r\n\r\n{code:title=Choose Category}\r\nMySQL [budget]> select budget_item_id,budget_id,category_id,subcategory_id from budget_items where budget_id = 28;\r\n+----------------+-----------+-------------+----------------+\r\n| budget_item_id | budget_id | category_id | subcategory_id |\r\n+----------------+-----------+-------------+----------------+\r\n|            288 |        28 |          15 |           NULL |\r\n+----------------+-----------+-------------+----------------+\r\n{code}\r\n\r\n{code:title=Choose Subcategory}\r\nMySQL [budget]> select budget_item_id,budget_id,category_id,subcategory_id from budget_items where budget_id = 28;\r\n+----------------+-----------+-------------+----------------+\r\n| budget_item_id | budget_id | category_id | subcategory_id |\r\n+----------------+-----------+-------------+----------------+\r\n|            288 |        28 |          15 |            204 |\r\n+----------------+-----------+-------------+----------------+\r\n{code}\r\n\r\n{code:title=Change Category}\r\nMySQL [budget]> select budget_item_id,budget_id,category_id,subcategory_id from budget_items where budget_id = 28;\r\n+----------------+-----------+-------------+----------------+\r\n| budget_item_id | budget_id | category_id | subcategory_id |\r\n+----------------+-----------+-------------+----------------+\r\n|            288 |        28 |          12 |            204 |\r\n+----------------+-----------+-------------+----------------+\r\n{code}\r\n\r\n&nbsp;\r\n\r\nThe final entry in the budget_items table contains an illegal combination of Category & Subcategory:\r\n{code}\r\nmysql> select * from cplisc.expenses_categories where id = 204;\r\n+-----+-------+-----------+--------+----------+\r\n| id  | name  | parent_id | deptid | disabled |\r\n+-----+-------+-----------+--------+----------+\r\n| 204 | ICANN |        15 |   NULL |        0 |\r\n+-----+-------+-----------+--------+----------+\r\n{code}"
         },
         "background" : {
            "color" : "palevioletred"
         },
         "start_date" : {
            "month" : 12,
            "day" : 9,
            "minute" : 6,
            "hour" : 16,
            "year" : 2015
         },
         "start_datetime" : null
      },
      {
         "text" : {
            "text" : "Description changed from: <br>Steps to Reproduce\r\n\r\n# Add a Budget Item\r\n# Choose a Category that has Subcategory options\r\n# Choose a Subcategory\r\n# Change the Category\r\n# Notice the UI Subcategory options change to reflect the new Category\r\n*_However, the previous Subcategory is still set in the database_*\r\n# Attempting any further changes/saves results in an error\r\n\r\n&nbsp;\r\n\r\n{code:title=Response from final PATCH}\r\n{\r\n   \"code\" : 404,\r\n   \"data\" : {\r\n      \"description\" : \"The requested resource could not be found.\"\r\n   },\r\n   \"description\" : \"budget_id 232 was not found\",\r\n   \"message\" : \"Not Found\",\r\n   \"success\" : false\r\n}\r\n{code}\r\n\r\n&nbsp;\r\n\r\n{code:title=Choose Category}\r\nMySQL [budget]> select budget_item_id,budget_id,category_id,subcategory_id from budget_items where budget_id = 28;\r\n+----------------+-----------+-------------+----------------+\r\n| budget_item_id | budget_id | category_id | subcategory_id |\r\n+----------------+-----------+-------------+----------------+\r\n|            288 |        28 |          15 |           NULL |\r\n+----------------+-----------+-------------+----------------+\r\n{code}\r\n\r\n{code:title=Choose Subcategory}\r\nMySQL [budget]> select budget_item_id,budget_id,category_id,subcategory_id from budget_items where budget_id = 28;\r\n+----------------+-----------+-------------+----------------+\r\n| budget_item_id | budget_id | category_id | subcategory_id |\r\n+----------------+-----------+-------------+----------------+\r\n|            288 |        28 |          15 |            204 |\r\n+----------------+-----------+-------------+----------------+\r\n{code}\r\n\r\n{code:title=Change Category}\r\nMySQL [budget]> select budget_item_id,budget_id,category_id,subcategory_id from budget_items where budget_id = 28;\r\n+----------------+-----------+-------------+----------------+\r\n| budget_item_id | budget_id | category_id | subcategory_id |\r\n+----------------+-----------+-------------+----------------+\r\n|            288 |        28 |          12 |            204 |\r\n+----------------+-----------+-------------+----------------+\r\n{code}\r\n\r\n&nbsp;\r\n\r\nThe final entry in the budget_items table contains an illegal combination of Category & Subcategory:\r\n{code}\r\nmysql> select * from cplisc.expenses_categories where id = 204;\r\n+-----+-------+-----------+--------+----------+\r\n| id  | name  | parent_id | deptid | disabled |\r\n+-----+-------+-----------+--------+----------+\r\n| 204 | ICANN |        15 |   NULL |        0 |\r\n+-----+-------+-----------+--------+----------+\r\n{code}<br><br>To: <br>Changing a Category leaves the Subcategory set to its previous value.  This can cause a mismatch of the two values which then fails validation.\r\n\r\nSteps to Reproduce\r\n\r\n# Add a Budget Item\r\n# Choose a Category that has Subcategory options\r\n# Choose a Subcategory\r\n# Change the Category\r\n# Notice the UI Subcategory options change to reflect the new Category\r\n*_However, the previous Subcategory is still set in the database_*\r\n# Attempting any further changes/saves results in an error\r\n\r\n_{color:#707070}*Suggestion:  Perhaps we could set Subcategory to NULL whenever a Category is selected/changed?*{color}_\r\n\r\n&nbsp;\r\n\r\n{code:title=Response from final PATCH}\r\n{\r\n   \"code\" : 404,\r\n   \"data\" : {\r\n      \"description\" : \"The requested resource could not be found.\"\r\n   },\r\n   \"description\" : \"budget_id 232 was not found\",\r\n   \"message\" : \"Not Found\",\r\n   \"success\" : false\r\n}\r\n{code}\r\n\r\n&nbsp;\r\n\r\n{code:title=Choose Category}\r\nMySQL [budget]> select budget_item_id,budget_id,category_id,subcategory_id from budget_items where budget_id = 28;\r\n+----------------+-----------+-------------+----------------+\r\n| budget_item_id | budget_id | category_id | subcategory_id |\r\n+----------------+-----------+-------------+----------------+\r\n|            288 |        28 |          15 |           NULL |\r\n+----------------+-----------+-------------+----------------+\r\n{code}\r\n\r\n{code:title=Choose Subcategory}\r\nMySQL [budget]> select budget_item_id,budget_id,category_id,subcategory_id from budget_items where budget_id = 28;\r\n+----------------+-----------+-------------+----------------+\r\n| budget_item_id | budget_id | category_id | subcategory_id |\r\n+----------------+-----------+-------------+----------------+\r\n|            288 |        28 |          15 |            204 |\r\n+----------------+-----------+-------------+----------------+\r\n{code}\r\n\r\n{code:title=Change Category}\r\nMySQL [budget]> select budget_item_id,budget_id,category_id,subcategory_id from budget_items where budget_id = 28;\r\n+----------------+-----------+-------------+----------------+\r\n| budget_item_id | budget_id | category_id | subcategory_id |\r\n+----------------+-----------+-------------+----------------+\r\n|            288 |        28 |          12 |            204 |\r\n+----------------+-----------+-------------+----------------+\r\n{code}\r\n\r\n&nbsp;\r\n\r\nThe final entry in the budget_items table contains an illegal combination of Category & Subcategory:\r\n{code}\r\nmysql> select * from cplisc.expenses_categories where id = 204;\r\n+-----+-------+-----------+--------+----------+\r\n| id  | name  | parent_id | deptid | disabled |\r\n+-----+-------+-----------+--------+----------+\r\n| 204 | ICANN |        15 |   NULL |        0 |\r\n+-----+-------+-----------+--------+----------+\r\n{code}",
            "headline" : "Description changed."
         },
         "group" : "scope",
         "start_datetime" : null,
         "start_date" : {
            "month" : 12,
            "day" : 9,
            "minute" : 14,
            "hour" : 16,
            "year" : 2015
         },
         "background" : {
            "color" : "palevioletred"
         }
      },
      {
         "group" : "scope",
         "text" : {
            "text" : "Story Points changed from: <br>undef<br><br>To: <br>2",
            "headline" : "Story Points changed."
         },
         "start_date" : {
            "year" : 2015,
            "hour" : 9,
            "day" : 16,
            "month" : 12,
            "minute" : 1
         },
         "start_datetime" : null,
         "background" : {
            "color" : "palevioletred"
         }
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "hour" : 11,
            "year" : 2015,
            "month" : 12,
            "day" : 11,
            "minute" : 34
         },
         "background" : {
            "color" : "plum"
         },
         "group" : "misc",
         "text" : {
            "text" : "Priority changed from: <br>Minor<br><br>To: <br>Major",
            "headline" : "Priority changed."
         }
      },
      {
         "group" : "misc",
         "text" : {
            "headline" : "Issuetype changed.",
            "text" : "Issuetype changed from: <br>Story<br><br>To: <br>Bug"
         },
         "start_datetime" : null,
         "start_date" : {
            "month" : 12,
            "day" : 9,
            "minute" : 6,
            "hour" : 16,
            "year" : 2015
         },
         "background" : {
            "color" : "plum"
         }
      },
      {
         "text" : {
            "headline" : "Comment added by Charles Larry",
            "text" : "View the [Pull Request|https://enterprise.cpanel.net/projects/IDEV/repos/budget/pull-requests/75/overview]"
         },
         "group" : "misc",
         "background" : {
            "color" : "olivedrab"
         },
         "start_date" : {
            "month" : 12,
            "day" : 15,
            "minute" : 2,
            "hour" : 13,
            "year" : 2015
         },
         "start_datetime" : null
      }
   ]
}
