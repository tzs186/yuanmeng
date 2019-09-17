<template>
  <div class="">
    <user-title :title="userName"></user-title>
    <div class="my-photo">
      <div class="my-photo-div">
        <img :src="avatar" class="my-photo-img" alt="">
        <p>大尺寸头像（88*88像素）</p>
      </div>
      <div class="my-photo-div">
        <img :src="avatar" class="my-photo-img img_sm" alt="">
        <p>小尺寸头像（50*50像素）</p>
      </div>
      <div class="my-photo-div">
        <div class="my-photo-div-btn">
          <span>上传头像</span>
          <input type="file" @change="changeImage($event)" accept="image/png,image/jpg" class="file_btn_img">
        </div>
        <p>支持JPG、PNG格式的图片，且文件少于2M</p>
        <p>点击上传按钮上传头像</p>
      </div>
    </div>
    <user-title :title="userName1"></user-title>
    <div class="userInfo">
      <div class="userInfo-div">
        <b class="x">*</b>
        <span>学生姓名</span>
        <input type="text" maxlength="10" v-model="userData.nickname" id="name">
      </div>
      <div class="userInfo-div">
        <b class="x">*</b>
        <span>联系电话</span>
        <span class="span-ml">{{phone}}</span>
      </div>
      <div class="userInfo-div">
        <b class="x">*</b>
        <span>性别</span>
        <span class="span-ml">
          <el-radio v-model="userData.sex" label="0">男同学</el-radio>
          <el-radio v-model="userData.sex" label="1">女同学</el-radio>
        </span>
      </div>
      <div class="userInfo-div">
        <b class="x">*</b>
        <span>年级</span>
        <span class="span-ml">
          <el-select v-model="userData.grade" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </span>
      </div>
      <div class="userInfo-div">
        <div class="userInfo-div-btn" @click="save=true" v-show="!save">编辑</div>
        <div class="userInfo-div-btn in_btn" v-show="save" @click="updateOthers">保存</div>
      </div>
    </div>
  </div>
</template>

<script>
    import userTitle from "../../components/module/userTitle";

    export default {
        name: "user",
        data() {
            return {
                userName: "更换头像",
                userName1: "基础信息",
                options: [
                    {
                    value: '0',
                    label: '小升初'
                }, {
                    value: '1',
                    label: '七年级'
                }, {
                    value: '2',
                    label: '八年级'
                }, {
                    value: '3',
                    label: '九年级'
                }, {
                    value: '4',
                    label: '高一'
                }, {
                    value: '5',
                    label: '高二'
                }, {
                    value: '6',
                    label: '高三'
                }],
                avatar:this.$store.getters.headImg,
                phone: "",
                userData:{
                    'token': sessionStorage.getItem('token'),
                    'grade': '',
                    'sex': '',
                    'nickname': ''
                },
                save:false
            }
        },
        mounted() {
            //获取用户信息
            this.getUserInfo();
        },
        methods: {
            updateOthers(){
                var that=this;
                this.$axios.post('user/updateOthers',that.userData)
                    .then(res => {
                        that.save=false;
                        that.$store.commit("getNickname", that.userData.nickname);
                    }).catch(err => {
                    console.log(err)
                })
            },
            getUserInfo(){
                var that=this;
                this.$axios.post('user/getUserInfo', {"token":sessionStorage.getItem('token')})
                    .then(res => {
                        that.userData.grade=String(res.data.grade);
                        that.userData.sex=String(res.data.sex);
                        that.userData.nickname=res.data.nickname;
                        that.phone=res.data.mobile.substring(0, 3)+"****"+res.data.mobile.substring(7,11)

                    }).catch(err => {
                      console.log(err)
                })
            },
            changeImage(e) {
                let self = this;
                let file = e.target.files[0];
                // 看支持不支持FileReader
                if (!file || !window.FileReader) return;
                if (/^image/.test(file.type)) {
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onloadend = function () {
                        self.avatar = this.result;
                        self.$store.commit("getHeadImg", this.result);
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
  .my-photo {
    display: flex;
    height: 200px;
    justify-content: space-around;
    align-items: center;

    &-div {
      text-align: center;

      .my-photo-img {
        width: 88px;
        height: 88px;
        border: 1px solid #e5e5e5;
        border-radius: 50%;
        margin-bottom: 1px;
      }

      .img_sm {
        width: 50px;
        height: 50px;
        margin-bottom: 35px;
      }

      p {
        font-size: 12px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: #999999;
        line-height: 24px;
      }

      &-btn {
        width: 136px;
        height: 42px;
        background: #e5e5e5;
        border-radius: 21px;
        color: #fff;
        line-height: 42px;
        margin: auto;
        position: relative;
        overflow: hidden;
        cursor: pointer;

        &:hover {
          background: linear-gradient(0deg, #ffa636 0%, #ff8115 98%);
          color: #fff;
        }

        input {
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          z-index: 9;
          opacity: 0;
          cursor: pointer;
        }
      }
    }
  }

  .userInfo {
    padding: 0 70px;
    position: relative;

    &-div {
      height: 38px;
      line-height: 38px;
      color: #666;

      .x {
        color: red;
        margin-right: 5px;
      }
      input{
        border: 1px solid #eee;
      }
      input, .span-ml {

        color: #222;

        margin-left: 1rem;
        padding-left: 1rem;
        height: 35px;
        width: 300px;
      }

      &-btn {
        border: 0;
        outline: none;
        width: 136px;
        height: 42px;
        line-height: 42px;
        background: #e5e5e5;
        color: #999;
        border-radius: 21px;
        font-size: 14px;
        cursor: pointer;
        text-align: center;
        margin-top: 18px;
      }
      .in_btn{
        background: linear-gradient(0deg, #ffa636 0%, #ff8115 98%);
        color: #fff;
      }
    }
  }
</style>
