<template>
  <div id="app">
    <my-cmp></my-cmp>
  </div>
</template>

<script>
  var my_cmp = {
    template: '<div>1</div>'
  }
  new Vue({
    el: '#app',
    compoenents: {
      'my_cmp': my_cmp
      }
  })
</script>
