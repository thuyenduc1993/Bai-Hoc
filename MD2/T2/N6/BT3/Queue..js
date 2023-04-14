"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.container = [];
        this.container1 = [];
    }
    Queue.prototype.enqueue = function (item) {
        return this.container.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.container.shift();
    };
    Queue.prototype.sortPatient = function () {
        this.container.sort(function (a, b) {
            return a.getCode() - b.getCode();
        });
    };
    Queue.prototype.patientExamined = function () {
        this.container1.push(this.container.shift());
        return this.container1;
    };
    Queue.prototype.nextPatient = function () {
        return this.container[0];
    };
    return Queue;
}());
exports.Queue = Queue;
