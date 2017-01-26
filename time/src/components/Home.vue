<template>
	<div class="Home">
		<!-- navbar -->
		<div class="navbar wrapper">
			<div class="container">
				<ul class="menu">
					<div class="menu-head">全部商品分类</div>
					<li>
						<div class="upper">
							<a href="" class="a_a"><img :src=" dir.img+'/icons/0.png' "></a>
							<a href="" class="a_b">玩具模型</a>
						</div>
						<div class="lower">
							<a href="">模型公仔</a>
							<a href="">仿真收藏</a>
							<a href="">变形金刚</a><br/>
							<a href="">毛绒玩具</a>
							<a href="">角色扮演</a>
							<a href="">益智拼插</a>
						</div>
					</li>
					<li>
						<div class="upper">
							<a href="" class="a_a"><img :src=" dir.img+'/icons/1.png' "></a>
							<a href="" class="a_b">数码配件</a>
						</div>
						<div class="lower">
							<a href="">手机配件</a>
							<a href="">充电装备</a>
							<a href="">时尚U盘</a><br/>
							<a href="">电脑周边</a>
							<a href="">车载用品</a>
							<a href="">趣味拍照</a>
						</div>
					</li>
					<li>
						<div class="upper">
							<a href="" class="a_a"><img :src=" dir.img+'/icons/2.png' "></a>
							<a href="" class="a_b">服装服饰</a>
						</div>
						<div class="lower">
							<a href="">男装</a>
							<a href="">女装</a>
							<a href="">童装</a>
							<a href="">鞋靴</a><br/>
							<a href="">时尚包品</a>
							<a href="">服饰配件</a>
						</div>
					</li>
					<li>
						<div class="upper">
							<a href="" class="a_a"><img :src=" dir.img+'/icons/3.png' "></a>
							<a href="" class="a_b">居家日用</a>
						</div>
						<div class="lower">
							<a href="">创意文具</a>
							<a href="">抱枕靠垫</a>
							<a href="">水杯水壶</a>
						</div>
					</li>
				</ul>
				<ul class="tabs">
					<li><a :href=" dir.admin ">首页</a></li>
					<li><a href="">服饰</a></li>
					<li><a href="">钱包</a></li>
					<li><a href="">耳机</a></li>
					<li><a href="">运动鞋</a></li>
					<li><a href="">色盲眼镜</a></li>
					<li><a href="">手表</a></li>
				</ul>
			</div>
		</div>
		
		<focus :dir="dir"></focus>

		<!-- main -->
		<div class="main wrapper">
			<div class="container">
				<div class="box2">
					<ul class="col1">
						<li>
							<div class="upper">
								<div class="icon"><a href=""><img :src=" dir.img+'/icons/4.png' "></a></div>
								<a href="" class="title">玩具模型</a>
							</div>
							<div class="lower">
								<a href="">模型公仔</a> <a href="">仿真收藏</a> <a href="">更多></a></div>
						</li>
						<li>
							<div class="upper">
								<div class="icon"><a href=""><img :src=" dir.img+'/icons/5.png' "></a></div>
								<a href="" class="title">数码配件</a>
							</div>
							<div class="lower">
								<a href="">手机配件</a> <a href="">充电装备</a> <a href="">更多></a></div>
						</li>
						<li>
							<div class="upper">
								<div class="icon"><a href=""><img :src=" dir.img+'/icons/6.png' "></a></div>
								<a href="" class="title">服装服饰</a>
							</div>
							<div class="lower">
								<a href="">男装</a> <a href="">女装</a> <a href="">更多></a></div>
						</li>
						<li>
							<div class="upper">
								<div class="icon"><a href=""><img :src=" dir.img+'/icons/7.png' "></a></div>
								<a href="" class="title">居家日用</a>
							</div>
							<div class="lower">
								<a href="">创意文具</a> <a href="">抱枕靠垫</a> <a href="">更多></a></div>
						</li>
					</ul>
					<div class="col2">
						<dl>
							<dt><a :href=" col2[0] "><img :src=" dir.img+'/index/showcase/0.jpg' "></a></dt>
							<dt><a :href=" col2[0] "><img :src=" dir.img+'/index/showcase/1.jpg' "></a></dt>
							<dd><a :href=" col2[0] "><img :src=" dir.img+'/index/showcase/2.jpg' "></a></dd>
							<dd><a :href=" col2[0] "><img :src=" dir.img+'/index/showcase/3.jpg' "></a></dd>
							<dd><a :href=" col2[0] "><img :src=" dir.img+'/index/showcase/4.jpg' "></a></dd>
							<dd><a :href=" col2[0] "><img :src=" dir.img+'/index/showcase/5.jpg' "></a></dd>		
						</dl>
					</div>
				</div>
				
				<!-- toys -->
				<div class="showcase">
					<ul class="left">
						<li :style=" 'background:url('+dir.img+'/index/toys/0.jpg)' ">
							<a href="item.html?id=1602091458">
								<div class="words">
									<p class="name">星球大战BB-8智能球形机器人</p>
									<p class="desc">翻滚吧！球形BB-8！</p>
									<p class="price">￥1198</p>
								</div>
							</a>
						</li>
						<li :style=" 'background:url('+dir.img+'/index/toys/1.jpg)' ">
							<a href="">
								<div class="words">
									<p class="name">复仇者联盟2迷你公仔套装</p>
									<p class="desc">Q萌复联英雄 霸气拯救世界</p>
									<p class="price">￥150</p>
								</div>
							</a>
						</li>
					</ul>
					<ul class="middle">
						<li>
							<div class="middle_left">
								<a href="" class="icon"><img :src=" dir.img+'/icons/4.png' "></a>
								<div class="title"><a href="">玩具模型</a></div>
							</div>
							<div class="middle_right">
								<div class="list">
									<a href="">模型公仔</a><a href="">仿真收藏</a></br>
									<a href="">变形金刚</a><a href="">毛绒玩具</a></br>
									<a href="">角色扮演</a><a href="">益智拼插</a>
								</div>
								<a href="" class="more">查看更多</a>
							</div>
						</li>
						<li><a href=""><img :src=" dir.img+'/index/toys/2.jpg' "></a></li>
					</ul>
					<ul class="right">
						<li :style=" 'background:url('+dir.img+'/index/toys/3.jpg)' ">
							<a href="items/item.html?id=1602091557">
								<div class="words">
									<p class="name">HEROCROSS星球大战白兵</p>
									<p class="desc">Q版可动白兵</p>
									<p class="price">￥398</p>
								</div>
							</a>
						</li>
						<li :style=" 'background:url('+dir.img+'/index/toys/4.jpg)' ">
							<a href="">
								<div class="words">
									<p class="name">复仇者联盟2 Q版收藏公仔</p>
									<p class="desc">复联男神 横空出击</p>
									<p class="price">￥99</p>
								</div>
							</a>
						</li>
					</ul>
				</div>
				
				<!-- digital -->
				<div class="showcase">
					<ul class="left">
						<li :style=" 'background:url('+dir.img+'/index/digital/0.jpg)' ">
							<a href="">
								<div class="words">
									<p class="name">星战经典充电宝套装</p>
									<p class="desc">黑白双枭 能量伴侣</p>
									<p class="price">￥149</p>
								</div>
							</a>
						</li>
						<li :style=" 'background:url('+dir.img+'/index/digital/1.jpg)' ">
							<a href="">
								<div class="words">
									<p class="name">宜博M639钢铁侠游戏鼠标</p>
									<p class="desc">百炼成“钢” 内“芯”强大</p>
									<p class="price">￥198</p>
								</div>
							</a>
						</li>
					</ul>
					<ul class="middle">
						<li style="background:#2378B9">
							<div class="middle_left">
								<a href="" class="icon"><img :src=" dir.img+'/icons/5.png' "></a>
								<div class="title"><a href="">数码配件</a></div>
							</div>
							<div class="middle_right">
								<div class="list">
									<a href="">手机配件</a><a href="">充电装备</a></br>
									<a href="">时尚U盘</a><a href="">电脑周边</a></br>
									<a href="">车载用品</a><a href="">趣味拍照</a>
								</div>
								<a href="" class="more" style="color:#2378B9">查看更多</a>
							</div>
						</li>
						<li><a href=""><img :src=" dir.img+'/index/digital/2.jpg' "></a></li>
					</ul>
					<ul class="right">
						<li :style=" 'background:url('+dir.img+'/index/digital/3.jpg)' ">
							<a href="">
								<div class="words">
									<p class="name">阿宝爱包子i6手机壳</p>
									<p class="desc">吃货阿宝 再秀包子神功</p>
									<p class="price">￥45</p>
								</div>
							</a>
						</li>
						<li :style=" 'background:url('+dir.img+'/index/digital/4.jpg)' ">
							<a href="items/item.html?id=1602091550">
								<div class="words">
									<p class="name">星球大战入耳式耳机</p>
									<p class="desc">出色音质 唤醒你的耳朵</p>
									<p class="price">￥60</p>
								</div>
							</a>
						</li>
					</ul>
				</div>
				
				<!-- clothes -->
				<div class="showcase">
					<ul class="left">
						<li :style=" 'background:url('+dir.img+'/index/clothes/0.jpg)' ">
							<a href="">
								<div class="words">
									<p class="name">功夫熊猫3双宝环保袋</p>
									<p class="desc">呆萌阿宝伴你环保出行</p>
									<p class="price">￥49</p>
								</div>
							</a>
						</li>
						<li :style=" 'background:url('+dir.img+'/index/clothes/1.jpg)' ">
							<a href="">
								<div class="words">
									<p class="name">蚁人炫酷休闲帽</p>
									<p class="desc">蚁人酷帽 霸气来袭</p>
									<p class="price">￥39</p>
								</div>
							</a>
						</li>
					</ul>
					<ul class="middle">
						<li style="background:#49B67C">
							<div class="middle_left">
								<a href="" class="icon"><img :src=" dir.img+'/icons/6.png' "></a>
								<div class="title"><a href="">服装服饰</a></div>
							</div>
							<div class="middle_right">
								<div class="list">
									<a href="">男装</a><a href="">女装</a></br>
									<a href="">童装</a><a href="">鞋靴</a></br>
									<a href="">时尚包品</a><a href="">服饰配件</a>
								</div>
								<a href="" class="more" style="color:#49B67C">查看更多</a>
							</div>
						</li>
						<li><a href=""><img :src=" dir.img+'/index/clothes/2.jpg' "></a></li>
					</ul>
					<ul class="right">
						<li :style=" 'background:url('+dir.img+'/index/clothes/3.jpg)' ">
							<a href="">
								<div class="words">
									<p class="name">蜘蛛侠低帮智能定位童鞋</p>
									<p class="desc">智能定位 宝贝行踪随时掌控</p>
									<p class="price">￥359</p>
								</div>
							</a>
						</li>
						<li :style=" 'background:url('+dir.img+'/index/clothes/4.jpg)' ">
							<a href="">
								<div class="words">
									<p class="name">星球经典复古双肩背包</p>
									<p class="desc">酷炫星战 原力觉醒</p>
									<p class="price">￥249</p>
								</div>
							</a>
						</li>
					</ul>
				</div>
				
				<!-- living -->
				<div class="showcase">
					<ul class="left">
						<li :style=" 'background:url('+dir.img+'/index/living/0.jpg)' ">
							<a href="">
								<div class="words">
									<p class="name">功夫熊猫3旅行套装</p>
									<p class="desc">呆萌阿宝 贴心出行</p>
									<p class="price">￥50</p>
								</div>
							</a>
						</li>
						<li :style=" 'background:url('+dir.img+'/index/living/1.jpg)' ">
							<a href="">
								<div class="words">
									<p class="name">星战数码印花限量版方巾</p>
									<p class="desc">给你不一样的亲肤体验</p>
									<p class="price">￥49</p>
								</div>
							</a>
						</li>
					</ul>
					<ul class="middle">
						<li style="background:#1A9EA5">
							<div class="middle_left">
								<a href="" class="icon"><img :src=" dir.img+'/icons/7.png' "></a>
								<div class="title"><a href="">居家日用</a></div>
							</div>
							<div class="middle_right">
								<div class="list">
									<a href="">创意文具</a><a href="">抱枕靠垫</a></br>
									<a href="">水杯/水壶</a>
								</div>
								<a href="" class="more" style="color:#1A9EA5">查看更多</a>
							</div>
						</li>
						<li><a href=""><img :src=" dir.img+'/index/living/2.jpg' "></a></li>
					</ul>
					<ul class="right">
						<li :style=" 'background:url('+dir.img+'/index/living/3.jpg)' ">
							<a href="">
								<div class="words">
									<p class="name">功夫熊猫3抱枕</p>
									<p class="desc">功夫阿宝 让你放心依靠</p>
									<p class="price">￥80</p>
								</div>
							</a>
						</li>
						<li :style=" 'background:url('+dir.img+'/index/living/4.jpg)' ">
							<a href="">
								<div class="words">
									<p class="name">星球大战马克杯套装</p>
									<p class="desc">黑白双雄 原力觉醒</p>
									<p class="price">￥99</p>
								</div>
							</a>
						</li>
					</ul>
				</div>
				
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.Home {
	position: relative;
	width: 100%;
	background: white;
	overflow: hidden;
	.navbar {
		position:relative;
		height:60px;
		background: #2378BA;
		.container {
			position:relative;
			height:60px;
		}
	}

	.menu {position:absolute;top:4px;width:240px;overflow:hidden;z-index:1;}
	.menu-head {width:240px;height:56px;background:#2784CC;font-size:18px;line-height:56px;text-indent:30px;color:white;}
	.menu>li {width:240px;height:110px;background:white;overflow:hidden;}
	.menu .upper {height:36px;margin:10px 0 10px 15px;overflow:hidden;}
	.menu .a_a {float:left;}
	.menu .a_b:link {color:#0088E3;font-size:20px;margin-left:5px;height:36px;line-height:36px;}
	.menu .a_b:visited {color:#0088E3;}
	.menu .lower {margin-left:15px;}
	.menu .lower a:link {color:#757575;font-size:13px;margin-right:15px;}
	.menu .lower a:visited {color:#757575;font-size:14px;}

	.navbar .tabs {position:absolute;left:260px;}
	.navbar .tabs>li {position:relative;float:left;margin:0 20px 0 20px;font-size:18px;padding:18px 0 5px 0;}
	.navbar .tabs>li:hover {border-bottom:4px solid white;}
	.navbar .tabs a:link {color:white;}
	.navbar .tabs a:visited {color:white;}
	
	/*----------------------------------------------------------------------------------------------------------------------------*/
	

	.box2 {width:960px;margin-bottom:50px;margin-top:30px;overflow:hidden;}
	.box2 a:link {color:white;}
	.box2 a:visited {color:white;}
	.box2 .col1 {float:left;}
	.box2 .col1 li {width:192px;height:96px;color:white;overflow:hidden;}
	.box2 .col1 li p:nth-child(1) {margin:15px 0 0 15px;}
	.box2 .col1 li p:nth-child(2) {margin:0 0 0 15px;font-size:80%;}
	.box2 .col1 li:nth-child(1) {background:#FA881E;}
	.box2 .col1 li:nth-child(2) {background:#2378B9;}
	.box2 .col1 li:nth-child(3) {background:#49B67C;}
	.box2 .col1 li:nth-child(4) {background:#1A9EA5;}
	.box2 .upper {margin:15px 0 0 20px;overflow:hidden;}
	.box2 .upper img {width:36px;}
	.box2 .title {height:36px;line-height:36px;font-size:18px;margin-left:5px;}
	.box2 .icon {float:left;}
	.box2 .lower {margin:0 0 0 15px;font-size:14px}
	.box2 .col2 dt {float:left;width:383px;height:186px;border-bottom:1px solid #E9E9E9;border-right:1px solid #E9E9E9;border-top:1px solid #E9E9E9;}
	.box2 .col2 dt:hover {position:relative;box-shadow:0 0 10px grey;}
	.box2 .col2 dd {float:left;width:191px;height:195px;border-bottom:1px solid #E9E9E9;border-right:1px solid #E9E9E9;}
	.box2 .col2 dd:hover {position:relative;box-shadow:0 0 10px grey;}

	.showcase {
		height:480px;
		margin-bottom:50px;

	}
	.showcase li {box-shadow:0 0 2px grey;position:relative;}
	.showcase li:hover {box-shadow:0 0 5px grey;}
	.showcase .left a:link {width:100%;height:100%;color:black;display:block;z-index:2}
	.showcase .left a:visited {color:black;}
	.showcase .right a:link {width:100%;height:100%;color:black;display:block;z-index:2}
	.showcase .right a:visited {color:black;}
	.showcase .words {position:absolute;top:20px;left:30px;}
	.showcase .name {font-size:20px;}
	.showcase .desc {font-size:14px;color:grey;}
	.showcase .price {font-size:22px;font-weight:bold;margin-top:10px;}
	.showcase .left {float:left;width:325px;margin:7px 10px 0 0;}
	.showcase .left>li:first-child {width:325px;height:250px;margin:0 0 10px 0;}
	.showcase .left>li:last-child {width:325px;height:200px;margin:0 0 0 0;}
	.showcase .middle {float:left;width:325px;}
	.showcase .middle>li:first-child {height:120px;padding:30px 0 30px 0;background:#FA881E;}
	.showcase .middle>li:last-child {width:325px;height:287px;}
	.showcase .middle_left {float:left;width:40%;height:100%;border-right:1px solid white;}
	.showcase .middle_left .icon {width:88px;margin:auto;display:block;}
	.showcase .middle_left .title {font-size:20px;text-align:center;}
	.showcase .middle_left .title a:visited {color:white;}
	.showcase .middle_right {overflow:hidden;}
	.showcase .middle_right .list a:link {color:white;font-size:14px;margin-left:20px;}
	.showcase .middle_right .list a:visited {color:white;}
	.showcase .middle_right .list a:hover {text-decoration:underline}
	.showcase .more {width:100px;height:30px;margin:20px 0 0 20px;border-radius:15px;background:white;display:block;font-size:14px;line-height:30px;text-align:center;color:#FA881E;}
	.showcase .right {float:left;width:325px;margin:7px 0 0 10px;}
	.showcase .right>li:first-child {width:325px;height:200px;margin:0 0 10px 0;}
	.showcase .right>li:last-child {width:325px;height:250px;margin:0 0 0 0;}
}
</style>

<script type="text/javascript">
	export default {
		props: {
			dir: {}
		},
		components: {
			Focus: require('../components/Focus.vue')
		},
		computed: {
			col2: function(){
				return [
					this.dir.item+'?id=1602091546'
				]
			}
		}
	}
</script>