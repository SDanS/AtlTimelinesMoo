
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
      "OPRAH-1959: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,21, 11, 36)",
      "Date(2015, 11, 21, 11, 46)"
   ],
   [
      "OPRAH-1959: assignee",
      "unassigned",
      "Date(2015, 11 ,21, 11, 46)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1959: status",
      "In Progress",
      "Date(2015, 11 ,18, 11, 45)",
      "Date(2015, 11, 18, 11, 48)"
   ],
   [
      "OPRAH-1959: status",
      "To Do",
      "Date(2015, 11 ,18, 11, 48)",
      "Date(2015, 11, 21, 11, 36)"
   ],
   [
      "OPRAH-1959: status",
      "In Progress",
      "Date(2015, 11 ,21, 11, 36)",
      "Date(2015, 11, 21, 11, 46)"
   ],
   [
      "OPRAH-1959: status",
      "In Review",
      "Date(2015, 11 ,21, 11, 46)",
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
    var Container = document.getElementById("chart-div_OPRAH-1959");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}