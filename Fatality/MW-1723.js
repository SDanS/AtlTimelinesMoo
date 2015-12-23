
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
      "MW-1723: assignee",
      "Stacy Wyatt",
      "Date(2015, 10 ,19, 9, 2)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1723: status",
      "Done",
      "Date(2015, 10 ,18, 13, 11)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1726: assignee",
      "George Baugh",
      "Date(2015, 9 ,28, 16, 38)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1726: status",
      "In Progress",
      "Date(2015, 9 ,28, 16, 38)",
      "Date(2015, 10, 5, 16, 25)"
   ],
   [
      "MW-1726: status",
      "Done",
      "Date(2015, 10 ,5, 16, 25)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1725: assignee",
      "George Baugh",
      "Date(2015, 9 ,28, 16, 37)",
      "Date(2015, 9, 28, 16, 37)"
   ],
   [
      "MW-1725: assignee",
      "unassigned",
      "Date(2015, 9 ,28, 16, 37)",
      "Date(2015, 9, 28, 16, 55)"
   ],
   [
      "MW-1725: assignee",
      "David Nielson",
      "Date(2015, 9 ,28, 16, 55)",
      "Date(2015, 9, 29, 13, 20)"
   ],
   [
      "MW-1725: assignee",
      "unassigned",
      "Date(2015, 9 ,29, 13, 20)",
      "Date(2015, 9, 29, 13, 57)"
   ],
   [
      "MW-1725: assignee",
      "Paul Trost",
      "Date(2015, 9 ,29, 13, 57)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1725: status",
      "In Progress",
      "Date(2015, 9 ,28, 16, 37)",
      "Date(2015, 9, 28, 16, 37)"
   ],
   [
      "MW-1725: status",
      "In Review",
      "Date(2015, 9 ,28, 16, 37)",
      "Date(2015, 9, 29, 13, 20)"
   ],
   [
      "MW-1725: status",
      "In Test",
      "Date(2015, 9 ,29, 13, 20)",
      "Date(2015, 10, 9, 13, 50)"
   ],
   [
      "MW-1725: status",
      "Done",
      "Date(2015, 10 ,9, 13, 50)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1727: assignee",
      "Paul Trost",
      "Date(2015, 9 ,30, 9, 29)",
      "Date(2015, 9, 30, 14, 37)"
   ],
   [
      "MW-1727: assignee",
      "unassigned",
      "Date(2015, 9 ,30, 14, 37)",
      "Date(2015, 10, 3, 8, 5)"
   ],
   [
      "MW-1727: assignee",
      "Vera Hart",
      "Date(2015, 10 ,3, 8, 5)",
      "Date(2015, 10, 3, 10, 50)"
   ],
   [
      "MW-1727: assignee",
      "unassigned",
      "Date(2015, 10 ,3, 10, 50)",
      "Date(2015, 10, 5, 16, 26)"
   ],
   [
      "MW-1727: assignee",
      "George Baugh",
      "Date(2015, 10 ,5, 16, 26)",
      "Date(2015, 10, 10, 12, 35)"
   ],
   [
      "MW-1727: assignee",
      "unassigned",
      "Date(2015, 10 ,10, 12, 35)",
      "Date(2015, 10, 10, 13, 28)"
   ],
   [
      "MW-1727: assignee",
      "Vera Hart",
      "Date(2015, 10 ,10, 13, 28)",
      "Date(2015, 10, 10, 13, 33)"
   ],
   [
      "MW-1727: assignee",
      "unassigned",
      "Date(2015, 10 ,10, 13, 33)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1727: status",
      "In Progress",
      "Date(2015, 9 ,30, 9, 29)",
      "Date(2015, 9, 30, 14, 37)"
   ],
   [
      "MW-1727: status",
      "In Review",
      "Date(2015, 9 ,30, 14, 37)",
      "Date(2015, 10, 2, 14, 8)"
   ],
   [
      "MW-1727: status",
      "In Test",
      "Date(2015, 10 ,2, 14, 8)",
      "Date(2015, 10, 3, 8, 17)"
   ],
   [
      "MW-1727: status",
      "In Progress",
      "Date(2015, 10 ,3, 8, 17)",
      "Date(2015, 10, 10, 12, 35)"
   ],
   [
      "MW-1727: status",
      "In Review",
      "Date(2015, 10 ,10, 12, 35)",
      "Date(2015, 10, 10, 13, 33)"
   ],
   [
      "MW-1727: status",
      "In Test",
      "Date(2015, 10 ,10, 13, 33)",
      "Date(2015, 10, 10, 17, 6)"
   ],
   [
      "MW-1727: status",
      "Done",
      "Date(2015, 10 ,10, 17, 6)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1724: assignee",
      "David Nielson",
      "Date(2015, 9 ,28, 16, 39)",
      "Date(2015, 9, 30, 11, 30)"
   ],
   [
      "MW-1724: assignee",
      "George Baugh",
      "Date(2015, 9 ,30, 11, 30)",
      "Date(2015, 9, 31, 10, 46)"
   ],
   [
      "MW-1724: assignee",
      "unassigned",
      "Date(2015, 9 ,31, 10, 46)",
      "Date(2015, 10, 2, 9, 6)"
   ],
   [
      "MW-1724: assignee",
      "Paul Trost",
      "Date(2015, 10 ,2, 9, 6)",
      "Date(2015, 10, 2, 10, 32)"
   ],
   [
      "MW-1724: assignee",
      "David Nielson",
      "Date(2015, 10 ,2, 10, 32)",
      "Date(2015, 10, 3, 21, 7)"
   ],
   [
      "MW-1724: assignee",
      "George Baugh",
      "Date(2015, 10 ,3, 21, 7)",
      "Date(2015, 10, 5, 16, 25)"
   ],
   [
      "MW-1724: assignee",
      "unassigned",
      "Date(2015, 10 ,5, 16, 25)",
      "Date(2015, 10, 10, 13, 19)"
   ],
   [
      "MW-1724: assignee",
      "George Baugh",
      "Date(2015, 10 ,10, 13, 19)",
      "Date(2015, 10, 10, 17, 10)"
   ],
   [
      "MW-1724: assignee",
      "unassigned",
      "Date(2015, 10 ,10, 17, 10)",
      "Date(2015, 10, 11, 7, 14)"
   ],
   [
      "MW-1724: assignee",
      "Paul Trost",
      "Date(2015, 10 ,11, 7, 14)",
      "Date(2015, 10, 11, 8, 24)"
   ],
   [
      "MW-1724: assignee",
      "George Baugh",
      "Date(2015, 10 ,11, 8, 24)",
      "Date(2015, 10, 11, 9, 8)"
   ],
   [
      "MW-1724: assignee",
      "unassigned",
      "Date(2015, 10 ,11, 9, 8)",
      "Date(2015, 10, 11, 10, 21)"
   ],
   [
      "MW-1724: assignee",
      "Paul Trost",
      "Date(2015, 10 ,11, 10, 21)",
      "Date(2015, 10, 11, 10, 37)"
   ],
   [
      "MW-1724: assignee",
      "unassigned",
      "Date(2015, 10 ,11, 10, 37)",
      "Date(2015, 10, 11, 11, 50)"
   ],
   [
      "MW-1724: assignee",
      "Joshua Brandt",
      "Date(2015, 10 ,11, 11, 50)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1724: status",
      "In Progress",
      "Date(2015, 9 ,28, 16, 39)",
      "Date(2015, 9, 31, 10, 46)"
   ],
   [
      "MW-1724: status",
      "In Review",
      "Date(2015, 9 ,31, 10, 46)",
      "Date(2015, 10, 2, 9, 41)"
   ],
   [
      "MW-1724: status",
      "In Progress",
      "Date(2015, 10 ,2, 9, 41)",
      "Date(2015, 10, 5, 16, 25)"
   ],
   [
      "MW-1724: status",
      "In Review",
      "Date(2015, 10 ,5, 16, 25)",
      "Date(2015, 10, 9, 9, 11)"
   ],
   [
      "MW-1724: status",
      "In Progress",
      "Date(2015, 10 ,9, 9, 11)",
      "Date(2015, 10, 10, 17, 10)"
   ],
   [
      "MW-1724: status",
      "In Review",
      "Date(2015, 10 ,10, 17, 10)",
      "Date(2015, 10, 11, 8, 24)"
   ],
   [
      "MW-1724: status",
      "In Progress",
      "Date(2015, 10 ,11, 8, 24)",
      "Date(2015, 10, 11, 8, 46)"
   ],
   [
      "MW-1724: status",
      "In Progress",
      "Date(2015, 10 ,11, 8, 46)",
      "Date(2015, 10, 11, 9, 8)"
   ],
   [
      "MW-1724: status",
      "In Review",
      "Date(2015, 10 ,11, 9, 8)",
      "Date(2015, 10, 11, 10, 37)"
   ],
   [
      "MW-1724: status",
      "In Test",
      "Date(2015, 10 ,11, 10, 37)",
      "Date(2015, 10, 12, 11, 7)"
   ],
   [
      "MW-1724: status",
      "Merge Pending",
      "Date(2015, 10 ,12, 11, 7)",
      "Date(2015, 10, 18, 13, 11)"
   ],
   [
      "MW-1724: status",
      "Done",
      "Date(2015, 10 ,18, 13, 11)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1753: assignee",
      "Paul Trost",
      "Date(2015, 9 ,30, 12, 48)",
      "Date(2015, 10, 9, 7, 26)"
   ],
   [
      "MW-1753: assignee",
      "unassigned",
      "Date(2015, 10 ,9, 7, 26)",
      "Date(2015, 10, 10, 13, 9)"
   ],
   [
      "MW-1753: assignee",
      "George Baugh",
      "Date(2015, 10 ,10, 13, 9)",
      "Date(2015, 10, 10, 13, 11)"
   ],
   [
      "MW-1753: assignee",
      "unassigned",
      "Date(2015, 10 ,10, 13, 11)",
      "Date(2015, 10, 10, 17, 45)"
   ],
   [
      "MW-1753: assignee",
      "Joshua Brandt",
      "Date(2015, 10 ,10, 17, 45)",
      "Date(2015, 10, 10, 17, 46)"
   ],
   [
      "MW-1753: assignee",
      "unassigned",
      "Date(2015, 10 ,10, 17, 46)",
      "Date(2015, 10, 11, 8, 27)"
   ],
   [
      "MW-1753: assignee",
      "Paul Trost",
      "Date(2015, 10 ,11, 8, 27)",
      "Date(2015, 10, 13, 9, 1)"
   ],
   [
      "MW-1753: assignee",
      "Vera Hart",
      "Date(2015, 10 ,13, 9, 1)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1753: status",
      "In Progress",
      "Date(2015, 9 ,30, 12, 48)",
      "Date(2015, 10, 9, 7, 26)"
   ],
   [
      "MW-1753: status",
      "In Review",
      "Date(2015, 10 ,9, 7, 26)",
      "Date(2015, 10, 10, 13, 0)"
   ],
   [
      "MW-1753: status",
      "To Do",
      "Date(2015, 10 ,10, 13, 0)",
      "Date(2015, 10, 10, 13, 7)"
   ],
   [
      "MW-1753: status",
      "In Review",
      "Date(2015, 10 ,10, 13, 7)",
      "Date(2015, 10, 10, 13, 9)"
   ],
   [
      "MW-1753: status",
      "In Progress",
      "Date(2015, 10 ,10, 13, 9)",
      "Date(2015, 10, 10, 13, 11)"
   ],
   [
      "MW-1753: status",
      "In Review",
      "Date(2015, 10 ,10, 13, 11)",
      "Date(2015, 10, 10, 17, 46)"
   ],
   [
      "MW-1753: status",
      "In Test",
      "Date(2015, 10 ,10, 17, 46)",
      "Date(2015, 10, 13, 9, 1)"
   ],
   [
      "MW-1753: status",
      "Merge Pending",
      "Date(2015, 10 ,13, 9, 1)",
      "Date(2015, 10, 18, 13, 11)"
   ],
   [
      "MW-1753: status",
      "Done",
      "Date(2015, 10 ,18, 13, 11)",
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
    var Container = document.getElementById("chart-div_MW-1723");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}