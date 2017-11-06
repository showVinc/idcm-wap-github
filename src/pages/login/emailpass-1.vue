<!--  通过邮箱找回密码 -->
<template>
  <div class="page-list">
    <h1 class="p-title">邮箱找回密码</h1>

    <form class="form-type-2">
      <div class="input-box">
        <div class="form-item">
          <label class="form-label">邮箱地址</label>
          <input type="text" placeholder="请输入邮箱地址" v-model="form.email">
        </div>

        <div class="form-item">
          <label class="form-label">验证码</label>
          <input type="text" placeholder="请输入验证码" v-model="form.code">
          <img class="img-code" :src="codeurl" alt="">
        </div>
      </div>

      <div class="btns">
        <button class="btn btn-blue" type="button" @click="goNext()">下一步</button>
      </div>
    </form>


  </div>
</template>

<script>
  export default  {
    data () {
      return {
        codeurl: require('@/assets/images/login/code.png'),   //  验证码图片地址
        form: {
          email: '',     //  新登录密码
          code: ''           //  邮箱验证码
        }
      }
    },
    methods: {
      goNext () {
        let data = this.form

        let msg = ''
        if(!data.email) {
          msg = '请输入邮箱地址'
        }else if(!data.code) {
          msg = '请输入验证码'
        }else if(data.code !== '1235') {
          msg = '验证码输入不正确'
        }

        if(msg) {
          this.$toast(msg)
        }else {
          //  下一步之前的相关操作
          //  to do
          //  ....

          this.$router.push('/emailpassstep2')
        }
      }
    }
  }
</script>
