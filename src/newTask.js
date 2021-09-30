import * as statusModule from "./status";

const newForm = document.querySelector('.newTask');

newForm.addEventListener('submit', (event) => {
    const newTask = document.querySelector('.newTaskName');
    event.preventDefault();
    addNewTask({desc: newTask.value});
    localStorage.setItem('tasks', JSON.stringify(statusModule.toDoTasks));
    console.log(newTask.value);
})


export function addNewTask({desc, completed = true, index = statusModule.toDoTasks.length}){
    statusModule.toDoTasks.push({desc, completed, index});
}