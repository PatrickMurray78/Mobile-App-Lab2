function addTask(task) {
    var numElements;
    myTasks.push(task);
    console.log("Added " + task + " to myTasks");
    numElements = myTasks.length;
    return numElements;
}
function listAllTasks() {
    console.log("Tasks to do are:");
    myTasks.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    var index = myTasks.indexOf(task);
    if (index > -1) {
        myTasks.splice(index, 1);
        console.log("\nRemoved " + task + " fom tasks.");
        return myTasks.length;
    }
    else {
        console.log("Item " + task + " not found!");
    }
    return myTasks.length;
}
var myTasks = [];
console.log("\n");
addTask("Clean Car");
addTask("Go College");
addTask("Make Dinner");
console.log("There are now " + myTasks.length + " tasks to do\n");
listAllTasks();
deleteTask("Clean Car");
console.log("There are now " + myTasks.length + " tasks to do");
//console.log("\nThere are now " + numElements + "Tasks to do");
