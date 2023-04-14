import {Patient} from "./Patient";
import {Queue} from "./Queue.";


let patient = new Patient('Smith',5);
let patient1 = new Patient(' Jones',4);
let patient2 = new Patient('Fehrenbach',6);
let patient3 = new Patient('Brown',1);
let patient4 = new Patient('Ingram',1);

let queue = new Queue();
queue.enqueue(patient);
queue.enqueue(patient1);
queue.enqueue(patient2);
queue.enqueue(patient3);
queue.enqueue(patient4);

queue.sortPatient();
console.table(queue.patientExamined());
console.table(queue.container)
console.table(queue.patientExamined());
console.table(queue.container);

// // queue.patientExamined();
//
// console.table(queue)