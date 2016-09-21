import './rem.js';
var face = require('./components/face.vue');

Vue.component( 'face',face );

var app = new Vue({
	el: 'body',
	data: {
		isLogin: false,
		over: false,
		gifts: {
			1: {
				acquired: false,
				timeleft: 0
			},
			2: {
				acquired: false,
				timeleft: 0,
				left: 0
			},
			3: {
				acquired: false,
				timeleft: 0,
				left: 0
			},
			4: {
				acquired: false,
				timeleft: 0,
				left: 0
			}
		},
		chance: 0,
		myavor: 'img/default.jpg',
		
		current: 0,
		pressed: false,
		
		ios: /ios/.test(document.title)?true:false,
		testMode: false,

		maskShown: false,
		inProcessing: false,
		closeShown: false,
		infoShown: true,
		square: '',
		info: '--',
		desc: '--',
		pinkBtn: '',
		help: '',
		centered: false,

		trophies: [0,1,2,3,4,5,6,7],
		inDrawing: false,

		ver_ok: true,

		prizes: [
			'iphone6',
			'10成长值',
			'金士顿U盘',
			'5书券',
			'小米手环',
			'小米耳机',
			'100元沪江网校学习卡',
			'50元沪江网校学习卡'
		],
		prizes_ios: [
			'iphone6',
			'未中奖',
			'乐扣乐扣保温杯',
			'5阅券',
			'小米移动电源',
			'小米路由器',
			'100元沪江网校学习卡',
			'50元沪江网校学习卡'
		]

	},
	computed: {
		text: function(){
			if( !this.isLogin ){
				return '今日还需阅读：<br/>未登录';
			}else if( this.gifts[1].timeleft<=0 ){
				return '今日阅读时长已达45分钟，可领取';
			}else{
				return `今日还需阅读：<br/>${Math.ceil(this.gifts[1].timeleft/1000/60)}分钟`;
			}
		},
		hours2: function(){
			return Math.floor( this.gifts[2].timeleft/1000/3600 );
		},
		minutes2: function(){
			var hours = Math.floor( this.gifts[2].timeleft/1000/3600 );
			var minutes = Math.floor( this.gifts[2].timeleft/1000/60 - hours*60 );
			return minutes;
		},
		hours3: function(){
			return Math.floor( this.gifts[3].timeleft/1000/3600 );
		},
		minutes3: function(){
			var hours = Math.floor( this.gifts[3].timeleft/1000/3600 );
			var minutes = Math.floor( this.gifts[3].timeleft/1000/60 - hours*60 );
			return minutes;
		},
		hours4: function(){
			return Math.floor( this.gifts[4].timeleft/1000/3600 );
		},
		minutes4: function(){
			var hours = Math.floor( this.gifts[4].timeleft/1000/3600 );
			var minutes = Math.floor( this.gifts[4].timeleft/1000/60 - hours*60 );
			return minutes;
		}
	},
	ready: function(){
		this.getData();
	},
	methods: {
		getData: function(){
			var self = this;
			
			self.isLogin = false;

			self.chance = 0;
			self.gifts[2].left = 1000;
			self.gifts[3].left = 100;
			self.gifts[4].left = 10;

		},
		getAndroidOSVersion: function(){
			console.log( navigator )
			//变量v的值为用户手机的安卓操作系统的版本号首位。
			var v = Number(navigator.userAgent.match(/Android \d/)[0].replace(/Android /,''));
			console.log(v)
		},
		toUpgrade: function(){
			location.href = 'http://misc.wcd.qq.com/app?packageName=com.qq.reader&channelId=10000382';
		},
		cancle: function(){
			this.ver_ok = true;
		},
		fake: function(){
			var self = this;
			self.isLogin = false;
			self.gifts[1].timeleft = 0;
			self.gifts[2].timeleft = 0;
			self.gifts[3].timeleft = 0;
			self.gifts[4].timeleft = 0;	
		},
		signin: function(){
			this.isLogin = true;
			this.myavor = 'img/avatar.png';		
		},
		get: function(i){
			var self = this;
			self.gifts[i].acquired = true;
			self.chance += i;
			self.showMask(i);
		},
		// 添加在抽奖按钮上的事件：
		drawtouchstart: function(e){
			
			this.pressed = true;
		},
		drawtouchmove: function(){
			this.pressed = false;
		},
		drawtouchend: function(){
			if( this.pressed ){
				this.draw();
			};
			this.pressed = false;
		},
		drawtouchcancel: function(){
			this.pressed = false;
		},
		draw: function(){
			var self = this;
			if( !self.inDrawing ){
				//如果用户可以抽奖：
				if( self.chance>0 ){
					//启动抽奖过程。
					self.inDrawing = true;
					var result = Math.round( Math.random()*7 );

					var cycle = 0;
					var duration = 100;
					function move(){
						self.current++;
						if(self.current===8){
							self.current = 0;
							cycle++;
						};
						duration += 10;
						if( cycle===3&&self.current===result ){
							setTimeout(function(){
								self.showMask( 'get'+result );
								self.chance--;
								self.inDrawing = false;
							},1000);
						}else{
							setTimeout(move,duration);
						}
					}
					setTimeout(move,duration);

				}else{
					self.showMask('none');
				}
			};
		},
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
						self.help = `<img class="query" src="img/query.png"/> 查看如何使用学习卡`;
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
						self.help = `<img class="query" src="img/query.png"/> 查看如何使用`;
						self.pinkBtn = 'help';
						self.closeShown = true;
						break;
					case 'get7':
						self.square = '<img src="img/square_7.png">';
						self.info = '恭喜你获得<span>50元沪江学习卡</span>';
						self.desc = '请到“我的奖品”页面查看兑换码';
						self.help = `<img class="query" src="img/query.png"/> 查看如何使用`;
						self.pinkBtn = 'help';
						self.closeShown = true;
						break;
				}
				setTimeout(function(){
					self.maskShown = true;
					self.inProcessing = false;
				},300);
			};
		},
		closeMask: function(){
			this.maskShown = false;
		},
		toContact: function(){
			if( this.isLogin ){
				if( this.ios ){
					Local.openInside( location.href.replace('index.html','contact.html') );
				}else{
					location.href = './contact.html';
				}
			}else{
				this.signin();
			}
		},
		toMine: function(){
			if( this.ios ){
				Local.openInside( location.href.replace('index.html','mine.html') );
			}else{
				location.href = './mine.html';
			}
		}
	}
})