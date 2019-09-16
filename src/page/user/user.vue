<template>
  <div class="">
      <user-title :title="userName"></user-title>
    <user-title :title="userName1"></user-title>
  </div>
</template>

<script>
  import userTitle from "../../components/module/userTitle";
    export default {
        name: "user",
        data(){
            return{
                userName:"更换头像",
                userName1:"基础信息",
            }
        },
        mounted() {

        },
        methods:{

        },
        components:{
            userTitle
        }
    }
</script>

<style scoped>

</style>
