import Vue from 'vue'
Vue.directive('scroll',{
  inserted:function (el,binding,vnode) {
    let scrollHei=el.offsetHeight;


  },
  componentUpdated:function (el, binding, vnode) {
    console.log(el)
  }
})
