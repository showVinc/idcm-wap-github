<template>
  <div class="history">
    <public-top :num="2"></public-top>
    <div class="title">
      {{msg}}
    </div>
    <!--<div class="con">-->

    <!--</div>-->
    <div class="btcList">
      <div v-for="item in list" class="ii">
        <div class="listImg">
          <img src="../../assets/images/home/BTC.png">
        </div>
        <div class="listMain">
          <div class="listTit">
            BTC/USD:
            <span :class="{'isRose':item.isrose==2}">
                  {{item.price}}
                  <img src="../../assets/images/home/arrowUp.png" v-if="item.isrose==1">
                  <img src="../../assets/images/home/arrowDown.png" v-if="item.isrose==2">
                  </span>
          </div>
          <div class="price">最高：{{item.price_h}} <p>最低：{{item.price_l}}</p></div>
          <div class="price">数量：{{item.number}} <p>涨幅：<span :class="{'isRose':item.isrose==2}">{{item.rose}}</span></p></div>
        </div>
      </div>
    </div>
    <div class="titles">
       {{titles}}
     </div>
    <div class="content">


      <ul>
        <li>
          <span>买入量</span>
          <span>买入价($)</span>
          <span>卖出量</span>
          <span>卖出价($)</span>
        </li>
        <li v-for="i in data">
          <span>{{i.price1}}</span>
          <span :data="i.number" class="sp">{{i.price2}}</span>
          <span>{{i.price3}}</span>
          <span>{{i.price4}}</span>
        </li>
      </ul>


    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        navNum:1,
        msg:'交易行情',
        titles:'买卖盘',
        data:[
          {
            price1:4.789,
            price2:'7580.00',
            price3:'4.789',
            price4:'7580.00'
          },
          {
            price1:4.789,
            price2:'7580.00',
            price3:'4.789',
            price4:'7580.00'
          },
           {
            price1:4.789,
            price2:'7580.00',
            price3:'4.789',
            price4:'7580.00'
          },
           {
            price1:4.789,
            price2:'7580.00',
            price3:'4.789',
            price4:'7580.00'
          },
           {
            price1:4.789,
            price2:'7580.00',
            price3:'4.789',
            price4:'7580.00'
          },
           {
            price1:4.789,
            price2:'7580.00',
            price3:'4.789',
            price4:'7580.00'
          },
           {
            price1:4.789,
            price2:'7580.00',
            price3:'4.789',
            price4:'7580.00'
          },
        ],
        list: [
          {
            price: '$6805.00',
            price_h: '$6805.00',
            price_l: '$6802.00',
            number: '1231232',
            rose: '+5.86%',
            isrose: 1
          },

        ]
      }
    },
      methods:{

      },
      mounted(){
        var sp=document.getElementsByClassName('sp')
          for(var i=0;i<sp.length;i++){
            if(sp[i].innerHTML=="买入"){
              sp[i].style.color="#7aed5a"
            }else if(sp[i].innerHTML=="卖出"){
              sp[i].style.color="#d55d3d"
            }
          }
        }
    }

</script>
<style lang="less" scoped type="text/less">

.history{
  .title{
    font-size: 20px;
    color: #ebebeb;
    line-height: 48px;
    padding-left: 15px;
  }
  .titles{
    line-height: 44px;
    padding-left: 15px;
    color: #ebebeb;
    font-size: 14px;
  }
  .con{
    height: 90px;
    background: #0e3048;
    padding-left: 15px;
  }
  .content{
    ul{
      background: #0e3048;
    }
    ul li{
      display: flex;
      height:40px;

      /*border-bottom:1px dashed #3e5876;*/
      &:first-child{
        border-bottom:1px solid #3e5876;
        line-height: 40px;
        span{
          color: #b3b3b3!important;
        }
      }
      span{
        flex: 1;
        text-align: center;
        color: #b3b3b3;
        line-height: 40px;
        font-size: 12px;
        color: #50a151;
        &:nth-child(3),&:nth-child(4){
          color:#d65b37;
        };
      }
    }
  }
}

.btcList {
  .ii {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 20px 25px;
    /*margin-bottom: 10px;*/
    background: #0e3048;
    padding-left: 15px;
    .listMain{
      width: calc(~'100% - 80px');
      box-sizing: border-box;
      .listTit {
        font-size: 14px;
        color: #ebebeb;
        span {
          color: #7aed5a;

          &.isRose{
            color: #ff6939;
          }
          img{
            width: 10px;
            height: 13px;
          }
        }
      }
      .price {
        font-size: 12px;
        color: #999;
        display: flex;
        justify-content: space-between;
        margin: 5px 0;
        span{
          color: #7aed5a;
          &.isRose{
            color: #ff6939;
          }
        }
      }
    }
    .listImg {
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        display: block;
        width: 30px;
        height: 44px;
        padding-right: 25px;
      }
    }
  }
}
</style>
