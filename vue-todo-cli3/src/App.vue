<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input @addTodoItem="addOneItem"/> <!-- when press the button in TodoInput, push that event at app.vue -->
    <todo-list :propsData="todoItems" />
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoLIst.vue'

export default {
  name: 'App',
  components: {
    TodoFooter: TodoFooter, // difference between expression
    TodoHeader,
    TodoInput,
    TodoList,
  },
  data() {
    return {
      todoItems: [],
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        console.log(localStorage.getItem(localStorage.key(i)));
        }
      }
    }
  },
  methods: {
    addOneItem (todoItem) {
      // save
      var obj = {completed: false, item: todoItem}
      // JSON.stringify : obj(object) to string
      localStorage.setItem(todoItem, JSON.stringify(obj));
      // push object
      this.todoItems.push(obj);
    }
  }
}
</script>

<style>
input {
  border-style: groove;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}
</style>