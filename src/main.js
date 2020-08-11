// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex';
import router from './router'
import axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
import store from './store'
Vue.use(Vuex);
Vue.prototype.$axios = axios;
Vue.prototype.Cookies = Cookies;

/* eslint-disable no-new */
const app = new Vue({
  store: store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mode: 'history'
})

store.$app = app;