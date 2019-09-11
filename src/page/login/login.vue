<template>
  <div class="login">
    <div class="nav">
      <div class="bg">
        <div class="logo" @click="jump">
          <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/LOGO.png" alt="" class="logo1">
          <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/slogan.png" alt="" class="logo2">
        </div>

      </div>
    </div>

    <div class="wxx_bg">
      <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/yun.png" alt="" class="cloud_1">
      <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/yun.png" alt="" class="cloud_2">
      <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/yun.png" alt="" class="cloud_3">
      <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/yun.png" alt="" class="cloud_4">
      <div class="login-con">
        <div class="login-con-tab clear">
          <div class="login-con-tab-btn" @click="loginTabType(0)" :class="loginIndex==0?'on':''">登录</div>
          <div class="login-con-tab-btn" @click="loginTabType(1)" :class="loginIndex==1?'on':''">注册</div>
          <div class="login-con-tab-img" @click="loginTabType(2)"></div>
        </div>
        <div class="login-form" v-show="loginIndex==0">
          <input type="text" class="login-form-inp" v-model="loginData.mobile" placeholder="手机号码" maxlength="11">
          <input type="password" class="login-form-inp" v-model="loginData.password" placeholder="手机号码" maxlength="11">
          <div class="login-form-submit" @click="loginSuubmit">登录</div>
          <div class="clear">
            <div class="input fl">
              <el-checkbox v-model="checked">记住密码</el-checkbox>
            </div>
            <div class="fr">
              <router-link to="/forgetPwd">忘记密码</router-link>
            </div>
          </div>
          <div class="login-third">
            <p>第三方账号登录</p>
            <div class="login-third-com">
              <div class="login-third-com-fl">
                <img src="../../assets/img/wechat.png" v-show="overImg0" @mouseover="thirdImgTab(0)" alt="">
                <img src="../../assets/img/wechat-choice.png" v-show="!overImg0" @mouseout="thirdImgOut(0)" alt="">
              </div>
              <div class="login-third-com-fl">
                <img src="../../assets/img/qq.png" v-show="overImg1" @mouseover="thirdImgTab(1)" alt="">
                <img src="../../assets/img/qq-choice.png" v-show="!overImg1" @mouseout="thirdImgOut(1)" alt="">
              </div>
              <div class="login-third-com-fl">
                <img src="../../assets/img/micro-blog.png" v-show="overImg2" @mouseover="thirdImgTab(2)" alt="">
                <img src="../../assets/img/micro-blog-choice.png" v-show="!overImg2" @mouseout="thirdImgOut(2)" alt="">
              </div>

            </div>
          </div>
        </div>
        <div class="login-form" v-show="loginIndex==1">
          <input type="text" class="login-form-inp" name="" placeholder="请输入您的手机号，获取消息提醒" maxlength="11">
          <div class="login-div clear">
            <input type="text" class="login-form-inp login-div-yzm" name="" placeholder="请输入验证码" maxlength="11">
            <div class="login-div-btn">获取短信验证码</div>
          </div>
          <input type="password" class="login-form-inp" name="" placeholder="8-12位密码，数字/字母/符合至少两种">
          <div class="login-div clear">
            <select name="" id="" class="reg_op">
              <option class="opt" value="" disabled="" selected="" hidden="">请选择年级</option>
              <option class="opt" value="小升初" data-grade="0">小升初</option>
              <option class="opt" value="七年级" data-grade="1">七年级</option>
              <option class="opt" value="八年级" data-grade="2">八年级</option>
              <option class="opt" value="九年级" data-grade="3">九年级</option>
              <option class="opt" value="高一" data-grade="4">高一</option>
              <option class="opt" value="高二" data-grade="5">高二</option>
              <option class="opt" value="高三" data-grade="6">高三</option>
            </select>
          </div>
          <div class="login-div clear">
            <input type="checkbox" checked="checked" id="reg_auto">
            <label for="reg_auto" class="label">
              我已阅读并同意<a href="http://api.ymgxjy.com/privacyPolicy.html">《用户个人信息保护政策》</a>和<a
              href="http://api.ymgxjy.com/userAgreement.html">《用户协议》</a>
            </label>

          </div>
          <div class="login-form-submit">注册</div>
        </div>
        <div class="login-form" v-show="loginIndex==2">
          <input type="text" class="login-form-inp" name="" placeholder="手机号码" maxlength="11">
          <input type="password" class="login-form-inp" name="" placeholder="手机号码" maxlength="11">
          <div class="login-form-submit" @click="loginSuubmit">登录</div>


        </div>
      </div>
      <footer>
        <div class="footer_bg">
          <span><a href="JavaScript:;">意见反馈</a></span>
          <span class="footer_tel">客服电话：4008-225-125</span>
          <span><a href="JavaScript:;">粤ICP备18119732号-1 中华人民共和国工业和信息化部</a></span>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
    export default {
        name: "login",
        data() {
            return {
                loginIndex: 0,
                overImg0: true,
                overImg1: true,
                overImg2: true,
                checked: false,
                loginData: {
                    "mobile": "",
                    "password": ""
                }
            }
        },
        mounted() {
            this.getCookie();
        },
        methods: {
            jump() {
                this.$router.push("/")
            },
            thirdImgTab(nub) {
                nub == 0 ? this.overImg0 = false : nub == 1 ? this.overImg1 = false : this.overImg2 = false;
            },
            thirdImgOut(nub) {
                nub == 0 ? this.overImg0 = true : nub == 1 ? this.overImg1 = true : this.overImg2 = true;
            },
            loginTabType(nub) {
                this.loginIndex = nub
            },
            loginSuubmit() {
                let that = this;
                if (that.loginData.mobile == "" || that.loginData.password == "") {
                    that.$message.error('账户或密码不能为空');
                    return false;
                } else {
                    this.$axios.post('user/login', that.loginData)
                        .then(res => {
                            if(res.code==1000){
                                if (that.checked == true) {
                                    //传入账号名，密码，和保存天数3个参数
                                    that.setCookie(that.loginData.mobile, that.loginData.password, 7);
                                } else {
                                    //清空Cookie
                                    that.clearCookie();
                                }
                                that.$message({
                                    message: res.desc,
                                    type: 'success',
                                    duration:"1000",
                                    onClose(){
                                        window.sessionStorage.setItem("token",res.data.token);
                                        that.$router.push('/')
                                    }
                                });
                            }else{
                                that.$message.error(res.desc);
                            }
                        }).catch(err => {
                        console.log(err )
                    })
                }
            },
            setCookie(tel, pwd, exdays) {
                var exDate = new Date();
                exDate.setTime(exDate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
                window.document.cookie = "tel" + "=" + tel + ";path=/;expires=" + exDate.toGMTString();
                window.document.cookie = "pwd" + "=" + pwd + ";path=/;expires=" + exDate.toGMTString();
            },
            getCookie() {
                if (window.document.cookie.length > 0) {
                    var arr = document.cookie.split("; ");
                    this.checked = true;
                    for (var i = 0; i < arr.length; i++) {
                        var arrData = arr[i].split("=");
                        if (arrData[0] == "tel") {
                            this.loginData.mobile = arrData[1]
                        } else if (arrData[0] == "pwd") {
                            this.loginData.password = arrData[1]
                        }
                    }
                }
            },
            clearCookie() {
                this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
            }
        },

    }
</script>

<style scoped lang="scss">
  .nav {
    width: 100%;
    background: #fff;
    height: 70px;

    .bg {
      width: 1200px;
      margin: 0 auto;
      height: 100%;
      display: -webkit-box; /* Chrome 4+, Safari 3.1, iOS Safari 3.2+ */
      display: -moz-box; /* Firefox 17- */
      display: -webkit-flex; /* Chrome 21+, Safari 6.1+, iOS Safari 7+, Opera 15/16 */
      display: -moz-flex; /* Firefox 18+ */
      display: -ms-flexbox; /* IE 10 */
      display: flex;

      -webkit-justify-content: space-between;
      justify-content: space-between;

      .logo {
        height: 100%;
        display: -webkit-box; /* Chrome 4+, Safari 3.1, iOS Safari 3.2+ */
        display: -moz-box; /* Firefox 17- */
        display: -webkit-flex; /* Chrome 21+, Safari 6.1+, iOS Safari 7+, Opera 15/16 */
        display: -moz-flex; /* Firefox 18+ */
        display: -ms-flexbox; /* IE 10 */
        display: flex;
        -moz-box-pack: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        align-items: center;

        .logo1 {
          margin-right: 59px;
        }
      }

      .content {
        height: 100%;
        display: -webkit-box; /* Chrome 4+, Safari 3.1, iOS Safari 3.2+ */
        display: -moz-box; /* Firefox 17- */
        display: -webkit-flex; /* Chrome 21+, Safari 6.1+, iOS Safari 7+, Opera 15/16 */
        display: -moz-flex; /* Firefox 18+ */
        display: -ms-flexbox; /* IE 10 */
        display: flex;

        -webkit-justify-content: space-around;
        justify-content: space-around;
        -moz-box-pack: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        align-items: center;

        .login {
          margin-left: 15px;

          .login_btn, .reg_btn {
            display: inline-block;
            width: 76px;
            height: 40px;
            border-radius: 20px;
            text-align: center;
            line-height: 40px;
            text-decoration: none;
          }

          .login_on {
            color: #fff;
            background: linear-gradient(77deg, rgba(255, 166, 54, 1) 0%, rgba(255, 129, 21, 1) 98%);
            box-shadow: 0px 2px 8px 0px rgba(255, 91, 28, 0.56);
          }

          .reg_on {
            color: #FF5B1C;
            border: 1px solid #FF5B1C;
            background: #fff;
          }
        }
      }
    }
  }

  .wxx_bg {
    background-image: url(https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/login_bg.png);
    height: 840px;
    background-size: 100% 100%;
    padding-top: 128px;
    position: relative;

    .cloud_1, .cloud_2, .cloud_3, .cloud_4 {
      position: absolute;
      animation: scroll 30s linear infinite;
    }

    .cloud_1 {
      top: 156px;
      left: 188px;
    }

    .cloud_2 {
      top: 46px;
      left: 388px;
    }

    .cloud_3 {
      top: 46px;
      right: 488px;
    }

    .cloud_4 {
      top: 101px;
      right: 88px;
    }
  }

  .login-con {
    width: 489px;
    min-height: 506px;
    background: white;
    box-shadow: 0px 2px 7px 0px rgba(255, 121, 0, 0.46);
    margin: 0 auto;
    padding: 30px;
    position: relative;

    &-tab-btn {
      width: 71px;
      border: 0;
      outline: none;
      background: transparent;
      font-size: 14px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: #999999;
      line-height: 30px;
      float: left;
      margin-right: 10px;
      cursor: pointer;
      text-align: center;
    }

    .on {
      font-size: 18px;
      font-family: SourceHanSansCN-Medium;
      font-weight: 500;
      color: #222222;
      line-height: 30px;
      border-bottom: 3px solid #FF5B1C;
    }

    &-tab-img {
      width: 24px;
      height: 20px;
      background-image: url(https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/ban-set.png);
      background-size: 100%;
      background-repeat: no-repeat;

      cursor: pointer;
      position: absolute;
      right: 50px;
      top: 40px;
    }

    .login-form {
      margin: 35px 0;
      position: relative;

      &-inp {
        width: 100%;
        display: block;
        height: 40px;
        padding-left: 10px;
        border: 1px solid #a9a9a9;
        margin-bottom: 19px;

      }

      &-submit {
        background-color: rgb(255, 91, 28);
        color: rgb(255, 255, 255);
        text-align: center;
        height: 50px;
        line-height: 50px;
        outline: none;
        font-size: 18px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        cursor: pointer;
        margin-bottom: 19px;
      }
    }

    .login-third {
      text-align: center;
      position: relative;
      margin-top: 40px;

      &-com {
        &-fl {
          display: inline-block;
          margin: 10px;
          cursor: pointer;
        }
      }
    }

    .login-div {
      position: relative;
      margin-bottom: 19px;

      .login-div-yzm {
        float: left;
        width: 210px;
        margin-bottom: 0;
      }

      .login-div-btn {
        width: 146px;
        height: 42px;
        line-height: 42px;
        text-align: center;
        background: #eeeeee;
        border-radius: 8px;
        font-size: 14px;
        float: right;
        outline: none;

      }

      .reg_op {
        display: block;
        width: 100%;
        height: 42px;
        padding-left: 10px;
      }
    }

  }

  input[type=checkbox] {
    visibility: hidden;
  }

  input[type="checkbox"] + label::before {
    content: "\a0"; /*不换行空格*/
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: #fff;
    border: 1px solid #aaa;
    line-height: 10px;
    margin-right: 10px;
  }

  input[type="checkbox"]:checked + label::before {
    border: 1px solid #FF5B1C;
    background-image: url(https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/choice.png);
    background-size: 100% 100%;
  }

  .footer_bg {
    width: 100%;
    height: 180px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    background: url(https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/one.png) left top no-repeat;
    background-size: 100% 100%;

  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-200px);
    }
    100% {
      transform: translateX(0);
    }


  }

  @keyframes scrollUp {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }

  }

</style>
