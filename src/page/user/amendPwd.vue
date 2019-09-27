<template>
  <div class="userpwd">
    <user-title :title="userName"></user-title>
    <div class="pwd-div">
      <el-form :model="setPwd" :rules="rules" ref="setPwd" status-icon label-width="100px">
        <el-form-item label="旧密码" prop="password">
          <el-input type="password" autocomplete="off" v-model="setPwd.password"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input type="password" autocomplete="off" v-model="setPwd.newPassword"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="newPasswordOne">
          <el-input type="password" autocomplete="off" v-model="setPwd.newPasswordOne"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     :disabled="setPwd.password!=''&setPwd.newPassword!=''&setPwd.newPasswordOne!=''?false:true"
                     @click="submitForm('setPwd')">确认修改
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    import userTitle from "../../components/module/userTitle";

    export default {
        name: "amendPwd",
        data() {
            var passwordPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.setPwd.newPassword) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                userName: "修改密码",
                setPwd: {
                    'token': sessionStorage.getItem('token'),
                    "password": "",
                    "newPassword": "",
                    "newPasswordOne": ""
                },
                rules: {
                    password: [
                        {required: true, message: '请输入旧密码', trigger: 'blur'},
                    ],
                    newPassword: [
                        {required: true, message: '请输入新密码', trigger: 'blur'},
                        {
                            pattern: /(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,12}$/,
                            message: '请输入8-12位由字母、数字 组成的密码'
                        }
                    ],
                    newPasswordOne: [
                        {required: true, message: '请再次输入密码', trigger: 'blur'},
                        {validator: validatePass2, trigger: 'blur'}
                    ]
                }
            }
        },
        mounted() {

        },
        methods: {
            submitForm(formName) {
                let that = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post('user/updatePassword', that.setPwd)
                            .then(res => {
                                console.log(res)
                                if (res.code == 1024) {

                                } else {
                                    this.$message({
                                        message: '修改密码成功' ,
                                        type: 'success'
                                    });
                                }
                            }).catch(err => {
                            console.log(err)
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        },
        components: {
            userTitle
        }
    }
</script>

<style scoped lang="scss">
  .userpwd {
    position: relative;
    min-height: 600px;

    .pwd-div {
      width: 500px;
      margin: 50px auto 0;
    }
  }
</style>
