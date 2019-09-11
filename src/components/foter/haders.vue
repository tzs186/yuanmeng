<template>
  <div>
    <div class="contact">
      <div class="bg">
        <div class="hezuo">
          <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/cooperation.png" alt="" class="img">
          <span class="font"><a href="javascript:;">合作专区</a></span>
        </div>
        <div class="tel">
          <div class="lianxi">
            <img src="../../assets/img/phone.png" alt="" class="img">
            <span class="phone">4008-225-125</span>
          </div>
          <span class="down"><a href="down.html">客户端下载</a></span>
          <span class="close">
            <a href="portrait.html">个人中心</a>
            <div class="colse_box">
              <span class="index_close"></span>
            </div>
          </span>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="bg">
        <div class="logo">
          <img src="../../assets/img/LOGO.png" alt="" class="logo1">
          <img src="../../assets/img/slogan.png" alt="" class="logo2">
        </div>
        <div class="content">
<!--          <a href="index.html" class="lesson ac active">首页</a>-->
<!--          <a href="live.html" class="live ac">直播课程</a>-->
<!--          <a href="lesson.html" class="learn ac">课程中心</a>-->
<!--          <a href="vacation.html" class="vip ac">暑期系列</a>-->
          <router-link to="/" class="lesson ac active">首页</router-link>
          <router-link to="/live" class="live ac">直播课程</router-link>
          <router-link to="/" class="learn ac">课程中心</router-link>
          <router-link to="/" class="vip ac">暑期系列</router-link>
          <div class="portrait"></div>
          <div class="login">
            <router-link to="login" class="login_btn">登录</router-link>
            <router-link to="login" class="reg_btn">注册</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "haders",
        props: {
            openId: {
                type: String,
                default: ""
            }
        }
    }
</script>

<style scoped lang="scss">
  body {
    margin: 0;
    padding: 0;
    font-size: 14px;
    max-width: 1920px;
    min-width: 1200px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  .sctop {
    position: fixed;
    z-index: 9999;
    top: 0;
  }
  .sctops {
    position: fixed;
    z-index: 9999;
    top: 50px;
  }

  .contact a {
    color: #222;
  }

  .contact {
    width: 100%;
    height: 40px;
    background-color: #fff;
    margin-bottom: 1px;
    color: #fff;
    line-height: 40px;

    .bg {
      width: 1160px;
      height: 100%;
      margin: auto;
      display: -webkit-box;
      display: -moz-box;
      display: -webkit-flex;
      display: -moz-flex;
      display: -ms-flexbox;
      display: flex;
      // -moz-box-pack: space-between;
      // -webkit-box-pack: space-between;
      // -ms-flex-pack: center;
      // -webkit-justify-content: space-between;
      // -o-justify-content: space-between;
      // justify-content: space-between;
      position: relative;

      .hezuo {
        // display: -webkit-box;
        // display: -moz-box;
        // display: -webkit-flex;
        // display: -moz-flex;
        // display: -ms-flexbox;
        // display: flex;
        // -moz-box-pack: center;
        // -webkit-box-pack: center;
        // -ms-flex-pack: center;
        // -webkit-justify-content: center;
        // -o-justify-content: center;
        // align-items: center;
        .img {
          cursor: pointer;
          margin-right: 8px;
          width: 20px;
          height: 16px;
        }

        .font {

        }
      }

      .tel {
        position: absolute;
        right: 0;
        width: 575px;
        // display: -webkit-box;
        // display: -moz-box;
        // display: -webkit-flex;
        // display: -moz-flex;
        // display: -ms-flexbox;
        // display: flex;
        // -moz-box-pack: space-between;
        // -webkit-box-pack: space-between;
        // -ms-flex-pack: space-between;
        // -webkit-justify-content: space-between;
        // justify-content: space-between;
        .lianxi {

          // display: -webkit-box;
          // display: -moz-box;
          // display: -webkit-flex;
          // display: -moz-flex;
          // display: -ms-flexbox;
          // display: flex;
          // -moz-box-pack: center;
          // -webkit-box-pack: center;
          // -ms-flex-pack: center;
          // align-items: center;
          width: 166px;
          height: 40px;
          display: inline-block;
          position: relative;

          .img {
            cursor: pointer;
            margin-right: 10px;
            width: 20px;
            height: 20px;
            position: absolute;
            left: 0;
            top: 10px;
          }

          .phone {
            height: 100%;
            color: #FF5B1C;
            font-weight: bolder;
            margin-left: 30px;
          }
        }

        .down {
          padding: 0 23% 0 20%;
          //   width: 88px;
          height: 40px;
          display: inline-block;
        }

        .close {
          z-index: 99;
          position: relative;
          width: 60px;
          height: 40px;
          display: inline-block;

          .colse_box {
            width: 100%;
            text-align: center;
            background: #aaa;
            cursor: pointer;
            display: none;
            position: absolute;

            .index_close {
              a {

              }
            }
          }
        }

      }
    }
  }

  .nav {
    width: 100%;
    background: #fff;
    height: 70px;
    border-bottom: 1px solid #dbdbdb;

    .bg {
      width: 1200px;
      margin: 0 auto;
      height: 100%;
      line-height: 70px;
      display: -webkit-box;
      display: -moz-box;
      display: -webkit-flex;
      display: -moz-flex;
      display: -ms-flexbox;
      display: flex;
      -moz-box-pack: space-between;
      -webkit-box-pack: space-between;
      -ms-flex-pack: space-between;
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
          height: 48px;
        }

        .logo2 {
          height: 34px;
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
        -moz-box-pack: space-around;
        -webkit-box-pack: space-around;
        -ms-flex-pack: space-around;
        -webkit-justify-content: space-around;
        justify-content: space-around;
        -moz-box-pack: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        align-items: center;

        .ac {
          margin: 0 25px;
        }

        // span .active {
        //     color: #FF5B1C;
        // }
        a.ac:hover {
          color: #FF5B1C;
        }

        a.ac {
          color: #333;
        }

        .portrait {
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
          // display: none;
          .portrait-img {
            display: inline-block;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin: 0 10px;
          }

          .information {
            display: -webkit-box; /* Chrome 4+, Safari 3.1, iOS Safari 3.2+ */
            display: -moz-box; /* Firefox 17- */
            display: -webkit-flex; /* Chrome 21+, Safari 6.1+, iOS Safari 7+, Opera 15/16 */
            display: -moz-flex; /* Firefox 18+ */
            display: -ms-flexbox; /* IE 10 */
            display: flex;
            -moz-box-pack: column;
            -webkit-box-pack: column;
            -ms-flex-pack: column;
            -webkit-justify-content: column;
            flex-direction: column;

            .portrait-name {
              font-size: 12px;
              color: #FF5B1C;
              display: none;
            }
          }
        }

        .login {
          margin-left: 15px;

          .login_btn, .reg_btn {
            display: inline-block;
            width: 76px;
            height: 40px;
            border-radius: 20px;
            text-align: center;
            line-height: 40px;
          }

          .login_btn {
            color: #FF5B1C;
            border: 1px solid #FF5B1C;
            background: #fff;
          }

          .reg_btn {
            color: #fff;
            background: linear-gradient(77deg, rgba(255, 166, 54, 1) 0%, rgba(255, 129, 21, 1) 98%);
            box-shadow: 0px 2px 8px 0px rgba(255, 91, 28, 0.56);
          }
        }
      }
    }
  }

  footer {
    width: 100%;
    height: 260px;
    background: rgba(34, 34, 34, 1);

    .top {
      width: 1200px;
      margin: 0 auto;
      padding-top: 21px;
      border-bottom: 1px solid rgba(66, 66, 66, 1);

      .outin {
        width: 960px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        .login_f {
          display: inline-block;
          width: 159px;
          height: 59px;
          margin: auto 0;
        }

        .wechat {

          ul {
            padding: 0;
            margin: 0;

            li {
              list-style: none;
              float: left;
              display: flex;
              flex-direction: column;
              margin: 0 20px;
              align-items: center;

              img {
                display: inline-block;
                //  width: 84px;
                //  height: 84px;
                //  background: #FF5B1C;
                margin-bottom: 21px;
              }

              span {
                font-size: 14px;
                font-family: MicrosoftYaHei;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
                margin-bottom: 19px;
              }
            }


          }
        }
      }
    }

    .bottom {
      max-width: 1200px;
      margin: 30px auto 0;
      text-align: center;

      p {
        font-size: 12px;
        line-height: 24px;
        color: #999;
        text-align: center;
        margin: 0;

        .Police {
          margin: auto 5px;
        }
      }
    }
  }


  .r_tool {
    width: 82px;
    position: fixed;
    right: -8px;
    top: 330px;
    text-align: center;
    display: none;
    z-index: 9998;
    box-shadow: 0px 2px 10px 0px rgba(210, 210, 210, 0.43);
    border-radius: 10px;
    background: #fff;

    ul {
      li {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 30px auto;
        cursor: pointer;

        img {
          display: block;
          margin: 5px auto;
        }

        span {
          color: #333;
        }

      }

      li:hover span {
        color: #FF5B1C;
      }
    }
  }

  @media screen and (width: 1200px) {

  }

</style>
