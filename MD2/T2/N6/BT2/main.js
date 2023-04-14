"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
function reverse(arr) {
    var stack = new Stack_1.Stack();
    for (var i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
    }
    for (var i = 0; i < arr.length; i++) {
        arr[i] = stack.pop();
    }
    return arr;
}
console.log(reverse([1, 2, 3, 4, 5, 6]));
