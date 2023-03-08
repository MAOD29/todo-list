<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheInput from "./components/TheInput.vue";
import TheTaskList from "./components/TheTaskList.vue";
import Thebanner from "./components/Thebanner.vue";
</script>

<template>
  <div class="container">
    <Thebanner />
    <main class="main">
      <TheHeader />
      <TheInput />
      <TheTaskList />
    </main>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
}
.main {
  width: 700px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
  padding: 1em;
  box-sizing: border-box;
}
</style>
