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
    }
});