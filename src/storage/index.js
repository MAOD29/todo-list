import { defineStore } from "pinia";
import { readonly, ref } from "vue";
import { computed } from "vue";

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);
  const filter = ref("");
  ///const pendingTasks = ref(0);

  if (localStorage.getItem("todo-task")) {
    tasks.value = JSON.parse(localStorage.getItem("todo-task"));
  } else {
    localStorage.setItem("todo-task", JSON.stringify(tasks.value));
  }

  function createTask(task) {
    tasks.value = JSON.parse(localStorage.getItem("todo-task"));
    tasks.value.push(task);
    localStorage.setItem("todo-task", JSON.stringify(tasks.value));
  }
  function deleteTask(id) {
    tasks.value = JSON.parse(localStorage.getItem("todo-task"));
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

    getfilterTask(filter.value);
  }

  const getPendingTasks = computed(() => {
    tasks.value = JSON.parse(localStorage.getItem("todo-task"));
    const countPendingTasks = tasks.value.filter((task) => {
      return !task.isCompleted;
    }).length;
    getfilterTask(filter.value);
    return countPendingTasks;
  });

  return {
    getfilterTask,
    createTask,
    deleteTask,
    completedTask,
    deletetodoItemCompleted,
    tasks: readonly(tasks),
    filter,
    getPendingTasks,
  };
});
