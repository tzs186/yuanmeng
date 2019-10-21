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
          {{item.name}}
        </li>

      </ul>
    </div>
    <div class="filtrateList clear">
      <p class="filtrateType">教材版本</p>
      <ul class="clear filtrateul">
        <li v-for="(item,index) in versions" @click="versionsClick(index,item.value)" :class="versionsIndex==index?'on':''">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="filtrateList clear">
      <p class="filtrateType">选中阶段</p>
      <ul class="clear filtrateul">
        <li v-for="(item,index) in stage" @click="stageClick(index)" :class="stageIndex==index?'on':''">
          {{item.typeName}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "filtratetoll",
        props:{
            textbook:{
                type:Array,
                default() {
                    return [];
                }
            }
        },
        data() {
            return {

                grade: ["小学", "初中", "高中"],
                gradeIndex: 1,
                subjects: [],//学科
                subjectsIndex: 0,

                versions: [], //版本
                versionsIndex: 0,

                stage: [],//阶段
                stageIndex: 0,
            }
        },
        mounted() {
            this.lessonGrade(1, 0, 0);
        },
        methods: {
            //年级选择
            lessonGrade(grade, subject, textbook) {
                let that = this;
                this.$axios.post('http://192.168.1.176:8080/lesson/grade', {
                    "grade": grade,
                    "subject": subject,
                    "textbook": textbook
                }).then(res => {
                    that.stage = res.data;
                }).catch(err => {
                    console.log(err)
                })
            },
            //小学 初中 高中切换
            gradeClick(e) {
                this.gradeIndex = e;
                var tabIndex;
                if (e == 2) {
                    tabIndex = 0
                } else if (e == 0) {
                    tabIndex = 2
                } else {
                    tabIndex = 1
                }
                this.subjects = this.textbook[tabIndex].textBookLevelDto;
                this.subjectsIndex = 0;
                this.versionsIndex = 0;
                this.versions = this.textbook[tabIndex].textBookLevelDto[0].textBookDetailDto;

                this.lessonGrade( this.gradeIndex, 0, this.versions[0].value)
            },
            //学科点击
            subjectsClick(e,val) {
                this.subjectsIndex = e;
                this.versionsIndex = 0;
                this.versions = this.subjects[e].textBookDetailDto;
                this.lessonGrade(this.gradeIndex, e, this.versions[0].value)
            },
            //点击版本
            versionsClick(e,val) {
                this.versionsIndex = e;
                this.lessonGrade(this.gradeIndex, this.subjectsIndex, val)
            },
            stageClick(e){
                this.stageIndex = e;
            }
        },
        computed:{

        },
        watch: {
            textbook (val) {
                this.subjects = val[1].textBookLevelDto;//学科
                this.versions = val[1].textBookLevelDto[0].textBookDetailDto;
            },
            "subjects": {
                handler(newValue, oldVlaue) {

                },
                deep: true
            },
            "versions": {
                handler(newValue, oldVlaue) {

                },
                deep: true
            },
            "stage": {
                handler(newValue, oldVlaue) {

                },
                deep: true
            },
        }
    }
</script>

<style scoped lang="scss">

</style>
