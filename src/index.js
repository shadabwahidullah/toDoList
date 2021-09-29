import _, { divide } from 'lodash'; // eslint-disable-line no-unused-vars
import { statusUpdate } from './status';
import './style.css';

export const toDoTasks = JSON.parse(localStorage.getItem('tasks')) || [
  { desc: 'Reading a book', completed: true, index: 0 },
  { desc: 'completing task', completed: true, index: 1 },
  { desc: 'Climbing mountain', completed: true, index: 2 },
];

const tasks = document.querySelector('.list');

// creates a view for task e 
function createTask(e) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('list-item', 'flex-space-between');

  const element = document.createElement('div');
  element.classList.add('flex');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.id = e.index;
  checkBox.classList.add('margin');
  checkBox.checked = e.completed;

  checkBox.addEventListener('click',(event) => {
    statusUpdate(event.target.id, event.target.checked);
  });

  const task = document.createElement('input');
  task.type = 'text';
  task.classList.add('text', 'margin');
  task.value = e.desc;
  task.readOnly = true;

  const more = document.createElement('i');
  more.classList.add('fa', 'fa-ellipsis-v', 'fa-v');

  element.append(checkBox, task);
  wrapper.append(element, more);

  tasks.appendChild(wrapper);
}

toDoTasks.forEach((e) => {
  createTask(e);
});

function addButton() {
  const btn = document.createElement('button');
  btn.classList.add('button');
  btn.innerHTML = 'Clear All Completed';
  tasks.appendChild(btn);
}

addButton();
