<template>
<div class="ITEMS">
	<ul class="row">
		<li>id</li>
		<li>name</li>
		<li>price</li>
	</ul>
	<ul class="row" v-for="a in items">
		<li>{{a.id}}</li>
		<li>{{a.name}}</li>
		<li>{{a.price}}</li>
		<button class="edit">edit</button>
	</ul>
</div>
</template>

<style lang="less" scoped>
	ul {
		overflow: hidden;
		li {
			float: left;
			width: 20%; height: 30px;
			line-height: 30px;
			//text-align: center;
			list-style: none;
		}
		button {
			float: left;
		}
	}
	.row {
		&:hover {
			background: lightblue;
		}
	}
</style>

<script type="text/javascript">
	export default {
		props: ['items'],
		mounted: function(){
			console.log(this.items)
		},
		methods: function(){
			
		}
	}
</script>