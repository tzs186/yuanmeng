<template>
  <div class="filtrate">
    <div class="filtrateList clear">
      <p class="filtrateType">选中年级</p>
      <ul class="clear filtrateul">
        <li v-for="(item,index) in grade" @click="gradeClick(index)" :class="gradeIndex==index?'on':''">{{item}}</li>
      </ul>
    </div>
    <div class="filtrateList clear">
      <p class="filtrateType">选中学科</p>
      <ul class="clear filtrateul">
        <li v-for="(item,index) in subjects" @click="subjectsClick(index)" :class="subjectsIndex==index?'on':''">
          {{item.name}}
        </li>

      </ul>
    </div>
    <div class="filtrateList clear">
      <p class="filtrateType">教材版本</p>
      <ul class="clear filtrateul">
        <li v-for="(item,index) in versions" @click="versionsClick(index)" :class="versionsIndex==index?'on':''">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="filtrateList clear">
      <p class="filtrateType">选中阶段</p>
      <ul class="clear filtrateul">
        <li>小学</li>
        <li>初中</li>
        <li>高中</li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "filtratetoll",
        data() {
            return {
                textbook: [],
                grade: ["小学", "初中", "高中"],
                gradeIndex: 0,

                subjects: [],//学科
                subjectsIndex: 0,

                versions: [], //版本
                versionsIndex: 0,

                stage: [],//阶段
                stageIndex: 0,
            }
        },
        mounted() {
            this.tollInit();
        },
        methods: {
            //年级点击
            gradeClick(e) {
                this.gradeIndex = e;
                var tabIndex;
                if (e == 2) {
                    tabIndex = 0
                } else if (e == 0) {
                    tabIndex = 2
                } else {
                    tabIndex = 1
                }
                this.subjects = this.textbook[tabIndex].textBookLevelDto;
                this.versions = this.textbook[tabIndex].textBookLevelDto[0].textBookDetailDto
            },
            //学科点击
            subjectsClick(e){
                this.subjectsIndex = e;
                this.versions = this.subjects[e].textBookDetailDto;

            },
            tollInit() {
                let that = this;
                this.$axios.post('dic/pkey', {"pkey": "textbook"})
                    .then(res => {
                        that.textbook = res.data;

                    }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped lang="scss">
  .filtrate {
    border: 1px solid #eeeeee;
    margin-bottom: 48px;

    .filtrateList {
      position: relative;

      .filtrateType {
        float: left;
        width: 190px;
        height: 48px;
        line-height: 48px;
        color: #4c4c4c;
        font-size: 16px;
        text-align: center;
        font-weight: bold;
      }

      .filtrateul {
        float: left;
        width: 1050px;
        border-bottom: 1px solid #eee;
        line-height: 48px;

        li {
          display: inline-block;
          color: #444;
          font-size: 14px;
          margin: 0 20px;
          text-align: center;
          height: 26px;
          line-height: 26px;
          display: inline-block;
          padding: 0 12px;
          cursor: pointer;
        }

        .on, li:hover {
          color: #fff;
          background-color: #FF5B1C;
          height: 26px;
          border-radius: 4px;
          line-height: 26px;
        }
      }

      &:last-child .filtrateul {
        border-bottom: none;
      }
    }
  }
</style>
