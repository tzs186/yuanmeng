<template>
  <div class="adderssList">
    <user-title :title="userName"></user-title>
    <div class="addr_title">
      <p>您已创建
        <span class="num">2</span>
        个地址，最多可以创建
        <span class="num_one"> 10</span>
        个，购买课程的时候添加地址以便后期发送学习用具或精美礼品！请前往<span class="num_two">【全站通VIP】 </span> <a href="vip.html"> 点击跳转</a></p>
    </div>
    <div class="existence_addr">
      <div class="existence_div" v-for="(item,index) in AddressList">
        <span class="existence_name">{{item.receiveName}}</span>
        <span class="existence_addr">{{item.provinceName}}{{item.cityName}}{{item.districtName}}{{item.townName}}</span>
        <span class="existence_phone"> {{item.mobile.substr(0,3) + "****" + item.mobile.substr(7)}}</span>
        <div class="existence_div_in">

          <span class="existence_cy "
                :class="item.status==1?'existence_cy_on':' '">{{item.status==1?'常用地址' :'设为常用地址'}}</span>
          <span class=""@click="AddressaEdit(item,index)">编辑</span>
          <span class="existence_del" @click="addressDel(item.id,index)">删除</span>
        </div>
      </div>
    </div>
    <div class="add_btn" @click="addressAdd" v-show="addOff">新增收货地址</div>

    <div class="new_addr" id="new_addr" v-show="!addOff">
      <user-title :title="userNames">
        <span class="cha" @click="addOff=true">×</span>
      </user-title>
      <el-form :model="addSite" class="new_addr_WIDTH" label-width="80px">
        <el-form-item label="收货姓名">
          <el-input v-model="addSite.receiveName"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="addSite.mobile"></el-input>
        </el-form-item>
        <address-select @func="getMsgFormSon" :addSite="editAddress" ></address-select>
        <el-form-item label="详细地址">
          <el-input v-model="addSite.address"></el-input>
        </el-form-item>
      </el-form>
      <div class="new_addr_btn" @click="newAddrAxios">
        保存收货地址
      </div>
    </div>
  </div>
</template>

<script>
    import userTitle from "../../components/module/userTitle";
    import addressSelect from "../../components/address/index";
    export default {
        name: "getAddress",
        data() {
            return {
                addOff: true,
                userName: "地址管理",
                userNames: "新增地址",
                token: sessionStorage.getItem("token"),
                AddressList: [],
                addSite: {
                    "token": sessionStorage.getItem("token"),
                    "status": 0,
                    "receiveName": '',
                    "mobile": '',
                    "address": '',
                },
                editAddress:{},
                siteData:{}
            }
        },
        mounted() {
            this.getAddress();
        },
        methods: {
            addressAdd(){
                this.addOff=false;
                this.editAddress={}
                this.addSite={}
            },
            //编辑地址
            AddressaEdit(item,indexs){
                console.log(item)
                this.addOff=false;
                this.editAddress=Object.assign({}, item)
                this.addSite=Object.assign({}, item)
            },
            //删除地址
            addressDel(Id,indexs){
                let that = this;
                this.$confirm('确定要删除地址?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios.post('address/addressDel', {
                        "token": that.token,
                        "addressId": Id
                    }).then(res => {
                            console.log(res)
                            if (res.code == 1000) {
                               that.AddressList.splice(indexs, 1)
                                this.$message({
                                    type: 'success',
                                    message: '删除成功!'
                                });
                            }
                        }).catch(err => {
                        console.log(err)
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            getMsgFormSon(data){
                this.siteData=data
            },
            newAddrAxios() {
                let that = this;
                let formData={...this.siteData,...this.addSite}
                this.$axios.post('address/addressAdd', formData)
                    .then(res => {
                        console.log(res)
                        if (res.code == 1000) {
                            this.getAddress();
                        } else {
                        }
                    }).catch(err => {
                    console.log(err)
                })
            },
            getAddress() {
                let that = this;
                //address/addressList
                this.$axios.post('address/addressList', {'token': that.token})
                    .then(res => {
                        if (res.code == 1000) {
                            that.AddressList = res.data;
                        } else {

                        }
                    }).catch(err => {
                    console.log(err)
                })
            }
        },
        watch:{
            "editAddress": {
                handler(newValue, oldVlaue) {},
                deep: true
            },
        },
        components: {
            userTitle,
            addressSelect
        }
    }
</script>

<style scoped lang="scss">
  .addr_title {
    width: 880px;
    text-align: left;
    margin: 0px auto 30px;

    span {
      color: #EE2A04;
    }

    a {
      color: #999;
    }
  }

  .existence_addr {
    .existence_div {
      width: 880px;
      height: 30px;
      text-align: left;
      margin: 10px auto;
      line-height: 30px;

      span {
        color: #222;
        display: inline-block;
        margin-right: 2rem;
      }

      .existence_div_in {
        display: inline-block;
        float: right;

        .existence_add,
        .existence_del,
        .existence_cy {
          cursor: pointer;
          color: #999;
        }

        .existence_cy_on {
          width: 102px;
          height: 30px;
          background: linear-gradient(0deg, rgba(255, 166, 54, 1) 0%, rgba(255, 129, 21, 1) 98%);
          border-radius: 15px;
          color: #fff;
          text-align: center;
          line-height: 30px;
        }
      }
    }
  }

  .new_addr_WIDTH {
    width: 670px;
  }

  .add_btn, .new_addr_btn {
    width: 150px;
    height: 46px;
    background: linear-gradient(0deg, #ffa636 0%, #ff8115 98%);
    border-radius: 23px;
    color: #fff;
    font-size: 14px;
    line-height: 46px;
    text-align: center;
    margin: 100px auto;
  }
</style>
