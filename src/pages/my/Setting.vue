<template>
  <div class="setting">
    <public-top :num="4"></public-top>
    <div>
      <div class="settingTit">
        我的设置
      </div>
      <ul>
        <li @click="$router.push({name:'Opinion'})">
          意见反馈
          <img src="../../assets/images/home/arrow.png">
        </li>
        <li>
          版本更新
          <span>
            1.02.02
          </span>
        </li>
      </ul>
      <div class="remove">
        退出登录
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
  ul{
    padding-left: 15px;
    background: #0e3048;
    li{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 15px;
      height: 44px;
      font-size: 14px;
      color: #ebebeb;
      border-bottom: 1px solid #233b56;
      &:last-child{
        border: none;
      }
      img{
        width: 6px;
        height: 11px;
      }
      span{
        color: #516d8e;
      }
    }
  }
  .remove{
    margin:80px auto 0;
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
</style>
<style lang="less" type="text/less">
</style>
