<!--  通过手机找回密码 -->
<template>
  <div class="page-list">
    <h1 class="p-title">手机找回密码</h1>

    <form class="form-type-2">
      <div class="input-box">
        <div class="form-item">
          <label class="form-label">输入新密码</label>
          <input type="password" placeholder="请输入新登录密码" v-model="form.loginpass">
        </div>

        <div class="form-item">
          <label class="form-label">确认新密码</label>
          <input type="password" placeholder="再次输入新密码" v-model="form.confirmpass">
        </div>
      </div>

      <div class="btns">
        <button class="btn btn-blue" type="button" @click="subForm()">确认修改</button>
      </div>
    </form>


  </div>
</template>

<script>
  export default  {
    data () {
      return {
        form: {
          loginpass: '',     //  新登录密码
          confirmpass: ''   //  确认登录密码
        }
      }
    },
    methods: {
      subForm () {
        let data = this.form

        let msg = ''
        if(!data.loginpass) {
          msg = '请输入新密码'
        }else if(!data.confirmpass) {
          msg = '请输入确认密码'
        }else if(data.confirmpass !== data.loginpass) {
          msg = '两次密码输入不一致'
        }

        if(msg) {
          this.$toast(msg)
        }else {
          //  提交表单
          //  to do
          //  ....

          this.$router.push('/result')
        }
      }
    }
  }
</script>
