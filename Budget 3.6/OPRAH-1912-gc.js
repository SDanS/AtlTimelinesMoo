
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
      "OPRAH-1912: assignee",
      "Charles Larry",
      "Date(2015, 11 ,10, 12, 54)",
      "Date(2015, 11, 11, 11, 31)"
   ],
   [
      "OPRAH-1912: assignee",
      "unassigned",
      "Date(2015, 11 ,11, 11, 31)",
      "Date(2015, 11, 14, 10, 46)"
   ],
   [
      "OPRAH-1912: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,14, 10, 46)",
      "Date(2015, 11, 14, 10, 58)"
   ],
   [
      "OPRAH-1912: assignee",
      "unassigned",
      "Date(2015, 11 ,14, 10, 58)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1912: status",
      "In Progress",
      "Date(2015, 11 ,10, 12, 54)",
      "Date(2015, 11, 11, 11, 31)"
   ],
   [
      "OPRAH-1912: status",
      "In Review",
      "Date(2015, 11 ,11, 11, 31)",
      "Date(2015, 11, 14, 10, 58)"
   ],
   [
      "OPRAH-1912: status",
      "In Test",
      "Date(2015, 11 ,14, 10, 58)",
      "Date(2015, 11, 17, 13, 43)"
   ],
   [
      "OPRAH-1912: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 13, 43)",
      "Date(2015, 11, 17, 13, 59)"
   ],
   [
      "OPRAH-1912: status",
      "Done",
      "Date(2015, 11 ,17, 13, 59)",
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
    var Container = document.getElementById("chart-div_OPRAH-1912");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}