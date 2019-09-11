<template>
  <div v-if="show1">
    <div   style="width: 100px;height: 100px;color: red;position: relative;z-index: 99">
      <button @click="okClick">确定</button>
      <button @click="cancelClick">确定</button>
      <div >{{message}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'toast',
        data () {
            return {
                show1: false
            }
        },
        props: ['message', 'visible'],
        mounted () {
        },
        methods: {
            okClick: () => {
                this.$emit('onOk')
            },
            cancelClick: () => {
                this.$emit('onCancel')
            }
        },
        watch: {
            visible: {
                handler: function (data) {
                    this.show1 = data
                },
                immediate: true
            }
        }
    }
</script>

<style scoped>

</style>
