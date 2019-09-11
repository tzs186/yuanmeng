<template>
  <div class="">
    <heads :openId="opens"></heads>
    <div class="live_deatail">
      <div class=""></div>
    </div>
    <div  class="prism-player" id="J_prismPlayer"></div>

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
        },
        mounted(){
            var player = new Aliplayer({
                id: 'J_prismPlayer',
                width: '100%',
                autoplay: true,
                //支持播放地址播放,此播放优先级最高
                source : 'http://pull.ymgxjy.com/ymjy/58.flv?auth_key=1568256738000-0-0-4651a7ab7a77cbd95feaae2e93876d66',
                //播放方式二：点播用户推荐
                vid : '470b4d64c0dd3d67740d8afa',
                playauth : 'ddd',
                cover: 'http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png',
                //播放方式三：仅MPS用户使用
                vid : '470b4d64c0dd3d67740d8afa',
                accId: 'dd',
                accSecret: 'dd',
                stsToken: 'dd',
                domainRegion: 'dd',
                authInfo: 'dd',
                //播放方式四：使用STS方式播放
                vid : '470b4d64c0dd3d67740d8afa',
                accessKeyId: 'dd',
                securityToken: 'dd',
                accessKeySecret: 'dd',
                region:'cn-shanghai',//eu-central-1,ap-southeast-1
            },function(player){
                console.log('播放器创建好了。')
            });
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
