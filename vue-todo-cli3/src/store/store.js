import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); // use vue plugin

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
              if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
              arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
              }
            }
          }
          return arr;
    },
}

export const store = new Vuex.Store({ // expoer store : any component can use this object with function out of this file
    state: {
        headerText: 'TODO it!',
        todoItems: storage.fetch(),
    },
    mutations: {
        addOneItem(state, todoItem) {
            const obj = {completed: false, item: todoItem}
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        toggleCompleteOneItem (state, index) {
            const todoItem = state.todoItems[index];
            todoItem.completed = !todoItem.completed;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
        clearAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
        }
    }
});