
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
      "OPRAH-1945: assignee",
      "Ross Steiner",
      "Date(2015, 11 ,18, 8, 43)",
      "Date(2015, 11, 18, 9, 6)"
   ],
   [
      "OPRAH-1945: assignee",
      "unassigned",
      "Date(2015, 11 ,18, 9, 6)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1945: status",
      "In Progress",
      "Date(2015, 11 ,18, 8, 44)",
      "Date(2015, 11, 18, 9, 6)"
   ],
   [
      "OPRAH-1945: status",
      "In Review",
      "Date(2015, 11 ,18, 9, 6)",
      "Date(2015, 11, 18, 9, 6)"
   ],
   [
      "OPRAH-1945: status",
      "In Test",
      "Date(2015, 11 ,18, 9, 6)",
      "Date(2015, 11, 18, 9, 32)"
   ],
   [
      "OPRAH-1945: status",
      "Ready to Merge",
      "Date(2015, 11 ,18, 9, 32)",
      "Date(2015, 11, 18, 9, 33)"
   ],
   [
      "OPRAH-1945: status",
      "Done",
      "Date(2015, 11 ,18, 9, 33)",
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
    var Container = document.getElementById("chart-div_OPRAH-1945");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}