import _, { divide } from 'lodash'; // eslint-disable-line no-unused-vars
import './style.css';

const toDoTasks = [
  { desc: 'Reading a book', completed: true, index: 1 },
  { desc: 'completing task', completed: true, index: 2 },
  { desc: 'Climbing mountain', completed: true, index: 3 },
];

const tasks = document.querySelector('.list');

function createTask(e) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('list-item', 'flex-space-between');

  const element = document.createElement('div');
  element.id = e.index;
  element.classList.add('flex');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.classList.add('margin');
  checkBox.checked = e.completed;

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
