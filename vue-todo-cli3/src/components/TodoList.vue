<template>
  <div>
    <transition-group name="list" tag="ul">
      <li 
        v-for="(todoItem, index) in this.$store.state.todoItems"
        :key="todoItem.item"
        style="margin: 10px;"
        :class="{checkBtn: todoItem.completed}">
        <button
          class="fas fa-check"
          @click="toggleComplete(index)">
        </button>
        {{todoItem.item}}
        <button @click="removeTodo(todoItem, index)">
          <i class="fa-trash-alt fas"></i>
        </button>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  methods: {
    removeTodo(todoItem, index) {
      this.$store.commit('removeOneItem', { todoItem, index });
    },
    toggleComplete(index) {
      this.$store.commit('toggleCompleteOneItem', index);
    }
  }
}
</script>

<style scoped>
.checkBtn {
  background: #ddd;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>