<template>
<div class="mask" v-show="state!=='pending'">
	<div class="panel">
		<div class="square">{{{square}}}</div>
		<p class="info" v-show="infoShown">{{{info}}}</p>
		<p class="desc" style="{{centered?'text-align: center;':''}}">
			<span class="span"></span>{{{desc}}}
		</p>
		<div class="pinkBtn gotIt" v-show="pinkBtn==='gotIt'" v-on:click="closeMask">
			我知道了
		</div>
		<div class="pinkBtn help" v-show="pinkBtn==='help'" v-on:click="toHow">
			<img class="query" :src="img.query"/> 查看如何使用{{help}}
		</div>
		<div class="pinkBtn write" v-show="pinkBtn==='write'" v-on:click="toContact">
			<img class="pen" :src="img.pen"/> 填写联系方式
		</div>
		<img class="close" :src="img.close" v-show="closeShown" v-on:click="closeMask"/>
	</div>
</div>
</template>

<style lang="less">
.mask {
	position: fixed; left: 0; top: 0;
	width: 100%; height: 100%;
	background: rgba(0,0,0,0.8);
	z-index: 99;
	overflow: hidden;
	//display: none;
	.panel {
		position: relative;
		box-sizing: border-box;
		width: 4.76rem;
		margin: auto; margin-top: 2rem;
		padding-left: 0.2rem; padding-right: 0.2rem; padding-bottom: 0.44rem; 
		border-radius: 0.1rem;
		background: white;
		//overflow: hidden;
		.square {
			overflow: hidden;
			img {
				width: 2.08rem;
				margin: auto; margin-top: 0.5rem;
			}
		}
		.info {
			width: 100%; 
			padding-top: 0.3rem; padding-bottom: 0.3rem;
			margin-bottom: 0.22rem;
			text-align: center; color: #333333; font-weight: bold; line-height: 0.48rem;
			font-size: 0.32rem;
			border-bottom: 1px dashed grey;
			span {
				color: #ff7c66;
			}
		}
		.desc {
			font-size: 0.28rem; color: #666666; line-height: 171%;
			overflow: hidden;
			.span {
				font-size: 0.28rem; color: #666666; line-height: 171%;
			}
			.link {
				color: #5474ff; text-decoration: underline;
			}
		}
		.pinkBtn {
			height: 0.88rem;
			margin: 0.44rem auto 0 auto;
			background: #ff7c66;
			font-size: 0.3rem; line-height: 0.88rem; color: white; text-align: center;
			border-radius: 999px;
		}
		.gotIt {
			width: 2.94rem;
		}
		.help {
			width: 4.04rem;
			.query {
				display: inline-block; vertical-align: middle;
				width: 0.42rem;
			}
		}
		.write {
			width: 3.24rem;
			.pen {
				display: inline-block; vertical-align: middle;
				height: 0.3rem;
			}
		}
		.close {
			position: absolute; right: -0.2rem; top: -0.2rem;
			width: 0.52rem;
		}
	}
}
</style>

<script>
module.exports = {
	props: ['state'],
	data: function(){
		return {
			inProcessing: false,
			closeShown: false,
			infoShown: true,
			square: '',
			info: '--',
			desc: '--',
			pinkBtn: '',
			help: '',
			centered: false,

			img: {
				pen: './img/pen.png',
				query: './img/query.png',
				close: './img/close.png'
			}
		}
	},
	created: function(){
		this.$watch('state',()=>{
			if( this.state!=='pending' ){
				this.showMask(this.state);
			};
		})
	},
	methods: {
		showMask: function(i){
			var self = this;
			if( !self.inProcessing ){
				self.inProcessing = true;
				
				var name = self.ios?'阅券':'书券';
				self.square = '';
				self.centered = false;
				self.closeShown = false;
				self.infoShown = true;
				switch (i) {
					case 'none':
						self.info = '无抽奖机会';
						self.desc = '参与每日任务和累计阅读时长可获得抽奖机会';
						self.pinkBtn = 'gotIt';
						self.closeShown = false;
						break;
					case 'out':
						self.info = '礼包被抢光';
						self.desc = '来晚一步，去看看其他的礼包';
						self.centered = true;
						self.pinkBtn = 'gotIt';
						self.closeShown = false;
						break;
					case 1:
						this.info = '恭喜你获得<span>1次</span>抽奖机会';
						this.desc = '赶紧去抽奖，iPhone6，小米手环等奖品等着你';
						this.text = '今日阅读时长已达45分钟，可领取';
						this.closeShown = false;
						this.pinkBtn = 'gotIt';
						break;
					case 2:
						self.closeShown = false;
						self.info = `恭喜你获得<br/><span>2次</span>抽奖机会、<span>50</span>${name}`;
						self.desc = `50${name}已及时到账，15天到期，到期将不能使用`;
						self.pinkBtn = 'gotIt';
						break;
					case 3:
						self.info = `恭喜你获得<br/><span>3次</span>抽奖机会、<span>100</span>${name}`;
						self.desc = `100${name}已及时到账，15天到期，到期将不能使用`;
						self.pinkBtn = 'gotIt';
						break;
					case 4:
						self.info = `恭喜你获得<span>4次</span>抽奖机会、<span>200</span>${name}和<span>200元</span>沪江学习卡`;
						self.desc = `200${name}已及时到账，15天到期，到期将不能使用`;
						self.help = `学习卡`;
						self.closeShown = true;
						self.pinkBtn = 'help';
						break;
					case 'how':
						self.info = '如何使用学习卡？';
						self.desc = 
							`1、进入优惠券开课页面<br/>
							<span class="link">http://class.hujiang.com/<br/>coupon/open</span><br/>
							2、输入优惠券代码，选择课程。<br/>
							3、确认用户名，开通课程。`
						self.pinkBtn = 'gotIt';
						break;
					case 'get0':
						self.square = '<img src="img/square_0.png">';
						self.info = '恭喜你获得<span>iPhone6</span>';
						self.desc = '务必填写正确的联系方式，方便客服与你联系';
						self.pinkBtn = 'write';
						self.closeShown = true;
						break;
					case 'get1':
						if( self.ios ){
							self.square = '<img src="img/square_1_ios.png">';
							self.info = '';
							self.infoShown = false;
							self.centered = true;
							self.desc = '继续加油，好运即将来临';
							self.pinkBtn = 'gotIt';
						}else{
							self.square = '<img src="img/square_1.png">';
							self.info = '恭喜你获得<span>10成长值</span>';
							self.centered = true;
							self.desc = '10成长值已及时到账';
							self.pinkBtn = 'gotIt';
						}
						break;
					case 'get2':
						if( self.ios ){
							self.square = '<img src="img/square_2_ios.png">';
							self.info = '恭喜你获得<span>乐扣乐扣保温杯</span>';					
						}else{
							self.square = '<img src="img/square_2.png">';
							self.info = '恭喜你获得<span>金士顿U盘</span>';
						}
						self.desc = '务必填写正确的联系方式，方便客服与你联系';
						self.pinkBtn = 'write';
						self.closeShown = true;	
						break;
					case 'get3':
						self.square = `<img src="img/square_3${self.ios?'_ios':''}.png">`;
						self.info = `恭喜你获得<span>5${name}</span>`;
						self.desc = `5${name}已及时到账，15天到期，到期将不能使用`;
						self.pinkBtn = 'gotIt';
						break;
					case 'get4':
						self.square = `<img src="img/square_4${self.ios?'_ios':''}.png">`;
						self.info = `恭喜你获得<span>小米${self.ios?'移动电源':'手环'}</span>`;
						self.desc = '务必填写正确的联系方式，方便客服与你联系';
						self.pinkBtn = 'write';
						self.closeShown = true;
						break;
					case 'get5':
						self.square = `<img src="img/square_5${self.ios?'_ios':''}.png">`;
						self.info = `恭喜你获得<span>小米${self.ios?'路由器':'耳机'}</span>`;
						self.desc = '务必填写正确的联系方式，方便客服与你联系';
						self.pinkBtn = 'write';
						self.closeShown = true;
						break;
					case 'get6':
						self.square = '<img src="img/square_6.png">';
						self.info = '恭喜你获得<span>100元沪江学习卡</span>';
						self.desc = '请到“我的奖品”页面查看兑换码';
						self.help = ``;
						self.pinkBtn = 'help';
						self.closeShown = true;
						break;
					case 'get7':
						self.square = '<img src="img/square_7.png">';
						self.info = '恭喜你获得<span>50元沪江学习卡</span>';
						self.desc = '请到“我的奖品”页面查看兑换码';
						self.help = ``;
						self.pinkBtn = 'help';
						self.closeShown = true;
						break;
				}
				setTimeout(function(){
					//self.maskShown = true;
					self.inProcessing = false;
				},300);
			};
		},
		toHow: function(){
			this.$dispatch('SHOW_MASK','how');
		},
		closeMask: function(){
			this.$dispatch('CLOSE_MASK');
		}
	}
}
</script>