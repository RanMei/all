<template>
	<div class="TabbedBox">
		<ul class="tabs">
			<li
			v-for="(a,i) in tabs"
			:class=" current===i?'active':'' "
			@click="pick(i)">
			{{a}}</li>
		</ul>
		<ul class="content">
			<li class="imgs_detailed" 
			v-show=" current===0 ">
				<img src="">
				<img src="">
				<img src="">
			</li>
			<li
			v-show=" current===1 ">
			尚无评价晒单</li>
			<li
			v-show=" current===2 ">
				<h3>退货政策</h3>
				<p>
					自实际收到商品之日起15日内可以退货。<br/>    3C类商品：此类所退换商品要求不影响二次销售，配件完整，包装齐全（不带有店铺或商品商标logo的非密封性包装除外），商品外观无磨损，无使用痕迹，整体无磕碰。如有赠品，需如数退回。
				</p>
				<h3>配送速度查询</h3>
				<p>
					1.下单成功之后，订单会随时更新您的订单状态。<br/>
					2.您可以登录到您的时光网账户中，实时查看您订单的生产及配送情况。<br/>
					3.订单显示已发货状态，即可看到物流信息更新显示。<br/>	4.当您的包裹发货时，我们将会以短信的方式附上运单号码告知您，您可以到时光网账户跟踪物流信息或者根据快递单号直接进行查询。
				</p>
				<h3>服务承诺</h3>
				<p>
					1.时光网所售的产品都是官方授权，100%正品保证，您可以放心购买。<br/>
					2.如您的商品自签收之日起15天内出现质量问题、商品破损等问题可申请退货(特殊商品除外)。<br/>
					3.订单取消成功后，退款大约3-7个工作日内退至原支付账户。
				</p>
				<h3>权利声明</h3>
				<p>														时光网上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是时光网重要的经营资源，未经许可，禁止非法转载使用。<br/>				注：因部分品牌会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与网站图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本网站没有及时更新，请大家谅解！
				</p>
			</li>
		</ul>
	</div>
</template>

<style lang="less" scoped>
	.TabbedBox {
		width: 1000px;
		margin:30px auto 40px auto;
		.tabs {
			width: 100%; height: 60px;
			background: white;
			overflow: hidden;
			border-bottom: 1px solid #BABABA;
			li {
				float: left;
				margin: 20px;
				color: #127BAB;
				cursor: pointer;
				&.active {
					border-bottom: 4px solid orange;
				}
			}
		}
		.content {
			position:relative;
			>li {
				box-sizing: border-box;
				width: 100%;
				padding: 20px;
				background: white;
			}
			img {margin-bottom:20px;}
		}
	}
</style>

<script type="text/javascript">
	export default {
		props: {
			tabs: {
				default: [
					'商品详情','评价晒单','购买须知'
				]
			}
		},
		data: function(){
			return {
				current: 0
			}
		},
		methods: {
			pick: function(i){
				this.current = i;
			}
		}
	}
</script>