<style lang="less" scoped>
	.Navbar {
		position: relative;
		box-sizing: border-box;
		height: 70px;
		ul {
			position: fixed; left: 0; bottom: 0;
			width: 100%; height: 70px;
			border-top: 1px solid lightgrey;
			background: white;
			overflow: hidden;
			a {
				display: block;
				float: left;
				width: 25%;
				font-size: 20px; text-align: center; line-height: 70px;
				text-decoration: none; color: red;
			}
		}
	}
</style>

<template>
	<div class="Navbar">
		<ul>
			<a href="#/home">Home</a>
			<a href="#/list">List</a>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		
	}
</script>