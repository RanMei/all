<template>
  <div id="root">
    <back-to-top></back-to-top>
    <my-header :dir="dir"></my-header>
    
    <signin></signin>
    
    <my-footer></my-footer>
  </div>
</template>

<script type="text/javascript">
  export default {
    components: {
      MyHeader: require('../components/MyHeader.vue'),
      MyFooter: require('../components/MyFooter.vue'),
      BackToTop: require('../components/BackToTop.vue'),
      Signin: require('../components/Signin.vue')
    },
    computed: {
      dir: function(){
        return this.$store.state.dir
      },
      items: function(){
        return this.$store.state.items
      }
    }
  }
</script>