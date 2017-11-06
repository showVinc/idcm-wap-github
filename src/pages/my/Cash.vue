<template>
  <div class="homeWrap">
    <public-top :num="4"></public-top>
    <ul>
      <li>
        充值
      </li>
      <li v-for="item,index in recharge" @click="security(item,index)">
        <div class="rechargeWarp">
          <img :src="item.img">
          <div>{{item.name}}</div>
        </div>
        <img class="arrow" src="../../assets/images/home/arrow.png">
      </li>
    </ul>
    <ul>
      <li>
        提现
      </li>
      <li v-for="item,index in cash" @click="cashClick(item,index)">
        <div class="rechargeWarp">
          <img :src="item.img">
          <div>{{item.name}}</div>
        </div>
        <img class="arrow" src="../../assets/images/home/arrow.png">
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        recharge:[
          {
            name:'人民币充值',
            img:require('../../assets/images/home/detail/rmb.png')
          },
          {
            name:'美元充值',
            img:require('../../assets/images/home/detail/dollar.png')
          },
          {
            name:'比特币充值',
            img:require('../../assets/images/home/detail/btc.png')
          },
        ],
        cash:[
          {
            name:'人民币提现',
            img:require('../../assets/images/home/detail/rmb.png')
          },
          {
            name:'美元提现',
            img:require('../../assets/images/home/detail/dollar.png')

          },
          {
            name:'比特币提现',
            img:require('../../assets/images/home/detail/btc.png')
          },
        ]
      }
    },
    methods:{
      cashClick(item,index){
        let res = {key:index}
        switch (index){
          case 0:
            this.$router.push({name:'Rmbshow',params:res})
            break;
          case 1:
            this.$router.push({name:'Dollarshow',params:res})
            break;
          case 2:
            this.$router.push({name:'Btcshow',params:res})
            break;
        }
      },
      security(item,index){
        let res = {key:index}
        this.$router.push({name:'Security',params:res})
      }
    }
  }
</script>
<style lang="less" scoped>
  .homeWrap{
    ul{
      li{
        padding-left:15px;
        display: flex;
        align-items: center;
        background: #0e3048;
        height: 44px;
        box-sizing: border-box;
        color: #ebebeb;
        font-size: 14px;
        position: relative;
        .rechargeWarp{
          display: flex;
          align-items: center;
          width: 100%;
          height: 44px;
          div{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            position: relative;
            &:before{
              content: '';
              width: 100%;
              height: 1px;
              background: #233b56;
              position: absolute;
              left: 0;
              bottom: 0;
            }
          }
          img{
            width: 18px;
            height: 18px;
            border-radius: 50%;
            margin-right: 15px;
          }
        }
        &:first-child{
          background: #0a2638;
          font-size: 20px;
          color: #ebebeb;
          padding: 15px;
          div{
            border: none;
          }
        }
        &:last-child{
          div{
            border: none;
          }
        }
        .arrow{
          width: 6px;
          height: 11px;
          position: absolute;
          right: 15px;
          top:calc(~'50% - 5px');
        }
      }
    }
  }
</style>
<style lang="less">

</style>
