import {Product} from "./Product";
import {ProductManager} from "./ProductManager";

let laptop = new Product("laptop",8000000);
let iphone12 = new Product("iphone12",24000000);

let productManager = new ProductManager();
productManager.setAdd(laptop);
productManager.setAdd(iphone12);
console.log(productManager.getAll());