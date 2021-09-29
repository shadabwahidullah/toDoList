export const toDoTasks = JSON.parse(localStorage.getItem('tasks')) || [
  { desc: 'Reading a book', completed: true, index: 0 },
  { desc: 'completing task', completed: true, index: 1 },
  { desc: 'Climbing mountain', completed: true, index: 2 },
];

export function statusUpdate(id, status) {
  toDoTasks[id].completed = status;
  localStorage.setItem('tasks', JSON.stringify(toDoTasks));
}