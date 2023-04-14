import {Stack} from "./Stack";
import {Queue} from "./Queue";

function check (str : string) {
    let stack = new Stack<string>();
    let queue = new Queue<string>();
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
        queue.enqueue(str[i])
    }
    for (let i = 0; i < str.length; i++) {
        stack.pop();
        queue.dequeue();
        if (stack.pop()!==queue.dequeue()){
            return false;
        }
    }
    return true;
}
console.log(check("abc  cba"));

