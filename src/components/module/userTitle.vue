<template>
    <div class="user-title-fr">
      <span class="title_text">{{title}}</span>
      <slot></slot>
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
    margin: 0 auto 40px;
    border-bottom: 1px solid #e5e5e5;
    height: 70px;
    span.title_text{
      height: 70px;
      line-height: 120px;
      border-bottom: 2px solid #222;
      margin-left: 30px;
      width: 70px;
      display: inline-block;
      text-align: center;
    }
    .cha{
      float: right;
      font-size: 3rem;
      height: 42px;
      line-height: 42px;
      margin-top: 30px;
      margin-right: 70px;
      cursor: pointer;
    }
  }
</style>
