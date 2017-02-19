<template>
<div class="MY-FOOTER wrapper">
	<!-- footer -->
	<div class="LINE wrapper"></div>
	<div class="footer wrapper" style="background:#F2F2F2;">
		<ul class="container">
			<li>	
				<h4>购物指南</h4>
				<a href="">新用户注册</a><br/>
				<a href="">购物流程</a><br/>
				<a href="">常见问题</a><br/>
				<a href="">发票制度</a><br/>
				<a href="">联系我们</a>
			</li>
			<li>	
				<h4>支付方式</h4>
				<a href="">在线付款</a><br/>
				<a href="">余额付款</a><br/>
				<a href="">优惠券使用说明</a>
			</li>
			<li>	
				<h4>配送方式</h4>
				<a href="">邮费说明</a><br/>
				<a href="">配送服务范围</a><br/>
				<a href="">配送速度查询</a><br/>
				<a href="">验货与签收</a>
			</li>
			<li>	
				<h4>售后服务</h4>
				<a href="">售后政策</a><br/>
				<a href="">退货政策</a><br/>
				<a href="">退货流程</a>
			</li>
			<li>	
				<h4>客服电话</h4>
				<p class="serviceTel">4006-118-118</p>
				<p>周一至周日9:00~22:00</p>
			</li>
		</ul>
	</div>
	<div class="copyright wrapper">
		<div class="container">
			<p>Copyright &copy; 2015.FYTPY All rights reserved.</p>
		</div>
	</div>
</div>
</template>

<style lang="less" scoped>

.footer {
	.container {
		padding:50px 0 50px 0;
		background:#F2F2F2;
		overflow:hidden;
		a {margin:0 0 0 40px;font-size:14px;color:#999999;}
		a:link {color:#999999;text-decoration:none;}
		a:visited {color:#999999;}
		a:hover {color:#0081BC;}
		a:active {color:#0081BC;}
		>li {
			float:left;
			width:200px;
			>h4 {
				margin:0 0 20px 40px;
				font-size:14px;
				color:black;
				font-weight:normal
			}
			p {
				font-size:14px;
				color:#999999;
			}
		}
		>li:last-child h4 {margin:0 0 20px 0;}
		.serviceTel {font-size:20px;color:black;}
	}
}

.copyright {
	background:#F2F2F2;
	color:grey;
	font-size:14px;
	.container {
		padding:20px 0 20px 0;
		border-top:1px solid lightgrey;
	}
	p {
		width:100%;
		text-align:center;
	}
}
</style>

<script type="text/javascript">
export default {
	
}
</script>