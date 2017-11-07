<!--  通过手机找回密码 -->
<template>
  <div class="page-list">
    <h1 class="p-title">手机找回密码</h1>

    <form class="form-type-2">
      <div class="input-box">
        <div class="form-item">
          <label class="form-label">所在地</label>
          <select v-model="form.location" class="form-select">
            <option v-for="item,i in location" :key="i"  :value="item.id">{{ item.label }}</option>
          </select>
        </div>

        <div class="form-item">
          <label class="form-label">邮箱地址</label>
          <input type="text" placeholder="请输入邮箱地址" v-model="form.email">
        </div>

        <div class="form-item">
          <label class="form-label">验证码</label>
          <input type="text" placeholder="请输入验证码" v-model="form.code">
          <img class="img-code" :src="codeurl" alt="">
        </div>

        <div class="form-item">
          <label class="form-label">短信验证码</label>
          <input type="text" placeholder="请输入验证码" v-model="form.tel_code">
          <button class="btn btn-code" type="button">点击获取</button>
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
        showlocation: false,  //  是否展开所在地下拉列表
        form: {
          location: 1,     //  所在地
          email: '',       //  邮箱地址
          code: '',           //  验证码
          tel_code: ''     //  短信验证码
        },
        location: [
          {label: '中国', id: 1},
          {label: '加拿大', id: 2}
        ]
      }
    },
    methods: {
      goNext () {
        let data = this.form

        let msg = ''
        if(!data.location) {
          msg = '请选择所在地'
        }else if(!data.email) {
          msg = '请输入邮箱地址'
        }else if(!data.code) {
          msg = '请输入图形验证码'
        }else if(data.code !== '1235') {
          msg = '图形验证码输入不正确'
        }else if(!data.tel_code) {
          msg = '请输入短信验证码'
        }

        if(msg) {
          this.$toast(msg)
        }else {
          //  下一步之前的相关操作
          //  to do
          //  ....

          this.$router.push('/mobilepassstep2')
        }
      }
    }
  }
</script>
