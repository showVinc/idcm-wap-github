<template>
  <div class="public_top">
    <ul>
      <li :class="{'topActive':num==1}" @click="$router.push('/')">
        <span></span>
      </li>
      <li :class="{'topActive':num==2}">
        <span></span>
      </li>
      <li :class="{'topActive':num==3}">
        <span></span>
      </li>
      <li :class="{'topActive':num==4}" @click="$router.push('/my')">
        <span></span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props:{
      num:Number
    },
    data(){
      return{

      }
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  .public_top{
    position: fixed;
    width: 100%;
    top:0;
    left: 0;
    z-index: 100;
    ul{
      height: 50px;
      display: flex;
      background: #071a27;
      li{
        flex:1;
        display: flex;
        align-items: center;
        justify-content: center;
        &:nth-child(1){
          span{
            background-image: url('../assets/images/toolbar/home.png');
            background-repeat:no-repeat ;
            display: block;
            background-size: 25px;
            width: 25px;
            height: 25px;
          }
          &.topActive{
            span{
              background-image: url('../assets/images/toolbar/homeActive.png')!important;
            }
          }
        }
        &:nth-child(2){
          span{
            background-image: url('../assets/images/toolbar/market.png');
            background-repeat:no-repeat ;
            display: block;
            background-size: 25px;
            width: 25px;
            height: 25px;
          }
          &.topActive{
            span{
              background-image: url('../assets/images/toolbar/marketActive.png')!important;
            }
          }
        }
        &:nth-child(3){
          span{
            background-image: url('../assets/images/toolbar/news.png');
            background-repeat:no-repeat ;
            display: block;
            background-size: 25px;
            width: 25px;
            height: 25px;
          }
          &.topActive{
            span{
              background-image: url('../assets/images/toolbar/newsActive.png')!important;
            }
          }
        }
        &:nth-child(4){
          span{
            background-image: url('../assets/images/toolbar/my.png');
            background-repeat:no-repeat ;
            display: block;
            background-size: 25px;
            width: 25px;
            height: 25px;
          }
          &.topActive{
            span{
              background-image: url('../assets/images/toolbar/myActive.png')!important;
            }
          }
        }
      }
    }
  }
</style>
