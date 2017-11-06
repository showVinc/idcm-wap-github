<template>
  <div class="cashWrap">
    <public-top :num="4"></public-top>
    <div class="selVal">
      <div class="down" @click="isShow = !isShow">
        {{value}}<img src="../../assets/images/home/detail/down.png">
      </div>
    </div>
    <div class="btcNav">
      <p @click="navNum = 1" :class="{'navActive':navNum==1}">
        全部记录
      </p>
      <p @click="navNum = 2" :class="{'navActive':navNum==2}">
        充值记录
      </p>
      <p @click="navNum = 3" :class="{'navActive':navNum==3}">
        提现记录
      </p>
    </div>
    <ul v-if="navNum==1">
      <li v-for="item in list1">
        <div>
          {{item.title}}
          <span>
            {{item.create_time}}
          </span>
        </div>
        {{item.price}}
      </li>
    </ul>
    <ul  v-if="navNum==2">
      <li v-for="item in list">
        <div>
          {{item.title}}
          <span>
            {{item.create_time}}
          </span>
        </div>
        {{item.price}}
      </li>
    </ul>
    <ul  v-if="navNum==3">
      <li v-for="item in list2">
        <div>
          {{item.title}}
          <span>
            {{item.create_time}}
          </span>
        </div>
        {{item.price}}
      </li>
    </ul>
    <mt-popup v-model="isShow" position="top" class="mint-popup-2 upPop" :modal="false">
      <p @click="popClick(1)">比特币充值 <img v-if="value=='比特币充值'" src="../../assets/images/home/success.png"></p>
      <p @click="popClick(2)">比特币提现 <img v-if="value=='比特币提现'" src="../../assets/images/home/success.png"></p>
      <p @click="popClick(3)">人民币充值 <img v-if="value=='人民币充值'" src="../../assets/images/home/success.png"></p>
      <p @click="popClick(4)">人民币提现 <img v-if="value=='人民币提现'" src="../../assets/images/home/success.png"></p>
      <p @click="popClick(5)">充值提现记录<img v-if="value=='比特币记录'" src="../../assets/images/home/success.png"></p>
    </mt-popup>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isShow: false,
        navNum:1,
        value: '比特币记录',
        list: [
          {
            title: '购买比特币',
            price: '+1000',
            create_time: '2014.11.12 10:30'
          },
          {
            title: '购买比特币',
            price: '+1000',
            create_time: '2014.11.12 10:30'
          }
        ],
        list1: [
          {
            title: '购买比特币111',
            price: '+1000',
            create_time: '2014.11.12 10:30'
          },
          {
            title: '购买比特币',
            price: '+1000',
            create_time: '2014.11.12 10:30'
          }
        ],
        list2: [
          {
            title: '购买比特币123',
            price: '+1000',
            create_time: '2014.11.12 10:30'
          },
          {
            title: '购买比特币',
            price: '+1000',
            create_time: '2014.11.12 10:30'
          }
        ]
      }
    },
    methods: {
      popClick(index) {
        switch (index) {
          case 1:
            this.value = '比特币充值'
            this.$router.push({name: 'Security', params: {key: 2}})
            break;
          case 2:
            this.$router.push({name: 'Btcshow'})
            break;
          case 3:
            this.$router.push({name: 'Security', params: {key: 0}})
            break;
          case 4:
            this.$router.push({name: 'Rmbshow'})
            break;
          case 5:
            this.$router.push({name: 'Btcrecord'})
            break;
        }
        this.isShow = false
      }
    },
  }
</script>
<style lang="less" type="text/less" scoped>
  .selVal {
    height: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    font-size: 20px;
    color: #ebebeb;
    .down {
      display: flex;
      align-items: center;
      img {
        margin-left: 10px;
        width: 9px;
        height: 5px;
      }
    }
  }

  .cashWrap {
    ul {
      background: #0e3048;
      padding-left: 15px;
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #233b56;
        padding-right: 15px;
        color: #7aed5a;
        height: 60px;
        font-size: 16px;
        &:last-child {
          border: none;
        }
        div {
          display: flex;
          color: #ebebeb;
          flex-direction: column;
          font-size: 14px;
          span {
            color: #516d8e;
            font-size: 12px;
            margin-top: 5px;
          }
        }
      }
    }
    .btcNav{
      display: flex;
      color: #ebebeb;
      p{
        flex:1;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 44px;
        &.navActive{
          background: #0e3048;
        }
      }
    }
  }
</style>
<style lang="less" type="text/less">
  .upPop {
    width: 100%;
    background: #0d2638;
    font-size: 20px;
    color: #ebebeb;
    top: 100px;
    height: calc(~ '100vh - 100px');
    padding-left: 15px;
    box-sizing: border-box;

    p {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 15px 15px 0;
      border-top: 1px solid #233b56;

      img {
        width: 16px;
        height: 11.5px;
      }

    }
  }
</style>
