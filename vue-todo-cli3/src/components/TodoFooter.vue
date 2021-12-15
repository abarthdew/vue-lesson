<template>
  <div>
    <button @click="clearTodo">clear all</button>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      localStorage.clear();
    }
  }
}
</script>