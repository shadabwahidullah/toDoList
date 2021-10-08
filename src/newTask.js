import * as statusModule from './status';

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
export function removeCompletedTasks() {
  const temp = statusModule.toDoTasks.filter((t) => !t.completed);
  // empties Todo list
  statusModule.toDoTasks.splice(0, statusModule.toDoTasks.length);
  // add uncompleted tasks back to Todo list
  temp.forEach((i) => {
    statusModule.toDoTasks.push(i);
  });
  updateIndexes();
  statusModule.updateLocalStorage();
}
