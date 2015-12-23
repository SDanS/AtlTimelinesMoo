
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
      "OPRAH-1941: assignee",
      "George Bohnisch",
      "Date(2015, 11 ,18, 8, 30)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1941: status",
      "In Progress",
      "Date(2015, 11 ,18, 11, 11)",
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
    var Container = document.getElementById("chart-div_OPRAH-1941");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}