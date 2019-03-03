<template>
  <mdb-container>
    <mdb-row>
      <mdb-col lg="4" md="6" col="8" class="my-4 mx-auto">
        <AddTodo v-on:validate="validate" v-on:addTodo="addTodo"/>
        <div class="d-flex justify-content-between my-3 flex-column flex-sm-row mx-auto">
          <mdbBtn color="amber" size="sm" class="d-sm-block" @click="removeTodo">Remove Todo</mdbBtn>
          <mdbBtn color="danger" size="sm" class="d-sm-block" @click="clearTodos">Clear Todos</mdbBtn>
        </div>
        <div>
          <p v-if="!validated" class="red-text">{{message}}</p>
          <p v-else class="green-text">{{message}}</p>
        </div>
      </mdb-col>
      <mdb-col lg="8" md="6" col="10" class="my-2 mx-auto">
        <Todos v-bind:todos="todos"/>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { db } from "./main.js";
import { mdbContainer, mdbRow, mdbCol, mdbBtn } from "mdbvue";
export default {
  name: "App",
  components: { mdbContainer, mdbRow, mdbCol, mdbBtn, AddTodo, Todos },

  data() {
    return {
      todos: [],
      validated: null,
      message: ""
    };
  },
  created() {
    db.collection("todos")
      .orderBy("timestamp")
      .get()
      .then(res => res.forEach(doc => this.todos.push(doc.data())));
  },
  methods: {
    addTodo(todo) {
      // Add todo to the database

      db.collection("todos")
        .add(todo)
        .then();

      //  Add todo to UI

      this.todos.push(todo);
    },
    clearTodos() {
      // Remove all todos from database

      db.collection("todos")
        .get()
        .then(res => {
          res.forEach(doc => {
            doc.ref.delete();
          });
        });

      // Remove all todos from UI

      this.todos = [];
    },
    removeTodo() {
      //  Remove last todo from the database

      db.collection("todos")
        .orderBy("timestamp", "desc")
        .limit(1)
        .get()
        .then(res => {
          res.forEach(doc => {
            doc.ref.delete();
          });
        });

      // Remove lat todo from UI

      this.todos.splice(this.todos.length - 1, 1);
    },
    validate(state, message) {
      //  Receive properties from child component
      this.validated = state;
      this.message = message;
    }
  }
};
</script>

<style scoped>
html,
body {
  height: 100vh;
}
</style>
