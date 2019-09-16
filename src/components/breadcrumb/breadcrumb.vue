<template>
    <div class="bread">
      <el-breadcrumb class="breadcrumb-container" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item  :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="item in breadcrumb" :key="item.path" :to="item.path">{{item.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: "breadcrumb",
        data(){
            return{
                breadcrumb:null
            }
        },
        mounted() {
            this.getBreadcrumb()
        },
        watch: {
            $route () {
                this.getBreadcrumb();
            }
        },
        methods:{
            getBreadcrumb(){
                let matched = this.$route.matched.filter(item => item.name);
                this.breadcrumb = matched;
            }
        }
    }
</script>

<style scoped lang="scss">
  .bread{
    height: 40px;
    padding: 5px 0;
  }
</style>
