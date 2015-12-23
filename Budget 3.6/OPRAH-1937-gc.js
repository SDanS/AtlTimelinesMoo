
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
 "label" : "End",
 "type" : "date"
      }
   ],
   [
      "OPRAH-1937: assignee",
      "George Bohnisch",
      "Date(2015, 11 ,17, 13, 16)",
      "Date(2015, 11, 17, 14, 27)"
   ],
   [
      "OPRAH-1937: assignee",
      "Charles Larry",
      "Date(2015, 11 ,17, 14, 27)",
      "Date(2015, 11, 18, 14, 26)"
   ],
   [
      "OPRAH-1937: assignee",
      "unassigned",
      "Date(2015, 11 ,18, 14, 26)",
      "Date(2015, 11, 18, 14, 28)"
   ],
   [
      "OPRAH-1937: assignee",
      "George Bohnisch",
      "Date(2015, 11 ,18, 14, 28)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1937: status",
      "In Progress",
      "Date(2015, 11 ,17, 13, 44)",
      "Date(2015, 11, 18, 14, 26)"
   ],
   [
      "OPRAH-1937: status",
      "To Do",
      "Date(2015, 11 ,18, 14, 26)",
      "Date(2015, 11, 21, 12, 37)"
   ],
   [
      "OPRAH-1937: status",
      "In Progress",
      "Date(2015, 11 ,21, 12, 37)",
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
    var Container = document.getElementById("chart-div_OPRAH-1937");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}