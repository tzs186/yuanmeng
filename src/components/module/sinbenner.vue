<template>
    <div class="main_Benner">
      <img :src="imgSrc" alt="">
    </div>
</template>

<script>
    export default {
        name: "sinbenner",
        props:{
            imgSrc:{
                type:String,
                default:"https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/live_less.png"
            }
        }
    }
</script>

<style scoped lang="scss">
  .main_Benner{
    position: relative;
    width: 100%;

    img{
      width: 100%;
      max-width: 100%;
      vertical-align: top;
    }
  }
</style>
