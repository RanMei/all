<style>
	.red {
		font-size: 0.5rem;
		color: #f00;
	}
</style>

<template>
	<h1 class="red">{{msg}}</h1>
</template>

<script>
	export default {
		data () {
			return {
				msg: 'Hello world!'
			}
		}
	}
</script>