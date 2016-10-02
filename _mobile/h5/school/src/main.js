import './rem.js';

Vue.component( 'mask-loading',require('./components/mask-loading.vue') );
Vue.component( 'mask',require('./components/mask.vue') );
Vue.component( 'focus',require('./components/focus.vue') );
Vue.component( 'lottery-box',require('./components/lottery-box.vue') );

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
		
		ios: /ios/.test(document.title)?true:false,
		testMode: false,

		maskState: 'pending',

		trophies: [0,1,2,3,4,5,6,7],
		result: -1,

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
	watch: {

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
	created: function(){
		this.$on('DRAW',()=>{
			setTimeout(()=>{
				this.result = Math.round( Math.random()*7 );
			},50);
		});
		this.$on('SHOW_MASK',(i)=>{
			this.maskState = i;
		});
		this.$on('CLOSE_MASK',()=>{
			this.maskState = 'pending';
		})
		this.$on('MINUS_CHANCE',()=>{
			this.chance--;
			this.result = -1;
		})
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
			self.$dispatch( 'SHOW_MASK',i )
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
		}
	}
})