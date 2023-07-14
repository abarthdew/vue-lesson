import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store' // access store object or get store object

Vue.config.productionTip = false

new Vue({
  store, // different expression -> store: store
  render: h => h(App),
}).$mount('#app')
