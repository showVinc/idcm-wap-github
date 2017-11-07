<template>
  <div class="addBank">
    <public-top :num="4"></public-top>
    <div>
      <div class="addBankTit">
        添加钱包地址
      </div>
      <ul>
        <li>
          名&emsp;&emsp;称
          <input type="text" placeholder="请为该账户命名" v-model="post.name">
        </li>
        <li>
          虚&ensp;拟&ensp;币
          <p>BTC</p>
        </li>
        <li>
          钱包地址
          <input type="text" placeholder="请填入钱包地址" v-model="post.location">
        </li>
      </ul>
      <div class="btn" @click="sub">
        确认
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        bankName:'请选择开户银行名称',
        bank:[
          {
            name:'中国银行',
            val:'zgyh'
          },
          {
            name:'农业银行',
            val:'nyyh'
          }
        ],
        post:{
          name:'',
          location:''
        }
      }
    },
    methods: {
      selectVal(){
        for (let value of this.bank) {
          if(this.post.selVal == value.val){
            this.bankName = value.name
          }
        }
      },
      sub(){
        if(!this.post.name){
          this.$toast('请输入账户名称')
          return false
        }else if(!this.post.location){
          this.$toast('请输入钱包地址')
          return false
        }else{
          this.$toast('添加成功')
          this.$router.push({name:'Address'})
        }
      }
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  .addBankTit{
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
      justify-content: space-between;
      align-items: center;
      position: relative;
      height: 44px;
      color: #ebebeb;
      font-size: 14px;
      p{
        font-size: 14px;
        width: calc(~'100% - 80px');
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 15px;
        box-sizing: border-box;
      }
      input{
        width: calc(~'100% - 80px');
        height: 100%;
        border: none;
        background: none;
      }
    }
  }
  .btn{
    width: 345px;
    height: 50px;
    margin: 60px auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #356092;
    color: #ebebeb;
    border-radius: 3px;
    font-size: 16px;
  }
</style>
