<template>
  <div class="page-list">
    <public-top :num="4"></public-top>

    <div class="p-title">交易密码</div>

    <form class="form-type-2">
      <div class="input-box">
        <div class="form-item">
          <label class="form-label">旧密码</label>
          <input type="password" placeholder="请输入原登录密码" v-model="form.oldloginpass">
        </div>

        <div class="form-item">
          <label class="form-label">新密码</label>
          <input type="password" placeholder="请输入新登录密码" v-model="form.newloginpass">
        </div>

        <div class="form-item">
          <label class="form-label">确认新密码</label>
          <input type="password" placeholder="请输入新登录密码" v-model="form.confirmpass">
        </div>

        <div class="form-item">
          <label class="form-label">手机号码</label>
          <input type="text" placeholder="请输入绑定手机号" v-model="form.tel">
          <button class="btn btn-code" type="button">点击获取</button>
        </div>

        <div class="form-item">
          <label class="form-label">短信验证</label>
          <input type="text" placeholder="请输入验证码" v-model="form.code">
        </div>

      </div>

      <div class="btns">
        <button class="btn btn-blue" type="button" @click="subForm()">确认</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          oldloginpass: '',   //  旧密码
          newloginpass: '',      //  新密码
          confirmpass: '',      //  确认新密码
          tel: '',             //  手机号
          code: ''             //  短信验证码
        }
      }
    },
    methods: {
      subForm() {
        let data = this.form

        let msg = ''
        if(!data.oldloginpass) {
          msg = '请输入旧密码'
        }else if(!data.newloginpass) {
          msg = '请输入新密码'
        }else if(!data.confirmpass) {
          msg = '请输入确认新密码'
        }else if(data.newloginpass !== data.confirmpass) {
          msg = '两次密码输入不一致'
        }else if(!data.tel) {
          msg = '请输入手机号'
        }else if(!data.code) {
          msg = '请输入验证码'
        }

        if(msg) {
          this.$toast(msg)
        }else {
          //  提交表单
          //  to do
          //  ....

          this.$toast('提交成功')

          setTimeout(() => {
            this.$router.push({path: '/security/index'})
          }, 2000)
        }
      }
    }
  }
</script>

