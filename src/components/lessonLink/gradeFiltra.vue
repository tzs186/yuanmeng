<template>
  <div class="filtrate">
    <div class="filtrateList clear">
      <p class="filtrateType">选中学科</p>
      <ul class="clear filtrateul">
        <li v-for="(item,index) in grade" @click="gradeClick(index)" :class="gradeIndex==index?'on':''">{{item}}</li>
      </ul>
    </div>
    <div class="filtrateList clear">
      <p class="filtrateType">教材版本</p>
      <ul class="clear filtrateul">
        <li v-for="(item,index) in subjects" @click="subjectsClick(index)" :class="subjectsIndex==index?'on':''">
          {{item.typeName}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
    export default {
        name: "gradeFiltra",
        props: {
            indexs: {
                type: Number,
                default: 2
            }
        },
        data() {
            return {
                grade: ["数学", "物理", "化学"],
                gradeIndex: 0,
                subjects:[],
                subjectsIndex:0
            }
        },
        mounted() {
          this.indexExams(this.indexs,0);
        },
        methods: {
            indexExams(grade,subject){
                let that = this;
                this.$axios.post('index/exams', {
                    "grade": grade,
                    "subject": subject,
                }).then(res => {
                    that.subjects=res.data;
                }).catch(err => {
                    console.log(err)
                })
            },
            gradeClick(e) {
                this.gradeIndex = e;
                this.indexExams(this.indexs,e);
            },
            subjectsClick(e){
                this.subjectsIndex = e;
            }

        }
    }
</script>

<style scoped>

</style>
