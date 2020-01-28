"use strict";
exports.__esModule = true;
var Tasks = /** @class */ (function () {
    function Tasks() {
        this.myTasks = [];
    }
    Tasks.prototype.addTask = function (task) {
        var numElements;
        this.myTasks.push(task);
        console.log("Added " + task + " to myTasks");
        return this.myTasks.length;
    };
    Tasks.prototype.listAllTasks = function () {
        console.log("Tasks to do are:");
        this.myTasks.forEach(function (task) {
            console.log(task);
        });
    };
    Tasks.prototype.deleteTask = function (task) {
        var index = this.myTasks.indexOf(task);
        if (index > -1) {
            this.myTasks.splice(index, 1);
            console.log("\nRemoved " + task + " fom tasks.");
            return this.myTasks.length;
        }
        else {
            console.log("Item " + task + " not found!");
        }
    };
    return Tasks;
}());
var tasks = new Tasks();
tasks.addTask("Complete Lab");
