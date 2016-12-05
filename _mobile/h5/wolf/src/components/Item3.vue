<style lang="less" scoped>
	.Item3 {
		box-sizing: border-box; display: table;
		position: relative;
		width: 100%; height: 10%;
		overflow: hidden;
		background: #E6E4E5;
		.cell {
			display: table-cell; vertical-align: middle;
			.title {
				margin-bottom: 0.3rem;
				font-size: 0.4rem; color: grey; text-align: center;
			}
			.text {
				margin-bottom: 0.1rem;
				font-size: 0.4rem; color: white;
				text-align: center;
				opacity: 0;
				transform: scaleX(2);
			}
			.text_0,.text_1 {
				margin-top: 0.3rem;
				&.active {
					animation: text_shrink 1000ms forwards;
				}
			}
			.cities {
				width: 100%;
				overflow: hidden;
			}
			.city_c {
				float: left;
				box-sizing: border-box;
				width: 50%;
				padding: 0.2rem 0;
				overflow: hidden;
				&:nth-child(odd) {
					padding-left: 0.5rem;
				}
				&:nth-child(even) {
					padding-left: 0.25rem;
				}
				.city {
					width: 3rem;
					background: white;
					box-shadow: 0 0 0.1rem grey;
					opacity: 0;
					&.active {
						animation: bounceIn 1s forwards;
					}
					img {
						width: 100%;
					}
					.name {
						padding: 0.1rem 0.15rem;
						font-size: 0.28rem; color: #AC1F25;
					}
					.desc {
						height: 1rem;
						padding: 0 0.15rem 0.1rem 0.15rem;
						font-size: 0.2rem;
					}
				}
			}
		}
	}
</style>

<template>
	<div class="Item3">
		<div class="cell">
			<p class="title">公司分布</p>
			<div class="cities">
				<div class="city_c"
				v-for="a in cities">
					<div class="city"
					:class="a.s">
						<img :src=" img+a.img "/>
						<p class="name">{{a.name}}</p>
						<p class="desc">{{a.desc}}</p>
					</div>
				</div>
			</div>
			<div style="height:0.8rem"></div>
		</div>

		<arrow :img="img"></arrow>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
			img: {},
			active: {}
		},
		data: function(){
			return {
				cities: [{
					name: '南通总部',
					desc: '坐落在近代第一城-南通，下设：运营中心，市场部，技术中心，运维中心等。',
					img: '/cont5_demo3.jpg',
					s: '',
					p: 0
				},{
					name: '北京分部',
					desc: '世界历史文化名城和古都之一-北京，下设：技术中心，市场部，行政部等。',
					img: '/cont5_demo1.jpg',
					s: '',
					p: 300
				},{
					name: '上海分部',
					desc: '远东第一大城市-上海，下设：运营中心，美术部，商务部，技术中心等。',
					img: '/cont5_demo4.jpg',
					s: '',
					p: 600
				},{
					name: '南京分部',
					desc: '中国四大古都之一-南京，下设：美术部，策划部，行政部，技术中心等。',
					img: '/cont5_demo2.jpg',
					s: '',
					p: 900
				}],
				count: 0
			}
		},
		components: {
			Arrow: require('./Arrow.vue')
		},
		watch: {
			active: function(neo){
				//console.log(neo)
				if(neo){
					this.go();
				}else{
					this.reset();
				}
			}
		},
		methods: {
			go: function(){
				this.reset();
				this.count++;
				var count = this.count;
				for(let key in this.cities){
					setTimeout(()=>{
						if( count!==this.count )return;
						this.cities[key].s = 'active';
					},this.cities[key].p)
				}
			},
			reset: function(){
				for(let key in this.cities){
					this.cities[key].s = '';
				}
			}
		}
	}
</script>