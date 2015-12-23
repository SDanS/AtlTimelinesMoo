
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
      "OPRAH-1925: assignee",
      "George Bohnisch",
      "Date(2015, 11 ,14, 10, 48)",
      "Date(2015, 11, 16, 13, 19)"
   ],
   [
      "OPRAH-1925: assignee",
      "unassigned",
      "Date(2015, 11 ,16, 13, 19)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1925: status",
      "In Progress",
      "Date(2015, 11 ,14, 13, 25)",
      "Date(2015, 11, 16, 13, 19)"
   ],
   [
      "OPRAH-1925: status",
      "In Review",
      "Date(2015, 11 ,16, 13, 19)",
      "Date(2015, 11, 18, 9, 19)"
   ],
   [
      "OPRAH-1925: status",
      "In Test",
      "Date(2015, 11 ,18, 9, 19)",
      "Date(2015, 11, 18, 16, 39)"
   ],
   [
      "OPRAH-1925: status",
      "Ready to Merge",
      "Date(2015, 11 ,18, 16, 39)",
      "Date(2015, 11, 21, 8, 51)"
   ],
   [
      "OPRAH-1925: status",
      "Done",
      "Date(2015, 11 ,21, 8, 51)",
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
    var Container = document.getElementById("chart-div_OPRAH-1925");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}