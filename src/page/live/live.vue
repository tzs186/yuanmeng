<template>
  <div class="">
    <heads :openId="opens"></heads>
    <sinbenner :imgSrc="imgSrc"></sinbenner>
    <insidelist :list="insideName" v-on:listEventClick="getLiveList"></insidelist>
    <div class="liveCom">
      <div class="liveComLen clear">
        <div class="liveComLen-sort">综合排序</div>
        <div class="liveComLen-nub">
          (共 <b class="lesson_s">{{liveLength}}</b> 个课程)
        </div>
      </div>
      <div class="clear" v-loading="loading">
        <template v-for="(item,index) in liveData">
          <router-link :to="{'path':'live_detail','params':{id:item.liveRoomId}}" class="live_lesson">
            <div class="big_ming">
              <img
                :src='item.img || item.imgUrl'
                alt="" class="live_lesson_video_img">
            </div>
            <div class="live_lesson_video_box">
              <div class="live_lesson_video_title">
                <span class="title_subject subject_m"
                      data-subject="0">{{item.subject==0?'数':item.subject==1?'物':'化'}}</span>
                <span class="title_text">{{item.liveTitle}}</span>
              </div>
              <div class="live_lesson_video_time">
                <span class="live_video_time_bg"></span>
                <span class="live_video_yue">{{item.text}}</span>
                <span class="live_video_lessons"> <b id="live_video_lessons_b">{{item.lessionCount}}</b>课时</span>
              </div>
              <div class="live_teacher">
                <div class="live_teacher_formal">
                  <div class="formal_img">
                    <img
                      :src="item.timg||item.headImg"
                      alt="" class="teacherImg t_img_m" data-subject="0">
                  </div>
                  <div class="formal_name">
                    <p class="teacher_name teacherName">{{item.teacherName}}</p>
                    <p class="teacher_position">主讲老师</p>
                  </div>
                </div>
                <div class="live_teacher_formal" v-if="item.secondTeacherName">
                  <div class="formal_img">
                    <img :src="item.secondTeacherImg" alt="" class="secondTeacherImg" data-subject="0">
                  </div>
                  <div class="formal_name">
                    <p class="teacher_name st secondTeacher_name">{{item.secondTeacherName}}</p>
                    <p class="teacher_position">助教老师</p>
                  </div>
                </div>
              </div>
              <div class="lesson_money">
                <span class="person"><b class="person_sum">{{item.learnCount==null||item.learnCount==""?'0':item.learnCount}}</b>人已报名</span>
                <span class="money">￥<b class="money_fee">{{item.fee == 0?'免费':item.fee / 100}}</b></span>
              </div>
            </div>
          </router-link>
        </template>
      </div>
    </div>
    <foot></foot>

  </div>
</template>

<script>
    import sinbenner from "../../components/module/sinbenner";
    import insidelist from "../../components/module/insideList";

    export default {
        name: "live",
        data() {
            return {
                opens: "sad",
                imgSrc: "https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/live_less.png",
                insideName: {
                    name: "选择类别",
                    data: [
                        {name: "专题课", id: ""},
                        {name: "公开课", id: "0"},
                        {name: "我的课程", id: "1"},
                    ]
                },
                liveData: [],
                liveLength: '0',
                fee: "",
                pageSize: 100,
                loading: true
            }
        },
        mounted() {
            this.getLiveList(this.fee, 100);
        },
        methods: {
            getLiveList(fee, nub) {
                let that = this;
                that.loading = true;
                if (fee == "1") {
                    let token = window.sessionStorage.getItem("token");
                    if (token == null || token == "" || token == undefined) {
                        setTimeout(() => {
                            that.loading = false;
                            that.$router.push('/login');
                        }, 1000)
                    } else {
                        this.$axios.post('liveRoom/w', {"token": token})
                            .then(res => {
                                setTimeout(() => {
                                    that.loading = false;
                                }, 1000)
                                if (res.code == 1026) {
                                    that.$message.error(res.desc);
                                    window.localStorage.removeItem("token");
                                    that.$router.push('/login')
                                } else if (res.code == 1000) {
                                    that.liveData = res.data;
                                    that.liveLength = res.data.length
                                }
                            }).catch(err => {
                            console.log(err)
                        })
                    }
                } else {
                    this.$axios.post('liveRoom/l', {"fee": fee, "pageSize": nub})
                        .then(res => {
                            setTimeout(() => {
                                that.loading = false;
                            }, 1000)

                            that.liveData = res.data.data;
                            that.liveLength = res.data.data.length;
                        }).catch(err => {
                        console.log(err)
                    })

                }

            }
        },
        components: {
            sinbenner,
            insidelist
        }
    }
</script>

<style scoped lang="scss">
  body {
    background: #F1F5F9;
  }

  .liveCom {
    width: 1090px;
    margin: 0 auto;
    padding: 48px 0 150px 0;
    position: relative;

    &Len {
      text-align: center;
      height: 42px;
      line-height: 42px;
      border-bottom: 1px solid #FF5B1C;

      &-sort {
        float: left;
        width: 84px;
        height: 42px;
        background: #ff5b1c;
        color: #fff;
        text-align: center;
        line-height: 42px;
      }

      &-nub {
        float: right;
        height: 42px;

        .lesson_s {
          font-size: 18px;
          color: #ff5b1c;
        }
      }
    }

  }

  .live_lesson {
    display: inline-block;
    width: 336px;
    // height:382px;
    background: rgba(255, 255, 255, 1);
    margin-top: 32px;
    margin-right: 12px;
    margin-left: 12px;

    .big_ming {
      overflow: hidden;
    }

    img.live_lesson_video_img {
      width: 336px;
      height: 180px;

      display: block;
      background: #dadada;
      transform: scale(1);
      transition: all 0.5s;
    }

    img.live_lesson_video_img:hover {
      transform: scale(1.1);
      transition: all 0.5s;

    }

    .big_on {
      animation: big .5s linear;
      animation-fill-mode: forwards;
    }

    .live_lesson_video_box {
      width: 315px;
      margin: auto;

      .live_lesson_video_title {
        font-size: 18px;
        height: 52px;
        line-height: 52px;
        display: flex;
        align-items: center;

        .title_subject {
          font-size: 12px;
          display: inline-block;
          width: 21px;
          height: 21px;
          border-radius: 5px;
          border: 1px solid #FF5B1C;
          line-height: 19px;
          text-align: center;
          margin-right: 10px;
        }

        .subject_m {
          color: #25b852;
          border: 1px solid #25b852;
        }

        .subject_p {
          color: #2550b8;
          border: 1px solid #2550b8;
        }

        .subject_h {
          color: #fca000;
          border: 1px solid #fca000;
        }

        .title_text {
          font-size: 18px;
          font-weight: bold;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          width: 90%;
          display: inline-block;
        }
      }

      .live_lesson_video_time {

        span {
          color: #999;

        }

        #live_video_lessons_b {
          font-weight: normal;
        }

        .live_video_time_bg {
          display: inline-block;
          background-image: url(https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/time-icon.png);
          background-repeat: no-repeat;
          background-size: 100%;
          width: 14px;
          height: 14px;

        }
      }

      .live_teacher {
        display: flex;

        height: 45px;
        align-items: center;
        border-bottom: 1px solid #ccc;
        margin-top: 24px;

        .live_teacher_formal {
          display: flex;
          margin-right: 30px;
          align-items: center;

          .formal_img {
            margin-right: 10px;

            img {
              display: inline-block;
              width: 38px;
              height: 38px;
              // background:rgba(255,255,255,1);
              border: 2px solid #DBDBDB;
              border-radius: 50%;
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
          }

          .formal_name {
            .teacher_position {
              color: #999;
            }
          }
        }
      }

      .lesson_money {

        height: 62px;
        line-height: 62px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 94%;
        margin: auto;

        .person {
          color: #999;
        }

        .money {
          color: #FF5B1C;
          font-size: 18px;

          b {
            font-size: 30px;
          }
        }

        .my_tt {
          float: right;
          width: 98px;
          height: 34px;
          background: rgba(255, 116, 23, 1);
          border-radius: 17px;
          border: 0;
          outline: none;
          text-align: center;
          line-height: 34px;
          color: #fff;
          cursor: pointer;
        }

        .live_list_line {
          .live_line {
            display: inline-block;
            width: 2px;
            height: 15px;
            background: rgba(255, 116, 23, 1);
            margin: 0;
          }

          span.live_line:nth-child(1) {
            animation: mymove 0.8s linear infinite;
          }

          span.live_line:nth-child(2) {
            animation: mymove1 0.8s linear 0.3s infinite;
          }

          span.live_line:nth-child(3) {
            animation: mymove2 0.8s linear 0.5s infinite;
          }

          @keyframes mymove {
            0% {
              height: 15px;
            }
            50% {
              height: 5px;
            }
            100% {
              height: 15px;
            }
          }
          @keyframes mymove1 {
            0% {
              height: 15px;
            }
            50% {
              height: 5px;
            }
            100% {
              height: 15px;
            }
          }
          @keyframes mymove2 {
            0% {
              height: 15px;
            }
            50% {
              height: 8px;
            }
            100% {
              height: 15px;
            }
          }
        }
      }
    }

  }

  @keyframes big {
    0% {
      transform: scale(1)
    }
    100% {
      transform: scale(1.1)
    }
  }

</style>
