import { updateLocalStorage } from './status';

function addNewTask(toDoTasks, newTask) {
  toDoTasks.push({
    desc: newTask.value,
    completed: false,
    index: toDoTasks.length + 1,
  });
  newTask.value = '';
  updateLocalStorage();
  return toDoTasks[toDoTasks.length - 1].desc;
}

export default addNewTask;
