<style lang="less" scoped>
  .Example {
    .fixedbar {
      position: fixed; left: 0; top: 0;
      width: 100%; height: 0.86rem;
      background: rgba(255,255,255,0.6);
      font-size: 0.34rem;
      line-height: 0.86rem;
      overflow: hidden;
      i {
        position: absolute; left: 0.4rem; top: 0;
        display: block;
        font-size: 0.38rem;
        line-height: 0.86rem;
      }
      .title004 {
        display: table;
        margin: auto; height: 0.86rem;
        font-size: 0.28rem; line-height: 0.86rem;
      }
    }
    .container118 {
      width: 100%; height: 100vh;
    }
  }
</style>

<template>
  <div class="Example">
    <div class="fixedbar">
      <i class="fa fa-angle-left"
      @click="back"></i>
      <div class="title004">
        {{example.name}}
      </div>
    </div>
    <div class="container118" ref="container">
      <iframe ref="iframe" :src=" example.url " width="100%" height="100%" seamless frameborder="0"></iframe>
    </div>
  </div>
</template>

<script type="text/javascript">

  export default {
    components: {

    },
    data: function(){
      return {

      }
    },
    computed: {
      example(){
        return this.$store.state.example;
      }
    },
    mounted: function(){
      // console.dir( this.$refs.iframe );
    },
    methods: {
      back(){
        history.go(-1);
      }
    }
  }
</script>