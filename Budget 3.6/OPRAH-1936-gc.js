
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
      "OPRAH-1936: assignee",
      "Ross Steiner",
      "Date(2015, 11 ,18, 8, 42)",
      "Date(2015, 11, 18, 9, 5)"
   ],
   [
      "OPRAH-1936: assignee",
      "unassigned",
      "Date(2015, 11 ,18, 9, 5)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1936: status",
      "In Progress",
      "Date(2015, 11 ,18, 8, 47)",
      "Date(2015, 11, 18, 9, 5)"
   ],
   [
      "OPRAH-1936: status",
      "In Review",
      "Date(2015, 11 ,18, 9, 5)",
      "Date(2015, 11, 18, 9, 32)"
   ],
   [
      "OPRAH-1936: status",
      "Ready to Merge",
      "Date(2015, 11 ,18, 9, 32)",
      "Date(2015, 11, 18, 9, 33)"
   ],
   [
      "OPRAH-1936: status",
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
    var Container = document.getElementById("chart-div_OPRAH-1936");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}