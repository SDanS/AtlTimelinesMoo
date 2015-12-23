
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
 "label" : "End",
 "type" : "date"
      }
   ],
   [
      "OPRAH-1907: assignee",
      "Charles Larry",
      "Date(2015, 11 ,11, 7, 16)",
      "Date(2015, 11, 15, 13, 0)"
   ],
   [
      "OPRAH-1907: assignee",
      "unassigned",
      "Date(2015, 11 ,15, 13, 0)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1907: status",
      "In Progress",
      "Date(2015, 11 ,14, 13, 46)",
      "Date(2015, 11, 15, 13, 0)"
   ],
   [
      "OPRAH-1907: status",
      "In Review",
      "Date(2015, 11 ,15, 13, 0)",
      "Date(2015, 11, 16, 10, 16)"
   ],
   [
      "OPRAH-1907: status",
      "In Test",
      "Date(2015, 11 ,16, 10, 16)",
      "Date(2015, 11, 17, 14, 2)"
   ],
   [
      "OPRAH-1907: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 14, 2)",
      "Date(2015, 11, 18, 8, 33)"
   ],
   [
      "OPRAH-1907: status",
      "Done",
      "Date(2015, 11 ,18, 8, 33)",
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
    var Container = document.getElementById("chart-div_OPRAH-1907");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}