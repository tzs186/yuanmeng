<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul class="hello-one"></ul>
    <div @click="login">登入</div>
  </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted() {
        },
        methods: {
            login() {
                this.$axios({
                    method: 'post',
                    url: 'http://192.168.1.176:8080/api/user/login',
                    params: {
                        mobile: '18617325589',
                        password: 'qwe123456'
                    }
                }).then((res) => {
                  console.log(res);
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
