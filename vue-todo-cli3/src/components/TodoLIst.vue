<template>
  <div>
    <ul>
      <li 
        v-for="(todoItem, index) in propsData"
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
    </ul>
  </div>
</template>

<script>
export default {
  // props: ['propsData'], // another way
  props: {
    propsData: Array,
  },
  methods: {
    removeTodo(todoItem, index) {
      this.$emit('removeItem', todoItem, index);
    },
    toggleComplete(index) {
      this.$emit('toggleCompleteItem', index);
    }
  }
}
</script>

<style scoped>
.checkBtn {
  background: #ddd;
}
</style>