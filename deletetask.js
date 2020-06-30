import { store } from "./store.js";

function deleteTask(index) {
  const deletedTask = store.pendingTasks.splice(index, 1);
  store.deletedTasks.push(deletedTask[0]);
}

export { deleteTask };
