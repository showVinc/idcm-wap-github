<template>
  <div class="page-list">
    <public-top :num="4"></public-top>

    <div class="p-title">绑定邮箱</div>

    <form class="form-type-2">
      <div class="input-box">
        <div class="form-item">
          <label class="form-label">绑定邮箱</label>
          <input type="text" placeholder="请输入绑定的邮箱" v-model="form.email">
        </div>

        <div class="form-item">
          <label class="form-label">邮箱验证码</label>
          <input type="text" placeholder="请输入邮箱验证码" v-model="form.code">
          <button class="btn btn-code" type="button">点击获取</button>
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
          email: '',   //  邮箱
          code: ''      //  验证码
        }
      }
    },
    methods: {
      subForm() {
        let data = this.form

        let msg = ''
        if(!data.email) {
          msg = '请输入绑定的邮箱'
        }else if(!data.code) {
          msg = '请输入邮箱验证码'
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

