import {tasksInterface} from './interfaces';

class Tasks implements tasksInterface{
    myTasks:Array<string> = [];

    addTask(task:string):number {
        let numElements;
        
        this.myTasks.push(task);
        console.log("Added " + task + " to myTasks");
        return this.myTasks.length;
    }
    
    listAllTasks():void {
        console.log("Tasks to do are:");
        this.myTasks.forEach(function(task) {
            console.log(task);
        });
    }
    
    deleteTask(task:string):number {
        let index:number = this.myTasks.indexOf(task);
    
        if(index > -1){
            this.myTasks.splice(index, 1);
            console.log("\nRemoved " + task + " fom tasks.");
            return this.myTasks.length;
        }
        else {
            console.log("Item " + task + " not found!");
        }
    }
}

let tasks = new Tasks();
tasks.addTask("Complete Lab");