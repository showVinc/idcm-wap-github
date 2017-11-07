<template>
  <div class="banklist">
    <public-top :num="4"></public-top>
    <div>
      <div class="banklistTit">
        银行卡管理
      </div>
      <ul>
        <li v-for="item,index in bankList">
          <div>
            {{item.name}}
            <span>{{item.bank_name}}</span>
          </div>
          <img src="../../assets/images/home/del.png" @click="del(item,index)">
        </li>
      </ul>
      <div class="btn" @click="$router.push({name:'Addbank'})">
        添加银行卡
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        bankList:[
          {
            name:'地址备注域名',
            bank_name:'12321312ukl12312312u812312'
          },
          {
            name:'地址备注域名',
            bank_name:'12321312ukl12312312u812312'
          }
        ]
      }
    },
    methods: {
      del(item,index){
        this.bankList.splice(index,1)
      }
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  .banklist{
    .banklistTit{
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
        padding: 15px 15px 15px 0;
        box-sizing: border-box;
        color: #ebebeb;
        font-size: 14px;
        border-bottom: 1px solid #233b56;
        &:last-child{
          border:none;
        }
        div{
          display: flex;
          flex-direction: column;
          span{
            margin-top: 5px;
            color: #516d8e;
            font-size: 12px;
          }
        }
        img{
          width: 18px;
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
  }
</style>
