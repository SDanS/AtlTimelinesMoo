
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
      "OPRAH-1926: assignee",
      "Charles Larry",
      "Date(2015, 11 ,14, 10, 25)",
      "Date(2015, 11, 15, 11, 6)"
   ],
   [
      "OPRAH-1926: assignee",
      "unassigned",
      "Date(2015, 11 ,15, 11, 6)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1926: status",
      "In Progress",
      "Date(2015, 11 ,14, 10, 27)",
      "Date(2015, 11, 15, 11, 6)"
   ],
   [
      "OPRAH-1926: status",
      "In Test",
      "Date(2015, 11 ,15, 11, 6)",
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
    var Container = document.getElementById("chart-div_OPRAH-1926");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}