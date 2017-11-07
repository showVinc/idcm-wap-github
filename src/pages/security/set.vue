<!--  安全中心 -->
<template>
  <div class="page-list">
    <public-top :num="4"></public-top>
    <h1 class="p-title">安全中心</h1>

    <div class="p-list">
      <div class="list">
        <div class="icon"><img :src="require('@/assets/images/security/auth.png')" alt=""></div>
        <router-link class="item" to="/security/certify">
          实名认证<div class="right">{{ certify ? '已认证' : '去认证' }}</div>
        </router-link>
      </div>

      <div class="list">
        <div class="icon"><img :src="require('@/assets/images/security/email.png')" alt=""></div>
        <router-link class="item" to="/security/email">
          绑定邮箱<div class="right">{{ email ? '修改' : '去绑定' }}</div>
        </router-link>
      </div>

      <div class="list">
        <div class="icon"><img :src="require('@/assets/images/security/tel.png')" alt=""></div>
        <router-link class="item" to="/security/mobile">
          绑定手机<div class="right">{{ tel ? tel : '去绑定' }}</div>
        </router-link>
      </div>

      <div class="list">
        <div class="icon"><img :src="require('@/assets/images/security/login.png')" alt=""></div>
        <router-link class="item" to="/security/login">
          登录密码<div class="right">{{ loginpass ? '修改' : '去设置' }}</div>
        </router-link>
      </div>

      <div class="list">
        <div class="icon"><img :src="require('@/assets/images/security/exchange.png')" alt=""></div>
        <router-link class="item" to="/security/exchange">
          交易密码<div class="right">{{ exchangepass ? '修改' : '去设置' }}</div>
        </router-link>
      </div>
    </div>

  </div>
</template>


<script>
  export default {
    data () {
      return {
        certify: false,         //  是否实名认证
        email: '',              //  绑定的邮箱
        tel: '188****9774',     //  绑定的手机号
        loginpass: true,        //  是否设置登录密码
        exchangepass: true      //  是否设置交易密码
      }
    }
  }
</script>


<style lang="less" scoped>
  .list {
    display: flex;
    align-items: center;
    &:not(:last-child) .item {
      border-bottom: 1px solid #233b56;
    }
    .item {
      flex: 1;
      padding-right: 15px;
    }
    .icon {
      width: 30px;
      img {
        height: 18px;
      }
    }
    .right {
      float: right;
      padding-right: 15px;
      color: #516d8e;
      background: url('../../assets/images/security/icon-right.png') center right no-repeat;
      background-size: auto 12px;
    }
  }
</style>
