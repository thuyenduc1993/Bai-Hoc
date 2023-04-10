import {ComparableCircle} from "./ComparableCircle";
let circles = [];

 circles[0] = new ComparableCircle(2);
 circles[1] = new ComparableCircle(6);
 circles[2]= new ComparableCircle(8);


let result = circles[2].compareTo(circles[1]);

if(result == 1){
    console.log("The current circle is larger.");
}else{
    console.log("The current circle is smaller.");
}