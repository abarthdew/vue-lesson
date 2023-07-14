<template>
  <div>
    <button @click="clearAllItems">clear all</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  methods: {
    ...mapMutations({
      clearAllItems: 'clearAllItems'
    }),
  }
}
</script>