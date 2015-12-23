
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
      "OPRAH-1908: status",
      "In Review",
      "Date(2015, 11 ,10, 8, 28)",
      "Date(2015, 11, 14, 10, 34)"
   ],
   [
      "OPRAH-1908: status",
      "In Test",
      "Date(2015, 11 ,14, 10, 34)",
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
    var Container = document.getElementById("chart-div_OPRAH-1908");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}