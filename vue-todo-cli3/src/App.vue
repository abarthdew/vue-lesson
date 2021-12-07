<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input/>
    <todo-list/>
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
  }
}
</script>