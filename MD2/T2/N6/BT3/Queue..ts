import {Patient} from "./Patient";
export class Queue {
    container : Patient[] = [];
    container1 : Patient[] = [];
    constructor() {
    }
    enqueue(item:Patient){
        return this.container.push(item);
    }
    dequeue(){
        return this.container.shift();
    }
    sortPatient(){
         this.container.sort((a:Patient, b:Patient) =>{
            return a.getCode() - b.getCode();
        })
    }
    patientExamined(){
        this.container1.push(this.container.shift())
        return this.container1
    }
    nextPatient(){
        return this.container[0];
    }

}