"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(name, score) {
        this.next = null;
        this.name = name;
        this.score = 0;
    }
    Node.prototype.readData = function () {
        return "".concat(this.name, ", \u0111i\u1EC3m ").concat(this.score);
    };
    return Node;
}());
exports.Node = Node;
