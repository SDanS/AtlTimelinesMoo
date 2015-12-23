
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
      "OPRAH-1927: assignee",
      "George Bohnisch",
      "Date(2015, 11 ,14, 10, 59)",
      "Date(2015, 11, 16, 13, 49)"
   ],
   [
      "OPRAH-1927: assignee",
      "unassigned",
      "Date(2015, 11 ,16, 13, 49)",
      "Date(2015, 11, 17, 8, 45)"
   ],
   [
      "OPRAH-1927: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,17, 8, 45)",
      "Date(2015, 11, 17, 9, 24)"
   ],
   [
      "OPRAH-1927: assignee",
      "George Bohnisch",
      "Date(2015, 11 ,17, 9, 24)",
      "Date(2015, 11, 17, 13, 26)"
   ],
   [
      "OPRAH-1927: assignee",
      "unassigned",
      "Date(2015, 11 ,17, 13, 26)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1927: status",
      "In Progress",
      "Date(2015, 11 ,14, 13, 24)",
      "Date(2015, 11, 16, 13, 49)"
   ],
   [
      "OPRAH-1927: status",
      "In Review",
      "Date(2015, 11 ,16, 13, 49)",
      "Date(2015, 11, 17, 9, 22)"
   ],
   [
      "OPRAH-1927: status",
      "In Progress",
      "Date(2015, 11 ,17, 9, 22)",
      "Date(2015, 11, 17, 13, 26)"
   ],
   [
      "OPRAH-1927: status",
      "In Review",
      "Date(2015, 11 ,17, 13, 26)",
      "Date(2015, 11, 17, 15, 21)"
   ],
   [
      "OPRAH-1927: status",
      "In Test",
      "Date(2015, 11 ,17, 15, 21)",
      "Date(2015, 11, 17, 16, 17)"
   ],
   [
      "OPRAH-1927: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 16, 17)",
      "Date(2015, 11, 22, 12, 40)"
   ],
   [
      "OPRAH-1927: status",
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
    var Container = document.getElementById("chart-div_OPRAH-1927");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}