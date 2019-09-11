<template>
  <div class="r_tool"  v-if="off">
    <ul>
      <li>
        <a href="https://cschat-ccs.aliyun.com/index.htm?tntInstId=_1Hw4Ops&amp;scene=SCE00004448" target="_blank">
          <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/r_speek.png" alt="在线咨询">
          <span>在线咨询</span>
        </a>
      </li>
      <li>
        <a href="opinion.html">
          <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/r_tous.png" alt="意见反馈">
          <span>意见反馈</span>
        </a>
      </li>
      <li id="f_top">
        <img src="https://mxx-pro.oss-cn-shenzhen.aliyuncs.com/image/r_top.png" alt="回到顶部">
        <span>回到顶部</span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "r_tool",
        data (){
            return {
                off:false
            }
        },
        created() {
            var that=this;
            window.addEventListener("scroll",function () {
                var pageHei=window.pageYOffset;
                pageHei>400?that.off=true:that.off=false
            })
        },
        beforeDestroy() {
            window.removeEventListener("scroll",function () {

            })
        }
    }
</script>

<style scoped lang="scss">
  .r_tool {
    width: 82px;
    position: fixed;
    right: -8px;
    top: 330px;
    text-align: center;

    z-index: 9998;
    box-shadow:0px 2px 10px 0px rgba(210,210,210,0.43);
    border-radius:10px;
    background: #fff;
    ul {
      li {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 30px auto;
        cursor: pointer;
        img {
          display: block;
          margin: 5px auto;
        }
        span {
          color: #333;
        }

      }
      li:hover span {
        color: #FF5B1C;
      }
    }
  }

</style>
