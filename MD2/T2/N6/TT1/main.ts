import {Stack} from "./Stack";

let stack = new Stack()
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.pop();
console.log(stack.pop());
console.log(stack.container)