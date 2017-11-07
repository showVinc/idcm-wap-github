<!--  登录  -->
<template>
  <div class="sec-login">
    <div class="logo" @click="$router.push('/')">
      <img :src="require('@/assets/images/login/logo.png')" alt="">
    </div>

    <form class="form-type-1">
      <div class="form-item">
        <span class="icon"><img :src="require('@/assets/images/login/email.png')" alt=""></span>
        <input type="text" placeholder="账号、邮箱或者手机号" v-model="form.useraccount">
      </div>

      <div class="form-item">
        <span class="icon"><img :src="require('@/assets/images/login/pass.png')" alt=""></span>
        <input type="password" placeholder="请输入登录密码" v-model="form.password">
      </div>

      <div class="pass">
        <el-checkbox class="check" v-model="form.remember">记住登录密码</el-checkbox>
        <router-link class="link" to="/findpass">忘记密码</router-link>
      </div>

      <div class="btns">
        <button type="button" class="btn btn-blue" @click="login()">登录</button>
        <router-link class="btn btn-default" to="/register">立即注册</router-link>
      </div>
    </form>
  </div>
</template>

<script>
  export default  {
    data () {
      return {
        form: {
          useraccount: '', //  账号、邮箱或者手机号
          password: '',  //  登录密码
          remember: false   //  是否记住登录密码
        }
      }
    },
    methods: {
      login () {
        let data = this.form

        let msg = ''
        if(!data.useraccount) {
          msg = '请输入账号、邮箱或者手机号'
        }else if(!data.password) {
          msg = '请输入密码'
        }

        if(msg) {
          this.$toast(msg)
        }else {
          //  提交表单
          //  to do
          //  ....

          this.$toast('登录成功')
          localStorage.setItem('userInfo', data.useraccount)   //  存储用户信息到本地，并跳转到登录后的页面（仅用于测试，实际情况可做修改）
          setTimeout(() => {
            this.$router.push({path: '/my'})
          }, 2000)
        }
      }
    }
  }
</script>


<style lang="less" scoped>
  .sec-login {
    min-height: 100vh;
    background: url('../../assets/images/login/bg.jpg') center center no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  .pass {
    margin-top: -5px;
    &:after {
      content: '';
      display: table;
      clear: both;
    }
    .link {
      float: right;
    }
  }
  .btns {
    margin: 30px 0;
    .btn {
      margin-bottom: 10px;
    }
  }
</style>
