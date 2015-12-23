
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
      "OPRAH-1922: assignee",
      "Charles Larry",
      "Date(2015, 11 ,11, 12, 53)",
      "Date(2015, 11, 11, 13, 5)"
   ],
   [
      "OPRAH-1922: assignee",
      "unassigned",
      "Date(2015, 11 ,11, 13, 5)",
      "Date(2015, 11, 14, 10, 46)"
   ],
   [
      "OPRAH-1922: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,14, 10, 46)",
      "Date(2015, 11, 14, 11, 2)"
   ],
   [
      "OPRAH-1922: assignee",
      "unassigned",
      "Date(2015, 11 ,14, 11, 2)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1922: status",
      "In Progress",
      "Date(2015, 11 ,11, 12, 53)",
      "Date(2015, 11, 11, 13, 5)"
   ],
   [
      "OPRAH-1922: status",
      "In Review",
      "Date(2015, 11 ,11, 13, 5)",
      "Date(2015, 11, 14, 11, 2)"
   ],
   [
      "OPRAH-1922: status",
      "In Test",
      "Date(2015, 11 ,14, 11, 2)",
      "Date(2015, 11, 17, 13, 39)"
   ],
   [
      "OPRAH-1922: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 13, 39)",
      "Date(2015, 11, 17, 13, 46)"
   ],
   [
      "OPRAH-1922: status",
      "Done",
      "Date(2015, 11 ,17, 13, 46)",
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
    var Container = document.getElementById("chart-div_OPRAH-1922");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}