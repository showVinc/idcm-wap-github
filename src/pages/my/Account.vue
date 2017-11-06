<template>
  <div class="setting">
    <public-top :num="4"></public-top>
    <div>
      <div class="settingTit">
        资金总览
      </div>
      <div class="rmb">
        <div class="rmbTit">
          <img src="../../assets/images/home/detail/rmb.png">
          人民币
        </div>
        <div class="main">
          <div>
            可用人民币
            <span>￥188888.00</span>
          </div>
          <div>
            冻结资金
            <span>￥188888.00</span>
          </div>
          <div>
            累计充值
            <span>￥188888.00</span>
          </div>
        </div>
      </div>
      <div class="rmb">
        <div class="rmbTit">
          <img src="../../assets/images/home/detail/dollar.png">
          美元
        </div>
        <div class="main">
          <div>
            可用美元
            <span>$188888.00</span>
          </div>
          <div>
            冻结资金
            <span>$188888.00</span>
          </div>
          <div>
            累计充值
            <span>$188888.00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {}
  }
</script>
<style lang="less" type="text/less" scoped>
  .settingTit{
    font-size: 20px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    color: #ebebeb;
  }
  .rmb{
    padding-left: 15px;
    background: #0e3048;
    margin-top: 10px;
    color: #ebebeb;
    .rmbTit{
      font-size: 14px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #233b56;
      height: 44px;
      img{
        width: 18px;
        height: 18px;
        margin-right: 10px;
      }
    }
    .main{
      height: 95px;
      display: flex;
      padding-right: 15px;
      box-sizing: border-box;
      align-items: center;
      font-size: 12px;
      color: #516d8e;
      div{
        flex:1;
        height: 60px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        span{
          color: #ebebeb;
          margin-top: 10px;
        }
        &:nth-child(1){
          border-right: 1px solid #233b56;
        }
        &:nth-child(2){
          border-right: 1px solid #233b56;
        }
      }
    }
  }

</style>
