
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
      "OPRAH-1916: status",
      "In Progress",
      "Date(2015, 11 ,16, 9, 8)",
      "Date(2015, 11, 16, 13, 31)"
   ],
   [
      "OPRAH-1916: status",
      "In Review",
      "Date(2015, 11 ,16, 13, 31)",
      "Date(2015, 11, 16, 13, 34)"
   ],
   [
      "OPRAH-1916: status",
      "In Review",
      "Date(2015, 11 ,16, 13, 34)",
      "Date(2015, 11, 17, 10, 38)"
   ],
   [
      "OPRAH-1916: status",
      "In Review",
      "Date(2015, 11 ,17, 10, 38)",
      "Date(2015, 11, 17, 13, 22)"
   ],
   [
      "OPRAH-1916: status",
      "In Test",
      "Date(2015, 11 ,17, 13, 22)",
      "Date(2015, 11, 18, 13, 44)"
   ],
   [
      "OPRAH-1916: status",
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
    var Container = document.getElementById("chart-div_OPRAH-1916");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}