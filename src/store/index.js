import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    isLogin: false,
    userInfo: sessionStorage.getItem('userInfo'),
    headImg: "http://ym-video-prod.oss-cn-shenzhen.aliyuncs.com/images/common/personal_icon_head_x.png",
    nickname: "小喵"
  },
  getters: {
    isLogin: (state) => state.isLogin,
    userInfo: (state) => state.userInfo,
    headImg: (state) => state.headImg,
    nickname: (state) => state.nickname,
  },
  mutations: {
    GetUserInfo(state, userInfo) {
      state.userInfo = JSON.stringify(userInfo);
      state.isLogin = true;

      sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
    },
    getHeadImg(state, headImg) {
      state.headImg = headImg;
    },
    getNickname(state, nickname) {
      state.nickname = nickname;
    }
  },
  actions: {}
})


export default store
