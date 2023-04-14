export class Stack<T>{
    container: T[] = []
    constructor() {
    }
    push(item:T){
        return this.container.push(item);
    }
    pop():T{
        return this.container.pop();
    }
}