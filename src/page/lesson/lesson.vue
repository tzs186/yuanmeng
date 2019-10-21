<template>
  <div style="background: #fff">
    <heads></heads>
    <sinbenner :imgSrc="imgSrc"></sinbenner>
    <div class="lessoncon">
      <lesson-link @childIndex="lessonLinkIndex"></lesson-link>
      <filtratetoll :textbook="bookarr" v-show="linkIndex==0"></filtratetoll>
      <free-filtra v-show="linkIndex==1"></free-filtra>
      <grade-filtra v-show="linkIndex==2 " :indexs="1"></grade-filtra>
      <grade-filtra v-show="linkIndex==3" :indexs="2"></grade-filtra>
    </div>
    <foot></foot>
  </div>
</template>

<script>
    import sinbenner from "../../components/module/sinbenner";
    import insidelist from "../../components/module/insideList";
    import lessonLink from "../../components/lessonLink/lessonLink";
    import filtratetoll from "../../components/lessonLink/filtratetoll";
    import freeFiltra from "../../components/lessonLink/freeFiltra";
    import gradeFiltra from "../../components/lessonLink/gradeFiltra";

    export default {
        name: "lesson",
        data() {
            return {
                imgSrc: "https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/live_less.png",
                linkIndex: 0,
                bookarr: []
            }
        },
        mounted() {
            this.tollInit();
        },
        methods: {
            getLiveList() {
            },
            lessonLinkIndex(event) {
                this.linkIndex = event;
            },
            tollInit() {
                let that = this;
                this.$axios.post('dic/pkey', {"pkey": "textbook"})
                    .then(res => {
                        that.bookarr = res.data;
                    }).catch(err => {
                    console.log(err)
                })
            }
        },
        components: {
            sinbenner,
            insidelist,
            lessonLink,
            filtratetoll,
            freeFiltra,
            gradeFiltra
        }
    }
</script>

<style scoped lang="scss">
  .lessoncon {
    background: #fff;
    padding: 40px 0;
    width: 1280px;
    margin: 0 auto;
  }
</style>
