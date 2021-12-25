import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './state'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex); // use vue plugin



export const store = new Vuex.Store({ // expoer store : any component can use this object with function out of this file
    state: state,
    getters: getters,
    mutations: mutations,
});