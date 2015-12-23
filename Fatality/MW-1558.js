
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
      "MW-1558: assignee",
      "unassigned",
      "Date(2015, 9 ,28, 14, 1)",
      "Date(2015, 10, 19, 9, 2)"
   ],
   [
      "MW-1558: assignee",
      "George Baugh",
      "Date(2015, 10 ,19, 9, 2)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1558: status",
      "In Progress",
      "Date(2015, 8 ,28, 12, 45)",
      "Date(2015, 9, 28, 14, 1)"
   ],
   [
      "MW-1558: status",
      "To Do",
      "Date(2015, 9 ,28, 14, 1)",
      "Date(2015, 9, 28, 15, 38)"
   ],
   [
      "MW-1558: status",
      "In Progress",
      "Date(2015, 9 ,28, 15, 38)",
      "Date(2015, 10, 5, 10, 24)"
   ],
   [
      "MW-1558: status",
      "To Do",
      "Date(2015, 10 ,5, 10, 24)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1648: assignee",
      "George Baugh",
      "Date(2015, 9 ,28, 15, 39)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1648: status",
      "In Progress",
      "Date(2015, 9 ,28, 15, 39)",
      "Date(2015, 9, 28, 16, 47)"
   ],
   [
      "MW-1648: status",
      "Done",
      "Date(2015, 9 ,28, 16, 47)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1734: assignee",
      "unassigned",
      "Date(2015, 9 ,28, 16, 33)",
      "Date(2015, 9, 28, 19, 23)"
   ],
   [
      "MW-1734: assignee",
      "Joshua Brandt",
      "Date(2015, 9 ,28, 19, 23)",
      "Date(2015, 9, 28, 19, 25)"
   ],
   [
      "MW-1734: assignee",
      "unassigned",
      "Date(2015, 9 ,28, 19, 25)",
      "Date(2015, 9, 29, 7, 33)"
   ],
   [
      "MW-1734: assignee",
      "Paul Trost",
      "Date(2015, 9 ,29, 7, 33)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1734: status",
      "In Review",
      "Date(2015, 9 ,28, 16, 33)",
      "Date(2015, 9, 28, 19, 25)"
   ],
   [
      "MW-1734: status",
      "In Test",
      "Date(2015, 9 ,28, 19, 25)",
      "Date(2015, 9, 29, 7, 34)"
   ],
   [
      "MW-1734: status",
      "Merge Pending",
      "Date(2015, 9 ,29, 7, 34)",
      "Date(2015, 9, 29, 12, 40)"
   ],
   [
      "MW-1734: status",
      "Done",
      "Date(2015, 9 ,29, 12, 40)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1739: assignee",
      "unassigned",
      "Date(2015, 9 ,28, 16, 35)",
      "Date(2015, 9, 29, 7, 35)"
   ],
   [
      "MW-1739: assignee",
      "Paul Trost",
      "Date(2015, 9 ,29, 7, 35)",
      "Date(2015, 9, 29, 7, 41)"
   ],
   [
      "MW-1739: assignee",
      "unassigned",
      "Date(2015, 9 ,29, 7, 41)",
      "Date(2015, 9, 29, 7, 55)"
   ],
   [
      "MW-1739: assignee",
      "Paul Trost",
      "Date(2015, 9 ,29, 7, 55)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1739: status",
      "In Review",
      "Date(2015, 9 ,28, 16, 35)",
      "Date(2015, 9, 29, 7, 41)"
   ],
   [
      "MW-1739: status",
      "In Test",
      "Date(2015, 9 ,29, 7, 41)",
      "Date(2015, 9, 29, 9, 42)"
   ],
   [
      "MW-1739: status",
      "Merge Pending",
      "Date(2015, 9 ,29, 9, 42)",
      "Date(2015, 9, 29, 15, 29)"
   ],
   [
      "MW-1739: status",
      "Done",
      "Date(2015, 9 ,29, 15, 29)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1748: status",
      "Done",
      "Date(2015, 9 ,29, 12, 18)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1655: assignee",
      "Joshua Brandt",
      "Date(2015, 9 ,29, 10, 51)",
      "Date(2015, 9, 29, 14, 52)"
   ],
   [
      "MW-1655: assignee",
      "George Baugh",
      "Date(2015, 9 ,29, 14, 52)",
      "Date(2015, 9, 29, 15, 27)"
   ],
   [
      "MW-1655: assignee",
      "unassigned",
      "Date(2015, 9 ,29, 15, 27)",
      "Date(2015, 9, 30, 12, 23)"
   ],
   [
      "MW-1655: assignee",
      "Vera Hart",
      "Date(2015, 9 ,30, 12, 23)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1655: status",
      "In Review",
      "Date(2015, 9 ,28, 15, 52)",
      "Date(2015, 9, 29, 14, 52)"
   ],
   [
      "MW-1655: status",
      "In Progress",
      "Date(2015, 9 ,29, 14, 52)",
      "Date(2015, 9, 29, 15, 27)"
   ],
   [
      "MW-1655: status",
      "In Test",
      "Date(2015, 9 ,29, 15, 27)",
      "Date(2015, 9, 30, 13, 55)"
   ],
   [
      "MW-1655: status",
      "Merge Pending",
      "Date(2015, 9 ,30, 13, 55)",
      "Date(2015, 10, 3, 17, 8)"
   ],
   [
      "MW-1655: status",
      "Done",
      "Date(2015, 10 ,3, 17, 8)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1752: status",
      "Done",
      "Date(2015, 10 ,9, 13, 53)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1733: assignee",
      "unassigned",
      "Date(2015, 9 ,28, 16, 45)",
      "Date(2015, 10, 9, 12, 54)"
   ],
   [
      "MW-1733: assignee",
      "Joshua Brandt",
      "Date(2015, 10 ,9, 12, 54)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1733: status",
      "In Review",
      "Date(2015, 10 ,5, 15, 17)",
      "Date(2015, 10, 9, 11, 22)"
   ],
   [
      "MW-1733: status",
      "In Progress",
      "Date(2015, 10 ,9, 11, 22)",
      "Date(2015, 10, 10, 11, 57)"
   ],
   [
      "MW-1733: status",
      "Done",
      "Date(2015, 10 ,10, 11, 57)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1740: assignee",
      "unassigned",
      "Date(2015, 10 ,5, 16, 19)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1740: status",
      "In Progress",
      "Date(2015, 9 ,28, 16, 46)",
      "Date(2015, 10, 5, 16, 19)"
   ],
   [
      "MW-1740: status",
      "In Review",
      "Date(2015, 10 ,5, 16, 19)",
      "Date(2015, 10, 9, 11, 22)"
   ],
   [
      "MW-1740: status",
      "In Progress",
      "Date(2015, 10 ,9, 11, 22)",
      "Date(2015, 10, 10, 12, 41)"
   ],
   [
      "MW-1740: status",
      "Done",
      "Date(2015, 10 ,10, 12, 41)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1453: assignee",
      "Joshua Brandt",
      "Date(2015, 9 ,6, 14, 28)",
      "Date(2015, 10, 2, 14, 40)"
   ],
   [
      "MW-1453: assignee",
      "unassigned",
      "Date(2015, 10 ,2, 14, 40)",
      "Date(2015, 10, 2, 15, 56)"
   ],
   [
      "MW-1453: assignee",
      "Joshua Brandt",
      "Date(2015, 10 ,2, 15, 56)",
      "Date(2015, 10, 9, 11, 21)"
   ],
   [
      "MW-1453: assignee",
      "unassigned",
      "Date(2015, 10 ,9, 11, 21)",
      "Date(2015, 10, 10, 11, 58)"
   ],
   [
      "MW-1453: assignee",
      "David Nielson",
      "Date(2015, 10 ,10, 11, 58)",
      "Date(2015, 10, 10, 11, 59)"
   ],
   [
      "MW-1453: assignee",
      "unassigned",
      "Date(2015, 10 ,10, 11, 59)",
      "Date(2015, 10, 10, 11, 59)"
   ],
   [
      "MW-1453: assignee",
      "Joshua Brandt",
      "Date(2015, 10 ,10, 11, 59)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1453: status",
      "In Progress",
      "Date(2015, 9 ,30, 12, 44)",
      "Date(2015, 10, 2, 14, 40)"
   ],
   [
      "MW-1453: status",
      "In Review",
      "Date(2015, 10 ,2, 14, 40)",
      "Date(2015, 10, 2, 15, 56)"
   ],
   [
      "MW-1453: status",
      "In Progress",
      "Date(2015, 10 ,2, 15, 56)",
      "Date(2015, 10, 9, 11, 21)"
   ],
   [
      "MW-1453: status",
      "In Review",
      "Date(2015, 10 ,9, 11, 21)",
      "Date(2015, 10, 9, 11, 22)"
   ],
   [
      "MW-1453: status",
      "In Progress",
      "Date(2015, 10 ,9, 11, 22)",
      "Date(2015, 10, 9, 15, 31)"
   ],
   [
      "MW-1453: status",
      "In Review",
      "Date(2015, 10 ,9, 15, 31)",
      "Date(2015, 10, 10, 10, 49)"
   ],
   [
      "MW-1453: status",
      "In Progress",
      "Date(2015, 10 ,10, 10, 49)",
      "Date(2015, 10, 10, 11, 44)"
   ],
   [
      "MW-1453: status",
      "In Review",
      "Date(2015, 10 ,10, 11, 44)",
      "Date(2015, 10, 10, 11, 59)"
   ],
   [
      "MW-1453: status",
      "In Test",
      "Date(2015, 10 ,10, 11, 59)",
      "Date(2015, 10, 10, 17, 11)"
   ],
   [
      "MW-1453: status",
      "Merge Pending",
      "Date(2015, 10 ,10, 17, 11)",
      "Date(2015, 10, 18, 13, 10)"
   ],
   [
      "MW-1453: status",
      "Done",
      "Date(2015, 10 ,18, 13, 10)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1646: assignee",
      "George Baugh",
      "Date(2015, 10 ,10, 13, 3)",
      "Date(2015, 10, 10, 13, 4)"
   ],
   [
      "MW-1646: assignee",
      "unassigned",
      "Date(2015, 10 ,10, 13, 4)",
      "Date(2015, 10, 10, 13, 25)"
   ],
   [
      "MW-1646: assignee",
      "Joshua Brandt",
      "Date(2015, 10 ,10, 13, 25)",
      "Date(2015, 10, 10, 16, 38)"
   ],
   [
      "MW-1646: assignee",
      "unassigned",
      "Date(2015, 10 ,10, 16, 38)",
      "Date(2015, 10, 11, 13, 2)"
   ],
   [
      "MW-1646: assignee",
      "Paul Trost",
      "Date(2015, 10 ,11, 13, 2)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1646: status",
      "In Progress",
      "Date(2015, 10 ,10, 13, 3)",
      "Date(2015, 10, 10, 13, 4)"
   ],
   [
      "MW-1646: status",
      "In Review",
      "Date(2015, 10 ,10, 13, 4)",
      "Date(2015, 10, 10, 16, 38)"
   ],
   [
      "MW-1646: status",
      "In Test",
      "Date(2015, 10 ,10, 16, 38)",
      "Date(2015, 10, 12, 13, 3)"
   ],
   [
      "MW-1646: status",
      "Done",
      "Date(2015, 10 ,12, 13, 3)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1741: assignee",
      "George Baugh",
      "Date(2015, 9 ,29, 9, 38)",
      "Date(2015, 10, 5, 16, 21)"
   ],
   [
      "MW-1741: assignee",
      "unassigned",
      "Date(2015, 10 ,5, 16, 21)",
      "Date(2015, 10, 10, 13, 45)"
   ],
   [
      "MW-1741: assignee",
      "David Nielson",
      "Date(2015, 10 ,10, 13, 45)",
      "Date(2015, 10, 10, 13, 46)"
   ],
   [
      "MW-1741: assignee",
      "unassigned",
      "Date(2015, 10 ,10, 13, 46)",
      "Date(2015, 10, 12, 12, 27)"
   ],
   [
      "MW-1741: assignee",
      "Vera Hart",
      "Date(2015, 10 ,12, 12, 27)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1741: status",
      "In Progress",
      "Date(2015, 9 ,28, 17, 23)",
      "Date(2015, 10, 5, 16, 21)"
   ],
   [
      "MW-1741: status",
      "In Progress",
      "Date(2015, 10 ,5, 16, 21)",
      "Date(2015, 10, 5, 16, 21)"
   ],
   [
      "MW-1741: status",
      "In Review",
      "Date(2015, 10 ,5, 16, 21)",
      "Date(2015, 10, 5, 16, 21)"
   ],
   [
      "MW-1741: status",
      "In Review",
      "Date(2015, 10 ,5, 16, 21)",
      "Date(2015, 10, 5, 16, 21)"
   ],
   [
      "MW-1741: status",
      "In Review",
      "Date(2015, 10 ,5, 16, 21)",
      "Date(2015, 10, 9, 11, 22)"
   ],
   [
      "MW-1741: status",
      "In Progress",
      "Date(2015, 10 ,9, 11, 22)",
      "Date(2015, 10, 10, 12, 42)"
   ],
   [
      "MW-1741: status",
      "In Review",
      "Date(2015, 10 ,10, 12, 42)",
      "Date(2015, 10, 10, 12, 42)"
   ],
   [
      "MW-1741: status",
      "In Progress",
      "Date(2015, 10 ,10, 12, 42)",
      "Date(2015, 10, 10, 13, 3)"
   ],
   [
      "MW-1741: status",
      "In Review",
      "Date(2015, 10 ,10, 13, 3)",
      "Date(2015, 10, 10, 13, 46)"
   ],
   [
      "MW-1741: status",
      "In Test",
      "Date(2015, 10 ,10, 13, 46)",
      "Date(2015, 10, 12, 15, 13)"
   ],
   [
      "MW-1741: status",
      "Merge Pending",
      "Date(2015, 10 ,12, 15, 13)",
      "Date(2015, 10, 18, 13, 10)"
   ],
   [
      "MW-1741: status",
      "Done",
      "Date(2015, 10 ,18, 13, 10)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1732: assignee",
      "unassigned",
      "Date(2015, 9 ,28, 16, 46)",
      "Date(2015, 9, 31, 17, 2)"
   ],
   [
      "MW-1732: assignee",
      "George Baugh",
      "Date(2015, 9 ,31, 17, 2)",
      "Date(2015, 9, 31, 17, 3)"
   ],
   [
      "MW-1732: assignee",
      "unassigned",
      "Date(2015, 9 ,31, 17, 3)",
      "Date(2015, 10, 3, 9, 24)"
   ],
   [
      "MW-1732: assignee",
      "David Nielson",
      "Date(2015, 10 ,3, 9, 24)",
      "Date(2015, 10, 9, 9, 43)"
   ],
   [
      "MW-1732: assignee",
      "unassigned",
      "Date(2015, 10 ,9, 9, 43)",
      "Date(2015, 10, 10, 12, 54)"
   ],
   [
      "MW-1732: assignee",
      "David Nielson",
      "Date(2015, 10 ,10, 12, 54)",
      "Date(2015, 10, 10, 13, 3)"
   ],
   [
      "MW-1732: assignee",
      "unassigned",
      "Date(2015, 10 ,10, 13, 3)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1732: status",
      "In Progress",
      "Date(2015, 9 ,31, 10, 48)",
      "Date(2015, 9, 31, 17, 3)"
   ],
   [
      "MW-1732: status",
      "In Review",
      "Date(2015, 9 ,31, 17, 3)",
      "Date(2015, 10, 9, 9, 43)"
   ],
   [
      "MW-1732: status",
      "In Test",
      "Date(2015, 10 ,9, 9, 43)",
      "Date(2015, 10, 10, 12, 46)"
   ],
   [
      "MW-1732: status",
      "In Review",
      "Date(2015, 10 ,10, 12, 46)",
      "Date(2015, 10, 10, 13, 3)"
   ],
   [
      "MW-1732: status",
      "In Test",
      "Date(2015, 10 ,10, 13, 3)",
      "Date(2015, 10, 13, 12, 45)"
   ],
   [
      "MW-1732: status",
      "Merge Pending",
      "Date(2015, 10 ,13, 12, 45)",
      "Date(2015, 10, 18, 13, 10)"
   ],
   [
      "MW-1732: status",
      "Done",
      "Date(2015, 10 ,18, 13, 10)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1736: assignee",
      "unassigned",
      "Date(2015, 9 ,28, 16, 45)",
      "Date(2015, 10, 10, 13, 41)"
   ],
   [
      "MW-1736: assignee",
      "David Nielson",
      "Date(2015, 10 ,10, 13, 41)",
      "Date(2015, 10, 10, 13, 42)"
   ],
   [
      "MW-1736: assignee",
      "unassigned",
      "Date(2015, 10 ,10, 13, 42)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1736: status",
      "In Review",
      "Date(2015, 10 ,5, 15, 17)",
      "Date(2015, 10, 9, 11, 22)"
   ],
   [
      "MW-1736: status",
      "In Progress",
      "Date(2015, 10 ,9, 11, 22)",
      "Date(2015, 10, 10, 12, 56)"
   ],
   [
      "MW-1736: status",
      "In Review",
      "Date(2015, 10 ,10, 12, 56)",
      "Date(2015, 10, 10, 13, 42)"
   ],
   [
      "MW-1736: status",
      "In Test",
      "Date(2015, 10 ,10, 13, 42)",
      "Date(2015, 10, 13, 13, 19)"
   ],
   [
      "MW-1736: status",
      "Merge Pending",
      "Date(2015, 10 ,13, 13, 19)",
      "Date(2015, 10, 18, 13, 10)"
   ],
   [
      "MW-1736: status",
      "Done",
      "Date(2015, 10 ,18, 13, 10)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1653: assignee",
      "David Nielson",
      "Date(2015, 9 ,30, 13, 12)",
      "Date(2015, 10, 4, 8, 1)"
   ],
   [
      "MW-1653: assignee",
      "unassigned",
      "Date(2015, 10 ,4, 8, 1)",
      "Date(2015, 10, 4, 13, 22)"
   ],
   [
      "MW-1653: assignee",
      "David Nielson",
      "Date(2015, 10 ,4, 13, 22)",
      "Date(2015, 10, 6, 9, 47)"
   ],
   [
      "MW-1653: assignee",
      "unassigned",
      "Date(2015, 10 ,6, 9, 47)",
      "Date(2015, 10, 10, 13, 21)"
   ],
   [
      "MW-1653: assignee",
      "Joshua Brandt",
      "Date(2015, 10 ,10, 13, 21)",
      "Date(2015, 10, 10, 13, 25)"
   ],
   [
      "MW-1653: assignee",
      "unassigned",
      "Date(2015, 10 ,10, 13, 25)",
      "Date(2015, 10, 10, 13, 32)"
   ],
   [
      "MW-1653: assignee",
      "David Nielson",
      "Date(2015, 10 ,10, 13, 32)",
      "Date(2015, 10, 10, 13, 39)"
   ],
   [
      "MW-1653: assignee",
      "George Baugh",
      "Date(2015, 10 ,10, 13, 39)",
      "Date(2015, 10, 10, 13, 52)"
   ],
   [
      "MW-1653: assignee",
      "unassigned",
      "Date(2015, 10 ,10, 13, 52)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1653: status",
      "In Review",
      "Date(2015, 9 ,28, 15, 46)",
      "Date(2015, 9, 28, 15, 47)"
   ],
   [
      "MW-1653: status",
      "In Progress",
      "Date(2015, 9 ,28, 15, 47)",
      "Date(2015, 9, 28, 15, 47)"
   ],
   [
      "MW-1653: status",
      "To Do",
      "Date(2015, 9 ,28, 15, 47)",
      "Date(2015, 9, 30, 13, 12)"
   ],
   [
      "MW-1653: status",
      "In Progress",
      "Date(2015, 9 ,30, 13, 12)",
      "Date(2015, 10, 4, 8, 1)"
   ],
   [
      "MW-1653: status",
      "In Review",
      "Date(2015, 10 ,4, 8, 1)",
      "Date(2015, 10, 4, 13, 22)"
   ],
   [
      "MW-1653: status",
      "In Progress",
      "Date(2015, 10 ,4, 13, 22)",
      "Date(2015, 10, 6, 9, 47)"
   ],
   [
      "MW-1653: status",
      "In Review",
      "Date(2015, 10 ,6, 9, 47)",
      "Date(2015, 10, 9, 11, 21)"
   ],
   [
      "MW-1653: status",
      "In Progress",
      "Date(2015, 10 ,9, 11, 21)",
      "Date(2015, 10, 10, 12, 51)"
   ],
   [
      "MW-1653: status",
      "In Review",
      "Date(2015, 10 ,10, 12, 51)",
      "Date(2015, 10, 10, 13, 39)"
   ],
   [
      "MW-1653: status",
      "In Progress",
      "Date(2015, 10 ,10, 13, 39)",
      "Date(2015, 10, 10, 13, 52)"
   ],
   [
      "MW-1653: status",
      "In Test",
      "Date(2015, 10 ,10, 13, 52)",
      "Date(2015, 10, 13, 13, 20)"
   ],
   [
      "MW-1653: status",
      "Merge Pending",
      "Date(2015, 10 ,13, 13, 20)",
      "Date(2015, 10, 18, 13, 10)"
   ],
   [
      "MW-1653: status",
      "Done",
      "Date(2015, 10 ,18, 13, 10)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1761: assignee",
      "unassigned",
      "Date(2015, 10 ,12, 12, 20)",
      "Date(2015, 10, 12, 13, 4)"
   ],
   [
      "MW-1761: assignee",
      "Paul Trost",
      "Date(2015, 10 ,12, 13, 4)",
      "Date(2015, 10, 12, 13, 13)"
   ],
   [
      "MW-1761: assignee",
      "unassigned",
      "Date(2015, 10 ,12, 13, 13)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1761: status",
      "In Progress",
      "Date(2015, 10 ,12, 9, 21)",
      "Date(2015, 10, 12, 12, 20)"
   ],
   [
      "MW-1761: status",
      "In Review",
      "Date(2015, 10 ,12, 12, 20)",
      "Date(2015, 10, 12, 13, 13)"
   ],
   [
      "MW-1761: status",
      "In Test",
      "Date(2015, 10 ,12, 13, 13)",
      "Date(2015, 10, 13, 13, 20)"
   ],
   [
      "MW-1761: status",
      "Merge Pending",
      "Date(2015, 10 ,13, 13, 20)",
      "Date(2015, 10, 18, 13, 10)"
   ],
   [
      "MW-1761: status",
      "Done",
      "Date(2015, 10 ,18, 13, 10)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1737: assignee",
      "unassigned",
      "Date(2015, 9 ,28, 16, 45)",
      "Date(2015, 10, 10, 13, 46)"
   ],
   [
      "MW-1737: assignee",
      "David Nielson",
      "Date(2015, 10 ,10, 13, 46)",
      "Date(2015, 10, 10, 13, 46)"
   ],
   [
      "MW-1737: assignee",
      "unassigned",
      "Date(2015, 10 ,10, 13, 46)",
      "Date(2015, 10, 10, 13, 46)"
   ],
   [
      "MW-1737: assignee",
      "David Nielson",
      "Date(2015, 10 ,10, 13, 46)",
      "Date(2015, 10, 10, 13, 47)"
   ],
   [
      "MW-1737: assignee",
      "unassigned",
      "Date(2015, 10 ,10, 13, 47)",
      "Date(2015, 10, 13, 13, 48)"
   ],
   [
      "MW-1737: assignee",
      "Paul Trost",
      "Date(2015, 10 ,13, 13, 48)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1737: status",
      "In Review",
      "Date(2015, 10 ,5, 15, 17)",
      "Date(2015, 10, 9, 11, 22)"
   ],
   [
      "MW-1737: status",
      "In Progress",
      "Date(2015, 10 ,9, 11, 22)",
      "Date(2015, 10, 10, 12, 59)"
   ],
   [
      "MW-1737: status",
      "In Review",
      "Date(2015, 10 ,10, 12, 59)",
      "Date(2015, 10, 10, 13, 46)"
   ],
   [
      "MW-1737: status",
      "In Review",
      "Date(2015, 10 ,10, 13, 46)",
      "Date(2015, 10, 10, 13, 47)"
   ],
   [
      "MW-1737: status",
      "In Test",
      "Date(2015, 10 ,10, 13, 47)",
      "Date(2015, 10, 13, 14, 30)"
   ],
   [
      "MW-1737: status",
      "Merge Pending",
      "Date(2015, 10 ,13, 14, 30)",
      "Date(2015, 10, 18, 13, 10)"
   ],
   [
      "MW-1737: status",
      "Done",
      "Date(2015, 10 ,18, 13, 10)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1735: assignee",
      "unassigned",
      "Date(2015, 9 ,28, 16, 45)",
      "Date(2015, 10, 10, 13, 40)"
   ],
   [
      "MW-1735: assignee",
      "David Nielson",
      "Date(2015, 10 ,10, 13, 40)",
      "Date(2015, 10, 10, 13, 40)"
   ],
   [
      "MW-1735: assignee",
      "unassigned",
      "Date(2015, 10 ,10, 13, 40)",
      "Date(2015, 10, 10, 13, 40)"
   ],
   [
      "MW-1735: assignee",
      "David Nielson",
      "Date(2015, 10 ,10, 13, 40)",
      "Date(2015, 10, 10, 13, 40)"
   ],
   [
      "MW-1735: assignee",
      "unassigned",
      "Date(2015, 10 ,10, 13, 40)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1735: status",
      "In Review",
      "Date(2015, 10 ,5, 15, 17)",
      "Date(2015, 10, 9, 11, 22)"
   ],
   [
      "MW-1735: status",
      "In Progress",
      "Date(2015, 10 ,9, 11, 22)",
      "Date(2015, 10, 10, 12, 54)"
   ],
   [
      "MW-1735: status",
      "In Review",
      "Date(2015, 10 ,10, 12, 54)",
      "Date(2015, 10, 10, 13, 40)"
   ],
   [
      "MW-1735: status",
      "In Review",
      "Date(2015, 10 ,10, 13, 40)",
      "Date(2015, 10, 10, 13, 40)"
   ],
   [
      "MW-1735: status",
      "In Review",
      "Date(2015, 10 ,10, 13, 40)",
      "Date(2015, 10, 10, 13, 40)"
   ],
   [
      "MW-1735: status",
      "In Test",
      "Date(2015, 10 ,10, 13, 40)",
      "Date(2015, 10, 13, 14, 41)"
   ],
   [
      "MW-1735: status",
      "Merge Pending",
      "Date(2015, 10 ,13, 14, 41)",
      "Date(2015, 10, 18, 13, 10)"
   ],
   [
      "MW-1735: status",
      "Done",
      "Date(2015, 10 ,18, 13, 10)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1760: assignee",
      "George Baugh",
      "Date(2015, 10 ,12, 12, 23)",
      "Date(2015, 10, 12, 13, 10)"
   ],
   [
      "MW-1760: assignee",
      "unassigned",
      "Date(2015, 10 ,12, 13, 10)",
      "Date(2015, 10, 13, 11, 12)"
   ],
   [
      "MW-1760: assignee",
      "Joshua Brandt",
      "Date(2015, 10 ,13, 11, 12)",
      "Date(2015, 10, 13, 16, 8)"
   ],
   [
      "MW-1760: assignee",
      "unassigned",
      "Date(2015, 10 ,13, 16, 8)",
      "Date(2015, 10, 16, 11, 28)"
   ],
   [
      "MW-1760: assignee",
      "Joshua Brandt",
      "Date(2015, 10 ,16, 11, 28)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1760: status",
      "In Progress",
      "Date(2015, 10 ,12, 12, 22)",
      "Date(2015, 10, 12, 13, 10)"
   ],
   [
      "MW-1760: status",
      "In Review",
      "Date(2015, 10 ,12, 13, 10)",
      "Date(2015, 10, 13, 16, 8)"
   ],
   [
      "MW-1760: status",
      "In Test",
      "Date(2015, 10 ,13, 16, 8)",
      "Date(2015, 10, 16, 13, 34)"
   ],
   [
      "MW-1760: status",
      "Merge Pending",
      "Date(2015, 10 ,16, 13, 34)",
      "Date(2015, 10, 18, 13, 10)"
   ],
   [
      "MW-1760: status",
      "Done",
      "Date(2015, 10 ,18, 13, 10)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1731: assignee",
      "unassigned",
      "Date(2015, 10 ,5, 16, 23)",
      "Date(2015, 10, 10, 12, 1)"
   ],
   [
      "MW-1731: assignee",
      "George Baugh",
      "Date(2015, 10 ,10, 12, 1)",
      "Date(2015, 10, 10, 15, 52)"
   ],
   [
      "MW-1731: assignee",
      "unassigned",
      "Date(2015, 10 ,10, 15, 52)",
      "Date(2015, 10, 11, 7, 54)"
   ],
   [
      "MW-1731: assignee",
      "David Nielson",
      "Date(2015, 10 ,11, 7, 54)",
      "Date(2015, 10, 12, 12, 37)"
   ],
   [
      "MW-1731: assignee",
      "unassigned",
      "Date(2015, 10 ,12, 12, 37)",
      "Date(2015, 10, 13, 11, 12)"
   ],
   [
      "MW-1731: assignee",
      "Joshua Brandt",
      "Date(2015, 10 ,13, 11, 12)",
      "Date(2015, 10, 13, 17, 52)"
   ],
   [
      "MW-1731: assignee",
      "unassigned",
      "Date(2015, 10 ,13, 17, 52)",
      "Date(2015, 10, 16, 13, 34)"
   ],
   [
      "MW-1731: assignee",
      "Joshua Brandt",
      "Date(2015, 10 ,16, 13, 34)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1731: status",
      "In Progress",
      "Date(2015, 9 ,28, 16, 10)",
      "Date(2015, 10, 5, 16, 23)"
   ],
   [
      "MW-1731: status",
      "In Review",
      "Date(2015, 10 ,5, 16, 23)",
      "Date(2015, 10, 9, 11, 22)"
   ],
   [
      "MW-1731: status",
      "In Progress",
      "Date(2015, 10 ,9, 11, 22)",
      "Date(2015, 10, 10, 15, 52)"
   ],
   [
      "MW-1731: status",
      "In Review",
      "Date(2015, 10 ,10, 15, 52)",
      "Date(2015, 10, 13, 16, 3)"
   ],
   [
      "MW-1731: status",
      "In Progress",
      "Date(2015, 10 ,13, 16, 3)",
      "Date(2015, 10, 16, 11, 47)"
   ],
   [
      "MW-1731: status",
      "In Test",
      "Date(2015, 10 ,16, 11, 47)",
      "Date(2015, 10, 16, 13, 59)"
   ],
   [
      "MW-1731: status",
      "Merge Pending",
      "Date(2015, 10 ,16, 13, 59)",
      "Date(2015, 10, 18, 13, 10)"
   ],
   [
      "MW-1731: status",
      "Done",
      "Date(2015, 10 ,18, 13, 10)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1762: assignee",
      "unassigned",
      "Date(2015, 10 ,13, 14, 24)",
      "Date(2015, 10, 13, 16, 9)"
   ],
   [
      "MW-1762: assignee",
      "Joshua Brandt",
      "Date(2015, 10 ,13, 16, 9)",
      "Date(2015, 10, 13, 16, 9)"
   ],
   [
      "MW-1762: assignee",
      "unassigned",
      "Date(2015, 10 ,13, 16, 9)",
      "Date(2015, 10, 16, 14, 1)"
   ],
   [
      "MW-1762: assignee",
      "Joshua Brandt",
      "Date(2015, 10 ,16, 14, 1)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1762: status",
      "In Progress",
      "Date(2015, 10 ,13, 14, 21)",
      "Date(2015, 10, 13, 14, 21)"
   ],
   [
      "MW-1762: status",
      "In Progress",
      "Date(2015, 10 ,13, 14, 21)",
      "Date(2015, 10, 13, 14, 24)"
   ],
   [
      "MW-1762: status",
      "In Review",
      "Date(2015, 10 ,13, 14, 24)",
      "Date(2015, 10, 13, 16, 9)"
   ],
   [
      "MW-1762: status",
      "In Test",
      "Date(2015, 10 ,13, 16, 9)",
      "Date(2015, 10, 16, 14, 6)"
   ],
   [
      "MW-1762: status",
      "Merge Pending",
      "Date(2015, 10 ,16, 14, 6)",
      "Date(2015, 10, 18, 13, 10)"
   ],
   [
      "MW-1762: status",
      "Done",
      "Date(2015, 10 ,18, 13, 10)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1758: assignee",
      "unassigned",
      "Date(2015, 10 ,12, 15, 45)",
      "Date(2015, 10, 13, 11, 12)"
   ],
   [
      "MW-1758: assignee",
      "Joshua Brandt",
      "Date(2015, 10 ,13, 11, 12)",
      "Date(2015, 10, 13, 16, 4)"
   ],
   [
      "MW-1758: assignee",
      "unassigned",
      "Date(2015, 10 ,13, 16, 4)",
      "Date(2015, 10, 16, 7, 45)"
   ],
   [
      "MW-1758: assignee",
      "Paul Trost",
      "Date(2015, 10 ,16, 7, 45)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1758: status",
      "In Progress",
      "Date(2015, 10 ,12, 13, 57)",
      "Date(2015, 10, 12, 15, 45)"
   ],
   [
      "MW-1758: status",
      "In Review",
      "Date(2015, 10 ,12, 15, 45)",
      "Date(2015, 10, 13, 16, 4)"
   ],
   [
      "MW-1758: status",
      "In Test",
      "Date(2015, 10 ,13, 16, 4)",
      "Date(2015, 10, 16, 14, 10)"
   ],
   [
      "MW-1758: status",
      "Merge Pending",
      "Date(2015, 10 ,16, 14, 10)",
      "Date(2015, 10, 18, 13, 10)"
   ],
   [
      "MW-1758: status",
      "Done",
      "Date(2015, 10 ,18, 13, 10)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1738: assignee",
      "unassigned",
      "Date(2015, 9 ,28, 16, 43)",
      "Date(2015, 10, 10, 13, 48)"
   ],
   [
      "MW-1738: assignee",
      "David Nielson",
      "Date(2015, 10 ,10, 13, 48)",
      "Date(2015, 10, 10, 14, 6)"
   ],
   [
      "MW-1738: assignee",
      "unassigned",
      "Date(2015, 10 ,10, 14, 6)",
      "Date(2015, 10, 16, 14, 24)"
   ],
   [
      "MW-1738: assignee",
      "Joshua Brandt",
      "Date(2015, 10 ,16, 14, 24)",
      "Date(2015, 10, 16, 16, 5)"
   ],
   [
      "MW-1738: assignee",
      "unassigned",
      "Date(2015, 10 ,16, 16, 5)",
      "Date(2015, 10, 16, 16, 9)"
   ],
   [
      "MW-1738: assignee",
      "Joshua Brandt",
      "Date(2015, 10 ,16, 16, 9)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1738: status",
      "In Review",
      "Date(2015, 10 ,5, 15, 17)",
      "Date(2015, 10, 9, 11, 22)"
   ],
   [
      "MW-1738: status",
      "In Progress",
      "Date(2015, 10 ,9, 11, 22)",
      "Date(2015, 10, 10, 13, 0)"
   ],
   [
      "MW-1738: status",
      "In Review",
      "Date(2015, 10 ,10, 13, 0)",
      "Date(2015, 10, 10, 14, 6)"
   ],
   [
      "MW-1738: status",
      "In Test",
      "Date(2015, 10 ,10, 14, 6)",
      "Date(2015, 10, 13, 13, 2)"
   ],
   [
      "MW-1738: status",
      "In Progress",
      "Date(2015, 10 ,13, 13, 2)",
      "Date(2015, 10, 16, 14, 22)"
   ],
   [
      "MW-1738: status",
      "In Test",
      "Date(2015, 10 ,16, 14, 22)",
      "Date(2015, 10, 16, 14, 33)"
   ],
   [
      "MW-1738: status",
      "In Progress",
      "Date(2015, 10 ,16, 14, 33)",
      "Date(2015, 10, 16, 16, 5)"
   ],
   [
      "MW-1738: status",
      "In Test",
      "Date(2015, 10 ,16, 16, 5)",
      "Date(2015, 10, 16, 16, 12)"
   ],
   [
      "MW-1738: status",
      "Merge Pending",
      "Date(2015, 10 ,16, 16, 12)",
      "Date(2015, 10, 18, 13, 10)"
   ],
   [
      "MW-1738: status",
      "Done",
      "Date(2015, 10 ,18, 13, 10)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1759: assignee",
      "unassigned",
      "Date(2015, 10 ,18, 14, 26)",
      "Date(2015, 10, 18, 15, 8)"
   ],
   [
      "MW-1759: assignee",
      "Joshua Brandt",
      "Date(2015, 10 ,18, 15, 8)",
      "Date(2015, 10, 18, 15, 9)"
   ],
   [
      "MW-1759: assignee",
      "unassigned",
      "Date(2015, 10 ,18, 15, 9)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1759: status",
      "In Progress",
      "Date(2015, 10 ,16, 14, 23)",
      "Date(2015, 10, 18, 14, 26)"
   ],
   [
      "MW-1759: status",
      "In Review",
      "Date(2015, 10 ,18, 14, 26)",
      "Date(2015, 10, 18, 15, 9)"
   ],
   [
      "MW-1759: status",
      "In Review",
      "Date(2015, 10 ,18, 15, 9)",
      "Date(2015, 10, 18, 15, 14)"
   ],
   [
      "MW-1759: status",
      "In Test",
      "Date(2015, 10 ,18, 15, 14)",
      "Date(2015, 10, 18, 16, 23)"
   ],
   [
      "MW-1759: status",
      "Merge Pending",
      "Date(2015, 10 ,18, 16, 23)",
      "Date(2015, 10, 19, 9, 33)"
   ],
   [
      "MW-1759: status",
      "Done",
      "Date(2015, 10 ,19, 9, 33)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1763: assignee",
      "George Baugh",
      "Date(2015, 10 ,18, 13, 11)",
      "Date(2015, 10, 18, 15, 8)"
   ],
   [
      "MW-1763: assignee",
      "unassigned",
      "Date(2015, 10 ,18, 15, 8)",
      "Date(2015, 10, 18, 15, 9)"
   ],
   [
      "MW-1763: assignee",
      "Joshua Brandt",
      "Date(2015, 10 ,18, 15, 9)",
      "Date(2015, 10, 18, 15, 14)"
   ],
   [
      "MW-1763: assignee",
      "unassigned",
      "Date(2015, 10 ,18, 15, 14)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1763: status",
      "In Progress",
      "Date(2015, 10 ,16, 10, 4)",
      "Date(2015, 10, 18, 15, 8)"
   ],
   [
      "MW-1763: status",
      "In Review",
      "Date(2015, 10 ,18, 15, 8)",
      "Date(2015, 10, 18, 15, 14)"
   ],
   [
      "MW-1763: status",
      "In Test",
      "Date(2015, 10 ,18, 15, 14)",
      "Date(2015, 10, 18, 16, 28)"
   ],
   [
      "MW-1763: status",
      "Merge Pending",
      "Date(2015, 10 ,18, 16, 28)",
      "Date(2015, 10, 19, 9, 33)"
   ],
   [
      "MW-1763: status",
      "Done",
      "Date(2015, 10 ,19, 9, 33)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1764: assignee",
      "unassigned",
      "Date(2015, 10 ,19, 12, 55)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1764: status",
      "In Progress",
      "Date(2015, 10 ,19, 9, 27)",
      "Date(2015, 10, 19, 12, 55)"
   ],
   [
      "MW-1764: status",
      "In Review",
      "Date(2015, 10 ,19, 12, 55)",
      "Date(2015, 10, 19, 13, 5)"
   ],
   [
      "MW-1764: status",
      "In Test",
      "Date(2015, 10 ,19, 13, 5)",
      "Date(2015, 10, 19, 14, 9)"
   ],
   [
      "MW-1764: status",
      "Merge Pending",
      "Date(2015, 10 ,19, 14, 9)",
      "Date(2015, 10, 20, 9, 20)"
   ],
   [
      "MW-1764: status",
      "Done",
      "Date(2015, 10 ,20, 9, 20)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1765: assignee",
      "unassigned",
      "Date(2015, 10 ,19, 10, 46)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1765: status",
      "In Progress",
      "Date(2015, 10 ,19, 10, 41)",
      "Date(2015, 10, 19, 10, 46)"
   ],
   [
      "MW-1765: status",
      "In Review",
      "Date(2015, 10 ,19, 10, 46)",
      "Date(2015, 10, 19, 12, 0)"
   ],
   [
      "MW-1765: status",
      "In Test",
      "Date(2015, 10 ,19, 12, 0)",
      "Date(2015, 10, 19, 15, 20)"
   ],
   [
      "MW-1765: status",
      "Merge Pending",
      "Date(2015, 10 ,19, 15, 20)",
      "Date(2015, 10, 20, 9, 20)"
   ],
   [
      "MW-1765: status",
      "Done",
      "Date(2015, 10 ,20, 9, 20)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1766: status",
      "In Progress",
      "Date(2015, 10 ,20, 9, 20)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "MW-1767: status",
      "In Progress",
      "Date(2015, 10 ,20, 10, 37)",
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
    var Container = document.getElementById("chart-div_MW-1558");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}