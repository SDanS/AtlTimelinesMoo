
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
      "OPRAH-1911: assignee",
      "Charles Larry",
      "Date(2015, 11 ,10, 12, 37)",
      "Date(2015, 11, 10, 12, 37)"
   ],
   [
      "OPRAH-1911: assignee",
      "unassigned",
      "Date(2015, 11 ,10, 12, 37)",
      "Date(2015, 11, 14, 10, 46)"
   ],
   [
      "OPRAH-1911: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,14, 10, 46)",
      "Date(2015, 11, 14, 10, 54)"
   ],
   [
      "OPRAH-1911: assignee",
      "unassigned",
      "Date(2015, 11 ,14, 10, 54)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1911: status",
      "In Review",
      "Date(2015, 11 ,10, 12, 37)",
      "Date(2015, 11, 14, 10, 54)"
   ],
   [
      "OPRAH-1911: status",
      "In Test",
      "Date(2015, 11 ,14, 10, 54)",
      "Date(2015, 11, 17, 11, 33)"
   ],
   [
      "OPRAH-1911: status",
      "Ready To Accept",
      "Date(2015, 11 ,17, 11, 33)",
      "Date(2015, 11, 17, 12, 24)"
   ],
   [
      "OPRAH-1911: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 12, 24)",
      "Date(2015, 11, 17, 13, 31)"
   ],
   [
      "OPRAH-1911: status",
      "Done",
      "Date(2015, 11 ,17, 13, 31)",
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
    var Container = document.getElementById("chart-div_OPRAH-1911");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}