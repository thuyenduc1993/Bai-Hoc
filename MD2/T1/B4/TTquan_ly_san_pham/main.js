"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = require("./Product");
var ProductManager_1 = require("./ProductManager");
var laptop = new Product_1.Product("laptop", 8000000);
var iphone12 = new Product_1.Product("iphone12", 24000000);
var productManager = new ProductManager_1.ProductManager();
productManager.setAdd(laptop);
productManager.setAdd(iphone12);
console.log(productManager.getAll());
