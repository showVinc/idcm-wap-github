<template>
  <div class="cashWrap">
    <public-top :num="4"></public-top>
    <div class="selVal">
      <div class="down" @click="isShow = !isShow">
        {{value}}<img src="../../assets/images/home/detail/down.png">
      </div>
    </div>
    <ul>
      <li>
        可用BTC
        <div>321.00000000</div>
      </li>
      <li>
        提现地址
        <div>
          <input type="text" placeholder="请输入钱包地址">
        </div>
      </li>
      <li>
        提现数量
        <div>
          <input type="text" placeholder="请输入转出数量">
        </div>
      </li>
      <li>
        手续费
        <div>
          <input type="text" placeholder="请输入转出数量">
          BTC
        </div>
      </li>
      <li>
        实际到账
        <div>
          <input type="text" placeholder="请输入转出数量">
          BTC
        </div>
      </li>
      <li>
        交易密码
        <div>
          <input type="password" placeholder="请输入交易密码">
        </div>
      </li>
    </ul>
    <div class="btn">
      确认
    </div>
    <div class="btcText">
      <p>充值说明：</p>
      <p>1，为了安全，转出比特币是由人工出力，您提交后，我们会在短时间内为您处理。</p>
      <p>2，为了加快转币的速度，我们会为每次转币支付网络费，但由于比特币网络的不确定性，部分转币任然较慢，请耐心等待。</p>
      <p>3，转出数额不能小于0.01BTC。</p>
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
        isShow:false,
        value: '比特币提现'
      }
    },
    methods: {
      popClick(index){
        switch (index){
          case 1:
            this.value = '比特币充值'
            this.$router.push({name:'Security',params:{key:2}})
            break;
          case 2:
            this.$router.push({name:'Btcshow'})
            break;
          case 3:
            this.$router.push({name:'Security',params:{key:0}})
            break;
          case 4:
            this.$router.push({name:'Rmbshow'})
            break;
          case 5:
            this.$router.push({name:'Btcrecord'})
            break;
        }
        this.isShow = false
      }
    },
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
    .down{
      display: flex;
      align-items: center;
      img{
        margin-left: 10px;
        width: 9px;
        height: 5px;
      }
    }
  }

  .cashWrap {
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
        border-bottom: 1px solid #233b56;
        div{
          width: calc(~'100% - 90px');
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 15px;
          box-sizing: border-box;
          input{
            background: none;
            font-size: 14px;
            height: 100%;
            color: #ebebeb;
          }
        }
      }
    }
  }

  .btn {
    width: calc(~'100% - 30px');
    margin: 15px auto;
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
  .btcText{
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    font-size: 12px;
    color: #516d8e;
    p{
      line-height: 20px;
    }
  }
</style>
<style lang="less">
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
  .upPop{
    width: 100%;
    background: #0d2638;
    font-size: 20px;
    color: #ebebeb;
    top:100px;
    height: calc(~'100vh - 100px');
    padding-left: 15px;
    box-sizing: border-box;
    p{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 15px 15px 0;
      border-top: 1px solid #233b56;
      img{
        width: 16px;
        height: 11.5px;
      }
    }
  }
</style>
