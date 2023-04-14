import {StudentScore} from "./StudentScore";

let studentScore = new StudentScore();
studentScore.insertFirst("BVD",8);
studentScore.insertFirst("BVD1",9);
studentScore.insertFirst("BVD4",3);
studentScore.insertLast("BVD2",7);
studentScore.insertLast("BVD3",6);
console.log(studentScore.getSize());
console.log(studentScore.showList());