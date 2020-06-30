function drawCompletedList(task) {
  const completeList = document.querySelector("#complete-list");
  completeList.insertAdjacentHTML(
    "beforeend",
    `<li class="text-secondary d-flex border align-items-center p-2 mb-2 border-secondary"><strike>${task.setUppercase()}</strike> </li>`
  );
}

export { drawCompletedList };
