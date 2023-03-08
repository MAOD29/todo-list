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
import { computed } from "vue";
import { useTaskStore } from "../storage/index.js";
const newTask = (e) => {
  const { createTask } = useTaskStore();
  var random_boolean = Math.random() < 0.5;
  const task = {
    id: Date.now(),
    description: e.target.value,
    status: random_boolean,
  };

  createTask(task);
  e.target.value = "";
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
