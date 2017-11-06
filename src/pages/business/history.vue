<template>
  <div class="history">
    <public-top :num="2"></public-top>
    <div class="title">
      {{msg}}
    </div>
    <div class="content">
      <ul>
        <li>
          <span>买入、卖出</span>
          <span>当前委托</span>
          <span>历史记录</span>
        </li>
        <li v-for="i in data">
          <span>{{i.time}}</span>
          <span :data="i.number" class="sp">{{i.type}}</span>
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
        msg:'交易中心',
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
            time:'10:31 2019.12.01',
            type:'买入',
            num:'8000.00 1.000000'
          },
          {
            number:1,
            time:'10:31 2019.12.01',
            type:'买入',
            num:'8000.00 1.000000'
          }
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
  .content{
    ul li{
      display: flex;
      height:40px;
      border-bottom:1px dashed #3e5876;
      &:first-child{
        border-bottom:1px solid #3e5876;
        span{
          color: #ebebeb;
          line-height: 46px!important;
        }
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
        padding:2px 12px;
        &:nth-child(2){
          line-height: 40px;
        }
      }
    }
  }
}
.topActives{
  background: #0e3048;
}
</style>
