var timeline_json = {
   "events" : [
      {
         "background" : {
            "color" : "palevioletred"
         },
         "start_datetime" : null,
         "start_date" : {
            "hour" : 15,
            "year" : 2015,
            "month" : 12,
            "day" : 17,
            "minute" : 32
         },
         "text" : {
            "text" : "Description changed from: <br>Logging in while having a cookie for not-my-department causes Request view to try to create a budget for budget_id = 0\n\nSteps to Reproduce:\n\n# Request view\n# Select department & year\n# Sign out\n# Sign in as different Requester\n(Page attempts to load previous dept & year)\n# Receive error\n\n{quote}\nRequest URL:http://john.budget.manage.devel.cpanel.net/api/budgets\nRequest Method:POST\nStatus Code:403 Forbidden\n{quote}\n\n{code:title=POST response}\n{\n   \"code\" : 403,\n   \"data\" : {\n      \"method\" : \"POST\",\n      \"resource\" : \"/api/budgets\"\n   },\n   \"description\" : \"not authorized to create budget for department ID: 0\",\n   \"message\" : \"Forbidden\",\n   \"success\" : false\n}\n{code}<br><br>To: <br>Logging in while having a cookie for not-my-department causes Request view to try to create a budget for budget_id = 0\r\n\r\nSteps to Reproduce:\r\n\r\n# Request view\r\n# Select department & year (eg. Legal / 2016)\r\n# Sign out\r\n# Sign in as different Requester, who doesn't have access to previous budget\r\n(Page attempts to load previous dept & year)\r\n# Receive error\r\n\r\n{quote}\r\nRequest URL:http://john.budget.manage.devel.cpanel.net/api/budgets\r\nRequest Method:POST\r\nStatus Code:403 Forbidden\r\n{quote}\r\n\r\n{code:title=POST response}\r\n{\r\n   \"code\" : 403,\r\n   \"data\" : {\r\n      \"method\" : \"POST\",\r\n      \"resource\" : \"/api/budgets\"\r\n   },\r\n   \"description\" : \"not authorized to create budget for department ID: 0\",\r\n   \"message\" : \"Forbidden\",\r\n   \"success\" : false\r\n}\r\n{code}\r\n\r\n&nbsp;\r\n\r\n\r\n\r\nInterestingly, a GET request for the previous budget is sent just before the above POST, and receives a 200 response with no data\r\n{code:title=GET /api/budgets?year=2016&department_id=64}\r\n{\r\n   \"code\" : 200,\r\n   \"data\" : [],\r\n   \"description\" : \"Successfully processed request\",\r\n   \"message\" : \"OK\",\r\n   \"success\" : true\r\n}\r\n{code}",
            "headline" : "Description changed."
         },
         "group" : "scope"
      },
      {
         "text" : {
            "headline" : "Description changed.",
            "text" : "Description changed from: <br>Logging in while having a cookie for not-my-department causes Request view to try to create a budget for budget_id = 0\r\n\r\nSteps to Reproduce:\r\n\r\n# Request view\r\n# Select department & year (eg. Legal / 2016)\r\n# Sign out\r\n# Sign in as different Requester, who doesn't have access to previous budget\r\n(Page attempts to load previous dept & year)\r\n# Receive error\r\n\r\n{quote}\r\nRequest URL:http://john.budget.manage.devel.cpanel.net/api/budgets\r\nRequest Method:POST\r\nStatus Code:403 Forbidden\r\n{quote}\r\n\r\n{code:title=POST response}\r\n{\r\n   \"code\" : 403,\r\n   \"data\" : {\r\n      \"method\" : \"POST\",\r\n      \"resource\" : \"/api/budgets\"\r\n   },\r\n   \"description\" : \"not authorized to create budget for department ID: 0\",\r\n   \"message\" : \"Forbidden\",\r\n   \"success\" : false\r\n}\r\n{code}\r\n\r\n&nbsp;\r\n\r\n\r\n\r\nInterestingly, a GET request for the previous budget is sent just before the above POST, and receives a 200 response with no data\r\n{code:title=GET /api/budgets?year=2016&department_id=64}\r\n{\r\n   \"code\" : 200,\r\n   \"data\" : [],\r\n   \"description\" : \"Successfully processed request\",\r\n   \"message\" : \"OK\",\r\n   \"success\" : true\r\n}\r\n{code}<br><br>To: <br>Logging in while having a cookie for not-my-department causes Request view to try to create a budget for budget_id = 0\r\n\r\nSteps to Reproduce:\r\n\r\n# Request view\r\n# Select department & year (eg. Legal / 2016)\r\n# Sign out\r\n# Sign in as different Requester, who doesn't have access to previous budget\r\n(Page attempts to load previous dept & year)\r\n# Receive error\r\n\r\n{quote}\r\nRequest URL:http://john.budget.manage.devel.cpanel.net/api/budgets\r\nRequest Method:POST\r\nStatus Code:403 Forbidden\r\n{quote}\r\n\r\n{code:title=POST /api/budgets}\r\n{\r\n   \"code\" : 403,\r\n   \"data\" : {\r\n      \"method\" : \"POST\",\r\n      \"resource\" : \"/api/budgets\"\r\n   },\r\n   \"description\" : \"not authorized to create budget for department ID: 0\",\r\n   \"message\" : \"Forbidden\",\r\n   \"success\" : false\r\n}\r\n{code}\r\n\r\n&nbsp;\r\n\r\n\r\n\r\nInterestingly, a GET request for the previous budget is sent just before the above POST, and receives a 200 response with no data\r\n{code:title=GET /api/budgets?year=2016&department_id=64}\r\n{\r\n   \"code\" : 200,\r\n   \"data\" : [],\r\n   \"description\" : \"Successfully processed request\",\r\n   \"message\" : \"OK\",\r\n   \"success\" : true\r\n}\r\n{code}"
         },
         "group" : "scope",
         "background" : {
            "color" : "palevioletred"
         },
         "start_datetime" : null,
         "start_date" : {
            "minute" : 33,
            "day" : 17,
            "month" : 12,
            "year" : 2015,
            "hour" : 15
         }
      },
      {
         "start_date" : {
            "hour" : 15,
            "year" : 2015,
            "minute" : 35,
            "month" : 12,
            "day" : 17
         },
         "start_datetime" : null,
         "background" : {
            "color" : "palevioletred"
         },
         "text" : {
            "text" : "Description changed from: <br>Logging in while having a cookie for not-my-department causes Request view to try to create a budget for budget_id = 0\r\n\r\nSteps to Reproduce:\r\n\r\n# Request view\r\n# Select department & year (eg. Legal / 2016)\r\n# Sign out\r\n# Sign in as different Requester, who doesn't have access to previous budget\r\n(Page attempts to load previous dept & year)\r\n# Receive error\r\n\r\n{quote}\r\nRequest URL:http://john.budget.manage.devel.cpanel.net/api/budgets\r\nRequest Method:POST\r\nStatus Code:403 Forbidden\r\n{quote}\r\n\r\n{code:title=POST /api/budgets}\r\n{\r\n   \"code\" : 403,\r\n   \"data\" : {\r\n      \"method\" : \"POST\",\r\n      \"resource\" : \"/api/budgets\"\r\n   },\r\n   \"description\" : \"not authorized to create budget for department ID: 0\",\r\n   \"message\" : \"Forbidden\",\r\n   \"success\" : false\r\n}\r\n{code}\r\n\r\n&nbsp;\r\n\r\n\r\n\r\nInterestingly, a GET request for the previous budget is sent just before the above POST, and receives a 200 response with no data\r\n{code:title=GET /api/budgets?year=2016&department_id=64}\r\n{\r\n   \"code\" : 200,\r\n   \"data\" : [],\r\n   \"description\" : \"Successfully processed request\",\r\n   \"message\" : \"OK\",\r\n   \"success\" : true\r\n}\r\n{code}<br><br>To: <br>Logging in while having a cookie for not-my-department causes Request view to try to create a budget for budget_id = 0\r\n\r\n&nbsp;\r\n\r\nSteps to Reproduce:\r\n\r\n# Request view\r\n# Select department & year (eg. Legal / 2016)\r\n# Sign out\r\n# Sign in as different Requester, who doesn't have access to previous budget\r\n(Page attempts to load previous dept & year)\r\n# Receive error\r\n\r\n{quote}\r\nRequest URL:http://john.budget.manage.devel.cpanel.net/api/budgets\r\nRequest Method:POST\r\nStatus Code:403 Forbidden\r\n{quote}\r\n\r\n{code:title=POST /api/budgets}\r\n{\r\n   \"code\" : 403,\r\n   \"data\" : {\r\n      \"method\" : \"POST\",\r\n      \"resource\" : \"/api/budgets\"\r\n   },\r\n   \"description\" : \"not authorized to create budget for department ID: 0\",\r\n   \"message\" : \"Forbidden\",\r\n   \"success\" : false\r\n}\r\n{code}\r\n\r\n&nbsp;\r\n\r\n\r\n\r\nInterestingly, a GET request for the previous budget is sent just before the above POST, and receives a 200 response with no data\r\n{code:title=GET /api/budgets?year=2016&department_id=64}\r\n{\r\n   \"code\" : 200,\r\n   \"data\" : [],\r\n   \"description\" : \"Successfully processed request\",\r\n   \"message\" : \"OK\",\r\n   \"success\" : true\r\n}\r\n{code}",
            "headline" : "Description changed."
         },
         "group" : "scope"
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "month" : 12,
            "day" : 17,
            "minute" : 36,
            "hour" : 15,
            "year" : 2015
         },
         "background" : {
            "color" : "palevioletred"
         },
         "text" : {
            "text" : "Description changed from: <br>Logging in while having a cookie for not-my-department causes Request view to try to create a budget for budget_id = 0\r\n\r\n&nbsp;\r\n\r\nSteps to Reproduce:\r\n\r\n# Request view\r\n# Select department & year (eg. Legal / 2016)\r\n# Sign out\r\n# Sign in as different Requester, who doesn't have access to previous budget\r\n(Page attempts to load previous dept & year)\r\n# Receive error\r\n\r\n{quote}\r\nRequest URL:http://john.budget.manage.devel.cpanel.net/api/budgets\r\nRequest Method:POST\r\nStatus Code:403 Forbidden\r\n{quote}\r\n\r\n{code:title=POST /api/budgets}\r\n{\r\n   \"code\" : 403,\r\n   \"data\" : {\r\n      \"method\" : \"POST\",\r\n      \"resource\" : \"/api/budgets\"\r\n   },\r\n   \"description\" : \"not authorized to create budget for department ID: 0\",\r\n   \"message\" : \"Forbidden\",\r\n   \"success\" : false\r\n}\r\n{code}\r\n\r\n&nbsp;\r\n\r\n\r\n\r\nInterestingly, a GET request for the previous budget is sent just before the above POST, and receives a 200 response with no data\r\n{code:title=GET /api/budgets?year=2016&department_id=64}\r\n{\r\n   \"code\" : 200,\r\n   \"data\" : [],\r\n   \"description\" : \"Successfully processed request\",\r\n   \"message\" : \"OK\",\r\n   \"success\" : true\r\n}\r\n{code}<br><br>To: <br>Logging in while having a cookie for not-my-department causes Request view to try to create a budget for budget_id = 0\r\n\r\n&nbsp;\r\n\r\nSteps to Reproduce:\r\n\r\n# Request view\r\n# Select department & year (eg. Legal / 2016)\r\n# Sign out\r\n# Sign in as different Requester, who doesn't have access to previous budget\r\n(Page attempts to load previous dept & year)\r\n# Receive error\r\n\r\n{quote}\r\nUh Oh!\r\nForbidden\r\n{quote}\r\n\r\n{code:title=POST /api/budgets}\r\n{\r\n   \"code\" : 403,\r\n   \"data\" : {\r\n      \"method\" : \"POST\",\r\n      \"resource\" : \"/api/budgets\"\r\n   },\r\n   \"description\" : \"not authorized to create budget for department ID: 0\",\r\n   \"message\" : \"Forbidden\",\r\n   \"success\" : false\r\n}\r\n{code}\r\n\r\n&nbsp;\r\n\r\n\r\n\r\nInterestingly, a GET request for the previous budget is sent just before the above POST, and receives a 200 response with no data\r\n{code:title=GET /api/budgets?year=2016&department_id=64}\r\n{\r\n   \"code\" : 200,\r\n   \"data\" : [],\r\n   \"description\" : \"Successfully processed request\",\r\n   \"message\" : \"OK\",\r\n   \"success\" : true\r\n}\r\n{code}",
            "headline" : "Description changed."
         },
         "group" : "scope"
      },
      {
         "start_date" : {
            "hour" : 18,
            "year" : 2015,
            "minute" : 4,
            "month" : 12,
            "day" : 17
         },
         "start_datetime" : null,
         "background" : {
            "color" : "palevioletred"
         },
         "text" : {
            "text" : "Description changed from: <br>Logging in while having a cookie for not-my-department causes Request view to try to create a budget for budget_id = 0\r\n\r\n&nbsp;\r\n\r\nSteps to Reproduce:\r\n\r\n# Request view\r\n# Select department & year (eg. Legal / 2016)\r\n# Sign out\r\n# Sign in as different Requester, who doesn't have access to previous budget\r\n(Page attempts to load previous dept & year)\r\n# Receive error\r\n\r\n{quote}\r\nUh Oh!\r\nForbidden\r\n{quote}\r\n\r\n{code:title=POST /api/budgets}\r\n{\r\n   \"code\" : 403,\r\n   \"data\" : {\r\n      \"method\" : \"POST\",\r\n      \"resource\" : \"/api/budgets\"\r\n   },\r\n   \"description\" : \"not authorized to create budget for department ID: 0\",\r\n   \"message\" : \"Forbidden\",\r\n   \"success\" : false\r\n}\r\n{code}\r\n\r\n&nbsp;\r\n\r\n\r\n\r\nInterestingly, a GET request for the previous budget is sent just before the above POST, and receives a 200 response with no data\r\n{code:title=GET /api/budgets?year=2016&department_id=64}\r\n{\r\n   \"code\" : 200,\r\n   \"data\" : [],\r\n   \"description\" : \"Successfully processed request\",\r\n   \"message\" : \"OK\",\r\n   \"success\" : true\r\n}\r\n{code}<br><br>To: <br>Logging in while having a cookie for not-my-department causes Request view to try to create a budget for budget_id = 0\r\n\r\nSimilar to the behavior in BUG OPRAH-1925 ?\r\n\r\n&nbsp;\r\n\r\nSteps to Reproduce:\r\n\r\n# Request view\r\n# Select department & year (eg. Legal / 2016)\r\n# Sign out\r\n# Sign in as different Requester, who doesn't have access to previous budget\r\n(Page attempts to load previous dept & year)\r\n# Receive error\r\n\r\n{quote}\r\nUh Oh!\r\nForbidden\r\n{quote}\r\n\r\n{code:title=POST /api/budgets}\r\n{\r\n   \"code\" : 403,\r\n   \"data\" : {\r\n      \"method\" : \"POST\",\r\n      \"resource\" : \"/api/budgets\"\r\n   },\r\n   \"description\" : \"not authorized to create budget for department ID: 0\",\r\n   \"message\" : \"Forbidden\",\r\n   \"success\" : false\r\n}\r\n{code}\r\n\r\n&nbsp;\r\n\r\n\r\n\r\nInterestingly, a GET request for the previous budget is sent just before the above POST, and receives a 200 response with no data\r\n{code:title=GET /api/budgets?year=2016&department_id=64}\r\n{\r\n   \"code\" : 200,\r\n   \"data\" : [],\r\n   \"description\" : \"Successfully processed request\",\r\n   \"message\" : \"OK\",\r\n   \"success\" : true\r\n}\r\n{code}",
            "headline" : "Description changed."
         },
         "group" : "scope"
      },
      {
         "group" : "scope",
         "text" : {
            "headline" : "Description changed.",
            "text" : "Description changed from: <br>Logging in while having a cookie for not-my-department causes Request view to try to create a budget for budget_id = 0\r\n\r\nSimilar to the behavior in BUG OPRAH-1925 ?\r\n\r\n&nbsp;\r\n\r\nSteps to Reproduce:\r\n\r\n# Request view\r\n# Select department & year (eg. Legal / 2016)\r\n# Sign out\r\n# Sign in as different Requester, who doesn't have access to previous budget\r\n(Page attempts to load previous dept & year)\r\n# Receive error\r\n\r\n{quote}\r\nUh Oh!\r\nForbidden\r\n{quote}\r\n\r\n{code:title=POST /api/budgets}\r\n{\r\n   \"code\" : 403,\r\n   \"data\" : {\r\n      \"method\" : \"POST\",\r\n      \"resource\" : \"/api/budgets\"\r\n   },\r\n   \"description\" : \"not authorized to create budget for department ID: 0\",\r\n   \"message\" : \"Forbidden\",\r\n   \"success\" : false\r\n}\r\n{code}\r\n\r\n&nbsp;\r\n\r\n\r\n\r\nInterestingly, a GET request for the previous budget is sent just before the above POST, and receives a 200 response with no data\r\n{code:title=GET /api/budgets?year=2016&department_id=64}\r\n{\r\n   \"code\" : 200,\r\n   \"data\" : [],\r\n   \"description\" : \"Successfully processed request\",\r\n   \"message\" : \"OK\",\r\n   \"success\" : true\r\n}\r\n{code}<br><br>To: <br>Logging in while having a cookie for not-my-department causes Request view to try to create a budget for budget_id = 0\r\n\r\n( POST with budget_id=0 is similar to the behavior in BUG OPRAH-1925 ? )\r\n\r\n&nbsp;\r\n\r\nSteps to Reproduce:\r\n\r\n# Request view\r\n# Select department & year (eg. Legal / 2016)\r\n# Sign out\r\n# Sign in as different Requester, who doesn't have access to previous budget\r\n(Page attempts to load previous dept & year)\r\n# Receive error\r\n\r\n{quote}\r\nUh Oh!\r\nForbidden\r\n{quote}\r\n\r\n{code:title=POST /api/budgets}\r\n{\r\n   \"code\" : 403,\r\n   \"data\" : {\r\n      \"method\" : \"POST\",\r\n      \"resource\" : \"/api/budgets\"\r\n   },\r\n   \"description\" : \"not authorized to create budget for department ID: 0\",\r\n   \"message\" : \"Forbidden\",\r\n   \"success\" : false\r\n}\r\n{code}\r\n\r\n&nbsp;\r\n\r\n\r\n\r\nInterestingly, a GET request for the previous budget is sent just before the above POST, and receives a 200 response with no data\r\n{code:title=GET /api/budgets?year=2016&department_id=64}\r\n{\r\n   \"code\" : 200,\r\n   \"data\" : [],\r\n   \"description\" : \"Successfully processed request\",\r\n   \"message\" : \"OK\",\r\n   \"success\" : true\r\n}\r\n{code}"
         },
         "start_date" : {
            "hour" : 18,
            "year" : 2015,
            "minute" : 5,
            "month" : 12,
            "day" : 17
         },
         "start_datetime" : null,
         "background" : {
            "color" : "palevioletred"
         }
      },
      {
         "group" : "misc",
         "text" : {
            "headline" : "Issuetype changed.",
            "text" : "Issuetype changed from: <br>Bug<br><br>To: <br>Sub-task"
         },
         "background" : {
            "color" : "plum"
         },
         "start_date" : {
            "month" : 12,
            "day" : 17,
            "minute" : 34,
            "hour" : 15,
            "year" : 2015
         },
         "start_datetime" : null
      }
   ],
   "title" : {
      "text" : {
         "headline" : "<a href=\"https://jira.cpanel.net/browse/OPRAH-1940\">OPRAH-1940: BUG - cookie set for not-my-dept causes error</a>"
      }
   }
}
