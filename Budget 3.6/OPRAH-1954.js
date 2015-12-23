
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
      "OPRAH-1954: assignee",
      "Ross Steiner",
      "Date(2015, 11 ,21, 10, 29)",
      "Date(2015, 11, 22, 11, 6)"
   ],
   [
      "OPRAH-1954: assignee",
      "unassigned",
      "Date(2015, 11 ,22, 11, 6)",
      "Date(2015, 11, 22, 11, 7)"
   ],
   [
      "OPRAH-1954: assignee",
      "Ross Steiner",
      "Date(2015, 11 ,22, 11, 7)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1954: status",
      "In Progress",
      "Date(2015, 11 ,21, 10, 30)",
      "Date(2015, 11, 22, 11, 6)"
   ],
   [
      "OPRAH-1954: status",
      "In Review",
      "Date(2015, 11 ,22, 11, 6)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1956: assignee",
      "George Bohnisch",
      "Date(2015, 11 ,22, 11, 8)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1957: status",
      "In Review",
      "Date(2015, 11 ,22, 11, 8)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1972: assignee",
      "unassigned",
      "Date(2015, 11 ,22, 13, 8)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1972: status",
      "In Progress",
      "Date(2015, 11 ,22, 11, 27)",
      "Date(2015, 11, 22, 13, 8)"
   ],
   [
      "OPRAH-1972: status",
      "In Review",
      "Date(2015, 11 ,22, 13, 8)",
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
    var Container = document.getElementById("chart-div_OPRAH-1954");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}