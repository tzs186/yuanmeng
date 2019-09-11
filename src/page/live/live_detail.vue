<template>
  <div class="">
    <heads :openId="opens"></heads>
    <div class="live_deatail">

    </div>


    <foot></foot>
  </div>
</template>

<script>

    export default {
        name: "live_detail",
        data(){
            return{
                opens: "sad",

            }
        }
    }
</script>

<style scoped lang="scss">
  .live_deatail{
    width: 1280px;
    margin: auto;
    margin-bottom: 10px;
    position: relative;
    margin-top: 50px;
  }
</style>
