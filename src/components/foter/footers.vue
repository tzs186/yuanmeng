<template>
  <footer>
    <div class="top">
      <div class="outin">
        <img src="../../assets/img/LOGO-d.png" alt="" class="login_f">
        <div class="wechat">
          <ul>
            <li>
              <img src="../../assets/img/DownloadtheAPP.png" alt="" class="app">
              <span>扫码下载APP</span>
            </li>
            <li>
              <img src="../../assets/img/service.png" alt="" class="fw">
              <span>官方服务号</span>
            </li>
            <li>
              <img src="../../assets/img/subscription.png" alt="" class="dy">
              <span>官方订阅号</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div>
        <p>Copyright2019-2020 喵想学 <img src="../../assets/img/mark.png" alt="" class="Police"> 版权所有 <a
          href="http://beian.miit.gov.cn/state/outPortal/loginPortal.action">粤ICP备18119732号-1</a>&nbsp;中华人民共和国工业和信息化部
        </p>
      </div>
      <div>
        <p>地市：深圳市龙华区虎地排村85号11栋310室</p>
      </div>
    </div>
  </footer>
</template>

<script>
    export default {
        name: "footers"
    }
</script>

<style scoped lang="scss">
  footer {
    width: 100%;
    height:260px;
    background:rgba(34,34,34,1);
    .top {
      width: 1200px;
      margin: 0 auto;
      padding-top: 21px;
      border-bottom: 1px solid rgba(66,66,66,1);
      .outin {
        width: 960px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .login_f {
          display: inline-block;
          width: 159px;
          height: 59px;
          margin: auto 0;
        }
        .wechat {

          ul{
            padding: 0;
            margin: 0;
            li {
              list-style: none;
              float: left;
              display: flex;
              flex-direction: column;
              margin: 0 20px;
              align-items: center;
              img {
                display: inline-block;
                //  width: 84px;
                //  height: 84px;
                //  background: #FF5B1C;
                margin-bottom: 21px;
              }
              span {
                font-size:14px;
                font-family:MicrosoftYaHei;
                font-weight:400;
                color:rgba(153,153,153,1);
                margin-bottom: 19px;
              }
            }
          }
        }
      }
    }
    .bottom {
      max-width: 1200px;
      margin: 30px auto 0;
      text-align: center;
      p {
        font-size: 12px;
        line-height: 24px;
        color: #999;
        text-align: center;
        margin: 0;
        .Police {
          margin: auto 5px;
        }
      }
    }
  }


</style>
