
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
 "type" : "date",
 "label" : "End"
      }
   ],
   [
      "OPRAH-1913: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,10, 15, 22)",
      "Date(2015, 11, 11, 6, 53)"
   ],
   [
      "OPRAH-1913: assignee",
      "unassigned",
      "Date(2015, 11 ,11, 6, 53)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1913: status",
      "In Review",
      "Date(2015, 11 ,10, 13, 28)",
      "Date(2015, 11, 11, 6, 53)"
   ],
   [
      "OPRAH-1913: status",
      "In Test",
      "Date(2015, 11 ,11, 6, 53)",
      "Date(2015, 11, 11, 18, 5)"
   ],
   [
      "OPRAH-1913: status",
      "Ready To Accept",
      "Date(2015, 11 ,11, 18, 5)",
      "Date(2015, 11, 16, 9, 5)"
   ],
   [
      "OPRAH-1913: status",
      "Ready to Merge",
      "Date(2015, 11 ,16, 9, 5)",
      "Date(2015, 11, 17, 10, 17)"
   ],
   [
      "OPRAH-1913: status",
      "Done",
      "Date(2015, 11 ,17, 10, 17)",
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
    var Container = document.getElementById("chart-div_OPRAH-1913");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}