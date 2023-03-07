<template>
  <ul class="list">
    <li class="list-item">
      <div class="list-item-name">
        <input
          class="task_list-item-check"
          type="checkbox"
          name="task1"
          id="task1"
        />
        <span>Lista de tarea</span>
      </div>
      <span class="task_list-item-delete"> X</span>
    </li>
    <hr />
    <li class="list-item">
      <div class="list-item-name">
        <input
          class="task_list-item-check"
          type="checkbox"
          name="task1"
          id="task1"
        />
        <span>Lista de tarea</span>
      </div>
      <span class="task_list-item-delete"> X</span>
    </li>
    <hr />
    <li class="list-item">
      <div class="list-item-name">
        <input
          class="task_list-item-check"
          type="checkbox"
          name="task1"
          id="task1"
        />
        <span>Lista de tarea</span>
      </div>
      <span class="task_list-item-delete"> X</span>
    </li>
    <hr />
    <li class="list-item">
      <div class="list-item-name">
        <input
          class="task_list-item-check"
          type="checkbox"
          name="task1"
          id="task1"
        />
        <span
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          officia impedit recusandae aliquid est, quod dolores magni excepturi
          provident? Illum asperiores quisquam maiores perferendis eum dolorem
          facere ducimus sapiente numquam?</span
        >
      </div>
      <span class="task_list-item-delete"> X</span>
    </li>
    <hr />

    <li class="list-item">
      <div class="list-item-name">
        <input
          class="task_list-item-check"
          type="checkbox"
          name="task1"
          id="task1"
        />
        <span>Lorem ipsum dolor s?</span>
      </div>
      <span class="task_list-item-delete"> X</span>
    </li>
    <hr />
  </ul>
  <div class="footer">
    <span>5 item left</span>
    <div class="footer-center">
      <span>All</span>
      <span>Active</span>
      <span>Completed</span>
    </div>
    <span>Clear completed</span>
  </div>
</template>

<script setup></script>

<style scoped>
.list {
  overflow-y: auto;
  max-height: calc(100vh - 340px);
  padding: 0.5em;
}
.list-item {
  display: flex;
  justify-content: space-between;
}
.list-item-name {
  display: flex;
  gap: 5px;
}
.task_list-item-delete {
  margin-right: 8px;
}
.footer {
  display: flex;
  justify-content: space-around;
  font-size: 14px;
}
.footer-center {
  display: flex;
  gap: 5px;
}
</style>
