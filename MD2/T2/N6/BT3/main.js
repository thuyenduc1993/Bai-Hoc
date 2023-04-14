"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Patient_1 = require("./Patient");
var Queue_1 = require("./Queue.");
var patient = new Patient_1.Patient('Smith', 5);
var patient1 = new Patient_1.Patient(' Jones', 4);
var patient2 = new Patient_1.Patient('Fehrenbach', 6);
var patient3 = new Patient_1.Patient('Brown', 1);
var patient4 = new Patient_1.Patient('Ingram', 1);
var queue = new Queue_1.Queue();
queue.enqueue(patient);
queue.enqueue(patient1);
queue.enqueue(patient2);
queue.enqueue(patient3);
queue.enqueue(patient4);
queue.sortPatient();
console.table(queue.patientExamined());
console.table(queue.container);
console.table(queue.patientExamined());
console.table(queue.container);
// // queue.patientExamined();
//
// console.table(queue)
