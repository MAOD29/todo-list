<template>
  <header class="header">
    <div class="header-title">
      <h1 class="header-title-welcome">Buen dia, Usuario</h1>
      <p class="header-title-pending_task">
        You have
        <span class="header-title-pending_task-count">{{
          useTaskStores.getPendingTasks
        }}</span>
        pending tasks
      </p>
    </div>
    <div class="header-theme">
      <img class="header-theme-img" :src="colorTheme" alt="Tema" />
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";
import IconSun from "../assets/icon-sun.svg";
import IconMoon from "../assets/icon-moon.svg";
import { useTaskStore } from "../storage/index.js";

const useTaskStores = useTaskStore();

const colorTheme = computed(() => {
  return IconSun;
});
</script>

<style scoped>
.header {
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.header-title-welcome {
  font-size: 1.5em;
  color: #ffe53b;
  color: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);
}
.header-title-pending_task {
  margin: 0;
}
.header-title-pending_task-count {
  color: #ffe53b;
}
</style>
