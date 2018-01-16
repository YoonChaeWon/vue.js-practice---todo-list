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
import auth from './auth/auth'
export const eventBus = new Vue({});

window.Vue = Vue;
Vue.use(VueRouter)
Vue.prototype.$http = axios // axios  추가

axios.post('http://vuejs.crudbot.vivans.net:31230/aaa/api/v1.0/login', {
        "user_id": "vuejs",
        "password": "34db9a6d86aaac93b3e784e9ec6f3b11c2128c0abe8e4922ceac53e0b8895a4e"
      })
      .then(function(response){
        console.log('login !')
        console.log(response)
        axios.defaults.headers.common['Authorization'] = response.headers.Authorization
        console.log('author', response.headers.Authorization)
      })

export default axios

/* eslint-disable no-new */
new Vue({
  components: { App },
  el: '#app',
  router,
  template: '<App/>'
})
