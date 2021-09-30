import * as statusModule from "./status";

export function addNewTask(newTask) {
  statusModule.toDoTasks.push({
    desc: newTask.value,
    completed: true,
    index: statusModule.toDoTasks.length,
  });
  newTask.value = "";
  statusModule.updateLocalStorage();
}

export function editTask({ newDesc, index }) {
  statusModule.toDoTasks[index].desc = newDesc;
  statusModule.updateLocalStorage();
}

export function deleteTask(index) {
  // delete task with specific index
  statusModule.toDoTasks.splice(index, 1);
  updateIndexes();
  statusModule.updateLocalStorage();
}

// update indexes to be sequential
export function updateIndexes() {
  let newIndex = 0;
  statusModule.toDoTasks.forEach((element) => {
    element.index = newIndex;
    newIndex++;
  });
}
