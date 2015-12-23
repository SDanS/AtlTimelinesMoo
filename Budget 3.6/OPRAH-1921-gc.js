
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
      "OPRAH-1921: assignee",
      "Charles Larry",
      "Date(2015, 11 ,11, 12, 40)",
      "Date(2015, 11, 11, 12, 45)"
   ],
   [
      "OPRAH-1921: assignee",
      "unassigned",
      "Date(2015, 11 ,11, 12, 45)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1921: status",
      "In Review",
      "Date(2015, 11 ,11, 12, 45)",
      "Date(2015, 11, 14, 10, 36)"
   ],
   [
      "OPRAH-1921: status",
      "In Test",
      "Date(2015, 11 ,14, 10, 36)",
      "Date(2015, 11, 17, 15, 9)"
   ],
   [
      "OPRAH-1921: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 15, 9)",
      "Date(2015, 11, 18, 8, 34)"
   ],
   [
      "OPRAH-1921: status",
      "Done",
      "Date(2015, 11 ,18, 8, 34)",
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
    var Container = document.getElementById("chart-div_OPRAH-1921");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}