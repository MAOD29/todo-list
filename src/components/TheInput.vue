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
const newTask = (e) => {
  //Save value
  e.target.value = "";
};
</script>

<style scoped>
.input {
  padding: 0.5em;
}
.input-text {
  border-radius: 5px;
  border-color: white;
  padding: 0.5em 0;
  outline-style: none;
  width: 100%;
}
</style>
