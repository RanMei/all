<style lang="less" scoped>
	.Navbar {
		position: relative;
		box-sizing: border-box;
		height: 100px;
		ul {
			position: fixed; left: 0; bottom: 0;
			width: 100%; height: 100px;
			border-top: 1px solid lightgrey;
			overflow: hidden;
			li {
				float: left;
				width: 25%;
			}
		}
	}
</style>

<template>
	<div class="Navbar">
		<ul>
			<li>
				Home
			</li>
			<li>
				List
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		
	}
</script>