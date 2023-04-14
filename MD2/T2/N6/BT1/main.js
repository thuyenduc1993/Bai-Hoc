"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
var Queue_1 = require("./Queue");
function check(str) {
    var stack = new Stack_1.Stack();
    var queue = new Queue_1.Queue();
    // for (let i = 0; i < str.length; i++) {
    //     stack.push(str[i]);
    //     queue.enqueue(str[i])
    // }
    for (var i = 0; i < str.length; i++) {
        stack.pop();
        queue.dequeue();
        if (stack.pop() !== queue.dequeue()) {
            return false;
        }
        else {
            return true;
        }
    }
}
console.log(check("abc fd cba"));
