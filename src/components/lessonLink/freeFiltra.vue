<template>
  <div class="filtrate">
    <div class="filtrateList clear">
      <p class="filtrateType">选中年级</p>
      <ul class="clear filtrateul">
        <li v-for="(item,index) in grade" @click="gradeClick(index)" :class="gradeIndex==index?'on':''">{{item}}</li>
      </ul>
    </div>
    <div class="filtrateList clear">
      <p class="filtrateType">选中学科</p>
      <ul class="clear filtrateul">
        <li v-for="(item,index) in subjects" @click="subjectsClick(index)" :class="subjectsIndex==index?'on':''">
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "freeFiltra",
        data() {
            return {
                textbook: [],
                grade: ["小学", "初中", "高中"],
                gradeIndex: 1,

                subjects: ["数学","物理","化学"],//学科
                subjectsIndex: 1,

                versions: [], //版本
                versionsIndex: 0,

                stage: [],//阶段
                stageIndex: 0,
            }
        },
        mounted() {

        },
        methods: {
            //小学 初中 高中切换
            gradeClick(e) {
                this.gradeIndex = e;
                if(e==0){
                    this.subjects=["数学"]
                }   else{
                    this.subjects=["数学","物理","化学"]
                }
                this.subjectsIndex = 0;
                this.versionsIndex = 0;
            },
            //学科点击
            subjectsClick(e,val) {
                this.subjectsIndex = e;
            },

        },
        watch: {
        }
    }
</script>

<style scoped>

</style>
