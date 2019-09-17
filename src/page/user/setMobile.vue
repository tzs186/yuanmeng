<template>
  <div class="setTel">
    <user-title :title="userName"></user-title>
    <div class="pwd-div">
      <el-form :model="updateTel" :rules="rules" ref="updateTel" status-icon label-width="100px">
        <el-form-item label="当前手机号码">
          <span class="myTel">{{mobile.substr(0,3) + "****" + mobile.substr(7)}}</span>
        </el-form-item>
        <el-form-item label="新手机号" prop="mobile">
          <el-input type="text" autocomplete="off" v-model="updateTel.mobile"></el-input>
        </el-form-item>
        <el-form-item label="短信验证码" prop="verifyCode">
          <el-input type="text" style="width: 250px;" autocomplete="off" v-model="updateTel.verifyCode"></el-input>
          <el-button type="primary" @click="sendMessage" :disabled="updateTel.mobile!=''?false:true">{{word}}
          </el-button>
        </el-form-item>
        <el-form-item label="当前密码" prop="password">
          <el-input type="password" autocomplete="off" v-model="updateTel.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     :disabled="updateTel.mobile!=''&updateTel.verifyCode!=''&updateTel.password!=''?false:true"
                     @click="submitForm('updateTel')">确认修改
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    import userTitle from "../../components/module/userTitle";

    export default {
        name: "mobile",
        data() {
            return {
                userName: "更换手机号",
                word: "获取短信验证码",
                isOvertime: true,
                updateTel: {
                    "mobile": '',
                    "token": sessionStorage.getItem('token'),
                    "verifyCode": '',
                    "password": ''
                },
                mobile: JSON.parse(sessionStorage.getItem('userInfo')).mobile,
                rules: {
                    mobile: [
                        {required: true, message: "请输入新手机号!", trigger: "blur"},
                        {
                            pattern: /^1[2-9]\s*[0-9]{9}$/,
                            message: '手机号码格式错误'
                        }
                    ],
                    verifyCode: [
                        {required: true, message: "请输入短信验证码!", trigger: "blur"}
                    ],
                    password: [
                        {required: true, message: "请输入当前密码!", trigger: "blur"}
                    ]
                }
            }
        },
        mounted() {
        },
        methods: {
            sendMessage() {
                let that = this;
                var phreg = /^1[3-8]\s*[0-9]{9}$/;
                if (that.isOvertime) {
                    if (!phreg.test(that.updateTel.mobile)) {
                        this.$message({
                            showClose: true,
                            message: '手机号码格式错误',
                            type: 'error'
                        });
                    } else {
                        var time = 10;
                        this.$axios.post('verifyCode/send', {'mobile': that.updateTel.mobile, "type": 2})
                            .then(res => {
                                if (res.code == 1000) {
                                    this.$message({
                                        message: '发送验证码' + res.desc,
                                        type: 'success'
                                    });
                                    that.isOvertime = false;
                                    var getTime = setInterval(function () {
                                        time--;
                                        that.word = time + "秒后重新获取";
                                        if (time <= 0) {
                                            that.isOvertime = true;
                                            that.word = "获取短信验证码";
                                            clearInterval(getTime)

                                        }
                                    },1000)
                                } else {
                                    this.$message({
                                        message: res.desc,
                                        type: 'error'
                                    });
                                }


                            }).catch(err => {
                            console.log(err)
                        })
                    }
                }
            }
        },
        components: {
            userTitle
        }
    }
</script>

<style scoped lang="scss">
  .pwd-div {
    width: 500px;
    margin: 50px auto 0;
  }

  .myTel {
    color: #333;
    font-size: 22px;
    font-weight: bold;
  }
</style>
