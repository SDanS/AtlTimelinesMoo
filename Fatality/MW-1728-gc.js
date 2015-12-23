
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
      "MW-1728: assignee",
      "Stacy Wyatt",
      "Date(2015, 10 ,19, 9, 2)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1728: status",
      "Done",
      "Date(2015, 11 ,16, 12, 32)",
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
    var Container = document.getElementById("chart-div_MW-1728");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}