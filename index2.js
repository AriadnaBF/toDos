import { ToDo } from "./Todo.js";
import { store } from "./store.js";
import { drawToDoList } from "./todolist.js";
import { drawCompletedList } from "./completelist.js";
import { findTaskIndex } from "./findtaskindex.js";
import { deleteTask } from "./deletetask.js";
import { completeTask } from "./completetask.js";

const initList = () => {
  const todoForm = document.querySelector("#to-do-form");

  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const id = `task-${Math.floor(Math.random() * (1000 - 1)) + 1}`;
    const input = document.querySelector("#to-do-input").value;

    const todo = new ToDo(id, input, false);

    drawToDoList(todo);

    store.pendingTasks.push(todo);
    todoForm.reset();
    console.log(store);
  });
};

const taskList = document.querySelector("#to-do-list");

taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-check")) {
    const indexOfTask = findTaskIndex();
    drawCompletedList(store.pendingTasks[indexOfTask]);
    completeTask(indexOfTask);
    event.target.parentNode.remove();
  }

  if (event.target.classList.contains("fa-times")) {
    const indexOfTask = findTaskIndex();
    deleteTask(indexOfTask);
    event.target.parentNode.remove();
  }

  if (event.target.classList.contains("fa-pencil-alt")) {
    const index = 0;
    console.log("hola caracola");
  }
});

initList();
