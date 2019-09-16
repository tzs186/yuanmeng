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
      name: '首页'
    },
    {
      path: '/live',
      component: resolve => require(['../page/live/live.vue'], resolve),
      meta: {auth: false, keepAlive: false},
      name: '直播课程',
      children: []
    },
    {
      path: '/live_detail',
      component: resolve => require(['../page/live/live_detail.vue'], resolve),
      meta: {auth: false, keepAlive: false},
      name: '直播详情'
    },
    {
      path: '/portrait',
      component: resolve => require(['../page/user/portrait.vue'], resolve),
      meta: {auth: true, keepAlive: false},

      children: [
        {
          path: '/',
          component: resolve => require(['../page/user/user.vue'], resolve),
          meta: {auth: true, keepAlive: false},
          name: '个人中心',
        },
        {
          path: '/portrait/Myvip',
          component: resolve => require(['../page/user/Myvip.vue'], resolve),
          meta: {auth: true, keepAlive: false},
          name: '我的Vip',
        },
        {
          path: '/portrait/amendPwd',
          component: resolve => require(['../page/user/amendPwd.vue'], resolve),
          meta: {auth: true, keepAlive: false},
          name: '修改密码',
        },
        {
          path: '/portrait/setMobile',
          component: resolve => require(['../page/user/setMobile.vue'], resolve),
          meta: {auth: true, keepAlive: false},
          name: '更换手机',
        },
        {
          path: '/portrait/getAddress',
          component: resolve => require(['../page/user/getAddress.vue'], resolve),
          meta: {auth: true, keepAlive: false},
          name: '地址管理',
        },
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../page/login/login.vue'], resolve),
      meta: {auth: false, keepAlive: false},
      name: '登录'
    },
  ]
})
