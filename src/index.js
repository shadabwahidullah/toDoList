import _, { divide } from "lodash"; // eslint-disable-line no-unused-vars
import * as statusModule from "./status";
import "./style.css";

const tasks = document.querySelector(".list");

// creates a view for task t
function createTask(t) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("list-item", "flex-space-between");
  wrapper.id = t.index;

  const element = document.createElement("div");
  element.classList.add("flex");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("margin");
  checkBox.checked = t.completed;

  checkBox.addEventListener("click", (event) => {
    statusModule.statusUpdate(event.target.parentElement.parentElement.id, event.target.checked);
  });

  const task = document.createElement("input");
  task.type = "text";
  task.classList.add("text", "margin");
  task.value = t.desc;
  task.readOnly = true;

  const more = document.createElement("i");
  more.classList.add("fa", "fa-ellipsis-v", "fa-v", "fa-2x", "margin");

  const deleteBtn = document.createElement("i");
  deleteBtn.classList.add("fa", "fa-trash", "fa-2x", "margin", "hidden");

  // changes 3 dot icon to trash bin when mouse cursor gets over 3 dot
  more.addEventListener("mouseover", () => {
    more.classList.add("hidden");
    deleteBtn.classList.remove("hidden");
  });

  // reverse the change for trash bin to 3 dots when the mouse cursor moves out
  deleteBtn.addEventListener("mouseout", () => {
    more.classList.remove("hidden");
    deleteBtn.classList.add("hidden");
  });

  element.append(checkBox, task);
  wrapper.append(element, more, deleteBtn);

  tasks.appendChild(wrapper);
}

statusModule.toDoTasks.forEach((e) => {
  createTask(e);
});

// create the a button at the end of list for
// clearing the completed tasks
function clearAllBtn() {
  const btn = document.createElement("button");
  btn.classList.add("button");
  btn.innerHTML = "Clear All Completed";
  tasks.appendChild(btn);
}

clearAllBtn();
