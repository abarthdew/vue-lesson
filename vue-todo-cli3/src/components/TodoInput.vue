<template>
  <div>
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <button v-on:click="addTodo">
      <i class="fa fa-plus"></i>
    </button>
    <modal v-if="showModal" @close="showModal = false">
      <!--
      *** you can use custom content here to overwrite
      default content ***
      -->
      <h3 slot="header">custom header<!--Not "default header" in Modal.vue-->
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i class="fas fa-times" @click="closeModal"></i>
      </h3>
      <h3 slot="body">custom body<!--Not "default body" in Modal.vue--></h3>
      <h3 slot="footer">custom footer<!--Not "default footer" in Modal.vue--></h3>
      <!-- slot: refactoring  specific component or any part. so, you may reuse UI parts in any compnent-->
    </modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';
  export default {
    components: {
      Modal,
    },
    data() {
      return {
        newTodoItem: '',
        showModal: false,
      }
    },
    methods: {
      addTodo() {
        console.log(this.newTodoItem);
        if (this.newTodoItem !== '') {
        // emit to app.vue
        this.$emit('addTodoItem', this.newTodoItem);
        // clear
        this.clearInput();
        } else {
          this.showModal = !this.showModal;
        }
      },
      clearInput() {
        this.newTodoItem = ''; // reset input
      },
      closeModal() {
        this.showModal = false;
      }
    },
  }
</script>