
google.load('visualization', '1', {packages: ['timeline']});
google.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
   [
      "Row Label",
      "Bar Label",
      {
 "type" : "date",
 "label" : "Start"
      },
      {
 "type" : "date",
 "label" : "End"
      }
   ],
   [
      "OPRAH-1948: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,18, 10, 53)",
      "Date(2015, 11, 18, 11, 49)"
   ],
   [
      "OPRAH-1948: assignee",
      "unassigned",
      "Date(2015, 11 ,18, 11, 49)",
      "Date(2015, 11, 18, 12, 24)"
   ],
   [
      "OPRAH-1948: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,18, 12, 24)",
      "Date(2015, 11, 21, 10, 34)"
   ],
   [
      "OPRAH-1948: assignee",
      "unassigned",
      "Date(2015, 11 ,21, 10, 34)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1948: status",
      "In Progress",
      "Date(2015, 11 ,18, 11, 14)",
      "Date(2015, 11, 18, 11, 49)"
   ],
   [
      "OPRAH-1948: status",
      "To Do",
      "Date(2015, 11 ,18, 11, 49)",
      "Date(2015, 11, 18, 12, 24)"
   ],
   [
      "OPRAH-1948: status",
      "In Progress",
      "Date(2015, 11 ,18, 12, 24)",
      "Date(2015, 11, 21, 10, 34)"
   ],
   [
      "OPRAH-1948: status",
      "In Review",
      "Date(2015, 11 ,21, 10, 34)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1950: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,18, 12, 24)",
      "Date(2015, 11, 21, 10, 35)"
   ],
   [
      "OPRAH-1950: assignee",
      "unassigned",
      "Date(2015, 11 ,21, 10, 35)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1950: status",
      "In Progress",
      "Date(2015, 11 ,18, 11, 14)",
      "Date(2015, 11, 18, 11, 49)"
   ],
   [
      "OPRAH-1950: status",
      "To Do",
      "Date(2015, 11 ,18, 11, 49)",
      "Date(2015, 11, 18, 12, 24)"
   ],
   [
      "OPRAH-1950: status",
      "In Progress",
      "Date(2015, 11 ,18, 12, 24)",
      "Date(2015, 11, 21, 10, 35)"
   ],
   [
      "OPRAH-1950: status",
      "In Review",
      "Date(2015, 11 ,21, 10, 35)",
      "Date(2015, 11, 31, 0, 0)"
   ]
]
);
    var options = {
        avoidOverlappingGridLines: false,
        allowHtml: true,
        forceIFrame: true,
    };
    var view = new google.visualization.DataView(data);
    //view.setColumns([]);
    var Container = document.getElementById("chart-div_OPRAH-1948");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}