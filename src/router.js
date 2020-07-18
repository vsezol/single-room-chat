import Vue from 'vue'
import Router from 'vue-router'

import Chat from '@/views/Chat'
import Login from '@/views/Login'
import NotFound from '@/views/NotFound'

Vue.use(Router)
export default new Router({
  routes: [
    { path: '/chat', component: Chat },
    { path: '/', component: Login },
    { path: '*', component: NotFound }
  ],
  mode: 'history'
})
