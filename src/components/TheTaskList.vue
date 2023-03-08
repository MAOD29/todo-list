<template>
  <ul class="list">
    <template v-for="task in useTaskStores.tasks" :key="task.id">
      <li class="list-item">
        <div class="list-item-name">
          <input
            type="checkbox"
            :name="task.id"
            :id="task.id"
            :checked="task.isCompleted"
            @click="useTaskStores.completedTask(task.id)"
          />
          <span
            :class="{
              'list-item-name-description': task.isCompleted,
            }"
            >{{ task.description }}</span
          >
        </div>
        <button
          type="button"
          @click="useTaskStores.deleteTask(task.id)"
          class="task_list-item-delete"
        >
          X
        </button>
      </li>
      <hr />
    </template>
  </ul>
  <div class="footer">
    <div class="footer-center">
      <button
        @click="useTaskStores.getfilterTask('')"
        type="button"
        class="footer-button"
        :class="{ 'footer-button-active': useTaskStores.filter === '' }"
      >
        All
      </button>
      <button
        @click="useTaskStores.getfilterTask(0)"
        type="button"
        :class="{ 'footer-button-active': useTaskStores.filter === 0 }"
        class="footer-button"
      >
        Active
      </button>
      <button
        @click="useTaskStores.getfilterTask(1)"
        type="button"
        :class="{ 'footer-button-active': useTaskStores.filter === 1 }"
        class="footer-button"
      >
        Completed
      </button>
    </div>
    <button
      @click="useTaskStores.deletetodoItemCompleted()"
      type="button"
      class="footer-button"
    >
      Clear completed
    </button>
  </div>
</template>

<script setup>
import { useTaskStore } from "../storage/index.js";

const useTaskStores = useTaskStore();
</script>

<style scoped>
.list {
  box-sizing: border-box;
  overflow-y: auto;
  padding: 1em;
  max-height: 55%;
  border-radius: 5px;
  border: 1px solid rgb(92 67 186 / 31%);
}
.list-item {
  display: flex;
  justify-content: space-between;
  gap: 5px;
}
.list-item-name {
  display: flex;
  gap: 15px;
}
.task_list-item-delete {
  box-sizing: border-box;
  border: none;
  background: none;
  margin-right: 8px;
  padding: 0.5em;
  border-radius: 5px;
}
.task_list-item-delete:hover {
  background: #ffe53be2;
  color: #5f89fd;
}
.footer {
  height: 5%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.5em;
}
.footer-center {
  display: flex;
  gap: 5px;
}
.footer-button {
  font-size: 15px;
  box-sizing: border-box;
  border: none;
  background: none;
  padding: 0.5em;
}
.footer-button:hover {
  background: #ffe53be2;
  color: #5f89fd;
}
.footer-button-active {
  font-size: 15px;
  box-sizing: border-box;
  padding: 0.5em;
  background: inherit;
  color: #ffe53b;
  border: 1px solid;
}
.list-item-name-description {
  text-decoration-line: line-through;
}
hr {
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
}
</style>
