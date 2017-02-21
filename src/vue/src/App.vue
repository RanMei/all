<style lang="less" scoped>
  
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
      }
    },
    mounted: function(){
      this.$store.commit('FETCH_ITEMS')
    }
  }
</script>