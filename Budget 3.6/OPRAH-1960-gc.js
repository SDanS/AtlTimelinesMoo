
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
      "OPRAH-1960: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,18, 11, 48)",
      "Date(2015, 11, 18, 11, 48)"
   ],
   [
      "OPRAH-1960: assignee",
      "unassigned",
      "Date(2015, 11 ,18, 11, 48)",
      "Date(2015, 11, 21, 10, 43)"
   ],
   [
      "OPRAH-1960: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,21, 10, 43)",
      "Date(2015, 11, 21, 11, 31)"
   ],
   [
      "OPRAH-1960: assignee",
      "unassigned",
      "Date(2015, 11 ,21, 11, 31)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1960: status",
      "To Do",
      "Date(2015, 11 ,18, 11, 48)",
      "Date(2015, 11, 21, 11, 3)"
   ],
   [
      "OPRAH-1960: status",
      "In Progress",
      "Date(2015, 11 ,21, 11, 3)",
      "Date(2015, 11, 21, 11, 31)"
   ],
   [
      "OPRAH-1960: status",
      "In Review",
      "Date(2015, 11 ,21, 11, 31)",
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
    var Container = document.getElementById("chart-div_OPRAH-1960");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}