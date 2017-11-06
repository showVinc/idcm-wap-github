<template>
  <div id="app" :class="has_top ? '' : 'no-top'">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return{
        has_top: false  //  是否不需要公共头部
      }
    },
    mounted () {
      this.setTop()
    },
    watch: {
      '$route' () {
        this.setTop()
      }
    },
    methods: {
      setTop () {
        //  white : 不需要公共头部的页面
        let white = ['/login', '/register', '/findpass', '/emailpassstep1', '/emailpassstep2', '/mobilepassstep1', '/mobilepassstep2', '/result']

        this.has_top = true
        let url = this.$router.currentRoute.path
        for(let key in white) {
          if(white[key] === url) {
            this.has_top = false
          }
        }
      }
    }
  }
</script>
<style lang="less">
  #app{
    min-height: 100vh;
    overflow-x: hidden;
    background: #0a2638;
    margin-top: 50px;

    &.no-top {
      margin-top: 0;
    }
  }
</style>
