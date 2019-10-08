<template>
  <div style="background: #fff">
    <heads  ></heads>
    <sinbenner :imgSrc="imgSrc"></sinbenner>
    <div class="lessoncon"  >
      <lesson-link></lesson-link>
      <filtratetoll></filtratetoll>
    </div>
    <foot></foot>
  </div>
</template>

<script>
    import sinbenner from "../../components/module/sinbenner";
    import insidelist from "../../components/module/insideList";
    import lessonLink from "../../components/lessonLink/lessonLink";
    import filtratetoll from "../../components/lessonLink/filtratetoll";

    export default {
        name: "lesson",
        data(){
            return {
                imgSrc: "https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/live_less.png",
                insideName: {
                    name: "选中年级",
                    data: [
                        {name: "小学", id: ""},
                        {name: "初中", id: "0"},
                        {name: "高中", id: "1"},
                    ]
                },
            }
        },
        mounted(){

        },
        methods:{
            getLiveList(){}
        },
        components: {
            sinbenner,
            insidelist,
            lessonLink,
            filtratetoll

        }
    }
</script>

<style scoped lang="scss">
  .lessoncon{
    background: #fff;
    padding: 40px 0;
    width: 1280px;
    margin: 0 auto;
  }
</style>
