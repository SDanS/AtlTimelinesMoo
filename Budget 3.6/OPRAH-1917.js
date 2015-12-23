
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
      "OPRAH-1917: status",
      "In Progress",
      "Date(2015, 11 ,11, 11, 22)",
      "Date(2015, 11, 11, 11, 23)"
   ],
   [
      "OPRAH-1917: status",
      "In Progress",
      "Date(2015, 11 ,11, 11, 23)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1818: status",
      "In Progress",
      "Date(2015, 11 ,2, 10, 14)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1817: status",
      "In Progress",
      "Date(2015, 11 ,18, 10, 36)",
      "Date(2015, 11, 18, 10, 36)"
   ],
   [
      "OPRAH-1817: status",
      "In Progress",
      "Date(2015, 11 ,18, 10, 36)",
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
    var Container = document.getElementById("chart-div_OPRAH-1917");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}