<template>
  <div>
    <ul>
      <li v-for="(item, index) in todoItem" :key="item" style="margin: 10px;">
        {{item}}
        <button @click="removeTodo(item, index)">
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
        this.todoItem.push(localStorage.key(i));
        console.log(localStorage.key(i));
        }
      }
    }
  },
  methods: {
    removeTodo(item, index) {
      localStorage.removeItem(item);
      this.todoItem.splice(index, 1); // delete from (index) to (1)
      console.log(item, index);
    }
  }
}
</script>
