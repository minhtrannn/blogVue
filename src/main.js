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
import store from './store';

Vue.use(Vuex);
Vue.prototype.$axios = axios;
Vue.prototype.Cookies = Cookies;


//config socketio

import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'

const opts = { 
  forceNew : true,
  reconnection : true,
  reconnectionAttempts : 10,
  reconnectionDelay : 6000
}; //Options object to pass into SocketIO

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('http://localhost:3000', opts), //options object
})
);


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
