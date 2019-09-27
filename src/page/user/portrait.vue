<template>
  <div class="user">
    <userHeader  ></userHeader>
    <div class="user-content">
      <breadcrumb></breadcrumb>
      <div class="user-body clear">
        <div class="user-body-link fl">
          <router-link to="/portrait" class="user-body-link-btn">
            <img :src="$store.getters.headImg" class="userImg" alt="">
            <p class="userName">{{$store.getters.nickname}}</p>
          </router-link>
          <router-link to="/portrait/Myvip" class="user-body-link-btn">我的VIP</router-link>
          <router-link to="/portrait/amendPwd" class="user-body-link-btn">修改密码</router-link>
          <router-link to="/portrait/setMobile" class="user-body-link-btn">更换手机</router-link>
          <router-link to="/portrait/getAddress" class="user-body-link-btn">地址管理</router-link>
          <div class="user-body-link-btn" @click="logout">退出登录</div>
        </div>
        <div class="user-body-con fr">
          <router-view></router-view>
        </div>
      </div>

    </div>
    <foot></foot>
  </div>
</template>

<script>
    import breadcrumb from "@/components/breadcrumb/breadcrumb"

    export default {
        name: "portrait",
        data() {
            return {
                opens: 'sd',
            }
        },
        mounted() {

        },
        methods: {
            logout(){
                this.$confirm('确定要退出登录？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {
                    this.$axios.post('user/logout', {'token': sessionStorage.getItem("token")})
                        .then(res => {
                            if (res.code == 1000) {
                                this.$store.commit("setLogout");
                                this.$router.push('/login')
                            } else {

                            }
                        }).catch(err => {
                        console.log(err)
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });

            },
        },
        components: {
            breadcrumb
        }
    }
</script>

<style scoped lang="scss">
  .user {
    width: 100%;
    height: 100%;
    background: #fff;
    &-content {
      width: 1200px;
      margin: 0 auto;
      min-height: 600px;
      padding: 20px 0;
      .user-body {
        .user-body-link {
          display: block;
          background: #fff;
          width: 189px;
          height: 579px;
          text-align: center;
          padding-bottom: 50px;

          &-btn {
            display: block;
            margin-top: 37px;
            text-align: center;
            cursor: pointer;

            .userImg {
              display: block;
              margin: 0 auto;
              width: 88px;
              height: 88px;
              border-radius: 50%;
            }
            .userName {
              margin: 5px 0;
            }
          }
          &-btn:hover, .router-link-exact-active {
            color: #FF5B1C;
          }
        }
        .user-body-con{
          width: 990px;
          min-height: 620px;
          position: relative;
        }
      }
    }
  }
</style>
