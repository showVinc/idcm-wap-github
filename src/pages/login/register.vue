<!--  登录  -->
<template>
  <div class="sec-login">
    <div class="logo">
      <img :src="require('@/assets/images/login/logo.png')" alt="">
    </div>

    <form class="form-type-1">
      <div class="form-item">
        <input type="text" placeholder="账号、邮箱或者手机号" v-model="form.useraccount">
      </div>

      <div class="form-item">
        <input type="text" placeholder="请输入验证码" v-model="form.code">
        <button type="button" class="btn btn-code">点击获取</button>
      </div>

      <div class="form-item">
        <input type="password" placeholder="请输入密码" v-model="form.password">
      </div>

      <div class="form-item">
        <input type="password" placeholder="请输入密码" v-model="form.confirmpass">
      </div>

      <div class="btns">
        <button type="button" class="btn btn-blue" @click="subForm()">注册</button>
      </div>

      <div class="tip">
        <router-link class="link" to="/login">已有账号，立即登录</router-link>
      </div>
    </form>
  </div>
</template>

<script>
  export default  {
    data () {
      return {
        form: {
          useraccount: '',   //  账户、邮箱或者手机号
          code: '',          //  验证码
          password: '',      //  密码
          confirmpass: '',    //  确认密码
        }
      }
    },
    methods: {
      subForm () {
        let data = this.form

        let msg = ''
        if(!data.useraccount) {
          msg = '请输入账号、邮箱或者手机号'
        }else if(!data.code) {
          msg = '请输入验证码'
        }else if(!data.password) {
          msg = '请输入密码'
        }else if(!data.confirmpass) {
          msg = '请输入确认密码'
        }else if(data.password !== data.confirmpass) {
          msg = '两次密码输入不一致'
        }

        if(msg) {
          this.$toast(msg)
        }else {
          //  提交表单
          //  to do
          //  ....

          this.$toast('注册成功')

          sessionStorage.setItem('userinfo', data.useraccount)   //  存储用户信息到本地，并跳转到登录后的页面（仅用于测试，实际情况可做修改）

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


  .btns {
    margin: 30px 0 20px 0;
  }
  .sec-login .form-type-1 .tip {
    text-align: center;
    a {
      font-size: 16px;
    }
  }
</style>
