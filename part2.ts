function addTask(task:string):number {
    let numElements;
    
    myTasks.push(task);
    console.log("Added " + task + " to myTasks");
    numElements = myTasks.length;
    return numElements;
}

function listAllTasks():void {
    console.log("Tasks to do are:");
    myTasks.forEach(function(task) {
        console.log(task);
    });
}

function deleteTask(task:string):number {
    let index:number = myTasks.indexOf(task);

    if(index > -1){
        myTasks.splice(index, 1);
        console.log("\nRemoved " + task + " fom tasks.");
        return myTasks.length;
    }
    else {
        console.log("Item " + task + " not found!");
    }
    return myTasks.length;
}

let myTasks:Array<string> = [];

console.log("\n");
addTask("Clean Car");
addTask("Go College");
addTask("Make Dinner");

console.log("There are now " + myTasks.length + " tasks to do\n");

listAllTasks();

deleteTask("Clean Car");
console.log("There are now " + myTasks.length + " tasks to do");


