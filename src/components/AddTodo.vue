<template>
  <div>
    <form class="form" @submit="addTodo">
      <mdb-input type="text" label="Add Todo title" size="sm" name="title" v-model="title" required></mdb-input>
      <mdb-textarea type="text" label=" Add Todo description" v-model="description"></mdb-textarea>
      <div class="d-flex justify-content-between">
        <mdb-btn color="deep-purple" class="d-block mx-auto" size="sm">Add Todo</mdb-btn>
      </div>
    </form>
  </div>
</template>
<script>
import { mdbInput, mdbTextarea, mdbBtn } from "mdbvue";

export default {
  name: "AddTodo",
  components: { mdbInput, mdbTextarea, mdbBtn },
  data() {
    return {
      title: "",
      description: ""
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        title: this.title,
        description: this.description
      };
      this.$emit("addTodo", newTodo);
      this.title = "";
      this.description = "";
    }
  }
};
</script>
<style scoped>
</style>
