import { defineStore } from "pinia";
import { readonly, ref } from "vue";

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);
  const filter = ref("");

  if (localStorage.getItem("todo-task")) {
    tasks.value = JSON.parse(localStorage.getItem("todo-task"));
  }

  function createTask(task) {
    tasks.value.push(task);
    localStorage.setItem("todo-task", JSON.stringify(tasks.value));
  }
  function deleteTask(id) {
    tasks.value = tasks.value.filter((task) => task.id !== id);
    localStorage.setItem("todo-task", JSON.stringify(tasks.value));
  }
  function deletetodoItemCompleted() {
    tasks.value = JSON.parse(localStorage.getItem("todo-task"));
    tasks.value = tasks.value.filter((task) => task.isCompleted === false);
    localStorage.setItem("todo-task", JSON.stringify(tasks.value));
    filter.value = "";
  }

  function getfilterTask(isCompleted = "") {
    filter.value = isCompleted;
    tasks.value = JSON.parse(localStorage.getItem("todo-task"));
    if (isCompleted === "") {
      return;
    }
    tasks.value = tasks.value.filter((task) => task.isCompleted == isCompleted);
  }
  function completedTask(id) {
    const tasks = JSON.parse(localStorage.getItem("todo-task"));

    const index = tasks.findIndex((task) => task.id == id);
    tasks[index].isCompleted = !tasks[index].isCompleted;
    localStorage.setItem("todo-task", JSON.stringify(tasks));
    tasks.value = JSON.parse(localStorage.getItem("todo-task"));
    getfilterTask(filter.value);
  }
  return {
    getfilterTask,
    createTask,
    deleteTask,
    completedTask,
    deletetodoItemCompleted,
    tasks: readonly(tasks),
    filter,
  };
});
