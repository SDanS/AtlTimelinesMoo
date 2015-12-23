
google.load('visualization', '1', {packages: ['timeline']});
google.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
   [
      "Row Label",
      "Bar Label",
      {
 "label" : "Start",
 "type" : "date"
      },
      {
 "type" : "date",
 "label" : "End"
      }
   ],
   [
      "OPRAH-1951: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,18, 10, 53)",
      "Date(2015, 11, 18, 11, 49)"
   ],
   [
      "OPRAH-1951: assignee",
      "unassigned",
      "Date(2015, 11 ,18, 11, 49)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1951: status",
      "In Progress",
      "Date(2015, 11 ,18, 11, 15)",
      "Date(2015, 11, 18, 11, 49)"
   ],
   [
      "OPRAH-1951: status",
      "To Do",
      "Date(2015, 11 ,18, 11, 49)",
      "Date(2015, 11, 21, 10, 43)"
   ],
   [
      "OPRAH-1951: status",
      "In Progress",
      "Date(2015, 11 ,21, 10, 43)",
      "Date(2015, 11, 21, 10, 59)"
   ],
   [
      "OPRAH-1951: status",
      "In Review",
      "Date(2015, 11 ,21, 10, 59)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1952: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,21, 10, 43)",
      "Date(2015, 11, 21, 11, 1)"
   ],
   [
      "OPRAH-1952: assignee",
      "unassigned",
      "Date(2015, 11 ,21, 11, 1)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1952: status",
      "In Progress",
      "Date(2015, 11 ,18, 11, 15)",
      "Date(2015, 11, 18, 11, 49)"
   ],
   [
      "OPRAH-1952: status",
      "To Do",
      "Date(2015, 11 ,18, 11, 49)",
      "Date(2015, 11, 21, 10, 43)"
   ],
   [
      "OPRAH-1952: status",
      "In Progress",
      "Date(2015, 11 ,21, 10, 43)",
      "Date(2015, 11, 21, 11, 1)"
   ],
   [
      "OPRAH-1952: status",
      "In Review",
      "Date(2015, 11 ,21, 11, 1)",
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
    var Container = document.getElementById("chart-div_OPRAH-1951");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}