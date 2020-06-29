import { ToDo } from "./Todo.js";
import { store } from "./store.js";

const initList = () => {
  const todoForm = document.querySelector("#to-do-form");

  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const list = document.querySelector("#to-do-list");

    const id = store.length;
    const input = document.querySelector("#to-do-input").value;

    const todo = new ToDo(id, input, "false");

    list.insertAdjacentHTML(
      "beforeend",
      `<li>${todo.setUppercase()} <i class="fas fa-check text-success mx-2"></i> <i class="fas fa-times text-danger mx-2"></i></li>`
    );

    store.push(todo);
    console.log(store);
  });
};

initList();
