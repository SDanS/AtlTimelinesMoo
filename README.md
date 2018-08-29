# AtlTimelinesMoo
Produce Google Chart and TimelineJS for Jira issues and Stash events related to those issues.

perl ~/Timeline-Moo/query_to_timeline.pl --username "<username>" --password "<password>" --query 'issue in ( 'MW-1728', 'MW-1723' ) AND issuetype != 5 ORDER BY resolutiondate ASC' --dir_name 'Fatality' --start_date 2015 08 11 0 0 --end_date 2015 12 31 0 0


Copy the resulting directory to your webserver.

ToDo:

Use Template::Toolkit

Move DateTime object creation to classes from script.

Reduce the size of Timelines::Jira::Issue:create_TJS_json with further abstraction.

Add perldoc.

Keep on chooglin.

