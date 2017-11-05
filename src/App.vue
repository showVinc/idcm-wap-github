<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>
<style>
  #app{
    min-height: 100vh;
    overflow-x: hidden;
    background: #0a2638;
    margin-top: 50px;
  }
</style>
