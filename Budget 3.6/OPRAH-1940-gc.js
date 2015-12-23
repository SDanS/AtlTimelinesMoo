
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
      "OPRAH-1940: assignee",
      "George Bohnisch",
      "Date(2015, 11 ,18, 9, 8)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1940: status",
      "In Progress",
      "Date(2015, 11 ,21, 12, 37)",
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
    var Container = document.getElementById("chart-div_OPRAH-1940");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}