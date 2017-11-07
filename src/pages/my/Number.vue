<template>
  <div class="number">
    <public-top :num="4"></public-top>
    <div>
      <div class="numberTit">
        资金账号管理
      </div>
      <ul>
        <li @click="$router.push({name:'Banklist'})">
          <div>
            <img src="../../assets/images/home/detail/bank.png" alt="">
            国内银行卡管理
          </div>
          <img class="arrow" src="../../assets/images/home/arrow.png">
        </li>
        <li @click="$router.push({name:'Banklist'})">
          <div>
            <img src="../../assets/images/home/detail/bank.png" alt="">
            国际银行卡管理
          </div>
          <img class="arrow" src="../../assets/images/home/arrow.png">
        </li>
        <li @click="$router.push({name:'Address'})">
          <div>
            <img src="../../assets/images/home/detail/btc.png" alt="">
            比特币地址管理
          </div>
          <img class="arrow" src="../../assets/images/home/arrow.png">
        </li>
      </ul>
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
  .numberTit{
    font-size: 20px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    color: #ebebeb;
  }
  ul{
    background: #0e3048;
    padding-left: 15px;
    li{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 44px;
      padding-right: 15px;
      border-bottom: 1px solid #233b56;
      font-size: 14px;
      color: #ebebeb;
      &:last-child{
        border: none;
      }
      div{
        display: flex;
        align-items: center;
        img{
          margin-right: 10px;
          width: 20px;
        }
      }
      .arrow{
        width: 6px;
        height: 11px;
      }
    }
  }

</style>
