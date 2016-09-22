import {Swiper} from './Swiper.js';

function App(config){
	this.elem = config.elem;
	this.obj = $(this.elem);

	this.mask = this.obj.find('.mask');

	this.main = this.obj.find('.main');
	this.countdown = this.obj.find('.countdown');
	this.days = this.obj.find('.days');
	this.hours = this.obj.find('.hours');
	this.minutes = this.obj.find('.minutes');
	this.signin = this.obj.find('.signin');
	this.mine = this.obj.find('.mine');
	this.myAvatar = this.obj.find('.myAvatar');
	this.myName = this.obj.find('.myName');
	this.coinNumber = this.obj.find('.coinNumber');
	this.myRanking = this.obj.find('.myRanking');
	this.toBookshelf = this.obj.find('.toBookshelf');
	this.list = this.obj.find('.list');
	this.more = this.obj.find('.more');

	this.nav = this.obj.find('.nav');
	this.navText = this.obj.find('.nav-text');

	this.mask = this.obj.find('.mask');
	this.colors = this.obj.find('.colors');
	this.bugleLeft = this.obj.find('.bugle-left');
	this.bugleRight = this.obj.find('.bugle-right');
	this.envelope = this.obj.find('.envelope');
	this.hand = this.obj.find('.hand');
	this.button = this.obj.find('.button');
	this.paper = this.obj.find('.paper');
	this.pDown = this.obj.find('.pDown');
	this.cloud = this.obj.find('.cloud');

	this.shadow = this.obj.find('.shadow');

	this.myResult = this.obj.find('.myResult');
	this.__name = this.obj.find('.__name');
	this.__ranking = this.obj.find('.__ranking');
	this.rPrize = this.obj.find('.rPrize');
	this.myPrize = this.obj.find('.myPrize');
	this.toContact = this.obj.find('.toContact');
	this.toTop10 = this.obj.find('.toTop10');

	this.result = this.obj.find('.result');
	this.list_1 = this.obj.find('.list-1');
	this.list_2 = this.obj.find('.list-2');
	this.list_3 = this.obj.find('.list-3');
	this.list_4 = this.obj.find('.list-4');

	this.testMode = true;
	//根据document.title判断该页面是安卓版还是ios版。
	this.ios = document.title==='ios'?true:false;
	console.log(document.title)

	this.data = null;

	this.init();
}

App.prototype = {
	init: function(){
		//生成一个Swiper实例。
		new Swiper({
			elem: document.getElementsByClassName('swiper')[0],
			carousel: true,
			sticky: true
		})
		//从服务器获取数据。
		this.getData();
		//监听事件。
		this.listen();
	},
	play2: function(){
		var self = this;
		self.myResult.show().addClass('resultShow');
		setTimeout(function(){
			self.nav.show().addClass('ka-nav');
		},500);
	},
	renderList: function(items){
		function item(i){
			var __item = `
				<ul class="result-item">
					<li class="avatar" style="background: url(img/round.png); background-size: 100%;">
						<div class="avatar-img">
							<img src="${items[i].avor}"/>
						</div>
					</li>
					<li class="name">
						${items[i].name}
					</li>
					<li class="coin">
						消耗书币：<span>${items[i].score}</span>
					</li>
				</ul>
			`;
			return __item;
		}
		this.list_1.append( item(0) );
		this.list_2.append( item(1)+item(2) );
		this.list_3.append( item(3)+item(4)+item(5) );
		this.list_4.append( item(6)+item(7)+item(8)+item(9) );
	},
	getAndroidOSVersion: function(){
		console.log( navigator )
		//变量v的值为用户手机的安卓操作系统的版本号首位。
		var v = Number(navigator.userAgent.match(/Android \d/)[0].replace(/Android /,''));
		if( v<5 ){
			this.toBookshelf.hide();
		};
	},
	getData: function(){
		var self = this;
		var data = {
			rankList: [
				{
					avor: 'img/default.jpg'
				}
			]
		};
		console.log(data);
		//如果开启了testMode，则对服务器返回的原始数据作以下修改以测试各种不同状态下页面的状态。
		if( self.testMode ){
			data.isLogin = false;
			data.myrank = 1;
			data.myscore = 0;
			data.mynick = '超人';
			data.myavor = null;
			data.timeleft = 1000000000;
			//data.rankList = data.rankList.slice(0,5);
		}
		self.data = data;
		//如果剩余时间小于等于零，即如果活动结束：
		if( data.timeleft<=0 ){
			self.main.hide();
			// 渲染中奖用户的列表：
			//self.renderList( data.rankList );
			// 如果当前用户没有登录或没有获奖：
			if( data.isLogin===false||data.myrank>10||data.myrank<=0 ){
				self.result.css({
					transition: '0s',
					transform: 'translate3d(0,0,0)'
				})
				self.shadow.hide();
				self.result.show();
			// 如果当前用户获奖了：
			}else{
				var chars = ['零','一','二','三','四','五','六','七','八','九','十'];
				self.__name.html( data.mynick );
				self.__ranking.html( `第${chars[data.myrank]}名` );
				var src = '';
				var name = '--';
				if( data.myrank===1 ){
					src = 'img/r_prize_0.png';
					name = '[ 联想(Lenovo)小新Air 13.3英寸超轻薄笔记本电脑 ]';
				}else if( data.myrank<=3 ){
					src = 'img/r_prize_1.png';
					name = '[ iPhone6 ]';
				}else if( data.myrank<=6 ){
					src = 'img/r_prize_2.png';
					name = '[ 小米5 ]';
				}else if( data.myrank<=10 ){
					src = 'img/r_prize_3.png';
					name = '[ 京东卡500元 ]';
				};
				self.rPrize.attr('src',src);
				self.myPrize.html( name );
				self.mask.show();
			}
		// 如果活动没有结束：
		}else{
			self.main.show();
			//开始倒计时。
			self.initCountdown(data.timeleft);
			//如果用户已登录：
			self.update( data );
			self.renderItems(data.rankList);
		}
	},
	update: function(data){
		var self = this;
		if( data.isLogin ){
			self.signin.hide();
			if( !data.mynick&&!data.myavor ){
				self.myAvatar.attr('src','img/default.png');
				self.myName.html('游客');
			}else{
				self.myAvatar.attr('src',data.myavor);
				self.myName.html(data.mynick);
			}
			self.coinNumber.html(data.myscore);
			self.myRanking.html(
				(data.myrank===-1||data.myscore===0)?'--':
					(data.myrank>200?'200+':data.myrank)
			);
			self.mine.show();
		}
	},
	initCountdown: function(time){
		var self = this;
		self.renderTime(time);
		setInterval(function(){
			time -= 60000;
			self.renderTime(time);
		},60000)
	},
	renderTime: function(time){
		var _days = time/1000/3600/24;
		var days = Math.floor( _days );
		var _hours = (_days-days)*24;
		var hours = Math.floor( _hours );
		var minutes = Math.floor( (_hours-hours)*60 );
		days = days<10?('0'+days):days;
		hours = hours<10?('0'+hours):hours;
		minutes = minutes<10?('0'+minutes):minutes;
		this.days.html(days);
		this.hours.html(hours);
		this.minutes.html(minutes);
	},
	renderItems: function(items){
		// console.log(this.data)
		var str;
		for( var i=0;i<(items.length<15?items.length:15);i++ ){
			if( i<10 ){
				str = `<img src="img/badge${i<3?i:''}.png"/>`;
			}else{
				str = '';
			}
			this.list.append(
				`<li class="listItem">
					<div class="badge">
						${str}
						<p>${i+1}</p>
					</div>
					<div class="avatar">
						${i===0?
						'<img class="crown" src="img/crown.png"/>':''
						}
						<div class="round">
							<img src="${items[i].avor}"/>
						</div>
					</div>
					<p class="name" style="${items[i].rank===this.data.myrank?'color:#f65555':''}">
						${items[i].name}
					</p>
					<p class="number" style="${items[i].rank===this.data.myrank?'color:#f65555':''}">
						${items[i].score}
					</p>
				</li>`
			)
		}
	},
	listen: function(){
		var self = this;
		self.signin.on('touchstart',(e)=>{
			self.signin.css({
				background: '#5FB07E'
			})
		});
		self.signin.on('touchend',(e)=>{
			self.signin.css({
				background: '#6CC990'
			})
			self.data.isLogin = true;
			self.update( self.data );
		});
		self.toBookshelf.on('click',function(){
			Local.openBookShelf();
		});
		self.more.on('touchstart',function(e){
			e.preventDefault();
			self.more.css({
				background: '#5FB07E'
			})
		})
		self.more.on('touchend',function(e){
			e.preventDefault();
			self.more.css({
				background: '#6CC990'
			})
			if( self.ios ){
				Local.openInside( location.href.replace(/index/,'more') );
			}else{
				location.href = location.href.replace(/index/,'more');
			}
		})
	}
}



new App({
	elem: document.getElementsByTagName('body')[0]
})