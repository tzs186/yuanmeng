<template>
  <div class="">
    <heads :openId="opens"></heads>
    <div class="live_detail clear">
      <div class="detail-fl">
        <div class="detail-fl-up">
          <div class="detail-fl-up-top">
            <div class="up-top-title">
              <div class="sign_title">
                <span class="title_subject subject_h" data-subject="2">化</span>
                <span class="title_text">暑假升高二化学目录</span>
              </div>
              <div class="sign_time">
                <span class="sign_time_bg"></span>
                <span class="sign_time_yue">07月05日-12月17日 13:00-15:00</span>
                <span class="sign_tiem_lessons"> <b class="lessons_sum">10</b>课时</span>
              </div>
            </div>
            <div class="detail-fl-up-link">
              <el-button type="primary">立即报名</el-button>
              <el-button type="primary">
                <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/Click.png" alt="">
                <span>进入学习</span>
              </el-button>
              <el-button type="info" disabled>未开始</el-button>
            </div>
          </div>
          <div class="sign_up_detail">
            <div class="sign_up_detail_out">
              <div class="sign_up_detail_one">
                <span class="detail_one_price"></span>
                <span class="price"
                      style="color: rgb(34, 34, 34); font-size: 24px; display: inline-block; margin-top: 10px; font-weight: bold;">【已报名】</span>
                <span class="person"><b class="person_sum">1020</b>人已报名</span>
              </div>
              <div class="sign_up_detail_two">
                <span class="detail_two_prescription">课程有效期：</span>
                <span class="detail_two_start">2019-7-2</span>
                <span>至</span>
                <span class="detail_two_end">2020-12-31</span>
              </div>
              <div class="sign_up_detail_three">
                <span class="detail_three_bg"></span>
                <span class="detail_three_class">线上教学   /   双师指导   /   同步练习   /   及时答疑   /   课程检测</span>
              </div>
              <div class="sign_up_detail_four">
                <div class="main_teacher">
                  <div>
                    <p class="teacher_name">主讲老师</p>
                    <div class="teacher_detail">
                      <img
                        src="http://ym-video-prod.oss-cn-shenzhen.aliyuncs.com/news/1560838426483.png?Expires=1876198425&amp;OSSAccessKeyId=LTAIWdIJksLs65ag&amp;Signature=sK5GRoHcilvY7t8wNwSXnLPIXMs%3D"
                        alt="" class="main_teacher_img t_img_h" data-subject="2">
                      <div class="teacher_time">
                        <p class="main_teacher_name">张春宇</p>
                        <!-- <p class="time_yue">7.1-7.2</p> -->
                        <p class="time_tian">精品课讲解</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="auxiliary_teacher">
                  <div>
                    <p class="teacher_name">助教老师</p>
                    <div class="teacher_detail">
                      <img
                        src="http://ym-image-test.oss-cn-shenzhen.aliyuncs.com/images/lesson/cover/1559116770830.jpg?Expires=1874476774&amp;OSSAccessKeyId=LTAIWdIJksLs65ag&amp;Signature=LGUsnQDN5krJyXqo0wkbqaZBnQA%3D"
                        alt="" class="auxiliary_teacher_img" data-subject="2">
                      <div class="teacher_time">
                        <p class="auxiliary_teacher_name st">虚拟2</p>
                        <p class="time_all">全程跟踪辅导</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="detail-bottom">
          <div class="detail-bottom-tab">
            <div class="detail-tab-btn on">课程介绍</div>
            <div class="detail-tab-btn">课程目录(10)(</div>
          </div>
          <div class="detail_content">
            <div class="">
              <router-link to="/live" class="sign_jump">
                <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/link.png" alt="">
              </router-link>
              <div class="detail-introduce">
                <div class="detail-int-title">课程介绍</div>
                <div class="detail-int-img">
                  <p>
                    <img src="http://ym-image-test.oss-cn-shenzhen.aliyuncs.com/liveIntroduce/1562810417499.jpg"
                         title=""
                         alt="">
                    <img src="http://ym-image-test.oss-cn-shenzhen.aliyuncs.com/liveIntroduce/1562810585295.jpg"
                         title=""
                         alt="">
                    <img src="http://ym-image-test.oss-cn-shenzhen.aliyuncs.com/liveIntroduce/1562810587955.jpg"
                         title=""
                         alt="">
                    <img src="http://ym-image-test.oss-cn-shenzhen.aliyuncs.com/liveIntroduce/1562810592710.jpg"
                         title=""
                         alt="">
                    <img src="http://ym-image-test.oss-cn-shenzhen.aliyuncs.com/liveIntroduce/1562810593721.jpg"
                         title=""
                         alt="">
                    <img src="http://ym-image-test.oss-cn-shenzhen.aliyuncs.com/liveIntroduce/1562810602613.jpg"
                         title=""
                         alt="">
                    <img src="http://ym-image-test.oss-cn-shenzhen.aliyuncs.com/liveIntroduce/1562810603393.jpg"
                         title=""
                         alt="">
                  </p>
                </div>
              </div>
            </div>
            <div class="detail-introduce">
              <div class="detail-int-title">课程目录</div>
              <p class="catalog_content_title">暑假升高二化学目录</p>
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="liveLessionTitle"
                  label="课程名称"
                  width="180">
                </el-table-column>
                <el-table-column
                  label="授课老师"
                  width="120"
                  align="center"
                >
                  {{teacherName}}
                </el-table-column>
                <el-table-column
                  prop="sst"
                  width="250"
                  label="上课时间">
                </el-table-column>
                <el-table-column
                  label="学习状态">
                  <template slot-scope="scope">
                    <el-button v-if="scope.row.videoId==null" type="info" disabled round>未 上 传</el-button>
                    <el-button v-else-if="now_time<scope.row.startTime"  type="info" disabled  round>未 开 始</el-button>
                    <el-button v-else-if="now_time>scope.row.startTime && now_time>scope.row.endTime"  type="primary"  round>
                      <span>查看回放</span></el-button>
                    <el-button v-else-if="now_time<scope.row.endTime"  type="primary" class="clear"  round>
                      <div class="live_list_line">
                        <span class="live_line"></span>
                        <span class="live_line"></span>
                        <span class="live_line"></span>
                      </div>
                      <span>正在直播</span>
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-fr" :class="off==true?'notice_top':''">
        <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/bm.png" class="detail-fr-img" alt="">
        <div class="consultation">
          <span class="consultation_img"></span>
          <span><a href="https://cschat-ccs.aliyun.com/index.htm?tntInstId=_1Hw4Ops&scene=SCE00004448" target="blank" class="zixun">咨询</a></span>
        </div>
      </div>
    </div>


    <foot></foot>
  </div>
</template>
<script>

    export default {
        name: "live_detail",
        data() {
            return {
                opens: "sad",
                off:false,
                teacherName:"张春宇",
                now_time:new Date().getTime(),
                tableData: [{
                    "id": 112,
                    "liveRoomId": 29,
                    "liveLessionTitle": "化学反应与能量的变化",
                    "startTime": 1563768441000,
                    "endTime": 1563790954000,
                    "pushUrl": null,
                    "pullUrl": "auth_key=1563790954000-0-0-7b12b6bd2bf0fb8a9a1642074b85c908&17-60-71:94-93-4",
                    "videoId": "eac7fb6bc8fa41849a7a3b7bb0e30549",
                    "createTime": null,
                    "updateTime": null,
                    "sst": "2019-07-22 (周一) 12:22"
                }, {
                    "id": 113,
                    "liveRoomId": 29,
                    "liveLessionTitle": "化学反应速率与影响因素",
                    "startTime": 1563862122000,
                    "endTime": 1563870230000,
                    "pushUrl": null,
                    "pullUrl": "auth_key=1563870230000-0-0-ca87c5168c2137fef46c30cae13144ce&17-60-71:94-93-4",
                    "videoId": "d1096ea1291342ae95fe55317b7f366a",
                    "createTime": null,
                    "updateTime": null,
                    "sst": "2019-07-23 (周二) 14:23"
                }, {
                    "id": 114,
                    "liveRoomId": 29,
                    "liveLessionTitle": "化学平衡与平衡移动",
                    "startTime": 1563948618000,
                    "endTime": 1563955200000,
                    "pushUrl": null,
                    "pullUrl": "auth_key=1563955200000-0-0-070179cdfe7168e00430f94ef9f983e9&17-60-71:94-93-4",
                    "videoId": "7d715a6d51d64efc83c73e60eab9a007",
                    "createTime": null,
                    "updateTime": null,
                    "sst": "2019-07-24 (周三) 14:25"
                }, {
                    "id": 118,
                    "liveRoomId": 29,
                    "liveLessionTitle": "平衡常数与平衡图像",
                    "startTime": 1562637071000,
                    "endTime": 1562641582000,
                    "pushUrl": null,
                    "pullUrl": "auth_key=1562641582000-0-0-5b8195b81e199e72795920d4c145d13c&17-60-71:94-93-4",
                    "videoId": "6e37f0fc9cd64c1799834fcba44d5921",
                    "createTime": null,
                    "updateTime": null,
                    "sst": "2019-07-09 (周二) 10:06"
                }, {
                    "id": 119,
                    "liveRoomId": 29,
                    "liveLessionTitle": "等效平衡和转化率、化学反应进行方向判据",
                    "startTime": 1562551621000,
                    "endTime": 1562556131000,
                    "pushUrl": null,
                    "pullUrl": "auth_key=1562556131000-0-0-b561e2ccbdfc4c4c82caa369fc7e9ae4&17-60-71:94-93-4",
                    "videoId": "b57f0a6ece764660a3e006a477d28bd5",
                    "createTime": null,
                    "updateTime": null,
                    "sst": "2019-07-08 (周一) 10:22"
                }, {
                    "id": 137,
                    "liveRoomId": 29,
                    "liveLessionTitle": "一、二章综合练习",
                    "startTime": 1564020180000,
                    "endTime": 1564048800000,
                    "pushUrl": null,
                    "pullUrl": "auth_key=1564048800000-0-0-91591ba79b1d7ae641d3c5d16ee76f1a&17-60-71:94-93-4",
                    "videoId": null,
                    "createTime": null,
                    "updateTime": null,
                    "sst": "2019-07-25 (周四) 10:18"
                }, {
                    "id": 138,
                    "liveRoomId": 29,
                    "liveLessionTitle": "原电池、化学电源",
                    "startTime": 1563241500000,
                    "endTime": 1563273104000,
                    "pushUrl": null,
                    "pullUrl": "auth_key=1563273104000-0-0-f122054a16fa224b3577427a3f9c17c5&17-60-71:94-93-4",
                    "videoId": null,
                    "createTime": null,
                    "updateTime": null,
                    "sst": "2019-07-16 (周二) 10:00"
                }, {
                    "id": 139,
                    "liveRoomId": 29,
                    "liveLessionTitle": "电解原理和应用",
                    "startTime": 1563327900000,
                    "endTime": 1563357600000,
                    "pushUrl": null,
                    "pullUrl": "auth_key=1563357600000-0-0-6d175a434400a1faf53df4d254165652&17-60-71:94-93-4",
                    "videoId": null,
                    "createTime": null,
                    "updateTime": null,
                    "sst": "2019-07-17 (周三) 10:00"
                }, {
                    "id": 140,
                    "liveRoomId": 29,
                    "liveLessionTitle": "金属腐蚀与防护、电化学计算",
                    "startTime": 1563414300000,
                    "endTime": 1563444000000,
                    "pushUrl": null,
                    "pullUrl": "auth_key=1563444000000-0-0-4866440efa6707ced3df7b345a81fc31&17-60-71:94-93-4",
                    "videoId": null,
                    "createTime": null,
                    "updateTime": null,
                    "sst": "2019-07-18 (周四) 10:00"
                }, {
                    "id": 180,
                    "liveRoomId": 29,
                    "liveLessionTitle": "HGTHFGDHGD",
                    "startTime": 1565245638000,
                    "endTime": 1565332940000,
                    "pushUrl": null,
                    "pullUrl": "auth_key=1565332940000-0-0-5b31c54f7482395855fe5385dcf1e0f9&17-60-71:94-93-4",
                    "videoId": null,
                    "createTime": null,
                    "updateTime": null,
                    "sst": "2019-08-08 (周四) 14:42"
                }]
            }
        },
        created() {
            var that=this;
            window.addEventListener("scroll",function () {
                var pageHei=window.pageYOffset;
                pageHei>400?that.off=true:that.off=false
            })
        },
        beforeDestroy() {
            window.removeEventListener("scroll",function () {

            })
        }
    }
</script>

<style scoped lang="scss">
  .live_detail {
    width: 1280px;
    margin: auto;
    margin-bottom: 10px;
    position: relative;
    margin-top: 50px;

    .detail-fl {
      float: left;
      width: 895px;
      position: relative;

      &-up {
        border-top: 2px solid #FF5B1C;
        margin-bottom: 46px;
        background: #fff;
        padding: 0 46px 46px;
        position: relative;

        &-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 120px;

          .sign_title {
            height: 38px;
            font-size: 18px;

            .title_subject {
              font-size: 12px;
              border-radius: 4px;
              width: 22px;
              height: 22px;
              display: inline-block;
              text-align: center;
              line-height: 22px;
              color: #fca000;
              border: 1px solid #fca000;
            }
          }

          .sign_time {
            color: #FF5B1C;
            font-size: 14px;

            .sign_time_bg {
              display: inline-block;
              background-image: url(https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/time-icon.png);
              background-repeat: no-repeat;
              background-size: 100%;
              width: 14px;
              height: 14px;

            }

            .sign_tiem_lessons {
              margin-left: 25px;
            }
          }
        }
      }
    }
  }

  .sign_up_detail {
    width: 800px;
    height: 233px;
    margin: auto;
    background: #f7f7f7;

    .sign_up_detail_out {
      width: 740px;
      margin: auto;

      .sign_up_detail_one {
        .detail_one_price {
          color: #999;
        }

        .price {
          font-size: 18px;
          color: #FF5B1C;

          b {
            font-size: 30px;

          }
        }

        .person {
          margin-left: 45px;

          b {
            font-weight: normal;
          }
        }
      }

      .sign_up_detail_two {
        font-weight: bolder;
        height: 50px;
        line-height: 50px;
      }

      .sign_up_detail_three {
        display: flex;

        .detail_three_bg {
          background-image: url(https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/icon.png);
          display: inline-block;
          width: 16px;
          height: 16px;

        }

        .detail_three_class {
          font-size: 12px;
          color: #666;
          margin-left: 10px;
        }
      }

      .sign_up_detail_four {
        display: flex;
        margin-top: 10px;

        .main_teacher {
          .teacher_name {
            height: 28px;
            line-height: 28px;
          }

          .teacher_detail {
            width: 210px;
            height: 68px;
            background: rgba(255, 255, 255, 1);
            display: flex;
            align-items: center;
            justify-content: space-around;

            img {
              width: 46px;
              height: 46px;
              background: rgba(255, 255, 255, 1);
              // border:2px solid rgba(67, 74, 144, 1);
              border-radius: 50%;
              display: block;
            }

            .t_img_m {
              border: 2px solid #DBDBDB;
            }

            .t_img_p {
              border: 2px solid #DBDBDB;
            }

            .t_img_h {
              border: 2px solid #DBDBDB;
            }

            .teacher_time {
              .time_yue, .time_tian {
                color: #999;
                font-size: 12px;
              }

              .time_yue {
                width: 110px;
              }
            }
          }
        }

        .auxiliary_teacher {
          margin-left: 88px;

          .teacher_name {
            height: 28px;
            line-height: 28px;
          }

          .teacher_detail {
            width: 210px;
            height: 68px;
            background: rgba(255, 255, 255, 1);
            display: flex;
            align-items: center;
            justify-content: space-around;

            img {
              width: 46px;
              height: 46px;
              // background:rgba(255,255,255,1);
              border: 2px solid #DBDBDB;
              border-radius: 50%;
              display: block;
            }

            .t_img_m {
              border: 2px solid #DBDBDB;
            }

            .t_img_p {
              border: 2px solid #DBDBDB;
            }

            .t_img_h {
              border: 2px solid #DBDBDB;
            }

            .teacher_time {
              .time_all {
                font-size: 12px;
                color: #999;
              }
            }
          }
        }
      }
    }

  }

  .detail-bottom {
    background: #fff;
    margin-bottom: 17px;
    position: relative;
    &-tab {
      height: 48px;
      line-height: 48px;
      background: #e5e5e5;
      cursor: pointer;
      font-size: 18px;

      > div {
        float: left;
        padding: 0 20px;
        height: 48px;
        border-bottom: 2px solid transparent;
      }

      .on {
        color: #FF5B1C;
        border-bottom: 2px solid #FF5B1C;
        background: #fff;
      }
    }

    .detail_content {
      padding-bottom: 30px;

      .detail-introduce {
        position: relative;
        padding: 0 60px;

        .detail-int-title {
          font-size: 20px;
          padding-left: 1rem;
          border-left: 2px solid #ff5b1c;
        }
      }

      .catalog_content_title {
        font-size: 18px;
        font-weight: bolder;
        height: 36px;
        line-height: 30px;
      }
    }
  }

  .sign_jump {
    display: block;
    margin: 40px auto 50px;
    width: 686px;
  }
  .live_list_line {
    width: 20px;
    height: 15px;
    /*display: inline-block;*/
    float: left;
    .live_line {
      display: inline-block;
      width: 2px;
      height: 15px;
      background: #fff;
      margin: 0;
      vertical-align: bottom;
    }
    span.live_line:nth-child(1){
      animation:mymove 0.8s linear infinite;
    }
    span.live_line:nth-child(2){
      animation:mymove1 0.8s linear 0.3s infinite;
    }
    span.live_line:nth-child(3){
      animation:mymove2 0.8s linear 0.5s infinite;
    }
    @keyframes mymove
    {
      0% {height: 15px;}
      50% {height: 5px;}
      100% {height: 15px;}
    }
    @keyframes mymove1
    {
      0% {height: 15px;}
      50% {height: 5px;}
      100% {height: 15px;}
    }
    @keyframes mymove2
    {
      0% {height: 15px;}
      50% {height: 8px;}
      100% {height: 15px;}
    }
  }
  .detail-fr {
    width: 355px;
    border-top: 2px solid #FF5B1C;
    margin-left: 25px;
    height: 645px;
    background: #fff;
    display: inline-block;
    position: absolute;

    &-img {
      display: block;
      height: 500px;
      overflow: hidden;
      margin: 33px auto;
    }

    .consultation {
      width: 182px;
      height: 38px;
      background: white;
      border: 1px solid #ff5b1c;
      border-radius: 4px;
      text-align: center;
      line-height: 38px;
      margin: 26px auto;
      display: flex;
      align-items: center;
      justify-content: center;

      .consultation_img {
        background-image: url(https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/consult.png);
        display: inline-block;
        width: 20px;
        height: 18px;
        margin-right: 10px;
      }

      .zixun {
        color: #FF5B1C;
      }
    }
  }
  .notice_top{
    position: fixed !important;
    top: 0px;
    z-index: -1;

  }
</style>
