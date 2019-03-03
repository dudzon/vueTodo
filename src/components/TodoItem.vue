<template>
  <div class="d-flex align-items-center flex-column">
    <h5 class="h5 responsive">{{todo.title}}</h5>
    <p>{{todo.description}}</p>
  </div>
</template>
<script>
export default {
  name: "TodoItem",
  props: ["todo"]
};
</script>
<style scoped>
</style>

