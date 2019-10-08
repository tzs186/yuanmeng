<template>
  <div class="lesson_nav clear">
    <div class="lesson_op">课程类型</div>
    <div class="all_lesson">
      <div class="all_link"  v-for="(item,index) in Linktitle" :class="index==indexShow?'tba':''" @click="lessonLink(index)">
        <img class="text" :src="item" alt="">
        <img class="msk" src="../../assets/img/lesson_mask.png" alt="">
        <img class="cho" src="../../assets/img/lesson_cho.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "lessonLink",
        data() {
            return {
                Linktitle: [
                    require('@/assets/img/lesson_all.png'),
                    require('@/assets/img/lesson_free.png'),
                    require('@/assets/img/lesson_mid.png'),
                    require('@/assets/img/lesson_high.png')],
                indexShow: 0,
            }
        },
        methods:{
            lessonLink(index){
                this.indexShow=index;
            }
        }
    }
</script>

<style scoped lang="scss">
  .lesson_nav {
    width: 1280px;
    height: 100px;
    margin: 0px auto 19px;
    border: 1px solid #eeeeee;
    text-align: center;

    .lesson_op {
      line-height: 100px;
      margin: 0 33px 0 50px;
      font-size: 20px;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: #222222;
      list-style: none;
      float: left;
      text-align: center;
      cursor: pointer;
    }

    .all_lesson {
      float: left;
    }

    .all_link {
      float: left;
      text-align: center;
      cursor: pointer;
      margin-right: 20px;
      margin-top: 12px;
      position: relative;

      img.msk {
        position: absolute;
        top: 5px;
        left: 5px;
        display: none;
      }

      img.cho {
        margin-top: -5px;
        position: absolute;
        top: 9px;
        right: 3px;
        z-index: 99999;
        display: none;
      }
    }

    .tba {
      img.msk, img.cho {
        display: block;
      }
    }
  }
</style>
