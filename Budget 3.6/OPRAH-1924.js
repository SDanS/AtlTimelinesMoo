
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
      "OPRAH-1924: assignee",
      "Ross Steiner",
      "Date(2015, 11 ,21, 8, 57)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1924: status",
      "In Progress",
      "Date(2015, 11 ,21, 9, 2)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1963: assignee",
      "Ross Steiner",
      "Date(2015, 11 ,21, 8, 58)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1963: status",
      "In Progress",
      "Date(2015, 11 ,21, 9, 1)",
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
    var Container = document.getElementById("chart-div_OPRAH-1924");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}