<template>
  <div class="wrap">
    <public-top :num="4"></public-top>
    <div class="noticeTit">
      我的公告
    </div>
    <ul :class="{'no-data':messageData.list.length<=0}">
      <li v-for="item,index in messageData.list">
        <div @click="popClick(item,index)" :class="{'isNew':item.is_read==0}">
          {{item.title}}
          <span>
           {{item.send_time}}
         </span>
          <img src="../../assets/images/home/detail/down.png" :class="{'imgUp':popNum==index}">
        </div>
        <p v-show="popNum==index" v-html="item.content"></p>
      </li>
    </ul>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        popNum: null,
        uid: localStorage.getItem('userId'),
        messageData: {
          list: [
            {
              title: '系统公告',
              send_time: '2017-02-13',
              content: '12312312312312',
              is_read:0
            },
            {
              title: '系统公告',
              send_time: '2017-02-13',
              content: '12312312312312',
              is_read:0
            }
          ]
        }
      }
    },
    methods: {
      popClick(item, index) {
        let self = this
        if (item.is_read == 0) {
          let data = {
            id: item.id
          }
          self.$http.put('/user/notice', data).then(res => {
            if (res.data.errcode == '0') {
              item.is_read = 1
              item.kind = 1
            }
          }).catch(err => {
            console.log(err)
          })
        }
        if (self.popNum == index) {
          self.popNum = null
          return false
        }
        self.popNum = index
      },

    },
    created() {
      if (this.$route.params.kind == 1) {
        document.title = '系统消息'
      } else {
        document.title = '购买消息'
      }
    }
  }
</script>
<style lang="less" scoped type="text/less">
  .wrap {
    width: 100%;
    .noticeTit {
      font-size: 20px;
      height: 50px;
      display: flex;
      align-items: center;
      padding-left: 15px;
      color: #ebebeb;
    }
    ul {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      box-sizing: border-box;
      width: 100%;
      li {
        width: 100%;
        position: relative;
        box-sizing: border-box;
        font-size: 14px;
        background: #0e3048;
        color: #ebebeb;
        margin-bottom: 10px;
        div {
          display: flex;
          flex-direction: column;
          padding: 15px 15px 15px 0;
          margin-left: 20px;
          border-bottom: 1px solid #233b56;
          position: relative;
          &.isNew {
            color: #ebebeb;
          }
          &.isNew:after {
            content: '';
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #ff6939;
            position: absolute;
            left: 60px;
            top: calc(~ '50% - 18px');
          }
          img {
            width: 12px;
            height: 7px;
            display: block;
            position: absolute;
            right: 15px;
            transition: all 0.5s;
            top: calc(~ '50% - 6px');
            &.imgUp {
              transform: rotateZ(180deg);
            }

          }
          &:last-child {
            border: none;
          }
          span {
            font-size: 12px;
            margin-top: 5px;
            color: #516d8e;
          }
        }
        p {
          padding: 15px;
          color: #ebebeb;
          font-size: 12px;
          background: #0e3048;
        }

      }
    }
  }
</style>
