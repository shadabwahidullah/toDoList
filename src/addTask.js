import { updateLocalStorage, toDoTasks } from "./status";

export function addNewTask(newTask) {
  toDoTasks.push({
    desc: newTask.value,
    completed: false,
    index: toDoTasks.length + 1,
  });
  newTask.value = "";
  updateLocalStorage();
}
