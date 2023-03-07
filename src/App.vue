<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheInput from "./components/TheInput.vue";
import TheTaskList from "./components/TheTaskList.vue";
import mainLayout from "./layout/main.vue";
import Thebanner from "./components/Thebanner.vue";
</script>

<template>
  <Thebanner />
  <div class="container">
    <main class="main">
      <TheHeader />
      <TheInput />
      <TheTaskList />
    </main>
  </div>
</template>

<style scoped>
.main {
  width: 600px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0;
}
.container {
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
}
</style>
