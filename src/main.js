import Vue from 'vue'
import Accountings from './components/Accountings.vue'
import VueRouter from 'vue-router';
import router from './router';

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(Accountings)
})
