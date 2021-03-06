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
		//从服务器获取数据。
		this.getData();
		//监听事件。
		//this.listen();

		window.addEventListener('load',this.play.bind(this));
		this.listen2();
	},
	listen2: function(){
		var self = this;
		this.toTop10.on('click',function(){
			//window.scroll(0,0)
			//self.myResult.hide();
			self.result.show().css({
				transform: 'translate3d(0,0,0)'
			})
		})
		var mark = 0;
		self.nav.on('click',function(){
			if( mark===0 ){
				self.navText.html('点击查看我的奖项');
				self.result.show().css({
					transform: 'translate3d(0,0,0)'
				})
				mark = 1;
			}else{
				self.navText.html('点击查看前10名榜单');
				self.result.show().css({
					transform: 'translate3d(0,100%,0)'
				})
				mark = 0;
			}
		});
		self.toContact.on('click',()=>{
			var url = location.href.replace('act160801','act160804').replace('index.html','contact.html');
			location.href = url;
		})
	},
	play: function(){
		var self = this;
		var Y0,Y1;
		// 开始信封下落的动画：
		this.envelope.addClass('bounceInDown');
		setTimeout(function(){
			// 开始手指上下滑动的动画：
			self.hand.show();
			self.hand.addClass('upDown');
			setTimeout(function(){
				// 开始其他元素的动画：
				self.colors.addClass('ka-colors');
				self.bugleLeft.addClass('ka-bugle-left');
				self.bugleRight.addClass('ka-bugle-right');
				self.pDown.addClass('ka-pDown');
				self.cloud.addClass('ka-cloud');
			},0)
			self.button.on('touchstart',function(e){
				Y0 = e.originalEvent.changedTouches[0].pageY;
			});
			self.button.on('touchmove',function(e){
				Y1 = e.originalEvent.changedTouches[0].pageY;
				// 如果用户的手指在seal上向下滑动了：
				if( Y1>Y0 ){
					self.hand.hide();
					self.button.addClass('buttonDown');
					self.paper.addClass('paperUp');
					setTimeout(function(){
						// 切换到下一页：
						self.play2();
					},800);
				}
			});
		},1200)
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
				data.isLogin = true;
				data.myrank = 1;
				data.myscore = 0;
				data.mynick = '超人';
				data.myavor = null;
				data.timeleft = 0;
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
				self.renderItems(data.rankList);
			}
	},
}



new App({
	elem: document.getElementsByTagName('body')[0]
})