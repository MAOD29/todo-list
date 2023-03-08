<template>
  <div class="input">
    <input
      @keyup.enter="newTask"
      class="input-text"
      type="text"
      placeholder="Type your task "
    />
  </div>
</template>

<script setup>
import { useTaskStore } from "../storage/index.js";

const { createTask } = useTaskStore();

const newTask = (e) => {
  if (e.target.value !== "") {
    const task = {
      id: Date.now(),
      description: e.target.value,
      isCompleted: false,
    };
    createTask(task);
    e.target.value = "";
  }
};
</script>

<style scoped>
.input {
  height: 10%;
  box-sizing: border-box;
}
.input-text {
  box-sizing: border-box;
  border-radius: 5px;
  border-color: white;
  padding: 1em;
  outline-style: none;
  width: 100%;
}
</style>
