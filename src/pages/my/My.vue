<template>
  <div class="userWrap">
    <public-top :num="4"></public-top>
    <div class="user">
      <div class="userWrap">
        <img src="../../assets/images/home/detail/user.png">
        <div>
          Elvis
          <span>UID:(HY553202)</span>
        </div>
      </div>
      <img src="../../assets/images/home/arrow.png">
    </div>
    <div class="userPrice">
      <div>
        人民币账户
        <span>$888888.00</span>
      </div>
      <div>
        美元账户
        <span>$888888.00</span>
      </div>
    </div>
    <ul class="userList">
      <li v-for="item in list" @click="detailClick(item)">
        <img :src="item.img">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list:[
          {
            name:'充值提现',
            img:require('../../assets/images/home/detail/edit.png'),
            val:'cz'
          },
          {
            name:'账户总览',
            img:require('../../assets/images/home/detail/edit.png'),
            val:'zh'
          },
          {
            name:'安全中心',
            img:require('../../assets/images/home/detail/edit.png'),
            val:'aq'
          },
          {
            name:'账户管理',
            img:require('../../assets/images/home/detail/edit.png'),
            val:'zhgl'
          },
          {
            name:'我的公告',
            img:require('../../assets/images/home/detail/edit.png'),
            val:'gg'
          },
          {
            name:'设置中心',
            img:require('../../assets/images/home/detail/edit.png'),
            val:'sz'
          },
          {
            name:'关于我们',
            img:require('../../assets/images/home/detail/edit.png'),
            val:'gywm'
          }
        ]
      }
    },
    methods:{
      detailClick(item){
        switch (item.val){
          case 'cz':
            this.$router.push('/my/cash')
            break;
          case 'gywm':
            this.$router.push('/my/gywm')
            break;
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .user{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 15px;
    img{
      width: 6px;
      height: 11px;
    }
    .userWrap{
      display: flex;
      img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: block;
        margin-right: 15px;
      }
      div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 16px;
        color: #ebebeb;
        span{
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
  .userPrice{
    display: flex;
    background: #0e3048;
    height: 82px;
    width: 100%;
    div{
      flex:1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #999;
      font-size: 12px;
      position: relative;
      box-sizing: border-box;
      &:first-child{
        &:before{
          content: '';
          width: 1px;
          height: 50px;
          position: absolute;
          right: 0;
          top: calc(~'50% - 25px');
          background: #26405e;
        }
      }
      span{
        font-size: 16px;
        color: #ebebeb;
        margin-top: 10px;
      }
    }
  }
  .userList{
    background: #0e3048;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    li{
      width: 33.33%;
      padding: 30px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: #4088bb;
      border-right: 1px solid #26405e;
      border-bottom: 1px solid #26405e;
      &:last-child{
        border-bottom: none;
      }
      img{
        height: 25px;
        display: block;
        margin-bottom: 5px;
      }
    }
  }
</style>
<style lang="less">

</style>
