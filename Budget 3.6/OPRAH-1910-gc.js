
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
      "OPRAH-1910: assignee",
      "Charles Larry",
      "Date(2015, 11 ,10, 11, 7)",
      "Date(2015, 11, 10, 11, 9)"
   ],
   [
      "OPRAH-1910: assignee",
      "unassigned",
      "Date(2015, 11 ,10, 11, 9)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1910: status",
      "In Review",
      "Date(2015, 11 ,10, 11, 9)",
      "Date(2015, 11, 14, 10, 45)"
   ],
   [
      "OPRAH-1910: status",
      "In Test",
      "Date(2015, 11 ,14, 10, 45)",
      "Date(2015, 11, 17, 13, 47)"
   ],
   [
      "OPRAH-1910: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 13, 47)",
      "Date(2015, 11, 17, 13, 57)"
   ],
   [
      "OPRAH-1910: status",
      "Done",
      "Date(2015, 11 ,17, 13, 57)",
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
    var Container = document.getElementById("chart-div_OPRAH-1910");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}