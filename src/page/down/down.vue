<template>
  <div class="">
  <heads  ></heads>
  <div class="main">
    <div class="main_bg_img">
      <div class="main-fixed-btn">
        <div class="QRcodeBtn on">

          <span>iPhone版本下载</span>
        </div>
        <div class="QRcodeBtn">

          <span>Android版本下载</span>
        </div>
      </div>
      <div class="content" style="text-align: center;">

        <h2>喵想学移动客户端</h2>
        <h4>高效学习，名师教学</h4>
        <img src="../../assets/img/qrcode.png" alt="">
        <p style="margin-top: 20px;font-size:12px;color:#666;">手机扫码，立即下载</p>
      </div>
    </div>
    <div class="wave-box">
      <div class="marquee-box marquee-up" id="marquee-box">
        <div class="marquee">
          <div class="wave-list-box" id="wave-list-box1">
            <ul>
              <li><img height="298" alt="波浪" src="../../assets/img/wave_02.png"></li>
            </ul>
          </div>
          <div class="wave-list-box" id="wave-list-box2">
            <ul>
              <li><img height="298" alt="波浪" src="../../assets/img/wave_02.png"></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="marquee-box" id="marquee-box3">
        <div class="marquee">
          <div class="wave-list-box" id="wave-list-box4">
            <ul>
              <li><img height="298" alt="波浪" src="../../assets/img/wave_01.png"></li>
            </ul>
          </div>
          <div class="wave-list-box" id="wave-list-box5">
            <ul>
              <li><img height="298" alt="波浪" src="../../assets/img/wave_01.png"></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
    <div class="">
      <img src="../../assets/img/down-@xs.jpg" alt="">
    </div>
  </div>

</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped lang="scss">
  .main {
    //background-image: url(https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/down_bg.png);
    background-image: url(../../assets/img/down_bg_x.jpg);
    background-size: 100% 100%;
    width: 100%;
    min-width: 1900px;
    height: 827px;
    position: relative;
    border-top: 1px solid #eee;
    .main_bg_img {
      .content {
        width: 200px;
        position: absolute;
        top: 295px;
        right: 688px;
        h2{
          font-weight: bold;
          margin-bottom: 15px;
        }
        h4{
          margin-bottom: 15px;
        }
        img {
          cursor: pointer;
        }
      }
    }
    .main-fixed-btn {
      width: 545px;
      margin: 70px auto;
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      >div {
        width: 50%;
        height: 55px;
        line-height: 55px;
        cursor: pointer;
        text-align: center;
        padding-left: 15px;
        img {
          vertical-align: -8px;
          margin-right: 10px;
        }
      }
      >div:first-child{
        background: url(../../assets/img/Shape11.png) no-repeat 53px 10px;
      }
      >div:last-child{
        background: url(../../assets/img/Shape10.png) no-repeat 53px 10px;
      }
      .on{
        box-shadow: 0px 0px 8px 2px rgba(255, 91, 28, 0.5);
        color: #fff;
      }
      .on:first-child{
        background: url(../../assets/img/Shape8.png) no-repeat 53px 10px #ff5b1c;
      }
      .on:last-child{
        background: url(../../assets/img/Shape7.png) no-repeat 53px 10px #ff5b1c;
      }
    }
  }

  .marquee-box {
    overflow: hidden;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0
  }

  .marquee {
    width: 8000%;
    height: 298px;
  }
  .wave-list-box {
    float: left;
    animation: move-wave 3s;
    -webkit-animation: move-wave 3s;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }

  .wave-list-box ul {
    float: left;
    height: 298px;
    overflow: hidden;
    zoom: 1
  }

  .wave-list-box ul li {
    height: 298px;
    width: 100%;
    float: left;
    line-height: 298px;
    list-style: none
  }

  .wave-list-box ul li img {
    display: block;
  }

  .wave-box {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 298px;
    bottom: 0;
    overflow: hidden;
  }
  .wave-list-box {
    animation: move_wave 10s linear infinite;
  }

  @keyframes move_wave {
    0% {
      transform: translateX(0) translateZ(0)
    }
    50% {
      transform: translateX(-50%) translateZ(0)
    }
    100% {
      transform: translateX(-100%) translateZ(0)
    }
  }
</style>
