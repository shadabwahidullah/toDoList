export function updateLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(toDoTasks));
}

export function readLocalStorage() {
  return JSON.parse(localStorage.getItem('tasks')) || [
    { desc: 'Reading a book', completed: true, index: 0 },
    { desc: 'completing task', completed: true, index: 1 },
    { desc: 'Climbing mountain', completed: true, index: 2 },
  ];
}

export const toDoTasks = readLocalStorage();

export function statusUpdate(id, status) {
  this.toDoTasks[id].completed = status;
  localStorage.setItem('tasks', JSON.stringify(toDoTasks));
}