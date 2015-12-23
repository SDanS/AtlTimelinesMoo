
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
      "OPRAH-1915: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,16, 9, 2)",
      "Date(2015, 11, 16, 10, 12)"
   ],
   [
      "OPRAH-1915: assignee",
      "unassigned",
      "Date(2015, 11 ,16, 10, 12)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1915: status",
      "In Review",
      "Date(2015, 11 ,16, 9, 2)",
      "Date(2015, 11, 16, 10, 16)"
   ],
   [
      "OPRAH-1915: status",
      "In Test",
      "Date(2015, 11 ,16, 10, 16)",
      "Date(2015, 11, 17, 12, 9)"
   ],
   [
      "OPRAH-1915: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 12, 9)",
      "Date(2015, 11, 17, 12, 9)"
   ],
   [
      "OPRAH-1915: status",
      "In Test",
      "Date(2015, 11 ,17, 12, 9)",
      "Date(2015, 11, 17, 14, 2)"
   ],
   [
      "OPRAH-1915: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 14, 2)",
      "Date(2015, 11, 18, 8, 33)"
   ],
   [
      "OPRAH-1915: status",
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
    var Container = document.getElementById("chart-div_OPRAH-1915");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}