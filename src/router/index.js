import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../page/home/index.vue'], resolve),
      meta: {auth: false, keepAlive: false},
      name: 'index'
    },
    {
      path: '/live',
      component: resolve => require(['../page/live/live.vue'], resolve),
      meta: {auth: false, keepAlive: false},
      name: 'live',
      children:[

      ]
    },
    {
      path: '/live_detail',
      component: resolve => require(['../page/live/live_detail.vue'], resolve),
      meta: {auth: false, keepAlive: false},
      name: 'live_detail'
    },

    {
      path: '/login',
      component: resolve => require(['../page/login/login.vue'], resolve),
      meta: {auth: false, keepAlive: false},
      name: 'login'
    },
  ]
})
