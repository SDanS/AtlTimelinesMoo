
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
   ],
   [
      "OPRAH-1965: assignee",
      "George Bohnisch",
      "Date(2015, 11 ,21, 9, 1)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1965: status",
      "In Progress",
      "Date(2015, 11 ,22, 12, 38)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1963: assignee",
      "Ross Steiner",
      "Date(2015, 11 ,21, 8, 58)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1963: status",
      "In Progress",
      "Date(2015, 11 ,21, 9, 1)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1961: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,21, 11, 3)",
      "Date(2015, 11, 21, 11, 33)"
   ],
   [
      "OPRAH-1961: assignee",
      "unassigned",
      "Date(2015, 11 ,21, 11, 33)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1961: status",
      "In Progress",
      "Date(2015, 11 ,21, 11, 3)",
      "Date(2015, 11, 21, 11, 33)"
   ],
   [
      "OPRAH-1961: status",
      "In Review",
      "Date(2015, 11 ,21, 11, 33)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1960: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,18, 11, 48)",
      "Date(2015, 11, 18, 11, 48)"
   ],
   [
      "OPRAH-1960: assignee",
      "unassigned",
      "Date(2015, 11 ,18, 11, 48)",
      "Date(2015, 11, 21, 10, 43)"
   ],
   [
      "OPRAH-1960: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,21, 10, 43)",
      "Date(2015, 11, 21, 11, 31)"
   ],
   [
      "OPRAH-1960: assignee",
      "unassigned",
      "Date(2015, 11 ,21, 11, 31)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1960: status",
      "To Do",
      "Date(2015, 11 ,18, 11, 48)",
      "Date(2015, 11, 21, 11, 3)"
   ],
   [
      "OPRAH-1960: status",
      "In Progress",
      "Date(2015, 11 ,21, 11, 3)",
      "Date(2015, 11, 21, 11, 31)"
   ],
   [
      "OPRAH-1960: status",
      "In Review",
      "Date(2015, 11 ,21, 11, 31)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1959: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,21, 11, 36)",
      "Date(2015, 11, 21, 11, 46)"
   ],
   [
      "OPRAH-1959: assignee",
      "unassigned",
      "Date(2015, 11 ,21, 11, 46)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1959: status",
      "In Progress",
      "Date(2015, 11 ,18, 11, 45)",
      "Date(2015, 11, 18, 11, 48)"
   ],
   [
      "OPRAH-1959: status",
      "To Do",
      "Date(2015, 11 ,18, 11, 48)",
      "Date(2015, 11, 21, 11, 36)"
   ],
   [
      "OPRAH-1959: status",
      "In Progress",
      "Date(2015, 11 ,21, 11, 36)",
      "Date(2015, 11, 21, 11, 46)"
   ],
   [
      "OPRAH-1959: status",
      "In Review",
      "Date(2015, 11 ,21, 11, 46)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1958: assignee",
      "unassigned",
      "Date(2015, 11 ,18, 11, 48)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1958: status",
      "In Progress",
      "Date(2015, 11 ,18, 11, 45)",
      "Date(2015, 11, 18, 11, 48)"
   ],
   [
      "OPRAH-1958: status",
      "To Do",
      "Date(2015, 11 ,18, 11, 48)",
      "Date(2015, 11, 21, 11, 35)"
   ],
   [
      "OPRAH-1958: status",
      "In Progress",
      "Date(2015, 11 ,21, 11, 35)",
      "Date(2015, 11, 21, 11, 45)"
   ],
   [
      "OPRAH-1958: status",
      "In Review",
      "Date(2015, 11 ,21, 11, 45)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1957: status",
      "In Review",
      "Date(2015, 11 ,22, 11, 8)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1956: assignee",
      "George Bohnisch",
      "Date(2015, 11 ,22, 11, 8)",
      "Date(2015, 11, 31, 0, 0)"
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
      "OPRAH-1952: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,21, 10, 43)",
      "Date(2015, 11, 21, 11, 1)"
   ],
   [
      "OPRAH-1952: assignee",
      "unassigned",
      "Date(2015, 11 ,21, 11, 1)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1952: status",
      "In Progress",
      "Date(2015, 11 ,18, 11, 15)",
      "Date(2015, 11, 18, 11, 49)"
   ],
   [
      "OPRAH-1952: status",
      "To Do",
      "Date(2015, 11 ,18, 11, 49)",
      "Date(2015, 11, 21, 10, 43)"
   ],
   [
      "OPRAH-1952: status",
      "In Progress",
      "Date(2015, 11 ,21, 10, 43)",
      "Date(2015, 11, 21, 11, 1)"
   ],
   [
      "OPRAH-1952: status",
      "In Review",
      "Date(2015, 11 ,21, 11, 1)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1951: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,18, 10, 53)",
      "Date(2015, 11, 18, 11, 49)"
   ],
   [
      "OPRAH-1951: assignee",
      "unassigned",
      "Date(2015, 11 ,18, 11, 49)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1951: status",
      "In Progress",
      "Date(2015, 11 ,18, 11, 15)",
      "Date(2015, 11, 18, 11, 49)"
   ],
   [
      "OPRAH-1951: status",
      "To Do",
      "Date(2015, 11 ,18, 11, 49)",
      "Date(2015, 11, 21, 10, 43)"
   ],
   [
      "OPRAH-1951: status",
      "In Progress",
      "Date(2015, 11 ,21, 10, 43)",
      "Date(2015, 11, 21, 10, 59)"
   ],
   [
      "OPRAH-1951: status",
      "In Review",
      "Date(2015, 11 ,21, 10, 59)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1950: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,18, 12, 24)",
      "Date(2015, 11, 21, 10, 35)"
   ],
   [
      "OPRAH-1950: assignee",
      "unassigned",
      "Date(2015, 11 ,21, 10, 35)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1950: status",
      "In Progress",
      "Date(2015, 11 ,18, 11, 14)",
      "Date(2015, 11, 18, 11, 49)"
   ],
   [
      "OPRAH-1950: status",
      "To Do",
      "Date(2015, 11 ,18, 11, 49)",
      "Date(2015, 11, 18, 12, 24)"
   ],
   [
      "OPRAH-1950: status",
      "In Progress",
      "Date(2015, 11 ,18, 12, 24)",
      "Date(2015, 11, 21, 10, 35)"
   ],
   [
      "OPRAH-1950: status",
      "In Review",
      "Date(2015, 11 ,21, 10, 35)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1948: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,18, 10, 53)",
      "Date(2015, 11, 18, 11, 49)"
   ],
   [
      "OPRAH-1948: assignee",
      "unassigned",
      "Date(2015, 11 ,18, 11, 49)",
      "Date(2015, 11, 18, 12, 24)"
   ],
   [
      "OPRAH-1948: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,18, 12, 24)",
      "Date(2015, 11, 21, 10, 34)"
   ],
   [
      "OPRAH-1948: assignee",
      "unassigned",
      "Date(2015, 11 ,21, 10, 34)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1948: status",
      "In Progress",
      "Date(2015, 11 ,18, 11, 14)",
      "Date(2015, 11, 18, 11, 49)"
   ],
   [
      "OPRAH-1948: status",
      "To Do",
      "Date(2015, 11 ,18, 11, 49)",
      "Date(2015, 11, 18, 12, 24)"
   ],
   [
      "OPRAH-1948: status",
      "In Progress",
      "Date(2015, 11 ,18, 12, 24)",
      "Date(2015, 11, 21, 10, 34)"
   ],
   [
      "OPRAH-1948: status",
      "In Review",
      "Date(2015, 11 ,21, 10, 34)",
      "Date(2015, 11, 31, 0, 0)"
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
   ],
   [
      "OPRAH-1944: status",
      "In Progress",
      "Date(2015, 11 ,18, 8, 39)",
      "Date(2015, 11, 18, 8, 39)"
   ],
   [
      "OPRAH-1944: status",
      "To Do",
      "Date(2015, 11 ,18, 8, 39)",
      "Date(2015, 11, 18, 8, 40)"
   ],
   [
      "OPRAH-1944: status",
      "In Progress",
      "Date(2015, 11 ,18, 8, 40)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1943: assignee",
      "George Bohnisch",
      "Date(2015, 11 ,18, 10, 43)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1941: assignee",
      "George Bohnisch",
      "Date(2015, 11 ,18, 8, 30)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1941: status",
      "In Progress",
      "Date(2015, 11 ,18, 11, 11)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1940: assignee",
      "George Bohnisch",
      "Date(2015, 11 ,18, 9, 8)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1940: status",
      "In Progress",
      "Date(2015, 11 ,21, 12, 37)",
      "Date(2015, 11, 31, 0, 0)"
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
   ],
   [
      "OPRAH-1935: status",
      "In Review",
      "Date(2015, 11 ,17, 12, 5)",
      "Date(2015, 11, 17, 12, 6)"
   ],
   [
      "OPRAH-1935: status",
      "In Test",
      "Date(2015, 11 ,17, 12, 6)",
      "Date(2015, 11, 17, 13, 7)"
   ],
   [
      "OPRAH-1935: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 13, 7)",
      "Date(2015, 11, 17, 13, 32)"
   ],
   [
      "OPRAH-1935: status",
      "Done",
      "Date(2015, 11 ,17, 13, 32)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1934: assignee",
      "Ross Steiner",
      "Date(2015, 11 ,17, 11, 37)",
      "Date(2015, 11, 17, 12, 2)"
   ],
   [
      "OPRAH-1934: assignee",
      "unassigned",
      "Date(2015, 11 ,17, 12, 2)",
      "Date(2015, 11, 17, 12, 4)"
   ],
   [
      "OPRAH-1934: assignee",
      "Ross Steiner",
      "Date(2015, 11 ,17, 12, 4)",
      "Date(2015, 11, 17, 12, 7)"
   ],
   [
      "OPRAH-1934: assignee",
      "unassigned",
      "Date(2015, 11 ,17, 12, 7)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1934: status",
      "In Progress",
      "Date(2015, 11 ,17, 11, 37)",
      "Date(2015, 11, 17, 12, 2)"
   ],
   [
      "OPRAH-1934: status",
      "In Review",
      "Date(2015, 11 ,17, 12, 2)",
      "Date(2015, 11, 17, 12, 7)"
   ],
   [
      "OPRAH-1934: status",
      "In Test",
      "Date(2015, 11 ,17, 12, 7)",
      "Date(2015, 11, 17, 13, 7)"
   ],
   [
      "OPRAH-1934: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 13, 7)",
      "Date(2015, 11, 17, 13, 32)"
   ],
   [
      "OPRAH-1934: status",
      "Done",
      "Date(2015, 11 ,17, 13, 32)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1933: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,17, 8, 45)",
      "Date(2015, 11, 17, 13, 22)"
   ],
   [
      "OPRAH-1933: assignee",
      "unassigned",
      "Date(2015, 11 ,17, 13, 22)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1933: status",
      "In Review",
      "Date(2015, 11 ,16, 13, 34)",
      "Date(2015, 11, 17, 13, 22)"
   ],
   [
      "OPRAH-1933: status",
      "In Test",
      "Date(2015, 11 ,17, 13, 22)",
      "Date(2015, 11, 18, 13, 44)"
   ],
   [
      "OPRAH-1933: status",
      "Ready to Merge",
      "Date(2015, 11 ,18, 13, 44)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1931: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,16, 9, 12)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1930: assignee",
      "Charles Larry",
      "Date(2015, 11 ,16, 9, 8)",
      "Date(2015, 11, 16, 13, 33)"
   ],
   [
      "OPRAH-1930: assignee",
      "unassigned",
      "Date(2015, 11 ,16, 13, 33)",
      "Date(2015, 11, 17, 8, 45)"
   ],
   [
      "OPRAH-1930: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,17, 8, 45)",
      "Date(2015, 11, 17, 11, 19)"
   ],
   [
      "OPRAH-1930: assignee",
      "unassigned",
      "Date(2015, 11 ,17, 11, 19)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1930: status",
      "In Progress",
      "Date(2015, 11 ,16, 9, 8)",
      "Date(2015, 11, 16, 13, 33)"
   ],
   [
      "OPRAH-1930: status",
      "In Review",
      "Date(2015, 11 ,16, 13, 33)",
      "Date(2015, 11, 17, 11, 19)"
   ],
   [
      "OPRAH-1930: status",
      "In Test",
      "Date(2015, 11 ,17, 11, 19)",
      "Date(2015, 11, 18, 13, 44)"
   ],
   [
      "OPRAH-1930: status",
      "Ready to Merge",
      "Date(2015, 11 ,18, 13, 44)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1929: assignee",
      "George Bohnisch",
      "Date(2015, 11 ,14, 10, 48)",
      "Date(2015, 11, 16, 14, 23)"
   ],
   [
      "OPRAH-1929: assignee",
      "unassigned",
      "Date(2015, 11 ,16, 14, 23)",
      "Date(2015, 11, 17, 8, 45)"
   ],
   [
      "OPRAH-1929: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,17, 8, 45)",
      "Date(2015, 11, 17, 10, 23)"
   ],
   [
      "OPRAH-1929: assignee",
      "unassigned",
      "Date(2015, 11 ,17, 10, 23)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1929: status",
      "In Progress",
      "Date(2015, 11 ,14, 13, 24)",
      "Date(2015, 11, 16, 14, 23)"
   ],
   [
      "OPRAH-1929: status",
      "In Review",
      "Date(2015, 11 ,16, 14, 23)",
      "Date(2015, 11, 17, 10, 23)"
   ],
   [
      "OPRAH-1929: status",
      "In Test",
      "Date(2015, 11 ,17, 10, 23)",
      "Date(2015, 11, 17, 15, 35)"
   ],
   [
      "OPRAH-1929: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 15, 35)",
      "Date(2015, 11, 21, 8, 54)"
   ],
   [
      "OPRAH-1929: status",
      "Done",
      "Date(2015, 11 ,21, 8, 54)",
      "Date(2015, 11, 31, 0, 0)"
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
   ],
   [
      "OPRAH-1926: assignee",
      "Charles Larry",
      "Date(2015, 11 ,14, 10, 25)",
      "Date(2015, 11, 15, 11, 6)"
   ],
   [
      "OPRAH-1926: assignee",
      "unassigned",
      "Date(2015, 11 ,15, 11, 6)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1926: status",
      "In Progress",
      "Date(2015, 11 ,14, 10, 27)",
      "Date(2015, 11, 15, 11, 6)"
   ],
   [
      "OPRAH-1926: status",
      "In Test",
      "Date(2015, 11 ,15, 11, 6)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1925: assignee",
      "George Bohnisch",
      "Date(2015, 11 ,14, 10, 48)",
      "Date(2015, 11, 16, 13, 19)"
   ],
   [
      "OPRAH-1925: assignee",
      "unassigned",
      "Date(2015, 11 ,16, 13, 19)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1925: status",
      "In Progress",
      "Date(2015, 11 ,14, 13, 25)",
      "Date(2015, 11, 16, 13, 19)"
   ],
   [
      "OPRAH-1925: status",
      "In Review",
      "Date(2015, 11 ,16, 13, 19)",
      "Date(2015, 11, 18, 9, 19)"
   ],
   [
      "OPRAH-1925: status",
      "In Test",
      "Date(2015, 11 ,18, 9, 19)",
      "Date(2015, 11, 18, 16, 39)"
   ],
   [
      "OPRAH-1925: status",
      "Ready to Merge",
      "Date(2015, 11 ,18, 16, 39)",
      "Date(2015, 11, 21, 8, 51)"
   ],
   [
      "OPRAH-1925: status",
      "Done",
      "Date(2015, 11 ,21, 8, 51)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1924: assignee",
      "Ross Steiner",
      "Date(2015, 11 ,21, 8, 57)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1924: status",
      "In Progress",
      "Date(2015, 11 ,21, 9, 2)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1923: assignee",
      "George Bohnisch",
      "Date(2015, 11 ,18, 10, 42)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1922: assignee",
      "Charles Larry",
      "Date(2015, 11 ,11, 12, 53)",
      "Date(2015, 11, 11, 13, 5)"
   ],
   [
      "OPRAH-1922: assignee",
      "unassigned",
      "Date(2015, 11 ,11, 13, 5)",
      "Date(2015, 11, 14, 10, 46)"
   ],
   [
      "OPRAH-1922: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,14, 10, 46)",
      "Date(2015, 11, 14, 11, 2)"
   ],
   [
      "OPRAH-1922: assignee",
      "unassigned",
      "Date(2015, 11 ,14, 11, 2)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1922: status",
      "In Progress",
      "Date(2015, 11 ,11, 12, 53)",
      "Date(2015, 11, 11, 13, 5)"
   ],
   [
      "OPRAH-1922: status",
      "In Review",
      "Date(2015, 11 ,11, 13, 5)",
      "Date(2015, 11, 14, 11, 2)"
   ],
   [
      "OPRAH-1922: status",
      "In Test",
      "Date(2015, 11 ,14, 11, 2)",
      "Date(2015, 11, 17, 13, 39)"
   ],
   [
      "OPRAH-1922: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 13, 39)",
      "Date(2015, 11, 17, 13, 46)"
   ],
   [
      "OPRAH-1922: status",
      "Done",
      "Date(2015, 11 ,17, 13, 46)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1921: assignee",
      "Charles Larry",
      "Date(2015, 11 ,11, 12, 40)",
      "Date(2015, 11, 11, 12, 45)"
   ],
   [
      "OPRAH-1921: assignee",
      "unassigned",
      "Date(2015, 11 ,11, 12, 45)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1921: status",
      "In Review",
      "Date(2015, 11 ,11, 12, 45)",
      "Date(2015, 11, 14, 10, 36)"
   ],
   [
      "OPRAH-1921: status",
      "In Test",
      "Date(2015, 11 ,14, 10, 36)",
      "Date(2015, 11, 17, 15, 9)"
   ],
   [
      "OPRAH-1921: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 15, 9)",
      "Date(2015, 11, 18, 8, 34)"
   ],
   [
      "OPRAH-1921: status",
      "Done",
      "Date(2015, 11 ,18, 8, 34)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1920: assignee",
      "Charles Larry",
      "Date(2015, 11 ,11, 12, 14)",
      "Date(2015, 11, 11, 12, 37)"
   ],
   [
      "OPRAH-1920: assignee",
      "unassigned",
      "Date(2015, 11 ,11, 12, 37)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1920: status",
      "In Review",
      "Date(2015, 11 ,11, 12, 37)",
      "Date(2015, 11, 14, 10, 36)"
   ],
   [
      "OPRAH-1920: status",
      "In Test",
      "Date(2015, 11 ,14, 10, 36)",
      "Date(2015, 11, 17, 15, 10)"
   ],
   [
      "OPRAH-1920: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 15, 10)",
      "Date(2015, 11, 18, 8, 34)"
   ],
   [
      "OPRAH-1920: status",
      "Done",
      "Date(2015, 11 ,18, 8, 34)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1918: assignee",
      "Charles Larry",
      "Date(2015, 11 ,11, 12, 40)",
      "Date(2015, 11, 11, 12, 44)"
   ],
   [
      "OPRAH-1918: assignee",
      "unassigned",
      "Date(2015, 11 ,11, 12, 44)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1918: status",
      "In Progress",
      "Date(2015, 11 ,11, 12, 40)",
      "Date(2015, 11, 11, 12, 44)"
   ],
   [
      "OPRAH-1918: status",
      "In Review",
      "Date(2015, 11 ,11, 12, 44)",
      "Date(2015, 11, 11, 12, 46)"
   ],
   [
      "OPRAH-1918: status",
      "In Review",
      "Date(2015, 11 ,11, 12, 46)",
      "Date(2015, 11, 14, 10, 36)"
   ],
   [
      "OPRAH-1918: status",
      "In Test",
      "Date(2015, 11 ,14, 10, 36)",
      "Date(2015, 11, 17, 15, 9)"
   ],
   [
      "OPRAH-1918: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 15, 9)",
      "Date(2015, 11, 18, 8, 34)"
   ],
   [
      "OPRAH-1918: status",
      "Done",
      "Date(2015, 11 ,18, 8, 34)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1917: status",
      "In Progress",
      "Date(2015, 11 ,11, 11, 22)",
      "Date(2015, 11, 11, 11, 23)"
   ],
   [
      "OPRAH-1917: status",
      "In Progress",
      "Date(2015, 11 ,11, 11, 23)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1916: status",
      "In Progress",
      "Date(2015, 11 ,16, 9, 8)",
      "Date(2015, 11, 16, 13, 31)"
   ],
   [
      "OPRAH-1916: status",
      "In Review",
      "Date(2015, 11 ,16, 13, 31)",
      "Date(2015, 11, 16, 13, 34)"
   ],
   [
      "OPRAH-1916: status",
      "In Review",
      "Date(2015, 11 ,16, 13, 34)",
      "Date(2015, 11, 17, 10, 38)"
   ],
   [
      "OPRAH-1916: status",
      "In Review",
      "Date(2015, 11 ,17, 10, 38)",
      "Date(2015, 11, 17, 13, 22)"
   ],
   [
      "OPRAH-1916: status",
      "In Test",
      "Date(2015, 11 ,17, 13, 22)",
      "Date(2015, 11, 18, 13, 44)"
   ],
   [
      "OPRAH-1916: status",
      "Ready to Merge",
      "Date(2015, 11 ,18, 13, 44)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1915: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,16, 9, 2)",
      "Date(2015, 11, 16, 10, 12)"
   ],
   [
      "OPRAH-1915: assignee",
      "unassigned",
      "Date(2015, 11 ,16, 10, 12)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1915: status",
      "In Review",
      "Date(2015, 11 ,16, 9, 2)",
      "Date(2015, 11, 16, 10, 16)"
   ],
   [
      "OPRAH-1915: status",
      "In Test",
      "Date(2015, 11 ,16, 10, 16)",
      "Date(2015, 11, 17, 12, 9)"
   ],
   [
      "OPRAH-1915: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 12, 9)",
      "Date(2015, 11, 17, 12, 9)"
   ],
   [
      "OPRAH-1915: status",
      "In Test",
      "Date(2015, 11 ,17, 12, 9)",
      "Date(2015, 11, 17, 14, 2)"
   ],
   [
      "OPRAH-1915: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 14, 2)",
      "Date(2015, 11, 18, 8, 33)"
   ],
   [
      "OPRAH-1915: status",
      "Done",
      "Date(2015, 11 ,18, 8, 33)",
      "Date(2015, 11, 31, 0, 0)"
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
   ],
   [
      "OPRAH-1912: assignee",
      "Charles Larry",
      "Date(2015, 11 ,10, 12, 54)",
      "Date(2015, 11, 11, 11, 31)"
   ],
   [
      "OPRAH-1912: assignee",
      "unassigned",
      "Date(2015, 11 ,11, 11, 31)",
      "Date(2015, 11, 14, 10, 46)"
   ],
   [
      "OPRAH-1912: assignee",
      "Robert Schaber",
      "Date(2015, 11 ,14, 10, 46)",
      "Date(2015, 11, 14, 10, 58)"
   ],
   [
      "OPRAH-1912: assignee",
      "unassigned",
      "Date(2015, 11 ,14, 10, 58)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1912: status",
      "In Progress",
      "Date(2015, 11 ,10, 12, 54)",
      "Date(2015, 11, 11, 11, 31)"
   ],
   [
      "OPRAH-1912: status",
      "In Review",
      "Date(2015, 11 ,11, 11, 31)",
      "Date(2015, 11, 14, 10, 58)"
   ],
   [
      "OPRAH-1912: status",
      "In Test",
      "Date(2015, 11 ,14, 10, 58)",
      "Date(2015, 11, 17, 13, 43)"
   ],
   [
      "OPRAH-1912: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 13, 43)",
      "Date(2015, 11, 17, 13, 59)"
   ],
   [
      "OPRAH-1912: status",
      "Done",
      "Date(2015, 11 ,17, 13, 59)",
      "Date(2015, 11, 31, 0, 0)"
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
   ],
   [
      "OPRAH-1910: assignee",
      "Charles Larry",
      "Date(2015, 11 ,10, 11, 7)",
      "Date(2015, 11, 10, 11, 9)"
   ],
   [
      "OPRAH-1910: assignee",
      "unassigned",
      "Date(2015, 11 ,10, 11, 9)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1910: status",
      "In Review",
      "Date(2015, 11 ,10, 11, 9)",
      "Date(2015, 11, 14, 10, 45)"
   ],
   [
      "OPRAH-1910: status",
      "In Test",
      "Date(2015, 11 ,14, 10, 45)",
      "Date(2015, 11, 17, 13, 47)"
   ],
   [
      "OPRAH-1910: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 13, 47)",
      "Date(2015, 11, 17, 13, 57)"
   ],
   [
      "OPRAH-1910: status",
      "Done",
      "Date(2015, 11 ,17, 13, 57)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1909: assignee",
      "Charles Larry",
      "Date(2015, 11 ,10, 11, 7)",
      "Date(2015, 11, 10, 11, 9)"
   ],
   [
      "OPRAH-1909: assignee",
      "unassigned",
      "Date(2015, 11 ,10, 11, 9)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1909: status",
      "In Review",
      "Date(2015, 11 ,10, 11, 9)",
      "Date(2015, 11, 14, 10, 45)"
   ],
   [
      "OPRAH-1909: status",
      "In Test",
      "Date(2015, 11 ,14, 10, 45)",
      "Date(2015, 11, 17, 13, 47)"
   ],
   [
      "OPRAH-1909: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 13, 47)",
      "Date(2015, 11, 17, 13, 57)"
   ],
   [
      "OPRAH-1909: status",
      "Done",
      "Date(2015, 11 ,17, 13, 57)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1908: status",
      "In Review",
      "Date(2015, 11 ,10, 8, 28)",
      "Date(2015, 11, 14, 10, 34)"
   ],
   [
      "OPRAH-1908: status",
      "In Test",
      "Date(2015, 11 ,14, 10, 34)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1907: assignee",
      "Charles Larry",
      "Date(2015, 11 ,11, 7, 16)",
      "Date(2015, 11, 15, 13, 0)"
   ],
   [
      "OPRAH-1907: assignee",
      "unassigned",
      "Date(2015, 11 ,15, 13, 0)",
      "Date(2015, 11, 31, 0, 0)"
   ],
   [
      "OPRAH-1907: status",
      "In Progress",
      "Date(2015, 11 ,14, 13, 46)",
      "Date(2015, 11, 15, 13, 0)"
   ],
   [
      "OPRAH-1907: status",
      "In Review",
      "Date(2015, 11 ,15, 13, 0)",
      "Date(2015, 11, 16, 10, 16)"
   ],
   [
      "OPRAH-1907: status",
      "In Test",
      "Date(2015, 11 ,16, 10, 16)",
      "Date(2015, 11, 17, 14, 2)"
   ],
   [
      "OPRAH-1907: status",
      "Ready to Merge",
      "Date(2015, 11 ,17, 14, 2)",
      "Date(2015, 11, 18, 8, 33)"
   ],
   [
      "OPRAH-1907: status",
      "Done",
      "Date(2015, 11 ,18, 8, 33)",
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
    var Container = document.getElementById("combined_chart_div");
    var chart = new google.visualization.Timeline(Container);


    chart.draw(view, options);
}