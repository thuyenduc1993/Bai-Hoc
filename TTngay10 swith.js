let name = prompt('Enter browser name');
 switch (name==='Edge') {
     case 'Edge':
         alert("You've got the Edge");
         break
     case'Firefox':
     case'Safari' :
     case'Chrome':
     case'Opera':
         alert("'Okay we support these browsers too'");
         break
     default:
         alert("We hope that this page looks ok");
 }