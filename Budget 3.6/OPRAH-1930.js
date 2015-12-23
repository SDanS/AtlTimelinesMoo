
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
      "OPRAH-1930: assignee",
      "Charles Larry",
      "Date(2015, 11 ,16, 9, 8)",
      "Date(2015, 11, 16, 13, 33)"
   ],
   [
      "OPRAH-1930: assignee",
      "unassigned",
      "Date(2015, 11 ,16, 13, 33)",
      "Date(2015, 11, 17, 8, 45)"
   ],
   [
      "OPRAH-1930: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,17, 8, 45)",
      "Date(2015, 11, 17, 11, 19)"
   ],
   [
      "OPRAH-1930: assignee",
      "unassigned",
      "Date(2015, 11 ,17, 11, 19)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1930: status",
      "In Progress",
      "Date(2015, 11 ,16, 9, 8)",
      "Date(2015, 11, 16, 13, 33)"
   ],
   [
      "OPRAH-1930: status",
      "In Review",
      "Date(2015, 11 ,16, 13, 33)",
      "Date(2015, 11, 17, 11, 19)"
   ],
   [
      "OPRAH-1930: status",
      "In Test",
      "Date(2015, 11 ,17, 11, 19)",
      "Date(2015, 11, 18, 13, 44)"
   ],
   [
      "OPRAH-1930: status",
      "Ready to Merge",
      "Date(2015, 11 ,18, 13, 44)",
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
    var Container = document.getElementById("chart-div_OPRAH-1930");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}