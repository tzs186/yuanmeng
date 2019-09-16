<template>
    <div class="user-title-fr">
      <span class="title_text">{{title}}</span>
    </div>
</template>

<script>
    export default {
        name: "userTitle",
        data(){
            return{}
        },
        props:{
            title:{
                type: String,
                default: ""
            }
        }
    }
</script>

<style scoped lang="scss">
  .user-title-fr{
    width: 98%;
    margin: 0 auto 60px;
    border-bottom: 1px solid #e5e5e5;
    height: 70px;
    span{
      height: 70px;
      line-height: 120px;
      border-bottom: 2px solid #222;
      margin-left: 30px;
      width: 70px;
      display: inline-block;
      text-align: center;
    }
  }
</style>
