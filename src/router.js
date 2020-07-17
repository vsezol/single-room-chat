import Vue from 'vue'
import Router from 'vue-router'

import Chat from '@/views/Chat'
import Login from '@/views/Login'

Vue.use(Router)
export default new Router({
  routes: [
    { path: '/', component: Chat },
    { path: '/login', component: Login }
  ],
  mode: 'history'
})
