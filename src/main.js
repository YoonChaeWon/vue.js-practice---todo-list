// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'
import router from './router'


export const eventBus = new Vue({});

window.Vue = Vue;
Vue.use(VueRouter)
Vue.prototype.$http = axios // axios  추가

/* eslint-disable no-new */
new Vue({
  components: { App },
  el: '#app',
  router,
  template: '<App/>'
})
