<template>
  <div class="">
    <user-title :title="userName"></user-title>
    <div class="my-photo">
      <div class="my-photo-div">
        <img src="../../assets/img/LOGO.png" class="my-photo-img" alt="">
        <p>大尺寸头像（88*88像素）</p>
      </div>
      <div class="my-photo-div">
        <img src="../../assets/img/LOGO.png" class="my-photo-img img_sm" alt="">
        <p>小尺寸头像（50*50像素）</p>
      </div>
      <div class="my-photo-div">
        <div class="my-photo-div-btn">
          <span>上传头像</span>
          <input type="file" accept="image/png,image/jpg" class="file_btn_img">
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
        <input type="text" maxlength="10" id="name">
      </div>
      <div class="userInfo-div">
        <b class="x">*</b>
        <span>联系电话</span>
        <span class="span-ml">186****5586</span>
      </div>
      <div class="userInfo-div">
        <b class="x">*</b>
        <span>性别</span>
        <span class="span-ml">
          <el-radio v-model="radio1" label="1">男同学</el-radio>
          <el-radio v-model="radio1" label="2">女同学</el-radio>
        </span>
      </div>
      <div class="userInfo-div">
        <b class="x">*</b>
        <span>年级</span>
        <span class="span-ml">
          <el-select v-model="value" placeholder="请选择">
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
        <div class="userInfo-div-btn">编辑</div>
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
                radio1: '1',
                options: [{
                    value: '选项1',
                    label: '九年级'
                }, {
                    value: '选项2',
                    label: '小升初'
                }, {
                    value: '选项3',
                    label: '七年级'
                }, {
                    value: '选项4',
                    label: '八年级'
                }, {
                    value: '选项5',
                    label: '九年级'
                }, {
                    value: '选项6',
                    label: '高一'
                }, {
                    value: '选项7',
                    label: '高二'
                }, {
                    value: '选项8',
                    label: '高三'
                }],
                value: ''
            }
        },
        mounted() {

        },
        methods: {},
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
      input, .span-ml {
        aret-color: red;
        color: #222;
        border: 0;
        margin-left: 1rem;
        padding-left: 1rem;
        height: 35px;
        width: 300px;
      }
      &-btn{
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
    }
  }
</style>
