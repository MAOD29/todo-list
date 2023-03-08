import { defineStore } from "pinia";
import { reactive, readonly, computed, toRef, ref } from "vue";

//Estatus-- 0-Pendiente,1-Completada

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);

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

  function getfilterTask(status = "") {
    tasks.value = JSON.parse(localStorage.getItem("todo-task"));
    if (status === "") {
      return;
    }
    tasks.value = tasks.value.filter((task) => task.status == status);
  }
  return {
    getfilterTask,
    createTask,
    deleteTask,
    tasks,
  };
});
