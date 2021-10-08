import * as statusModule from "./status";

export function editTask({ newDesc, index, toDoTasks }) {
  toDoTasks[index].desc = newDesc;
  statusModule.updateLocalStorage();
  return toDoTasks[index].desc;
}

// update indexes to be sequential
export function updateIndexes() {
  let newIndex = 1;
  statusModule.toDoTasks.forEach((element) => {
    element.index = newIndex;
    newIndex += 1;
  });
}

// remove tasks with completed attribute set to true
export function removeCompletedTasks(toDoTasks) {
  const temp = toDoTasks.filter((t) => !t.completed);

  // empties Todo list
  toDoTasks.splice(0, toDoTasks.length);
  // add uncompleted tasks back to Todo list
  temp.forEach((i) => {
    toDoTasks.push(i);
  });
  updateIndexes();
  statusModule.updateLocalStorage();
  return toDoTasks.length;
}
