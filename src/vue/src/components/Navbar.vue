<style lang="less" scoped>
	.Navbar {
		position: relative;
		box-sizing: border-box;
		height: 0.98rem;
		ul {
			position: fixed; left: 0; bottom: 0;
			width: 100%; height: 0.98rem;
			// border-top: 1px solid lightgrey;
			background: white;
			overflow: hidden;
			a {
				display: block;
				float: left;
				width: 25%;
				text-decoration: none;
				.upper {
					width: 100%; height: 0.62rem;
					overflow: hidden;
					img {
						margin: auto; margin-top: 0.1rem;
					}
					.element {
						width: 0.42rem;
					}
					.component {
						width: 0.45rem;
					}
					.tpl {
						width: 0.44rem;
					}
					.scene {
						width: 0.49rem;
					}
				}
				p {
					font-size: 0.24rem;
					text-align: center;
					color: #444444;
					&.active {
						color: #1d79a4;
					}
				}
			}
		}
	}
</style>

<template>
	<div class="Navbar">
		<ul>
			<a href="#/home"
			v-for="(a,i) in navbar.tabs"
			@click="change(i)">
				<div class="upper">
					<img class="element" :src="img+'/tab_'+i+(navbar.current===i?'_active':'')+'.png'"/>
				</div>
				<p :class="navbar.current===i?'active':''">{{a.name}}</p>
			</a>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		data: function(){
			return {
			}
		},
		computed: {
			img(){
				return this.$store.state.img;
			},
			navbar(){
				return this.$store.state.navbar;
			}
		},
		methods: {
			change(i){
				this.$store.commit('TO_CLASS',i);
				this.$store.dispatch('fetchItems',{
					class_: this.navbar.tabs[i].name
				})
			}
		}
	}
</script>