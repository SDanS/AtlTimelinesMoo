
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
      "OPRAH-1965: assignee",
      "George Bohnisch",
      "Date(2015, 11 ,21, 9, 1)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1965: status",
      "In Progress",
      "Date(2015, 11 ,22, 12, 38)",
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
    var Container = document.getElementById("chart-div_OPRAH-1946");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}