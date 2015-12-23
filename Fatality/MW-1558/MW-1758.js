var timeline_json = {
   "title" : {
      "text" : {
         "headline" : "<a href=\"https://jira.cpanel.net/browse/MW-1758\">MW-1758: report_run and report_plan mustn't croak due to blank sections, allow passing of sections</a>"
      }
   },
   "events" : [
      {
         "group" : "assignee",
         "end_date" : {
            "hour" : 11,
            "day" : 13,
            "month" : 11,
            "minute" : 12,
            "year" : 2015
         },
         "background" : {
            "color" : "seagreen"
         },
         "text" : {
            "headline" : "Assignee: unassigned",
            "text" : "Assignee changed from George Baugh to unassigned"
         },
         "start_date" : {
            "month" : 11,
            "day" : 12,
            "hour" : 15,
            "minute" : 45,
            "year" : 2015
         },
         "start_datetime" : null,
         "end_datetime" : null
      },
      {
         "start_date" : {
            "minute" : 12,
            "year" : 2015,
            "day" : 13,
            "hour" : 11,
            "month" : 11
         },
         "start_datetime" : null,
         "end_datetime" : null,
         "background" : {
            "color" : "seagreen"
         },
         "text" : {
            "text" : "Assignee changed from unassigned to Joshua Brandt",
            "headline" : "Assignee: Joshua Brandt"
         },
         "end_date" : {
            "hour" : 16,
            "day" : 13,
            "month" : 11,
            "year" : 2015,
            "minute" : 4
         },
         "group" : "assignee"
      },
      {
         "background" : {
            "color" : "seagreen"
         },
         "end_date" : {
            "day" : 16,
            "hour" : 7,
            "month" : 11,
            "year" : 2015,
            "minute" : 45
         },
         "text" : {
            "text" : "Assignee changed from Joshua Brandt to unassigned",
            "headline" : "Assignee: unassigned"
         },
         "group" : "assignee",
         "start_date" : {
            "month" : 11,
            "hour" : 16,
            "day" : 13,
            "minute" : 4,
            "year" : 2015
         },
         "start_datetime" : null,
         "end_datetime" : null
      },
      {
         "end_datetime" : null,
         "start_datetime" : null,
         "start_date" : {
            "day" : 12,
            "hour" : 13,
            "month" : 11,
            "year" : 2015,
            "minute" : 57
         },
         "background" : {
            "color" : "darkcyan"
         },
         "text" : {
            "headline" : "In Progress",
            "text" : "Status changed from To Do to In Progress"
         },
         "end_date" : {
            "month" : 11,
            "hour" : 15,
            "day" : 12,
            "minute" : 45,
            "year" : 2015
         },
         "group" : "status"
      },
      {
         "end_datetime" : null,
         "start_datetime" : null,
         "start_date" : {
            "minute" : 45,
            "year" : 2015,
            "hour" : 15,
            "day" : 12,
            "month" : 11
         },
         "group" : "status",
         "text" : {
            "headline" : "In Review",
            "text" : "Status changed from In Progress to In Review"
         },
         "background" : {
            "color" : "dodgerblue"
         },
         "end_date" : {
            "year" : 2015,
            "minute" : 4,
            "month" : 11,
            "hour" : 16,
            "day" : 13
         }
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
            "month" : 11,
            "day" : 16,
            "hour" : 14,
            "year" : 2015,
            "minute" : 10
         },
         "end_datetime" : null,
         "start_datetime" : null,
         "start_date" : {
            "day" : 13,
            "hour" : 16,
            "month" : 11,
            "year" : 2015,
            "minute" : 4
         }
      },
      {
         "start_date" : {
            "day" : 16,
            "hour" : 14,
            "month" : 11,
            "year" : 2015,
            "minute" : 10
         },
         "end_datetime" : null,
         "start_datetime" : null,
         "group" : "status",
         "background" : {
            "color" : "slateblue"
         },
         "text" : {
            "headline" : "Merge Pending",
            "text" : "Status changed from In Test to Merge Pending"
         },
         "end_date" : {
            "month" : 11,
            "hour" : 13,
            "day" : 18,
            "year" : 2015,
            "minute" : 10
         }
      },
      {
         "start_date" : {
            "day" : 12,
            "hour" : 15,
            "month" : 11,
            "year" : 2015,
            "minute" : 45
         },
         "start_datetime" : null,
         "background" : {
            "color" : "olivedrab"
         },
         "text" : {
            "text" : "https://enterprise.cpanel.net/projects/CPANEL/repos/mortal-wombat-cpanel-whm/commits/df6c14419cbcd12d5e3c686c828adeb3c03a17c4",
            "headline" : "Comment added by George Baugh"
         },
         "group" : "misc"
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "minute" : 51,
            "year" : 2015,
            "month" : 11,
            "hour" : 15,
            "day" : 12
         },
         "text" : {
            "headline" : "Comment added by George Baugh",
            "text" : "Testing Steps:<br>cd /usr/local/cpanel/t/qa<br>Remove sections from testrailrc.<br>Set your testsuite to be 11.54 in testrailrc.<br>Set your project to becPanel & WHM - Jira Integration<br><br>cpprove --report_run 'testRun' --search_dir t/ -mv --report_section 't/qa unit tests'<br>should create run with only 't/qa unit tests section' from the 11.54 testsuite in the 'cPanel & WHM - Jira Integration' project, and only run the tests therein.<br><br>cpprove --report_run 'testRun' t/ -mv --report_section 't/qa unit tests'<br>should create run with only 't/qa unit tests section' from the 11.54 testsuite in the 'cPanel & WHM - Jira Integration' project, and only run the tests therein.<br><br>cpprove --report_run 'testRun' --search_dir t/ -mv<br>should create run with all sections from the 11.54 testsuite in the 'cPanel & WHM - Jira Integration' project, and only run the tests inside of t/.<br><br>t/App-Prove* should all pass (prove -mv t/App-Prove*)<br>bogus options --bogus should still be rejected"
         },
         "background" : {
            "color" : "olivedrab"
         },
         "group" : "misc"
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "year" : 2015,
            "minute" : 4,
            "day" : 13,
            "hour" : 16,
            "month" : 11
         },
         "text" : {
            "text" : "Review looks good.",
            "headline" : "Comment added by Joshua Brandt"
         },
         "background" : {
            "color" : "olivedrab"
         },
         "group" : "misc"
      },
      {
         "background" : {
            "color" : "olivedrab"
         },
         "text" : {
            "text" : "[~george.b]<br><br><br>• [root@ptrost:/usr/local/cpanel/t/qa] (SWSM)# cpprove --report_run 'testRun' --search_dir t/ -mv --report_section 't/qa unit tests'<br># Setting up connections to external services...<br># TestRail connection to https://testrail.cpanel.net OK<br># WebDriver connection to 10.17.1.233 OK<br># [INFO] Checking host 127.0.0.1...<br>Use of uninitialized value in concatenation (.) or string at /usr/local/cpanel/t/qa/lib/App/Prove/Cpanel.pm line 577.<br>Use of uninitialized value in concatenation (.) or string at /usr/local/cpanel/t/qa/lib/App/Prove/Cpanel.pm line 577.<br>Use of uninitialized value in concatenation (.) or string at /usr/local/cpanel/t/qa/lib/App/Prove/Cpanel.pm line 577.<br># Checking TestRail for your specified run(s)...<br># Spawning run/plan...<br>Undef did not pass type constraint \"Str\" (in $_[2]) at /usr/local/cpanel/t/qa/lib/App/Prove/Cpanel.pm line 1396<br>    \"Str\" is a subtype of \"Value\"<br>    \"Value\" is a subtype of \"Defined\"<br>    Undef did not pass type constraint \"Defined\" (in $_[2])<br>    \"Defined\" is defined as: (defined($_))<br>• [root@ptrost:/usr/local/cpanel/t/qa] (SWSM)# cat /root/.testrailrc<br>apiurl=https://testrail.cpanel.net<br>user=qa-tools@cpanel.net<br>password=c6f15a32f91e53c163ffdf68c4f10186668a51a754a19ec28e9117d10a4cc3e8f791f4441c383ebaf85db39fe6b5b2f3b49f9edfc1e1f86ec0683dedc6e4b763<br>project=cPanel & WHM - Jira Integration<br>run=paul_tests<br>spawn=383<br>step_results=step_results<br>",
            "headline" : "Comment added by Paul Trost"
         },
         "group" : "misc",
         "start_datetime" : null,
         "start_date" : {
            "year" : 2015,
            "minute" : 52,
            "day" : 16,
            "hour" : 7,
            "month" : 11
         }
      }
   ]
}
