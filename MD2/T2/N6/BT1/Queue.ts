export class Queue<T>{
    container: T[] = []
    constructor() {
    }
    enqueue(item:T){
        return this.container.push(item);
    }
    dequeue():T{
        return this.container.shift();
    }
}