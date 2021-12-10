<template>
  <div>
    <!-- v-model: two way binding -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <button v-on:click="addTodo">
      <i class="fa fa-plus"></i>
    </button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        newTodoItem: '',
      }
    },
    methods: {
      addTodo: function () {
        console.log(this.newTodoItem);
        // save
        localStorage.setItem(this.newTodoItem, this.newTodoItem);
        this.clearInput();
      },
      clearInput: function() {
        this.newTodoItem = ''; // reset input
      }
    },
  }
</script>