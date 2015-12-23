
 for (index = 0; index < document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline').length; index++) {  
    var colors = {
      'In Progress': 'darkcyan',
      'In Review': 'dodgerblue',
      'To Do': 'gray',
      'In Test': 'darkblue',
      'Merge Pending': 'slateblue',
      'Done': 'indigo'
    };
    if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/In Progress/mg)) {
      document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor = "darkcyan";
    }
    if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/In Review/mg)) {
      document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
        = "dodgerblue";
    }
    if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/To Do/mg)) {
      document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
        = "gray";
    }
    if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/In Test/mg)) {
      document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
        = "darkblue";
    }
    if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Merge Pending/mg)) {
      document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
        = "slateblue";
    }
    if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Ready To Accept/img)) {
      document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
        = "slateblue";
    }
    if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Ready to Merge/img)) {
      document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
        = "slateblue";
    }    if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Done/mg)) {
      document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
        = "indigo";
    }
    if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Assignee.*/mg)) {
      document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
        = "seagreen";
    }  
    if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Assignee: unassigned/mg)) {
      document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
        = "indianred";
    }  
    if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Comment/mg)) {
      document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
        = "olivedrab";
    }    
    if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Summary/mg)) {
      document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
        = "palevioletred";
    }             
    if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Description/mg)) {
      document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
        = "palevioletred";
    } 
    if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Story Points/mg)) {
      document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
        = "palevioletred";
    }
    if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Priority/mg)) {
      document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
        = "plum";
    }   
    if (document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small h2.tl-headline')[index].innerHTML.match(/Issuetype/mg)) {
      document.querySelectorAll('div.tl-timemarker-content-container.tl-timemarker-content-container-small')[index].style.backgroundColor 
        = "plum";
    }
  }
  var arr = document.querySelectorAll('div.tl-timegroup');
  for (index = 0; index < arr.length; index++) {
    if ( arr[index].className.match(/tl-timegroup$/) ) {
      arr[index].style.backgroundColor = "lightgray";
    }
  }
  var arr2 = document.querySelectorAll('div.tl-timegroup-message');
  for (index = 0; index < arr2.length; index++) {
      arr2[index].style.color = "gray";
  }
  