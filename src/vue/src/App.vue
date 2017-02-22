<style lang="less" scoped>
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
      current(){
        return this.$store.state.current;
      },
      items(){
        return this.$store.state.items;
      },
      example(){
        return this.$store.state.example;
      }
    },
    watch: {
      current(nv){
        if( nv>=0 ){
          if( this.items[nv].url ){
            location.href = '#/item/others';
          }else{
            location.href = '#/item/'+this.items[nv].name.toLowerCase();
          }
        }else{
          location.href = '#/home';
        }
      },
      example(nv){
        if( nv!=='' ){
          location.href = '#/example';
        };
      }
    },
    mounted: function(){
      this.$store.commit('FETCH_ITEMS')
    }
  }
</script>