
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
 "type" : "date",
 "label" : "End"
      }
   ],
   [
      "OPRAH-1933: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,17, 8, 45)",
      "Date(2015, 11, 17, 13, 22)"
   ],
   [
      "OPRAH-1933: assignee",
      "unassigned",
      "Date(2015, 11 ,17, 13, 22)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1933: status",
      "In Review",
      "Date(2015, 11 ,16, 13, 34)",
      "Date(2015, 11, 17, 13, 22)"
   ],
   [
      "OPRAH-1933: status",
      "In Test",
      "Date(2015, 11 ,17, 13, 22)",
      "Date(2015, 11, 18, 13, 44)"
   ],
   [
      "OPRAH-1933: status",
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
    var Container = document.getElementById("chart-div_OPRAH-1933");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}