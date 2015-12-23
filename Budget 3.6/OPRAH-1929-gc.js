
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
      "OPRAH-1929: assignee",
      "George Bohnisch",
      "Date(2015, 11 ,14, 10, 48)",
      "Date(2015, 11, 16, 14, 23)"
   ],
   [
      "OPRAH-1929: assignee",
      "unassigned",
      "Date(2015, 11 ,16, 14, 23)",
      "Date(2015, 11, 17, 8, 45)"
   ],
   [
      "OPRAH-1929: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,17, 8, 45)",
      "Date(2015, 11, 17, 10, 23)"
   ],
   [
      "OPRAH-1929: assignee",
      "unassigned",
      "Date(2015, 11 ,17, 10, 23)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1929: status",
      "In Progress",
      "Date(2015, 11 ,14, 13, 24)",
      "Date(2015, 11, 16, 14, 23)"
   ],
   [
      "OPRAH-1929: status",
      "In Review",
      "Date(2015, 11 ,16, 14, 23)",
      "Date(2015, 11, 17, 10, 23)"
   ],
   [
      "OPRAH-1929: status",
      "In Test",
      "Date(2015, 11 ,17, 10, 23)",
      "Date(2015, 11, 17, 15, 35)"
   ],
   [
      "OPRAH-1929: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 15, 35)",
      "Date(2015, 11, 21, 8, 54)"
   ],
   [
      "OPRAH-1929: status",
      "Done",
      "Date(2015, 11 ,21, 8, 54)",
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
    var Container = document.getElementById("chart-div_OPRAH-1929");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}