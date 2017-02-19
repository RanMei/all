<template>
	<div class="Navbar">
		<div class="centered">
			<div class="tab"
			v-for="a in tabs">
				<a class="link" :href="a.href">{{a.name}}</a>
				<ul class="subs">
					<li v-for="b in a.subs">Ned</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Navbar {
		width: 100%; min-width: 1000px;
		.centered {
			width: 1000px; height: 50px;
			margin: auto;
			background: #2C2D2F;
			.tab {
				float: left;
				position: relative;
				width: 100px; height: 50px;
				&:hover {
					.link {
						background: orange; transition: 0.5s;
					}
					.subs {
						display: block;
					}
				}
				.link {
					display: block;
					width: 100px; height: 50px; line-height: 50px;
					text-align: center; color: white;
					cursor: pointer;
				}
				.subs {
					position: absolute; left: 0; top: 100%;
					z-index: 99;
					display: none;
					>li {
						width: 100px; height: 40px; line-height: 40px;
						text-align: center; color: white;
						cursor: pointer;
						background: #2C2D2F;
						&:hover {
							background: lightgreen;
						}
					}
				}
			}
		}
	}
	.nav1>li:hover {background:orange;transition:0.5s;}
	.nav1>li:hover .nav1-b>li {display:block;transition:0.5s;}
	.nav1-b>li {width:100px;height:40px;line-height:40px;text-align:center;color:white;cursor:pointer;background:#2C2D2F;display:none;}
	.nav1-b>li:hover {background:lightgreen;}
</style>

<script type="text/javascript">
	export default {
		data: function(){
			return {
				tabs: [{
					name: 'users',
					href: '#/admin/users',
					subs: []
				},{
					name: 'items',
					href: '#/admin/items',
					subs: []
				},{
					name: 'signin',
					href: '#/admin/signin',
					subs: []
				}]
			}
		},
		computed: {
			id: function(){
				return this.$store.state.user.id;
			}
		}
	}
</script>