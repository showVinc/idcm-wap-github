Btcshow.vue
<template>
  <div class="cashWrap">
    <public-top :num="4"></public-top>
    <div class="selVal">
      <div class="down" @click="isShow = !isShow">
        {{value}}<img src="../../assets/images/home/detail/down.png">
      </div>
    </div>
    <ul>
      <li class="rmbPrice">
        可用BTC
        <div>321.00000000</div>
      </li>
      <li>
        充值金额
        <div>
          <input type="text" placeholder="请输入提现金额" v-model="price">
        </div>
      </li>
    </ul>
    <div class="phone">
      <img src="../../assets/images/home/demo.jpg">
      <p>手机扫描二维码即可充值</p>
    </div>
    <div class="btn" @click="sub">
      确认
    </div>
    <div class="btcText">
      <p>充值说明：</p>
      <p>
        您的比特币汇入上述地址后，需要整个比特币网络节点确认，为了快速到账，您可以向比特币网络支付少量的手续费。到账时间一般是10分钟~60分钟之间。最小充值金额是：0.0001.您的比特币地址不会经常改变，可以重复充值；如有更改，我们会尽量通过网站公告或消息通知您。
      </p>
    </div>
    <mt-popup v-model="isShow" position="top" class="mint-popup-2 upPop" :modal="false">
      <p @click="popClick(1)">比特币充值 <img v-if="value=='比特币充值'" src="../../assets/images/home/success.png"></p>
      <p @click="popClick(2)">比特币提现 <img v-if="value=='比特币提现'" src="../../assets/images/home/success.png"></p>
      <p @click="popClick(3)">人民币充值 <img v-if="value=='人民币充值'" src="../../assets/images/home/success.png"></p>
      <p @click="popClick(4)">人民币提现 <img v-if="value=='人民币提现'" src="../../assets/images/home/success.png"></p>
      <p @click="popClick(5)">充值提现记录</p>
    </mt-popup>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isShow: false,
        value: '比特币充值',
        price: ''
      }
    },
    methods: {
      popClick(index) {
        switch (index) {
          case 1:
            this.value = '比特币充值'
            break;
          case 2:
            this.$router.push({name: 'Btcshow'})
            break;
          case 3:
            this.$router.push({name: 'Security'})
            break;
          case 4:
            this.$router.push({name: 'Rmbshow'})
            break;
          case 5:
            this.$router.push({name: 'Btcrecord'})
            break;
        }
        this.isShow = false
      },
      sub() {
        if (!this.price) {
          this.$toast('请输入充值金额')
          return false
        } else {
          this.$toast('充值成功')
        }
      }
    },
    created() {
      switch (this.$route.params.key) {
        case 0:
          this.value = '人民币充值'
          break;
        case 1:
          this.value = '美元充值'
          break;
        case 2:
          this.value = '比特币充值'
          break;
      }
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  .selVal {
    height: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    font-size: 20px;
    color: #ebebeb;
    .down {
      display: flex;
      align-items: center;
      img {
        margin-left: 10px;
        width: 9px;
        height: 5px;
      }
    }
  }

  .cashWrap {
    .rmbPrice {
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #ebebeb;
      font-size: 14px;
      border-bottom: 1px solid #233b56;
      background: #0e3048;
      div {
        width: calc(~ '100% - 90px');
      }
    }
    .addBank {
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #ebebeb;
      font-size: 14px;
      border-bottom: 1px solid #233b56;
      padding-left: 15px;
      background: #0e3048;
      position: relative;
      div {
        display: flex;
        align-items: center;
        img {
          width: 16px;
          height: 16px;
          margin-right: 10px;
        }
      }
      .arrow {
        width: 6px;
        height: 11px;
        margin-right: 15px;
      }
    }
    ul {
      padding-left: 15px;
      background: #0e3048;
      li {
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #ebebeb;
        font-size: 14px;
        div {
          width: calc(~ '100% - 90px');
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 15px;
          box-sizing: border-box;
          input {
            background: none;
            font-size: 14px;
            height: 100%;
            color: #ebebeb;
          }
        }
      }
    }
  }
  .phone{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #516d8e;
    margin-top: 50px;
    img{
      width: 170px;
      height: 170px;
      margin-bottom: 10px;
    }
  }

  .text {
    font-size: 12px;
    color: #516d81;
    width: 100%;
    padding: 15px;
    display: block;
  }

  .btn {
    width: calc(~ '100% - 30px');
    margin: 50px auto;
    box-sizing: border-box;
    font-size: 16px;
    color: #ebebeb;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #356092;
    border-radius: 3px;
  }

  .btcText {
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    font-size: 12px;
    color: #516d8e;
    p {
      line-height: 20px;
    }
  }
</style>
<style lang="less" type="text/less">
  .cashWrap {
    .el-input__inner {
      background: none;
      color: #ebebeb;
      border: none;
      padding: 0;
      width: 130px;
      font-size: 20px;
    }
  }

  .el-select-dropdown__item.selected.hover {
    background-color: #0a2638;
  }
  .el-select-dropdown__item.selected {
    background-color: #0a2638;
  }
  ::-webkit-input-placeholder {
    font-size: 20px;
  }
  .upPop {
    width: 100%;
    background: #0d2638;
    font-size: 20px;
    color: #ebebeb;
    top: 100px;
    height: calc(~ '100vh - 100px');
    padding-left: 15px;
    box-sizing: border-box;
    p {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 15px 15px 0;
      border-top: 1px solid #233b56;
      img {
        width: 16px;
        height: 11.5px;
      }
    }
  }
</style>
