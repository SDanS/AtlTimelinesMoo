
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
      "OPRAH-1928: assignee",
      "George Bohnisch",
      "Date(2015, 11 ,14, 10, 48)",
      "Date(2015, 11, 17, 14, 39)"
   ],
   [
      "OPRAH-1928: assignee",
      "unassigned",
      "Date(2015, 11 ,17, 14, 39)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1928: status",
      "In Progress",
      "Date(2015, 11 ,14, 13, 24)",
      "Date(2015, 11, 17, 14, 39)"
   ],
   [
      "OPRAH-1928: status",
      "In Review",
      "Date(2015, 11 ,17, 14, 39)",
      "Date(2015, 11, 18, 9, 21)"
   ],
   [
      "OPRAH-1928: status",
      "In Test",
      "Date(2015, 11 ,18, 9, 21)",
      "Date(2015, 11, 18, 11, 33)"
   ],
   [
      "OPRAH-1928: status",
      "Ready to Merge",
      "Date(2015, 11 ,18, 11, 33)",
      "Date(2015, 11, 22, 12, 40)"
   ],
   [
      "OPRAH-1928: status",
      "Done",
      "Date(2015, 11 ,22, 12, 40)",
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
    var Container = document.getElementById("chart-div_OPRAH-1928");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}