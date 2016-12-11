<style lang="less" scoped>
	.NavbarRed {
		position: relative;
		width: 100%; min-width: 1000px; height: 50px;
		background: #c0392b;
		.inner {
			position: relative; 
			width: 100%; height: 100%;
			background: #c0392b;
			&.fixed {
				position: fixed; left: 0; top: 0;
				width: 100%; height: 50px;
			}
			.container__ {
				width: 1000px;
				margin: auto;
				background: #c0392b;
				.tabs {
					overflow: hidden;
				}
				.tabs a {
					display: block;
					float: left;
					width: 83px; height: 50px;
					line-height: 50px; text-align: center; 
					font-size: 15px; color: white;
					cursor: pointer;
				}
				.tabs a:hover {
					background: #e67e22;
				}
			}
		}
	}
</style>

<template>
	<div class="NavbarRed" ref="bar">
		<div class="inner"
		:class=" fixed?'fixed':'' ">
			<div class="container__">
				<ul class="tabs"
				@mouseleave="mouseleave">
					<a v-for="(a,i) in items"
					@mouseenter="mouseenter($event,i)"
					:href="a.href">{{a.name}}</a>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
			items: {
				default: function(){
					return [{
						name: 'Home',
						href: './index.html'
					},{
						name: 'Admin',
						href: '#/admin'
					},{
						name: 'Test',
						href: '#/test'
					}]
				}
			}
		},
		data: function(){
			return {
				fixed: false,
				current: 0
			}
		},
		mounted: function(){
			window.addEventListener('scroll',()=>{
				var a = document.body.scrollTop;
				var b = this.$refs.bar.scrollHeight;
				if( a>=b ){
					this.fixed = true;
				}else{
					this.fixed = false;
				}
			})
		},
		methods: {
			mouseenter: function(e,i){
				this.current = i;
			},
			mouseleave: function(){
				this.current = 0;
			},
			haha: function(e){
				console.log(e)
			}
		}
	}
</script>