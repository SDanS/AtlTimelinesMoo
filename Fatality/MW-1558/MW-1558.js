var timeline_json = {
   "events" : [
      {
         "group" : "assignee",
         "background" : {
            "color" : "seagreen"
         },
         "text" : {
            "text" : "Assignee changed from George Baugh to unassigned",
            "headline" : "Assignee: unassigned"
         },
         "end_date" : {
            "day" : 19,
            "hour" : 9,
            "month" : 11,
            "minute" : 2,
            "year" : 2015
         },
         "end_datetime" : null,
         "start_datetime" : null,
         "start_date" : {
            "minute" : 1,
            "year" : 2015,
            "month" : 10,
            "hour" : 14,
            "day" : 28
         }
      },
      {
         "group" : "status",
         "text" : {
            "headline" : "In Progress",
            "text" : "Status changed from To Do to In Progress"
         },
         "background" : {
            "color" : "darkcyan"
         },
         "end_date" : {
            "day" : 28,
            "hour" : 14,
            "month" : 10,
            "year" : 2015,
            "minute" : 1
         },
         "start_date" : {
            "year" : 2015,
            "minute" : 45,
            "day" : 28,
            "hour" : 12,
            "month" : 9
         },
         "start_datetime" : null,
         "end_datetime" : null
      },
      {
         "group" : "status",
         "background" : {
            "color" : "gray"
         },
         "text" : {
            "headline" : "To Do",
            "text" : "Status changed from In Progress to To Do"
         },
         "end_date" : {
            "year" : 2015,
            "minute" : 38,
            "hour" : 15,
            "day" : 28,
            "month" : 10
         },
         "end_datetime" : null,
         "start_datetime" : null,
         "start_date" : {
            "month" : 10,
            "hour" : 14,
            "day" : 28,
            "minute" : 1,
            "year" : 2015
         }
      },
      {
         "start_date" : {
            "minute" : 38,
            "year" : 2015,
            "month" : 10,
            "hour" : 15,
            "day" : 28
         },
         "start_datetime" : null,
         "end_datetime" : null,
         "background" : {
            "color" : "darkcyan"
         },
         "text" : {
            "headline" : "In Progress",
            "text" : "Status changed from To Do to In Progress"
         },
         "end_date" : {
            "year" : 2015,
            "minute" : 24,
            "month" : 11,
            "day" : 5,
            "hour" : 10
         },
         "group" : "status"
      },
      {
         "text" : {
            "headline" : "Summary changed.",
            "text" : "Summary changed from: <br>Harden OpenStack code: Re-factor Cpprove.pm into OpenStack.pm, add unit tests, update callers<br><br>To: <br>Re-factor Cpprove.pm into OpenStack.pm, add unit tests, update callers"
         },
         "background" : {
            "color" : "palevioletred"
         },
         "group" : "scope",
         "start_datetime" : null,
         "start_date" : {
            "hour" : 13,
            "day" : 2,
            "month" : 10,
            "minute" : 28,
            "year" : 2015
         }
      },
      {
         "background" : {
            "color" : "palevioletred"
         },
         "text" : {
            "headline" : "Summary changed.",
            "text" : "Summary changed from: <br>Re-factor Cpprove.pm into OpenStack.pm, add unit tests, update callers<br><br>To: <br>Re-factor Cpprove.pm into OpenStack.pm, update callers"
         },
         "group" : "scope",
         "start_date" : {
            "month" : 10,
            "hour" : 13,
            "day" : 2,
            "minute" : 29,
            "year" : 2015
         },
         "start_datetime" : null
      },
      {
         "start_date" : {
            "minute" : 32,
            "year" : 2015,
            "month" : 10,
            "day" : 2,
            "hour" : 13
         },
         "start_datetime" : null,
         "text" : {
            "text" : "Summary changed from: <br>Re-factor Cpprove.pm into OpenStack.pm, update callers<br><br>To: <br>Re-factor Cpprove.pm into OpenStack.pm and update callers",
            "headline" : "Summary changed."
         },
         "background" : {
            "color" : "palevioletred"
         },
         "group" : "scope"
      },
      {
         "text" : {
            "text" : "Summary changed from: <br>Re-factor Cpprove.pm into OpenStack.pm and update callers<br><br>To: <br>Re-factor Cpprove.pm into OpenStack.pm and app::prove::cpanel and update callers (anything that uses this code)",
            "headline" : "Summary changed."
         },
         "background" : {
            "color" : "palevioletred"
         },
         "group" : "scope",
         "start_date" : {
            "month" : 10,
            "day" : 28,
            "hour" : 13,
            "year" : 2015,
            "minute" : 19
         },
         "start_datetime" : null
      },
      {
         "group" : "scope",
         "background" : {
            "color" : "palevioletred"
         },
         "text" : {
            "text" : "Description changed from: <br>Have done bulk of re-factor and porting work for the callers.\r\n\r\nNow I need unit tests for OpenStack.pm and all the scripts in bin/ and convert the scripts in bin/ to modulinos.<br><br>To: <br>Have done bulk of re-factor and porting work for the callers.\n\nNow I need unit tests for OpenStack.pm and all the scripts in bin/ and convert the scripts in bin/ to modulinos.\n\nneeds unit tests and qa testing",
            "headline" : "Description changed."
         },
         "start_date" : {
            "day" : 2,
            "hour" : 13,
            "month" : 10,
            "year" : 2015,
            "minute" : 28
         },
         "start_datetime" : null
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "minute" : 31,
            "year" : 2015,
            "month" : 10,
            "day" : 2,
            "hour" : 13
         },
         "text" : {
            "headline" : "Description changed.",
            "text" : "Description changed from: <br>Have done bulk of re-factor and porting work for the callers.\n\nNow I need unit tests for OpenStack.pm and all the scripts in bin/ and convert the scripts in bin/ to modulinos.\n\nneeds unit tests and qa testing<br><br>To: <br>cpprove.pm got everything from cpprove and runsuite.pl...not good. So here, we got rid of qa portal code, made this more generic of openstack module. other callers besides cpprove can make use of openstack.pm.\n\nHave done bulk of re-factor and porting work for the callers.\n\nneeds unit tests and qa testing"
         },
         "background" : {
            "color" : "palevioletred"
         },
         "group" : "scope"
      },
      {
         "text" : {
            "headline" : "Description changed.",
            "text" : "Description changed from: <br>cpprove.pm got everything from cpprove and runsuite.pl...not good. So here, we got rid of qa portal code, made this more generic of openstack module. other callers besides cpprove can make use of openstack.pm.\n\nHave done bulk of re-factor and porting work for the callers.\n\nneeds unit tests and qa testing<br><br>To: <br>cpprove.pm got everything from cpprove and runsuite.pl...not good. So here, we got rid of qa portal code, made this more generic of openstack module. other callers besides cpprove can make use of openstack.pm. This is for vm management.\n\nHave done bulk of re-factor and porting work for the callers.\n\nneeds unit tests and qa testing\n\nAcceptance criteria:\n- will spawn vm's that can be rebuilt or used\n- will rebuild vm until it can't be rebuilt, then will delete vm"
         },
         "background" : {
            "color" : "palevioletred"
         },
         "group" : "scope",
         "start_datetime" : null,
         "start_date" : {
            "month" : 10,
            "day" : 2,
            "hour" : 13,
            "year" : 2015,
            "minute" : 34
         }
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "minute" : 35,
            "year" : 2015,
            "hour" : 13,
            "day" : 2,
            "month" : 10
         },
         "group" : "scope",
         "text" : {
            "text" : "Description changed from: <br>cpprove.pm got everything from cpprove and runsuite.pl...not good. So here, we got rid of qa portal code, made this more generic of openstack module. other callers besides cpprove can make use of openstack.pm. This is for vm management.\n\nHave done bulk of re-factor and porting work for the callers.\n\nneeds unit tests and qa testing\n\nAcceptance criteria:\n- will spawn vm's that can be rebuilt or used\n- will rebuild vm until it can't be rebuilt, then will delete vm<br><br>To: <br>cpprove.pm got everything from cpprove and runsuite.pl...not good. So here, we got rid of qa portal code, made this more generic of openstack module. other callers besides cpprove can make use of openstack.pm. This is for vm management.\n\nHave done bulk of re-factor and porting work for the callers.\n\nneeds review qa testing\n\nAcceptance criteria:\n- will spawn vm's that can be rebuilt or used\n- will rebuild vm until it can't be rebuilt, then will delete vm",
            "headline" : "Description changed."
         },
         "background" : {
            "color" : "palevioletred"
         }
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "day" : 2,
            "hour" : 13,
            "month" : 10,
            "year" : 2015,
            "minute" : 35
         },
         "background" : {
            "color" : "palevioletred"
         },
         "text" : {
            "text" : "Description changed from: <br>cpprove.pm got everything from cpprove and runsuite.pl...not good. So here, we got rid of qa portal code, made this more generic of openstack module. other callers besides cpprove can make use of openstack.pm. This is for vm management.\n\nHave done bulk of re-factor and porting work for the callers.\n\nneeds review qa testing\n\nAcceptance criteria:\n- will spawn vm's that can be rebuilt or used\n- will rebuild vm until it can't be rebuilt, then will delete vm<br><br>To: <br>cpprove.pm got everything from cpprove and runsuite.pl...not good. So here, we got rid of qa portal code, made this more generic of openstack module. other callers besides cpprove can make use of openstack.pm. This is for vm management.\n\nHave done bulk of re-factor and porting work for the callers.\n\nneeds review and qa testing\n\nAcceptance criteria:\n- will spawn vm's that can be rebuilt or used\n- will rebuild vm until it can't be rebuilt, then will delete vm",
            "headline" : "Description changed."
         },
         "group" : "scope"
      },
      {
         "group" : "scope",
         "text" : {
            "text" : "Description changed from: <br>cpprove.pm got everything from cpprove and runsuite.pl...not good. So here, we got rid of qa portal code, made this more generic of openstack module. other callers besides cpprove can make use of openstack.pm. This is for vm management.\n\nHave done bulk of re-factor and porting work for the callers.\n\nneeds review and qa testing\n\nAcceptance criteria:\n- will spawn vm's that can be rebuilt or used\n- will rebuild vm until it can't be rebuilt, then will delete vm<br><br>To: <br>cpprove.pm got everything from cpprove and runsuite.pl...not good. So here, we got rid of qa portal code, made this more generic of openstack module. other callers besides cpprove can make use of openstack.pm. This is for vm management.\n\nHave done bulk of re-factor and porting work for the callers.\n\nneeds review and qa testing\n\nAcceptance criteria:\n- will spawn vm's that can be rebuilt or used\n- will rebuild vm until it can't be rebuilt, then will delete vm\n\ncould be problematic to qa b/c you need to run automated lbcl time and time and time again to verify vm's are created, rebuilt, deleted accordingly.",
            "headline" : "Description changed."
         },
         "background" : {
            "color" : "palevioletred"
         },
         "start_date" : {
            "year" : 2015,
            "minute" : 37,
            "month" : 10,
            "day" : 2,
            "hour" : 13
         },
         "start_datetime" : null
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "minute" : 16,
            "year" : 2015,
            "day" : 13,
            "hour" : 13,
            "month" : 10
         },
         "group" : "scope",
         "text" : {
            "text" : "Description changed from: <br>cpprove.pm got everything from cpprove and runsuite.pl...not good. So here, we got rid of qa portal code, made this more generic of openstack module. other callers besides cpprove can make use of openstack.pm. This is for vm management.\n\nHave done bulk of re-factor and porting work for the callers.\n\nneeds review and qa testing\n\nAcceptance criteria:\n- will spawn vm's that can be rebuilt or used\n- will rebuild vm until it can't be rebuilt, then will delete vm\n\ncould be problematic to qa b/c you need to run automated lbcl time and time and time again to verify vm's are created, rebuilt, deleted accordingly.<br><br>To: <br>cpprove.pm got everything from cpprove and runsuite.pl...not good. So here, we got rid of qa portal code, made this more generic of openstack module. other callers besides cpprove can make use of openstack.pm. This is for vm management.\n\nHave done bulk of re-factor and porting work for the callers.\n\nneeds review and qa testing\n\nAcceptance criteria:\n- will spawn vm's that can be rebuilt or used\n- will rebuild vm until it can't be rebuilt, then will delete vm\n- replaces runsuite.pl\n- does what is described in the POD\n\n\ncould be problematic to qa b/c you need to run automated lbcl time and time and time again to verify vm's are created, rebuilt, deleted accordingly.",
            "headline" : "Description changed."
         },
         "background" : {
            "color" : "palevioletred"
         }
      },
      {
         "group" : "scope",
         "background" : {
            "color" : "palevioletred"
         },
         "text" : {
            "headline" : "Description changed.",
            "text" : "Description changed from: <br>cpprove.pm got everything from cpprove and runsuite.pl...not good. So here, we got rid of qa portal code, made this more generic of openstack module. other callers besides cpprove can make use of openstack.pm. This is for vm management.\n\nHave done bulk of re-factor and porting work for the callers.\n\nneeds review and qa testing\n\nAcceptance criteria:\n- will spawn vm's that can be rebuilt or used\n- will rebuild vm until it can't be rebuilt, then will delete vm\n- replaces runsuite.pl\n- does what is described in the POD\n\n\ncould be problematic to qa b/c you need to run automated lbcl time and time and time again to verify vm's are created, rebuilt, deleted accordingly.<br><br>To: <br>cpprove.pm got everything from cpprove and runsuite.pl...not good. So here, we got rid of qa portal code, made this more generic of openstack module. other callers besides cpprove can make use of openstack.pm. This is for vm management.\n\nHave done bulk of re-factor and porting work for the callers.\n\nneeds review and qa testing\n\nAcceptance criteria:\n- will spawn vm's that can be rebuilt or used\n- will rebuild vm until it can't be rebuilt, then will delete vm\n- replaces runsuite.pl\n- does what is described in the POD\n-- needs to be run in all modes and it functions correctly\n\n\ncould be problematic to qa b/c you need to run automated lbcl time and time and time again to verify vm's are created, rebuilt, deleted accordingly."
         },
         "start_datetime" : null,
         "start_date" : {
            "month" : 10,
            "day" : 13,
            "hour" : 13,
            "year" : 2015,
            "minute" : 17
         }
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "year" : 2015,
            "minute" : 56,
            "hour" : 13,
            "day" : 28,
            "month" : 10
         },
         "text" : {
            "headline" : "Description changed.",
            "text" : "Description changed from: <br>cpprove.pm got everything from cpprove and runsuite.pl...not good. So here, we got rid of qa portal code, made this more generic of openstack module. other callers besides cpprove can make use of openstack.pm. This is for vm management.\n\nHave done bulk of re-factor and porting work for the callers.\n\nneeds review and qa testing\n\nAcceptance criteria:\n- will spawn vm's that can be rebuilt or used\n- will rebuild vm until it can't be rebuilt, then will delete vm\n- replaces runsuite.pl\n- does what is described in the POD\n-- needs to be run in all modes and it functions correctly\n\n\ncould be problematic to qa b/c you need to run automated lbcl time and time and time again to verify vm's are created, rebuilt, deleted accordingly.<br><br>To: <br>cpprove.pm got everything from cpprove and runsuite.pl...not good. So here, we got rid of qa portal code, made this more generic of openstack module. other callers besides cpprove can make use of openstack.pm. This is for vm management.\n\nHave done bulk of re-factor and porting work for the callers.\n\nneeds review and qa testing\n\nAcceptance criteria:\n- will spawn vm's that can be rebuilt or used\n- will rebuild vm until it can't be rebuilt, then will delete vm\n-- always builds vm with correct cP version\n- replaces runsuite.pl\n- does what is described in the POD\n-- needs to be run in all modes and it functions correctly\n\n\ncould be problematic to qa b/c you need to run automated lbcl time and time and time again to verify vm's are created, rebuilt, deleted accordingly."
         },
         "background" : {
            "color" : "palevioletred"
         },
         "group" : "scope"
      },
      {
         "background" : {
            "color" : "palevioletred"
         },
         "text" : {
            "text" : "Story Points changed from: <br>undef<br><br>To: <br>20",
            "headline" : "Story Points changed."
         },
         "group" : "scope",
         "start_datetime" : null,
         "start_date" : {
            "minute" : 38,
            "year" : 2015,
            "month" : 10,
            "hour" : 13,
            "day" : 2
         }
      },
      {
         "text" : {
            "text" : "Story Points changed from: <br>20<br><br>To: <br>40",
            "headline" : "Story Points changed."
         },
         "background" : {
            "color" : "palevioletred"
         },
         "group" : "scope",
         "start_date" : {
            "minute" : 40,
            "year" : 2015,
            "month" : 10,
            "hour" : 13,
            "day" : 13
         },
         "start_datetime" : null
      },
      {
         "start_date" : {
            "minute" : 46,
            "year" : 2015,
            "month" : 10,
            "hour" : 21,
            "day" : 1
         },
         "start_datetime" : null,
         "background" : {
            "color" : "plum"
         },
         "text" : {
            "headline" : "Issuetype changed.",
            "text" : "Issuetype changed from: <br>Sub-task<br><br>To: <br>New Feature"
         },
         "group" : "misc"
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "year" : 2015,
            "minute" : 48,
            "month" : 10,
            "hour" : 11,
            "day" : 2
         },
         "background" : {
            "color" : "plum"
         },
         "text" : {
            "headline" : "Issuetype changed.",
            "text" : "Issuetype changed from: <br>New Feature<br><br>To: <br>Story"
         },
         "group" : "misc"
      },
      {
         "start_datetime" : null,
         "start_date" : {
            "hour" : 10,
            "day" : 28,
            "month" : 10,
            "year" : 2015,
            "minute" : 10
         },
         "group" : "misc",
         "text" : {
            "headline" : "Comment added by David Nielson",
            "text" : "It's important to note that the merged PR attached to this case got merged to golden_bcl, NOT to the product."
         },
         "background" : {
            "color" : "olivedrab"
         }
      }
   ],
   "title" : {
      "text" : {
         "headline" : "<a href=\"https://jira.cpanel.net/browse/MW-1558\">MW-1558: Re-factor Cpprove.pm into OpenStack.pm and app::prove::cpanel and update callers (anything that uses this code)</a>"
      }
   }
}
