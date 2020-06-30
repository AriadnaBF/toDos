function drawToDoList(task) {
  const list = document.querySelector("#to-do-list");
  list.insertAdjacentHTML(
    "beforeend",
    `<li id="${
      task.id
    }" class="d-flex border align-items-center p-2 border-secondary mb-2"> <span class="flex-grow-1"> ${task.setUppercase()} </span> <i class="fas fa-pencil-alt text-primary mx-2"> </i> <i class="fas fa-check text-success mx-2" id="check-${
      task.id
    }"></i> <i class="fas fa-times text-danger mx-2" id="cancel-${
      task.id
    }"></i></li>`
  );
}

export { drawToDoList };
