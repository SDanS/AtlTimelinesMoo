
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
      "OPRAH-1944: status",
      "In Progress",
      "Date(2015, 11 ,18, 8, 39)",
      "Date(2015, 11, 18, 8, 39)"
   ],
   [
      "OPRAH-1944: status",
      "To Do",
      "Date(2015, 11 ,18, 8, 39)",
      "Date(2015, 11, 18, 8, 40)"
   ],
   [
      "OPRAH-1944: status",
      "In Progress",
      "Date(2015, 11 ,18, 8, 40)",
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
    var Container = document.getElementById("chart-div_OPRAH-1944");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}