<template>
  <div>
    <!-- v-model: two way binding -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <button v-on:click="addTodo">
      <i class="fa fa-plus"></i>
    </button>
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">custom header</h3>
    </modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

  export default {
    data: function () {
      return {
        newTodoItem: '',
        showModal: false,
      }
    },
    component: {
      Modal,
    },
    methods: {
      addTodo: function () {
        console.log(this.newTodoItem);
        if (this.newTodoItem !== '') {
        // emit to app.vue
        this.$emit('addTodoItem', this.newTodoItem);
        // clear
        this.clearInput();
        }
      },
      clearInput: function() {
        this.newTodoItem = ''; // reset input
      }
    },
  }
</script>