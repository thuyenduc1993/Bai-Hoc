"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentScore = void 0;
var Node_1 = require("./Node");
var StudentScore = /** @class */ (function () {
    function StudentScore() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    StudentScore.prototype.insertFirst = function (name, score) {
        var node = new Node_1.Node(name, score);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    StudentScore.prototype.insertLast = function (name, score) {
        if (!this.head) {
            this.insertFirst(name, score);
        }
        else {
            var node = new Node_1.Node(name, score);
            this.tail.next = this.tail;
            this.tail = node;
            this.size++;
        }
    };
    StudentScore.prototype.getSize = function () {
        return this.size;
    };
    StudentScore.prototype.showList = function () {
        var listData = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next;
        }
        return listData;
    };
    return StudentScore;
}());
exports.StudentScore = StudentScore;
