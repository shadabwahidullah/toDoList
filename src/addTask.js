import { updateLocalStorage} from "./status";

export function addNewTask(toDoTasks, newTask) {
  toDoTasks.push({
    desc: newTask.value,
    completed: false,
    index: toDoTasks.length + 1,
  });
  newTask.value = "";
  updateLocalStorage();
  toDoTasks.length;
}
