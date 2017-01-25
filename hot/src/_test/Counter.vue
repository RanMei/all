<template>
  <div id="app">
  	couefeedfa  
  	{{count}}
  </div>
</template>

<script>

export default {
  computed: {
  	count: function(){
  		return this.$store.state.count;
  	}
  }
}
</script>
