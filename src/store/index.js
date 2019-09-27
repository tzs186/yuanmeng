import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    isLogin: sessionStorage.getItem('isLogin'),
    userInfo: sessionStorage.getItem('userInfo'),
    headImg: sessionStorage.getItem('headImg')||"http://ym-video-prod.oss-cn-shenzhen.aliyuncs.com/images/common/personal_icon_head_x.png",
    nickname: sessionStorage.getItem('nickname')||"小喵",
    Mobile:sessionStorage.getItem('Mobile')
  },
  getters: {
    isLogin: (state) => state.isLogin,
    userInfo: (state) => state.userInfo,
    headImg: (state) => state.headImg,
    nickname: (state) => state.nickname,
    Mobile:(state) => state.Mobile
  },
  mutations: {
    GetUserInfo(state, userInfo) {
      state.userInfo = JSON.stringify(userInfo);
      state.isLogin = true;
      sessionStorage.setItem('isLogin', true)
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
    },
    getHeadImg(state, headImg) {
      state.headImg = headImg;
      sessionStorage.setItem('headImg', headImg)
    },
    getNickname(state, nickname) {
      state.nickname = nickname;
      sessionStorage.setItem('nickname', nickname)
    },
    getMobile(state, Mobile) {
      state.Mobile = Mobile;
      sessionStorage.setItem('Mobile', Mobile)
    },
    setLogout(state){
      state.userInfo="";
      state.headImg="";
      state.nickname="";
      state.Mobile="";
      state.isLogin = false;
      sessionStorage.clear();

    }
  },
  actions: {}
})


export default store
