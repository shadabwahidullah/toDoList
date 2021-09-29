import { toDoTasks } from "./index.js";

export function statusUpdate(id,status){
    toDoTasks[id].completed = status;
    localStorage.setItem('tasks',JSON.stringify(toDoTasks));
}