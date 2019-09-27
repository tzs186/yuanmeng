<template>
  <div>
    <el-form-item label="所在地区">
      <el-select v-model="addSite.provinceId" placeholder="请选择" @change="ProvinceSelect">
        <el-option
          v-for="item in CityList"
          :key="item.province.name"
          :label="item.province.name"
          :value="item.province.provinceId">
        </el-option>
      </el-select>
      <el-select v-model="addSite.cityName" @change="CitySelect" placeholder="请选择">
        <el-option
          v-for="item in city"
          :key="item.cityId"
          :label="item.name"
          :value="item.cityId">
        </el-option>
      </el-select>
      <el-select v-model="addSite.districtName" @change="districtSelect" placeholder="请选择">
        <el-option
          v-for="item in district"
          :key="item.districtId"
          :label="item.name"
          :value="item.districtId">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="所在街道">
      <el-select v-model="addSite.townName" @change="townSelect" placeholder="请选择">
        <el-option
          v-for="item in town"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
    </el-form-item>
  </div>

</template>

<script>
    export default {
        name: "index",
        props:{
            addSite:{
                type:Object,
                default:this.addSites
            }
        },
        data(){
            return {
                options: [],
                CityList: [],
                city: [],
                district: [],
                town: [],
                addSites: {
                    "cityId": '',
                    "cityName": '',
                    "provinceId": '',
                    "provinceName": '',
                    "townId": '',
                    "townName": '',
                    "districtId": '',
                    "districtName": ''
                },
            }
        },
        mounted() {
            this.getCityList();
        },
        methods:{
            getCityList() {
                let that = this;
                //address/addressList
                this.$axios.post('city/getCityList', {'token': that.token})
                    .then(res => {
                        if (res.code == 1000) {
                            that.CityList = res.data;
                        }
                    }).catch(err => {
                    console.log(err)
                })
            },
            ProvinceSelect(e) {//省份选中
                let obj = {};
                obj = this.CityList.find((item) => {
                    return item.province.provinceId === e;
                });
                this.addSite.cityId = "";
                this.addSite.districtId = "";
                this.addSite.townId = "";
                this.district = [];
                this.town = [];
                this.addSite.provinceId = e;
                this.addSite.provinceName = obj.province.name;
                this.city = obj.province.cities;
            },
            CitySelect(e) {//市区选中

                let obj = {};
                let that = this;
                obj = this.city.find((item) => {
                    return item.cityId === e;
                });
                this.addSite.districtId = "";
                this.addSite.townId = "";
                this.addSite.cityId = e;
                this.addSite.cityName = obj.name;
                this.district = obj.districts;
            },
            districtSelect(e) {//地区选中
                let obj = {};
                let that = this;
                obj = this.district.find((item) => {
                    return item.districtId === e;
                });

                this.addSite.townId = "";
                this.addSite.districtId =e ;
                this.addSite.districtName = obj.name;
                this.$axios.post('city/getTowns', {'districtId': e})
                    .then(res => {
                        if (res.code == 1000) {
                            that.town = res.data;
                        }
                    }).catch(err => {
                    console.log(err)
                })
            },
            townSelect(e) {//街道选中
                let obj = {};
                obj = this.town.find((item) => {
                    return item.id === e;
                });
                this.addSite.townId = e;
                this.addSite.townName = obj.name;
                this.$emit('func',this.addSite)
            },
        },
        watch: {
            "city": {
                handler(newValue, oldVlaue) {

                },
                deep: true
            },
            "district": {
                handler(newValue, oldVlaue) {

                },
                deep: true
            },
            "town": {
                handler(newValue, oldVlaue) {},
                deep: true
            },
        },
    }
</script>

<style scoped>

</style>
