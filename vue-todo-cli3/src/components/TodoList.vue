<template>
  <div>
    <transition-group name="list" tag="ul">
      <li 
        v-for="(todoItem, index) in storedTodoItems"
        :key="todoItem.item"
        style="margin: 10px;"
        :class="{checkBtn: todoItem.completed}">
        <button
          class="fas fa-check"
          @click="toggleCompleteOneItem(index)">
        </button>
        {{todoItem.item}}
        <button @click="removeOneItem({todoItem, index})">
          <i class="fa-trash-alt fas"></i>
        </button>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      storedTodoItems: 'storedTodoItems'
    }),
  },
  methods: {
    ...mapMutations({
      removeOneItem: 'removeOneItem',
      toggleCompleteOneItem: 'toggleCompleteOneItem',
    }),
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