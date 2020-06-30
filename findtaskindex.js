import { store } from "./store.js";

function findTaskIndex() {
  const idOfTask = event.target.parentNode.id;
  const indexOfTask = store.pendingTasks.findIndex((value) => {
    return value.id == idOfTask;
  });
  return indexOfTask;
}

export { findTaskIndex };
