<style lang="less">
	.Showcase {
		position: relative;
		overflow: hidden;
		padding: 0.5rem 0 0.1rem 0.4rem;
		background: #e3e3e6;
		.item__ {
			display: block;
			box-sizing: border-box;
			float: left;
			width: 3.2rem;
			margin-bottom: 0.28rem;
			background: #ffffff;
			// border-right: 1px solid lightgrey;
			// border-bottom: 1px solid lightgrey;
			&:nth-child(2n+1) {
				margin-right: 0.3rem;
			}
			&:link {
				text-decoration: none;
				color: red;
			}
			&:visited {
				color: red;
			}
			.img {
				width: 100%; height: 2.3rem;
				overflow: hidden;
				img {
					width: 100%;
				}
			}
			.lower__ {
				box-sizing: border-box;
				width: 100%;
				padding: 0.18rem;
				.name {
					font-size: 0.24rem; line-height: 0.46rem;
					color: #444444;
				}
				.tags {
					font-size: 0.2rem; color: #cfcfcf;
				}
			}
		}
	}
</style>

<template>
	<div class="Showcase">
		<a class="item__"
		v-for="(a,i) in items"
		@click="toItem(i)">
			<div class="img">
				<img :src=" img+'/gooey_menu.png' "/>
			</div>
			<div class="lower__">
				<p class="name">{{a.name_}}</p>
				<p class="tags">
					<span v-if="a.tags===undefined">--</span>
					<span v-for="b in a.tags">{{b}} </span>
				</p>
			</div>
		</a>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
		},
		computed: {
			img(){
				return this.$store.state.img;
			},
			items(){
				return this.$store.state.items;
			}
		},
		methods: {
			toItem(i){
				this.$store.commit('TO_ITEM',i);
			}
		}
	}
</script>
