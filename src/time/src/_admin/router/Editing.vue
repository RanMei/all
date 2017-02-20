<style lang="less" scoped>
  .Editing {
    .row__ {
      border-bottom: 1px solid lightgrey;
      overflow: hidden;
      .key {
        float: left;
        width: 200px;
        padding: 8px 0;
      }
      .val {
        float: left;
        padding: 8px 0;
      }
    }
  }
</style>

<template>
  <div class="Editing">
    <div class="row__"
    v-for="(val,key) in item">
      <div class="key">
        {{key}}
      </div>
      <div class="val">
        <input />
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data: function(){
      return {
        item: JSON.parse(JSON.stringify(this.$store.state.item))
      }
    },
    // computed: {
    //   item(){
    //     return this.$store.state.item;
    //   }
    // },
    mounted: function(){
      console.log(this.item)
    }
  }
</script>