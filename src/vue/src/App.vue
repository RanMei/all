<style lang="less">
  body {
    background: #e3e3e6;
  }
  #root {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
</style>

<template>
  <div id="root">
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
  export default {
    computed: {
    },
    watch: {
    },
    mounted: function(){
      this.$store.dispatch('init')
    }
  }
</script>