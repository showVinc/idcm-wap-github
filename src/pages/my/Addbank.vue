<template>
  <div class="addBank">
    <public-top :num="4"></public-top>
    <div>
      <div class="addBankTit">
        添加银行卡
      </div>
      <ul>
        <li>
          名&emsp;&emsp;称
          <input type="text" placeholder="请为该账户命名" v-model="post.name">
        </li>
        <li>
          开户银行
          <select v-model="post.selVal" @change="selectVal">
            <option v-for="item,index in bank" :value="item.val" @click="demo(item,index)">{{item.name}}</option>
          </select>
          <p :class="{'isP':bankName!='请选择开户银行名称'}">
            {{bankName}}
            <img src="../../assets/images/home/arrow.png">
          </p>
        </li>
        <li>
          银行名称
          <input type="text" placeholder="请输入开户行名称" v-model="post.bank_name">
        </li>
        <li>
          开户姓名
          <input type="text" placeholder="请输入开户人姓名" v-model="post.user_name">
        </li>
        <li>
          开户省份
          <input type="text" placeholder="请输入开户省份" v-model="post.prov">
        </li>
        <li>
          开户城市
          <input type="text" placeholder="请输入开户城市" v-model="post.city">
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
          selVal:'',
          name:'',
          bank_name:'',
          user_name:'',
          prov:'',
          city:''
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
        }else if(!this.post.selVal){
          this.$toast('请选择开户银行')
          return false
        }else if(!this.post.bank_name){
          this.$toast('请输入开户银行名称')
          return false
        }else if(!this.post.user_name){
          this.$toast('请输入开户人姓名')
          return false
        }else if(!this.post.prov){
          this.$toast('请输入开户身份')
          return false
        }else if(!this.post.city){
          this.$toast('请输入开户城市')
          return false
        }else{
          this.$toast('添加成功')
          this.$router.push({name:'Banklist'})
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
        color: #516d8e;
        &.isP{
          color: #ebebeb!important;
        }
        img{
          width: 6px;
          height: 11px;
        }
      }
      input{
        width: calc(~'100% - 80px');
        height: 100%;
        border: none;
        background: none;
      }
      select{
        position: absolute;
        opacity: 0;
        right: 0;
        top:calc(~'50% - 22px');
        width: calc(~'100% - 80px');
        height: 100%;
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
