<template>
  <div class="gywm">
    <public-top :num="4"></public-top>
    <div class="gywmMain">
      <img src="../../assets/images/home/detail/add.png">
      <div class="gywmWrap">
        <div @click="tel">客服 <p>123456 <img src="../../assets/images/home/arrow.png"></p></div>
        <div @click="detailClick">关于我们 <p><img src="../../assets/images/home/arrow.png"></p></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      tel(){
        window.location.href = "tel:123456";
      },
      detailClick(){
        this.$router.push({name:'Gywmdetail'})
      }
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  .gywm{
    .gywmMain{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width: 138px;
        height: 65px;
        margin: 50px auto;
      }
      .gywmWrap{
        width: 100%;
        padding-left: 15px;
        background: #0e3048;
        box-sizing: border-box;
        color: #ebebeb;
        font-size: 14px;
        div{
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 44px;
          padding-right: 15px;
          box-sizing: border-box;
          &:first-child{
            border-bottom: 1px solid #233b56;
          }
          P{
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #516d8e;
            img{
              width: 6px;
              height: 11px;
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
</style>
