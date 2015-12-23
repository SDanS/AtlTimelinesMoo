
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
    var Container = document.getElementById("chart-div_OPRAH-1935");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}