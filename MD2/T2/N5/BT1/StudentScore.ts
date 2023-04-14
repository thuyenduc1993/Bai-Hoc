import {Node} from "./Node";

export class StudentScore<T> {
    head: Node<T> | null;
    tail:Node<T> | null;
    size: number;


    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insertFirst(name:string,score:number):void{
        let node = new Node(name,score);
        node.next = this.head;
        this.head = node;
        if(!this.tail){
            this.tail = node;
        }
        this.size++;
    }
    insertLast(name:string,score:number):void{
        if(!this.head){
            this.insertFirst(name,score);
        }else {
            let node = new Node(name,score);
            this.tail.next = this.tail;
            this.tail = node;
            this.size++;
        }
    }
    getSize():number{
        return this.size;
    }
    showList(){
        let listData= [];
        let currentNode= this.head;

        while (currentNode !==null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next
        }
        return listData;
    }
}