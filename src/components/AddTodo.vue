<template>
  <div>
    <form class="form" @submit="addTodo">
      <mdb-input type="text" label="Add Todo title" size="sm" name="title" v-model="title"></mdb-input>
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
      description: "",
      message: "",
      validated: null
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        title: this.title,
        description: this.description,
        timestamp: new Date()
      };
      this.handleValidation(newTodo);
      this.title = "";
      this.description = "";
    },
    handleValidation(todo) {
      //  Todo validation

      // Validate title
      if (todo.title.length < 10 || todo.title.length > 256) {
        this.handleValidationStatus(
          false,
          "Title must have between 10 and 255 characters"
        );
        return false;
      }

      // Validate description
      if (todo.description.length > 255) {
        this.handleValidationStatus(
          false,
          " Description is too long. Max number of allowed characters is only 255"
        );
        return false;
      }

      //  If form passes validation, send data to the parent component

      this.handleValidationStatus(
        true,
        "All is good, waiting for another todo"
      );
      this.$emit("addTodo", todo);
    },
    handleValidationStatus(validated, message) {
      this.validated = validated;
      this.message = message;

      this.$emit("validate", this.validated, this.message);
    }
  }
};
</script>
<style scoped>
</style>
