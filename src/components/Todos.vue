<template>
  <div>
    <h4 class="text-center my-3">Todos List</h4>
    <div v-bind:key="index" v-for="(todo,index) in todos">
      <TodoItem v-bind:todo="todo"/>
    </div>
  </div>
</template>
<script>
import TodoItem from "./TodoItem";

export default {
  name: "Todos",
  components: { TodoItem },
  props: ["todos"]
};
</script>
<style scoped>
</style>

