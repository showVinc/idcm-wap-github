<!--  安全中心 -->
<template>
  <div class="page-list">
    <h1 class="p-title">安全中心</h1>

    <div class="p-list">
      <div class="list">
        <img :src="require('@/assets/images/setting/auth.png')" alt="" class="icon">
        <router-link class="item" to="/certify">
          实名认证
          <div class="right">去认证  ></div>
        </router-link>
      </div>

      <div class="list">
        <img :src="require('@/assets/images/setting/email.png')" alt="" class="icon">
        <router-link class="item" to="/certify">
          绑定邮箱
          <div class="right">去绑定  ></div>
        </router-link>
      </div>

      <div class="list">
        <img :src="require('@/assets/images/setting/tel.png')" alt="" class="icon">
        <router-link class="item" to="/certify">
          绑定手机
          <div class="right">188****9774  ></div>
        </router-link>
      </div>

      <div class="list">
        <img :src="require('@/assets/images/setting/login.png')" alt="" class="icon">
        <router-link class="item" to="/certify">
          登录密码
          <div class="right">修改  ></div>
        </router-link>
      </div>

      <div class="list">
        <img :src="require('@/assets/images/setting/exchange.png')" alt="" class="icon">
        <router-link class="item" to="/certify">
          交易密码
          <div class="right">修改  ></div>
        </router-link>
      </div>
    </div>

  </div>
</template>
