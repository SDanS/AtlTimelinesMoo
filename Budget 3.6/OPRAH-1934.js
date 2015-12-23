
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
 "label" : "End",
 "type" : "date"
      }
   ],
   [
      "OPRAH-1934: assignee",
      "Ross Steiner",
      "Date(2015, 11 ,17, 11, 37)",
      "Date(2015, 11, 17, 12, 2)"
   ],
   [
      "OPRAH-1934: assignee",
      "unassigned",
      "Date(2015, 11 ,17, 12, 2)",
      "Date(2015, 11, 17, 12, 4)"
   ],
   [
      "OPRAH-1934: assignee",
      "Ross Steiner",
      "Date(2015, 11 ,17, 12, 4)",
      "Date(2015, 11, 17, 12, 7)"
   ],
   [
      "OPRAH-1934: assignee",
      "unassigned",
      "Date(2015, 11 ,17, 12, 7)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1934: status",
      "In Progress",
      "Date(2015, 11 ,17, 11, 37)",
      "Date(2015, 11, 17, 12, 2)"
   ],
   [
      "OPRAH-1934: status",
      "In Review",
      "Date(2015, 11 ,17, 12, 2)",
      "Date(2015, 11, 17, 12, 7)"
   ],
   [
      "OPRAH-1934: status",
      "In Test",
      "Date(2015, 11 ,17, 12, 7)",
      "Date(2015, 11, 17, 13, 7)"
   ],
   [
      "OPRAH-1934: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 13, 7)",
      "Date(2015, 11, 17, 13, 32)"
   ],
   [
      "OPRAH-1934: status",
      "Done",
      "Date(2015, 11 ,17, 13, 32)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1935: status",
      "In Review",
      "Date(2015, 11 ,17, 12, 5)",
      "Date(2015, 11, 17, 12, 6)"
   ],
   [
      "OPRAH-1935: status",
      "In Test",
      "Date(2015, 11 ,17, 12, 6)",
      "Date(2015, 11, 17, 13, 7)"
   ],
   [
      "OPRAH-1935: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 13, 7)",
      "Date(2015, 11, 17, 13, 32)"
   ],
   [
      "OPRAH-1935: status",
      "Done",
      "Date(2015, 11 ,17, 13, 32)",
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
    var Container = document.getElementById("chart-div_OPRAH-1934");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}