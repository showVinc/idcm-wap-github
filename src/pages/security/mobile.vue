<template>
  <div class="page-list">
    <public-top :num="4"></public-top>

    <div class="p-title">修改绑定手机</div>

    <form class="form-type-2">
      <div class="input-box" style="margin-bottom: 10px;">
        <div class="form-item">
          <label class="form-label">原手机号</label>
          <input type="text" disabled v-model="form.oldtel">
        </div>

        <div class="form-item">
          <label class="form-label">短信验证码</label>
          <input type="text" placeholder="请输入验证码" v-model="form.oldcode">
          <button class="btn btn-code" type="button">点击获取</button>
        </div>
      </div>

      <div class="input-box">
        <div class="form-item">
          <label class="form-label">所在地</label>
          <select v-model="form.location" class="form-select">
            <option v-for="item,i in location" :key="i"  :value="item.id">{{ item.label }}</option>
          </select>
        </div>

        <div class="form-item">
          <label class="form-label">手机号</label>
          <input type="text" placeholder="请输入绑定手机号" v-model="form.newtel">
        </div>

        <div class="form-item">
          <label class="form-label">短信验证码</label>
          <input type="text" placeholder="请输入验证码" v-model="form.newcode">
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
        location: [
          {label: '中国', id: 1},
          {label: '加拿大', id: 2}
        ],
        form: {
          oldtel: '189****8757',   //  原手机号
          oldcode: '',  //  原手机号 验证码
          location: '1',  //  新手机号所在地
          newtel: '',   //  新手机号
          newcode: ''   //  新手机号验证码
        }
      }
    },
    methods: {
      subForm() {
        let data = this.form

        let msg = ''
        if(!data.oldtel) {
          msg = '请输入原手机号'
        }else if(!data.oldcode) {
          msg = '请输入原手机号验证码'
        }else if(!data.location) {
          msg = '请选择所在地'
        }else if(!data.newtel) {
          msg = '请输入新手机号'
        }else if(!data.newcode) {
          msg = '请输入新手机号验证码'
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

