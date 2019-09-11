// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



import request from '@/config/httpConfig'
Vue.prototype.$axios = request;

import ElementUI from 'element-ui'    //手动变红
import './theme/element/index.css'
Vue.use(ElementUI);
import'./assets/css/live.scss'
Vue.config.productionTip = false

import 'swiper/dist/css/swiper.css';

import foot from './components/foter/footers.vue'
Vue.component("foot",foot);

import heads from './components/foter/haders.vue'
Vue.component("heads",heads);
import rtool from './components/foter/index.js'
Vue.use(rtool);
import Toast from './components/toast/toast.js'
Vue.use(Toast)
import './assets/directive/winScroll.js'


router.beforeEach((to,from,next)=>{
  if(to.matched.some( m => m.meta.auth)) {
    if(to.name=='login'){
      next();
    }else{
      if(sessionStorage.getItem('token')){
        //访问服务器缓存数据，判断当前token是否失效
        /*Vue.http.get("http:xxxx/Login/UserIsLogin?token="+localStorage.getItem('token')+"&url="+to.name,{withCredentials: true})
          .then(response => response.json())
          .then(num => {
          // console.log('是否登录',num);
          if(num.code==1001){
            next();
          }else{
            alert('您的token已超时，请重新登录');
            next('/login');
          }
        })*/
        next();
      }else{
        next('/login');
      }

    }
  } else {

    next()
  }

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
