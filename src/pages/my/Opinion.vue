<template>
  <div class="opinion">
    <public-top :num="4"></public-top>
    <div>
      <div class="settingTit">
        意见反馈
      </div>
      <textarea rows="18" style="resize:none" placeholder="请输入您的意见与反馈...">
      </textarea>
      <div class="tel">
          联系电话
        <input type="text" placeholder="选填，便于我们联系你">
      </div>
      <div class="remove" @click="sub">
        提交
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        text:'',
        tel:''
      }
    },
    methods: {
      sub(){
        if(!this.text){
          this.$toast('请输入您的意见与反馈')
        }else{
          this.$toast('提交成功')
        }
      }
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  .opinion {
    .settingTit {
      font-size: 20px;
      height: 50px;
      display: flex;
      align-items: center;
      padding-left: 15px;
      color: #ebebeb;
    }
    .tel{
      height: 44px;
      display: flex;
      align-items: center;
      font-size: 14px;
      background: #0e3048;
      justify-content: space-between;
      padding-left: 15px;
      box-sizing: border-box;
      color: #ebebeb;
      input{
        background: #0e3048;
        font-size: 14px;
        color: #ebebeb;
        width: calc(~'100% - 80px');
        height: 100%;
      }
    }
    textarea{
      width: 100%;
      background: #0e3048;
      border:none;
      color: #ebebeb;
      padding: 15px;
      box-sizing: border-box;
      font-size: 14px;
      color: #ebebeb;
    }
    ul {
      padding-left: 15px;
      background: #0e3048;
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 15px;
        height: 44px;
        font-size: 14px;
        color: #ebebeb;
        border-bottom: 1px solid #233b56;
        &:last-child {
          border: none;
        }
        img {
          width: 6px;
          height: 11px;
        }
        span {
          color: #516d8e;
        }
      }
    }
    .remove {
      margin: 80px auto 0;
      width: 345px;
      height: 50px;
      background: #356092;
      font-size: 16px;
      color: #ebebeb;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
    }
  }
</style>
<style lang="less" type="text/less">

</style>
