<template>
  <div v-scroll="func" v-if="off">
    <heads :openId="opens"></heads>
    <div class=""></div>
    <div class="swiper-container" id="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/slide_2.png"
                                       alt="知识层次全打通"></div>
        <div class="swiper-slide">
          <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/slide_3.png" alt="暑假双师课堂">
        </div>
        <div class="swiper-slide">
          <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/slide_5.png" alt="暑假系列直播班">
        </div>
        <div class="swiper-slide">
          <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/slide_4.png" alt="暑假来这里学习">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
    <div class="one">
      <div class="title">
        <p class="child">喵想学 — <b>懂教育更懂孩子</b></p>
      </div>
      <div class="one-content">
        <div class="ani">
          <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/video.png" alt="">
          <p class="t"><b>随时随地  想看就看</b></p>
          <div class="o">
            <p class="tt">时间由你定，学习便捷不浪费碎片化时间</p>
          </div>
        </div>
        <div class="ani">
          <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/efficiency.png" alt="">
          <p class="t"><b>20分钟  精品课</b></p>
          <div class="o">
            <p class="tt">细分章节知识点，视频精讲将学习效率最大化</p>
          </div>
        </div>
        <div class="ani">
          <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/remember.png" alt="">
          <p class="t"><b>学习笔记  记错本</b></p>
          <div class="o">
            <p class="tt">采用AI技术，错题收集练习高效贴合良好的学习习惯</p>
          </div>
        </div>
        <div class="ani">
          <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/resources.png" alt="">
          <p class="t"><b>优质名校教育资源</b></p>
          <div class="o">
            <p class="tt">名校精英，长期的教学经验精通学习技巧，让你快速学习</p>
          </div>
        </div>
      </div>
    </div>
    <div class="two">
      <div class="title">
        <p class="child">百万学生家长 — <b>选择喵想学</b></p>
      </div>
      <div class="two-content">
        <div class="video">
          <div class="btn_video">
            <div class="btn_play"></div>
          </div>
          <div class="video_bg" style="display: none;">

          </div>
          <div class="video_bg_outin" style="display: none;">
            <video preload="auto" controls="" controlslist="nodownload" id="v" poster="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/picture.png">
              <source src="http://video.ymgxjy.com/sv/22dd61f-16ade799cee/22dd61f-16ade799cee.mp4" type="video/mp4">
            </video>
            <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/cancel.png" alt="" class="video_close">
          </div>
        </div>
        <div class="two_text">
          <p>喵想学是圆梦共享教育研发的一款K12数理化智能AI在线教育平台, 教学技术研发团队成员分别来自于北大，浙大，北师大，华师大，华科大，中科大，国防科技大学，香港中文大学，香港城市大学等世界一流学府，平台集互动课程、智能题库、智能教学系统为一体， 围绕“学习效果”为中心，以智能AI测评系统为基本点，以学习习惯养成系统为基本点，通过互联网PC端，移动端（智能APP、公众号、网页） 支持手机，电脑，Pad上课，用普惠的价格，个性化的服务让广大学子秒懂数理化！</p>
          <button class="btn">立即体验</button>
        </div>
      </div>
    </div>
    <div class="three">
      <div class="title">
        <p class="child">喵想学老师 — <b>严格优选名校教师</b></p>
      </div>
      <div class="three-content">
        <div class="three_one a">
          <h3 class="h3">一、资格筛选、能力筛选</h3>
          <p class="p">教学经验丰富，有专属的教学技巧，懂学生问题所在</p>
        </div>
        <div class="three_two a">
          <h3 class="h3">二、专业筛选、提分筛选</h3>
          <p class="p">懂考点，懂政策，熟考纲；阶段学生分析，总结教学经验</p>
        </div>
        <div class="three_three a">
          <h3 class="h3">三、服务筛选、态度筛选</h3>
          <p class="p">教案技巧，服务意识，视频好评，认真负责</p>
        </div>
        <div class="three_four a">
          <h3 class="h3">四、学科筛选、技能筛选</h3>
          <p class="p">重点、难点，熟悉把握命题方式，个性化教学方式</p>
        </div>
        <div class="three_five a">
          <h3 class="h3">五、教研筛选、测试评定</h3>
          <p class="p">丰富的教研经验激发学生的学习兴趣，精准找出问题给出解决方案</p>
        </div>
        <div class="b">
          <div class="one_yuan">
            <div class="two_yuan">
              <div class="three_yuan">

              </div>
            </div>
          </div>
          <div class="four_yuan"></div>
        </div>
        <div class="c">
          <div class="one_yuan">
            <div class="two_yuan">
              <div class="three_yuan">

              </div>
            </div>
          </div>
          <div class="four_yuan"></div>
        </div>
        <div class="d">
          <div class="one_yuan">
            <div class="two_yuan">
              <div class="three_yuan">

              </div>
            </div>
          </div>
          <div class="four_yuan"></div>
        </div>
        <div class="e">
          <div class="one_yuan">
            <div class="two_yuan">
              <div class="three_yuan">

              </div>
            </div>
          </div>
          <div class="four_yuan"></div>
        </div>
        <div class="f">
          <div class="one_yuan">
            <div class="two_yuan">
              <div class="three_yuan">

              </div>
            </div>
          </div>
          <div class="four_yuan"></div>
        </div>
      </div>
    </div>
    <div class="four">
      <!-- <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/ssss.png" alt=""> -->
      <div class="title">
        <p class="child">喵想学教研团队 — <b>优中选优</b></p>
      </div>
      <div style="width: 100%">
        <div class="pre_banner_3d">

          <div class="banner_tree">
            <div class="left_btn color_font"><img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/left.png" alt=""></div>
            <div class="right_btn color_font"><img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/right.png" alt=""></div>
            <ul class="show_s_ui">
              <li id="middel_shows" style="top: 90px;">
                <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/zzy0.png" alt="" class="a" style="display: none;">
                <div class="b" style="display: block;">
                  <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/zzy1.png" alt="">
                </div>
              </li>
              <li id="right_shows" style="top: 0px;">
                <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/zcy0.png" alt="" class="a" style="display: block;">
                <div class="b" style="display: none;">
                  <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/zcy1.png" alt="">
                </div>
              </li>
              <li id="small_right">
                <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/fqq0.png" alt="" class="a">
                <div class="b"><img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/fqq1.png" alt=""></div>
              </li>
              <li id="small_left">
                <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/fq0.png" alt="" class="a">
                <div class="b"><img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/fq1.png" alt=""></div>
              </li>
              <li id="left_shows" style="top: 0px;">
                <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/cgh0.png" alt="" class="a" style="display: block;">
                <div class="b" style="display: none;"><img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/cgh1.png" alt=""></div>
              </li>
              <!-- <li>
                  <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/6.png" alt="">
                  <div>6</div>
              </li>
              <li>
                  <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/7.png" alt="">
                  <div>7</div>
              </li>
              <li>
                  <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/8.png" alt="">
                  <div>8</div>
              </li> -->
            </ul>
            <div class="left_btn color_font la"></div>
            <div class="right_btn color_font ra"></div>
          </div>
          <div class="contrves">
            <ul class="nav_banners">
              <li class="blue_nav">
                <span style="display:inline-block;width:282px;height:1px;background:#ffa232;position:absolute;bottom:138px;left:38.1%;"></span>
                <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/zzy2.png" alt="">
              </li>
              <li>
                <span style="display:inline-block;width:282px;height:1px;background:#ffa232;position:absolute;bottom:138px;left:38.1%;"></span>
                <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/zcy2.png" alt="">
              </li>
              <li>
                <span style="display:inline-block;width:282px;height:1px;background:#ffa232;position:absolute;bottom:138px;left:38.1%;"></span>
                <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/fqq2.png" alt="">
              </li>
              <li>
                <span style="display:inline-block;width:282px;height:1px;background:#ffa232;position:absolute;bottom:138px;left:38.1%;"></span>
                <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/fq2.png" alt="">
              </li>
              <li>
                <span style="display:inline-block;width:282px;height:1px;background:#ffa232;position:absolute;bottom:138px;left:38.1%;"></span>
                <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/cgh2.png" alt="">
              </li>
              <!-- <li>微信跳一跳</li>
              <li>答题红包</li>
              <li>闯关小游戏</li> -->
            </ul>
          </div>
        </div>
      </div>
      <div class="let_go"><button class="four_btn">跟着老师去学习</button></div>
    </div>
    <foot></foot>

  </div>
</template>
<script>

 //   import Swiper from 'swiper';

    export default {
        name: "index",
        data() {
            return {
                opens: '0.123456',
                data: 's',
                off:true
            }
        },
        mounted() {
           /* new Swiper('#swiper-container', {
                loop: true, // 循环模式选项
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        var text;
                        switch (index) {
                            case 0:
                                text = '知识层次全打通';
                                break;
                            case 1:
                                text = '暑假双师课堂';
                                break;
                            case 2:
                                text = '暑假系列直播班';
                                break;
                            case 3:
                                text = '暑假系列直播班';
                                break;
                        }
                        return '<span class="' + className + '">' + text + '</span>';
                    }
                },
                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                // 如果需要滚动条
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            })*/
        },
        methods: {
            func(){},
            getMethods(event) {
            },
            sadsa() {
                this.$toast({
                    content: '这个是什么鬼',
                    onOk: () => {
                        console.log('ok')
                    },
                    onCancel: () => {
                        console.log('cancel')
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
  .swiper-container {
    width: 100%;
    height: 500px;
    position: relative;
    .swiper-wrapper{
      .swiper-slide{
        img{
          display: block;
          width: 100%;
        }
      }
    }
  }
  // 轮播
  // one
  .one {
    background: #fff;
    height: 600px;
    .title {
      margin: 102px 0 80px;
      text-align: center;
      p {
        font-size:38px;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(34,34,34,1);
        line-height:36px;
      }
    }
    .one-content {
      width: 1260px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      .ani {
        width: 285px;
        height: 369px;
        text-align: center;
        img {
          margin: 57px 0 47px;
        }
        p.t {
          font-size:20px;
          font-family:SourceHanSansCN-Medium;
          font-weight:500;
          color:rgba(34,34,34,1);
          line-height:36px;
        }
        .o {
          width:182px;
          margin: 20px auto;
          .tt {
            font-size:14px;
            font-family:MicrosoftYaHei;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height:30px;
          }
        }
      }
      .ani:hover {
        background: rgba(241,241,241,1);
      }
    }
  }
  // two
  .two {
    background: rgba(238,238,238,1);
    height: 600px;
    .title {
      padding: 102px 0 80px;
      text-align: center;
      p {
        font-size:38px;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(34,34,34,1);
        line-height:36px;
      }
    }
    .two-content {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .video {
        position: relative;
        width:562px;
        height:316px;
        background-image: url(https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/picture.png);
        background-size: 100% 100%;
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        .btn_video {
          width: 130px;
          height: 130px;
          background-image: url(https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/button-video.png);
          background-size: 100% 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          .btn_play {
            width: 16px;
            height: 18px;
            background-image: url(https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/suspended.png);
            background-size: 100% 100%;
          }
        }
        .video_bg {
          width: 100%;
          height: 100%;
          z-index: 3000;
          position: fixed;
          top: 0;
          left: 0;
          background: #000;
          opacity: 0.5;
          display: none;

        }
        .video_bg_outin {
          display: none;
          width: 900px;
          height: 581px;
          background: #fff;
          // margin: 250px auto;
          z-index: 3009;
          position: fixed;
          top: 20%;
          left: 25%;
          video {
            width:786px;
            height:446px;
            border-radius: 6px;
            display: block;
            margin: 67.5px auto;
            outline: none;
          }
          .video_close {
            position: absolute;
            top: -10px;
            right: -22px;
          }
        }

        .play {
          display: block;
          width: 130px;
          height: 130px;
          background:rgba(255,255,255,1);
          opacity:0.6;
          border-radius:50%;
          position: absolute;
          bottom: 100px;
          left: 210px;
        }
        .center-yuan {
          width:58px;
          height:58px;
          background:rgba(255,255,255,1);
          border-radius:50%;
          position: absolute;
          bottom: 135px;
          left: 246px;
        }
        .paus {
          position: absolute;
          bottom: 155px;
          left: 270px;
        }
      }
      .two_text {
        width: 560px;
        margin-left:86px;
        text-align: center;
        p {
          margin-top: 27px;
          font-size:16px;
          font-family:SourceHanSansCN-Regular;
          font-weight:400;
          color:rgba(34,34,34,1);
          line-height:30px;
          text-indent: 2rem;
          text-align: start;
        }
        .btn {
          margin: 26px;
          border: 0;
          outline: none;
          width:239px;
          height:51px;
          background:linear-gradient(77deg,rgba(255,166,54,1) 0%,rgba(255,129,21,1) 98%);
          box-shadow:0px 2px 10px 0px rgba(255,91,28,0.64);
          border-radius:26px;
          font-size:20px;
          font-family:SourceHanSansCN-Bold;
          font-weight:bold;
          color:rgba(255,255,255,1);
        }
      }
    }
  }
  .three {
    // max-width: 1755px;
    min-width: 1200px;
    background: #fff;
    height: 1000px;
    .title {
      margin: 102px 0 80px;
      text-align: center;
      p {
        font-size:38px;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(34,34,34,1);
        line-height:36px;
      }
    }
    .three-content {
      width: 1755px;
      height: 780px;
      margin: 0 auto;
      background-image: url(https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/background.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: relative;
      .a {
        width: 420px;
        text-align: center;
        position: absolute;
        .h3 {
          height:36px;
          font-size:18px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height:36px;
        }
        .p {
          height:36px;
          font-size:14px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height:36px;
        }
      }
      .b,.c,.d,.e,.f {
        position: absolute;
        .one_yuan {
          width: 60px;
          height: 60px;
          border: 1px solid #CFA972;
          border-radius: 50%;
          position: relative;
          animation: yun 1s linear infinite;
          .two_yuan {
            width: 40px;
            height: 40px;
            border: 1px solid #CFA972;
            border-radius: 50%;
            position: absolute;
            top: 9px;
            left: 9px;
            .three_yuan {
              width: 25px;
              height: 25px;
              border: 1px solid #CFA972;
              border-radius: 50%;
              position: absolute;
              top: 6px;
              left: 6px;
            }
          }
        }
        .four_yuan {
          width: 15px;
          height: 15px;
          background: #fff;
          border-radius: 50%;
          position: absolute;
          top: 23px;
          left: 23px;

        }
      }
      .b {
        bottom: 127px;
        left: 303px;
      }
      .c {
        bottom: 200px;
        left: 640px;
      }
      .d {
        top: 250px;
        left: 650px;
      }
      .e {
        top: 320px;
        right: 570px;
      }
      .f {
        top: 160px;
        right: 470px;
      }
      .three_one {
        bottom: 210px;
        left: 115px;
      }
      .three_two {
        bottom: 150px;
        left: 650px;
      }
      .three_three {
        top: 180px;
        left: 480px;
      }
      .three_four {
        top: 410px;
        right: 360px;
      }
      .three_five {
        top: 240px;
        right: 150px;
      }
    }
  }
  .four {
    height: 700px;
    background-image: url(https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/background-w.png);
    background-size: 100% 100%;
    margin-bottom: 69px;
    position: relative;
    .title {
      padding: 102px 0 80px;
      text-align: center;
      p {
        font-size:38px;
        font-family:'MicrosoftYaHei';
        font-weight:400;
        color:#fff;
        line-height:36px;
      }
    }
    .four_content {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      .four_left {
        .be {
          z-index: 10;
        }
        .af {
          // margin-left: -100px;
          z-index: 1;
          position: absolute;
          right: 0px;
          top: 53px;
          display: none;
        }
      }
    }
    .let_go {
      position: absolute;
      bottom: -20px;
      left: 44%;
      .four_btn {
        border: 0;
        outline: none;width:239px;
        height:51px;
        background:linear-gradient(77deg,rgba(255,166,54,1) 0%,rgba(255,129,21,1) 98%);
        box-shadow:0px 2px 10px 0px rgba(255,91,28,0.64);
        border-radius:26px;font-size:20px;
        font-family:SourceHanSansCN-Bold;
        font-weight:bold;
        color:rgba(255,255,255,1);
        text-align: center;
      }
    }

  }
  @media screen  and (max-width:1800px){
    .three-content {
      overflow: hidden;
    }
  }

  // four 动画
  @keyframes yun
  {
    0%{
      transform: scale(1);
      opacity: 1;
    }
    50%{
      transform: scale(1.1);
      opacity: 0.1;   /*圆形放大的同时，透明度逐渐减小为0*/
    }
    100%{
      transform: scale(1);
      opacity: 1;
    }
  }
  .pre_banner_3d a{
    text-decoration: none;
    border:none;
  }
  body{
    overflow-x: hidden;
    /* background: #222; */
  }
  .pre_banner_3d{
    margin:auto;
    width:1200px;
    height:448px;
    position:relative;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }
  .contrves{
    width:100%;
    height:auto;
    /* position:absolute; */

  }
  .nav_banners{
    width:100%;
    height:auto;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content:space-between;
  }
  .nav_banners>li{
    display:inline-block;
    padding:5px 16px;
    margin:12px auto;
    border-radius: 5px;
    font-size:14px;
    cursor: pointer;
    display: none;
  }
  .blue_nav{
    /* background:#63B504; */
    display: block !important;
  }
  .banner_tree{
    width:100%;
    height:270px;
    /* position:absolute;
    bottom:0; */
    overflow: hidden;
  }
  .banner_tree .la {
    left: 8%;
    height: 235px;
    top: -49px;
    width: 130px;
  }
  .banner_tree .ra {
    width: 130px;
    height: 235px;
    top: -49px;
    right: 9%;
  }
  .show_phone_s{
    width:414px;
    height:736px;
    position:absolute;
    top:0;
    left:0;
    bottom: 0;
    right:0;
    margin:auto;
    z-index: 10
  }
  .color_font{
    width: 45px;
    height: 100px;
    position:absolute;
    top:0;bottom:110px;
    margin:auto;
    z-index: 50;
    cursor: pointer;
  }
  .left_btn{
    left:0;
  }
  .right_btn{
    right:0;
  }
  .img_phone{
    width:100%;
    height:100%;
  }
  .show_s_ui{
    width:100%;
    height:100%;
    position:relative;
  }
  .show_s_ui>li{
    width:130px;
    height:235px;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    z-index: 30;
    cursor: pointer;
    filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);
    opacity: 0;
    font-size:40px;
  }
  .show_s_ui>li>div{
    position: absolute;
    top:0;
    width:282px;
    height:275px;
    /* background:#fff; */
    filter:progid:DXImageTransform.Microsoft.Alpha(opacity=90);
    /* opacity: 0.9; */
    display:block;
  }
  .show_s_ui>li>img{
    width:100%;
    height:100%;
    /* display: none; */
  }
  #middel_shows{
    width:205px;
    height:363px;
    left:38.1%;
    filter:progid:DXImageTransform.Microsoft.Alpha(opacity=100);
    opacity:1;
  }

  #left_shows{
    left:8%;
    filter:progid:DXImageTransform.Microsoft.Alpha(opacity=60);
    opacity: 0.6;
  }
  #right_shows{
    left:80%;
    opacity: 0.6;
    filter:progid:DXImageTransform.Microsoft.Alpha(opacity=60);
  }
  #small_left,#small_right{
    width:154px;
    height:249px;
    opacity: 0;
    filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);
  }
  #small_left{
    left:-15%;
  }
  #small_right{
    left:102.5%;
  }
</style>
