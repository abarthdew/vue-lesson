<template>
  <div>
    <ul>
      <li v-for="item in todoItem" :key="item">{{item}}</li>
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
  }
}
</script>
