<template>
  <div class="messagess">
    <public-top :num="3"></public-top>
    <dl v-for="i in data">
      <dd>
        <h4>{{i.content}}</h4>
        <p>
          <span>{{i.time}}</span>
          <span>{{i.title}}</span>
          <span>{{i.yulan}}</span>
        </p>
      </dd>
      <dt>
        <img src="../../assets/images/home/price.png" alt="">
      </dt>
    </dl>
    <div class="content">
      <p>
        腾讯科技讯 11月1日消息，全球最大的期货交易所——芝加哥商业交易所（CME）周二宣布，该机构计划在今年第四季度推出比特币期货，目前该计划正在接受监管机构的审查。受此影响，比特币周二价格一直保持涨势。据比特币新闻资源网CoinDesk的消息，在美国东部时间周二上午升至创纪录的6330美元，而之后又很快冲破6400美元。
      </p>
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        data:[
          {
            content:"比特币涨势持续 冲破6400美元再创新高纪录",
            time:"2017.11.01",
            title:"腾讯年科技",
            yulan:"20预览"
          },
        ]
      }
    },
    methods:{

    }
  }
</script>
<style lang="less" scoped type="text/less">
  .messagess{
    .banner{
      position: relative;
      img{
        width: 100%;
        height: auto;
      }
      span{
        position:absolute;
        color: #ebebeb;
        left: 15px;
        bottom: 15px;
        font-size: 14px;
      }
    }
      dl{
        padding-left: 12px;
        padding-top: 15px;
        padding-bottom: 24px;
        dt{
          padding-right: 15px;
          img{
            width: 250px;
            height: 140px;
          }
        }
        dd{
          padding-right: 10px;
          padding-left: 3px;
          width: 240px;
          h4{
            color: #ebebeb;
            font-size: 16px;
          }
          p{
            line-height: 50px;
            color: #516d8e;
            font-size: 12px;
            .spanss{
              float: right;
            }
            span{
              padding-right:5px;
            }
          }
        }
      }
    .content{
      padding-left: 10px;
      padding-right: 10px;
      color: #ebebeb;
      font-size: 14px;
      line-height: 22px;
    }
  }
</style>
<style lang="less">

</style>
