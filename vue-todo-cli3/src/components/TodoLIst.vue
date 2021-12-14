<template>
  <div>
    <ul>
      <li 
        v-for="(todoItem, index) in todoItem"
        :key="todoItem.item"
        style="margin: 10px;"
        :class="{checkBtn: todoItem.completed}">
        <button
          class="fas fa-check"
          @click="toggleComplete(todoItem, index)">
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
  data() {
    return {
      todoItem: [],
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
        this.todoItem.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        console.log(localStorage.getItem(localStorage.key(i)));
        }
      }
    }
  },
  methods: {
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItem.splice(index, 1); // delete from (index) to (1)
      console.log(todoItem, index);
    },
    toggleComplete(todoItem, index) {
      // toggle
      todoItem.completed = !todoItem.completed;
      // update todoItem
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      console.log(todoItem, index);
    }
  }
}
</script>

<style scoped>
.checkBtn {
  background: #ddd;
}
</style>