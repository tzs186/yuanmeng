<template>
  <div class="myvip">
    <user-title :title="userName"></user-title>
    <div class="myvip-no">
      <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/my-vip.png" alt="">
      <div class="myvip-no-btn">成为VIP</div>
    </div>
    <div class=""></div>
  </div>
</template>

<script>
    import userTitle from "../../components/module/userTitle";

    export default {
        name: "MyVip",
        data() {
            return {
                userName: "我的VIP"
            }
        },
        components: {
            userTitle
        }
    }
</script>

<style scoped lang="scss">
  .myvip {
    position: relative;
    min-height: 600px;
    &-no{
      text-align: center;
      &-btn{
        width: 150px;
        height: 42px;
        background: linear-gradient(0deg, #ffa636 0%, #ff8115 98%);
        border-radius: 21px;
        color: #fff;
        line-height: 42px;
        text-align: center;
        margin: 0px auto;
        cursor: pointer;
      }
    }
  }
</style>
