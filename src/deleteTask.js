import { updateLocalStorage } from "./status";

export function deleteTask(index, toDoTasks) {
  // delete task with specific index
  toDoTasks.splice(index, 1);
  let newIndex = 1;
  toDoTasks.forEach((element) => {
    element.index = newIndex;
    newIndex += 1;
  });
  updateLocalStorage();
  return toDoTasks.length;
}
