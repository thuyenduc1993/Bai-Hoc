export class Stack<a>{
    container: a[] = [];
    constructor() {
    }
    push(item:a){
        return this.container.push(item);
    }
    pop():a{
        return this.container.pop();
    }
}