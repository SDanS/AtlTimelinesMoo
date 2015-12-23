
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
      "OPRAH-1972: assignee",
      "unassigned",
      "Date(2015, 11 ,22, 13, 8)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1972: status",
      "In Progress",
      "Date(2015, 11 ,22, 11, 27)",
      "Date(2015, 11, 22, 13, 8)"
   ],
   [
      "OPRAH-1972: status",
      "In Review",
      "Date(2015, 11 ,22, 13, 8)",
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
    var Container = document.getElementById("chart-div_OPRAH-1972");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}