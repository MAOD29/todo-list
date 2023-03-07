<template>
  <header class="header">
    <div class="header-title">
      <h1 class="header-title-welcome">Buen dia, Usuario</h1>
      <p class="header-title-pending_task">{{ pendingTaks }}</p>
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

const colorTheme = computed(() => {
  return IconSun;
});

const today = "Hoy es Lunes, 06 De Marzo";
const pendingTaks = "Tienes 2 tareas pendientes";
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
}
.header-title-welcome {
  color: #ffe53b;
  color: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);
}
.header-title-pending_task {
  margin: 0;
}
.header-title-welcome {
  margin: 0;
}
</style>
