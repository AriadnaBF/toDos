import { store } from "./store.js";

function completeTask(index) {
  store.pendingTasks[index].complete = true;
}

export { completeTask };
