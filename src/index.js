import _, { divide } from 'lodash'; // eslint-disable-line no-unused-vars
import * as statusModule from './status';
import './style.css';

const tasks = document.querySelector('.list');

// creates a view for task t
function createTask(t) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('list-item', 'flex-space-between');

  const element = document.createElement('div');
  element.classList.add('flex');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.id = t.index;
  checkBox.classList.add('margin');
  checkBox.checked = t.completed;

  checkBox.addEventListener('click', (event) => {
    statusModule.statusUpdate(event.target.id, event.target.checked);
  });

  const task = document.createElement('input');
  task.type = 'text';
  task.classList.add('text', 'margin');
  task.value = t.desc;
  task.readOnly = true;

  const more = document.createElement('i');
  more.classList.add('fa', 'fa-ellipsis-v', 'fa-v');

  element.append(checkBox, task);
  wrapper.append(element, more);

  tasks.appendChild(wrapper);
}

statusModule.toDoTasks.forEach((e) => {
  createTask(e);
});

function addButton() {
  const btn = document.createElement('button');
  btn.classList.add('button');
  btn.innerHTML = 'Clear All Completed';
  tasks.appendChild(btn);
}

addButton();
