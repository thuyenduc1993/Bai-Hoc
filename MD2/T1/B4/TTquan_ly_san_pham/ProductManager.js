"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = void 0;
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.products = [];
    }
    ProductManager.prototype.getAll = function () {
        return this.products;
    };
    ProductManager.prototype.setAdd = function (product) {
        this.products.push(product);
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;
