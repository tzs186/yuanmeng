<template>
  <div class="filtrate">
    <div class="filtrateList clear">
      <p class="filtrateType">选中学科</p>
      <ul class="clear filtrateul">
        <li @click="gradeClick()" :class="gradeIndex==undefined?'on':''">全部</li>
        <li v-for="(item,index) in grade" @click="gradeClick(index)" :class="gradeIndex==index?'on':''">{{item}}</li>
      </ul>
    </div>
    <div class="filtrateList clear">
      <p class="filtrateType">教材版本</p>

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
                gradeIndex: 1,
            }
        },
        mounted() {
        },
        methods: {
            gradeClick(event) {
                this.gradeIndex = event;
            }
        }
    }
</script>

<style scoped>

</style>
