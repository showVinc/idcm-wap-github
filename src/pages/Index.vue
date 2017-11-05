<template>
  <div class="homeWrap">
    <public-top :num="1"></public-top>
    <div class="btc">
      <div class="btcTit">
        BTC
        <span>$7000.00</span>
      </div>
      <div class="btcTime">
        <ul>
          <li>30m</li>
          <li>1h</li>
          <li>2h</li>
          <li>3h</li>
          <li>4h</li>
          <li>8h</li>
          <li>24h</li>
        </ul>
        <div class="homeImg">
          <img src="../assets/images/home/watch.png">
        </div>
      </div>
    </div>
    <ul class="btcList">
      <li v-for="item in list">
        <div class="listImg">
          <img src="../assets/images/home/search.png">
        </div>
        <div class="listMain">
          <div class="listTit">
            BTC/USD: <span :class="{'isRose':item.isrose==2}">{{item.price}}</span>
          </div>
          <div class="price">最高：{{item.price_h}} <p>最低：{{item.price_l}}</p></div>
          <div class="price">数量：{{item.number}} <p>涨幅：<span :class="{'isRose':item.isrose==2}">{{item.rose}}</span></p></div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: [
          {
            price: '$6805.00',
            price_h: '$6805.00',
            price_l: '$6802.00',
            number: '1231232',
            rose: '+5.86%',
            isrose: 1
          },
          {
            price: '$6805.00',
            price_h: '$6805.00',
            price_l: '$6802.00',
            number: '1231232',
            rose: '+5.86%',
            isrose: 2
          }
        ]
      }
    }
  }
</script>
<style lang="less" scoped>

</style>
<style lang="less">
  .btc {
    padding: 15px 25px;
    box-sizing: border-box;
    background: #0e3048;
    margin: 10px 0;
    .btcTit {
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      color: #fff;
      span {
        font-size: 14px;
        color: #7aed5a;
      }
    }
    .btcTime {
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        color: #516d8e;
        li {
          &:first-child {
            color: #5ba6fe;
          }
        }
      }
      .homeImg {
        box-sizing: border-box;
        img {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }
      }
    }
  }

  .btcList {
    li {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 20px 25px;
      margin-bottom: 10px;
      background: #0e3048;
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
        }
      }
    }
  }
</style>
