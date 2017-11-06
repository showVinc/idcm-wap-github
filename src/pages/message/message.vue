<template>
  <div class="messagess">
    <public-top :num="3"></public-top>
    <div class="banner">
      <img src="../../assets/images/home/homeK.jpg" alt="">
      <!--<span>特朗普做了件大事，可能深远影响下次金融危机应对</span>-->
    </div>
    <div class="connent">
      <dl v-for="i in data" @click="$router.push('/message/detail')">
        <dd>
          <h4>{{i.content}}</h4>
          <p>
            <span>{{i.time}}</span>
            <span>{{i.title}}</span>
            <span class="spanss">{{i.yulan}}</span>
          </p>
        </dd>
        <dt>
          <img src="../../assets/images/home/price.png" alt="">
        </dt>
      </dl>
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
          {
            content:"比特币涨势持续 冲破6400美元再创新高纪录",
            time:"2017.11.01",
            title:"腾讯年科技",
            yulan:"20预览"
          },
          {
            content:"比特币涨势持续 冲破6400美元再创新高纪录",
            time:"2017.11.01",
            title:"腾讯年科技",
            yulan:"20预览"
          }
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
    .connent{
      dl{
        padding-left: 12px;
        padding-top: 15px;
        display: flex;
        border-bottom: 1px solid #233b56;
        dt{
          float: right;
          flex: 1;
          padding-right: 15px;
          img{
            width: 100%;
            height: auto;
          }
        }
        dd{
          padding-right: 10px;
          flex: 2;
          padding-left: 3px;
          width: 240px;
          float: left;
          h4{
            color: #ebebeb;
            font-size: 14px;
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
    }
  }
</style>
<style lang="less">

</style>
