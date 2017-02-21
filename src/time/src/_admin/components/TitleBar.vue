<style lang="less" scoped>
  .TitleBar {
    padding: 20px;
    font-size: 24px;
    color: #58666e;
    background-color: #f6f8f8;
    border-bottom: 1px solid #dee5e7;
  }
</style>

<template>
  <div class="TitleBar">
    {{title}}
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      title: {}
    }
  }
</script>