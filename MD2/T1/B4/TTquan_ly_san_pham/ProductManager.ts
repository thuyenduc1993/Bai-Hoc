import {Product} from "./Product";

export class ProductManager {
    private products  = [];
    constructor() {
    }
    getAll(){
        return this.products;
    }
    setAdd(product){
        this.products.push(product);
    }
}