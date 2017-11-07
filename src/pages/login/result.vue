<!--  密码修改完成 提示 -->
<template>
  <div class="sec-login">
    <div class="icon-success"></div>
    <div class="tip">恭喜您，密码修改成功</div>


    <div class="btns">
      <router-link class="btn btn-blue" to="/login">重新登录</router-link>
    </div>

  </div>
</template>


<style lang="less" scoped>
  .icon-success {
    width: 65px / 2;
    height: 130px / 2;
    border-width: 0 10px 10px 0;
    border-style: solid;
    border-color: #4da53c;
    transform: rotate(45deg);
    margin: 135px/2 auto 50px/2 auto;
  }
  .tip {
    text-align: center;
    font-size: 14px;
    color: #4da53c;
  }

  .btns {
    margin: 100px 15px 50px 15px;
  }
</style>
