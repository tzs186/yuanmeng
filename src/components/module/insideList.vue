<template>
  <div class="insideList">
      <div class="insideListCom">
        <p class="insideListCom_n">{{list.name}}</p>
        <div class="clear">
          <template v-for="(item,index) in list.data">
            <span class="default"  @click="eventIndex(index,item.id)" :class="index==indexs?'on':''"  >{{item.name}}</span>
          </template>
        </div>
      </div>
  </div>
</template>
<script>
    export default {
        name: "insideList",
        data(){
            return {
                indexs:0
            }
        },
        props:{
            list:{
                type:Object,
                default:[]
            }
        },
        methods:{
            eventIndex(nub,id){
                this.indexs=nub;
                this.$emit("listEventClick",id,100)
            }
        }
    }
</script>

<style scoped lang="scss">
  .insideList{
    background: #fff;
    position: relative;
    width: 100%;
    &Com{
      width: 1090px;
      margin: 0 auto;
      position: relative;
      height: 80px;
      padding: 20px 0 15px 80px;
      &_n{
        font-weight: 700;
        line-height: 48px;
        color: #4c4c4c;
        text-align: center;
        font-size: 16px;
        position: absolute;
        left: 0;
        top: 9px;
      }
      .default{
        color: #444;
        font-size: 14px;
        margin: 0 20px;
        text-align: center;
        height: 26px;
        line-height: 26px;
        display: inline-block;
        padding: 0 12px;
        border-radius: 4px;
        cursor: pointer;
      }
      .on,.default:hover{
        color: #fff;
        background-color: #FF5B1C;
      }
    }
  }
</style>
