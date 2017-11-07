<template>
  <div class="history">
    <public-top :num="2"></public-top>
    <div class="title">
      {{msg}}
    </div>
    <div class="content">
      <ul class="uls">
        <li>
          <span @click="navNum = 1" :class="{'navActive':navNum==1}">买入、卖出</span>
          <span @click="navNum = 2" :class="{'navActive':navNum==2}">当前委托</span>
          <span @click="navNum = 3" :class="{'navActive':navNum==3}">历史记录</span>
        </li>
      </ul>

      <div class="contents1" v-if="navNum==1">
        <div class="tit">
          {{tit}}
        </div>
        <div class="tab">
          <div class="button">
            <b class="lefts" @click="add1">+</b>
            <input type="text" placeholder="价格" class="price" v-model="price">
            <b class="rights" @click="jj1">-</b>
          </div>
          <div class="button">
            <b class="lefts" @click="add">+</b>
            <input type="text" placeholder="数量" class="price" v-model="num">
            <b class="rights" @click="jj">-</b>
          </div>
          <div class="button">
            <input type="password" placeholder="交易密码" class="price" v-model="pwd">
          </div>
          <div class="button button1">
            <span>0.00 USD</span>
          </div>
          <div class="button buttonss">
            <span  @click="subForm()">买入</span>
          </div>
          <div class="button buttonss">
            <span @click="subForm1()">卖出</span>
          </div>
        </div>

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

        <div class="banner">
          <img src="../../assets/images/home/homeK.jpg" alt="">
        </div>

        <div class="titles">
          {{titles}}
        </div>

        <ul>
          <li v-for="i in info">
            <span>{{i.num1}}</span>
            <span>{{i.num2}}</span>
            <span class="color1">{{i.hot1}}</span>
            <span class="color2">{{i.hot2}}</span>
            <span>{{i.num3}}</span>
            <span>{{i.num4}}</span>
          </li>
        </ul>
      </div>

      <ul v-if="navNum==2" class="ulss">
        <li>
          <span>时间</span>
          <span>类型</span>
          <span>委托价/成交数</span>
          <span>操作</span>
        </li>
        <li v-for="i in data">
          <span>{{i.time}}</span>
          <span :data="i.number"  :class="{'red':i.number==2}" class="spans">{{i.type}}</span>
          <span>{{i.num}}</span>
          <span class="clear" @click="remove($event)"><b>撤销</b></span>
        </li>
      </ul>

      <ul v-if="navNum==3" class="uls3 ulss">
        <li>
          <span>时间</span>
          <span>类型</span>
          <span>委托价/成交数</span>
        </li>
        <li v-for="i in data">
          <span>{{i.time}}</span>
          <span :data="i.number" class="sp spans"  :class="{'red':i.number==2}">{{i.type}}</span>
          <span>{{i.num}}</span>
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
        num:1,
        price:'10',
        msg:'交易中心',
        pwd:'',
        tit:'比特币买卖（BTC）',
        titles:'委托信息',
        data:[
          {
            number:1,
            time:'10:31 2019.12.01',
            type:'买入',
            num:'8000.00 1.000000'
          },
          {
            number:2,
            time:'10:31 2019.12.01',
            type:'卖出',
            num:'8000.00 1.000000'
          },
          {
            number:2,
            time:'10:31 2019.12.01',
            type:'卖出',
            num:'8000.00 1.000000'
          },
          {
            number:1,
            time:' 10:31 2019.12.01 ',
            type:'买入',
            num:'8000.00 1.000000'
          },
          {
            number:1,
            time:'10:31 2019.12.01',
            type:'买入',
            num:'8000.00 1.000000'
          }
        ],
        data1:[
          {
            number:1,
            time:' 10:31  2019.12.01 ',
            type:'买入',
            num:'8000.00 1.000000'
          },
          {
            number:2,
            time:' 10:31  2019.12.01 ',
            type:'卖出',
            num:'8000.00 1.000000'
          },
          {
            number:2,
            time:' 10:31 2019.12.01 ',
            type:'卖出',
            num:'8000.00 1.000000'
          },
          {
            number:1,
            time:'10:31 2019.12.01',
            type:'买入',
            num:' 8000.00 1.000000 '
          },
          {
            number:1,
            time:'10:31 2019.12.01',
            type:'买入',
            num:'8000.00 1.000000'
          }
        ],
        info:[
          {
            num1:'1.002142',
            num2:'3600.00',
            hot1:'卖5',
            hot2:'买1',
            num3:'1.002142',
            num4:'3600.00'
          },
          {
            num1:'1.002142',
            num2:'3600.00',
            hot1:'卖5',
            hot2:'买1',
            num3:'1.002142',
            num4:'3600.00'
          },
          {
            num1:'1.002142',
            num2:'3600.00',
            hot1:'卖5',
            hot2:'买1',
            num3:'1.002142',
            num4:'3600.00'
          },
          {
            num1:'1.002142',
            num2:'3600.00',
            hot1:'卖5',
            hot2:'买1',
            num3:'1.002142',
            num4:'3600.00'
          },
          {
            num1:'1.002142',
            num2:'3600.00',
            hot1:'卖5',
            hot2:'买1',
            num3:'1.002142',
            num4:'3600.00'
          }
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
        remove(e){
          e.currentTarget.parentNode.parentNode.removeChild(e.currentTarget.parentNode)
        },
        add(){
            this.num++;
        },
          jj(){
            if(this.num>1){
              this.num--;
            }
          },
        add1(){
            this.price++
        },
        jj1(){
          if(this.price>1){
              this.price--
          }
        },
        subForm () {
          let msg = ''
          if(!this.price) {
            msg = '请输入价格'
          }else if(!this.num) {
            msg = '请输入数量'
          }else if(!this.pwd) {
            msg = '请输入交易密码'
          }

          if(msg) {
            this.$toast(msg)
          }else {
            this.$toast('买入成功')
          }
        },
        subForm1 () {
          let msg = ''
          if(!this.price) {
            msg = '请输入价格'
          }else if(!this.num) {
            msg = '请输入数量'
          }else if(!this.pwd) {
            msg = '请输入交易密码'
          }

          if(msg) {
            this.$toast(msg)
          }else {
            this.$toast('卖出成功')
          }
        }
      },
      mounted(){

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
  .contents1{
    .tit{
      padding-top: 12px;
      line-height: 50px;
      padding-left: 15px;
      color: #ebebeb;
      font-size: 14px;
      background: #0e3048;
    }
    .titles{
        line-height: 44px;
        padding-left: 15px;
        color: #ebebeb;
        font-size: 14px;
      }
    .banner{
      img{
        width: 100%;
        height: auto;
      }
    }
    .tab{
      display: flex;
      flex-wrap: wrap;
      background: #0e3048;
      .button{
        position: relative;
        width: 41%;
        height: 44px;
        background: #0c2537;
        margin-bottom: 15px;
        border-radius: 5px;
        text-align: center;
        line-height: 44px;
        &:nth-child(odd){
          margin-left: 15px;
          margin-right: 25px;
        }
        &:nth-child(even){
          margin-right: 15px;
        }
        span{
          color: #516d8e;
        }
        input{
          width: 100%;
          height: 100%;
          background: none;
          border: none;
          text-align: center;
          color: #516d8e;
          box-sizing: border-box;
          padding: 0 34px;
        }
        b{
          position: absolute;
          font-size: 20px;
          color: #ebebeb;
          font-weight: normal;
        }
        .lefts{
          left: 10px;
          top: 0;
        }
        .rights{
          right: 10px;
          top: 0;
        }
      }
      .button1{
        background: none;
        text-align: left;
        padding-left: 15px;
        width: 35%;
      }
      .buttonss{
        background: #62a84e;
        span{
          color: #ebebeb;
        }
        &:last-child{
          background: #e46d48;
        }
      }

    }

      ul{
        padding-left: 15px;
        background: #0e3048;
        li{

          border-bottom: none!important;
          span{
            line-height: 40px;
            text-align: left!important;
          }
          .color1{
            color: #50a151;
            flex:.5;
          }
          .color2{
            color: #d65b37;
            flex:.5;
          }

          }
        }

  }
  .content{
    .uls{
      background: none;
      li{
        display: flex;
        span{
          width: 33%!important;
          padding: 0 15px;
        }
      }
      span{
        color: #ebebeb;
        line-height: 46px!important;
        text-align: center!important;

      }
      &.navActive{
        background: #0e3048!important;
      }

    }
    ul{
      background: #0e3048;
    }
    ul li{
      display: flex;
      height:40px;

      border-bottom:1px dashed #3e5876;
      &:first-child{
        border-bottom:1px solid #3e5876;
        line-height: 40px;
        .sp{

        }
      }
      &:last-child{
        border-bottom: none;
      }
      span{
        flex: 1;
        text-align: center;
        color: #b3b3b3;
        /*background: #0e3048;*/
        font-size: 12px;
        padding:2px 0;
        &:nth-child(2){
          line-height: 40px;
        }
      }
      .clear{
        b{
          margin-top: 3px;
          padding:7px 14px;
          background: #356092!important;
          font-weight: normal;
          display: inline-block;
          border-radius: 2px;
        }
      }
    }
    .uls3{
      li{
        span{
          padding: 2px 12px!important;
          &:last-child{
          }
          &:first-child{
          }
        }
      }

    }
  }
}

 .navActive{
  background: #0e3048;
 }

.btcList {
  margin-top: 9px;
  .ii {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 20px 25px;
    margin-bottom: 10px;
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

.ulss{
  li{
    span{
      /*display: flex;*/
      /*flex-direction: column;*/
    }
    .spans{
      color: #7aed5a!important;
    }
    .red{
      color: #ff6939!important;
    }
  }
}
</style>
