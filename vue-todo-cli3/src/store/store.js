import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'

Vue.use(Vuex); // use vue plugin

export const store = new Vuex.Store({ // expoer store : any component can use this object with function out of this file
  modules: {
    todoApp,
  }
});