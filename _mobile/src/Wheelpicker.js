function Part(name,items,wheelpicker){
	this.name = name;
	this.items = items;
	this.currentOne = 0;
	this.offset = 0;
	this.isMouseDown = false;
	this.wheelpicker = wheelpicker;
	this.init();
}
Part.prototype = {
	init: function(){
		this.render();
		this.renderItems( this.items );
		var self = this;
		$(document).ready(function(){
			self.itemH = Number( document.defaultView.getComputedStyle( self.item[0] ).height.replace(/px/,'') )
			console.log(self.itemH)
			self.pick(self.currentOne)
			self.listen();
		})
	},
	render: function(){
		//console.log(this.father)
		this.wheelpicker.parts.append(
			`<div class="part ${this.name}" style="float:left;width:${this.wheelpicker.itemWidth};">
				<div class="partHeader" style="height:0.5rem;line-height:0.5rem;text-align:center;"></div>
				<div class="window" style="position:relative;height:${'2.5rem'};background:lightgrey;overflow:hidden;">
					<div style="position:absolute;left:0;top:0;width:100%;height:80px;background:linear-gradient(#EFEFEF,transparent);z-index:5"></div>
					<div style="position:absolute;left:0;bottom:0;width:100%;height:80px;background:linear-gradient(transparent,#EFEFEF);z-index:5"></div>
					<div style="position:absolute;left:0;top:1rem;width:100%;height:1px;background:black;z-index:5"></div>
					<div style="position:absolute;left:0;top:1.5rem;width:100%;height:1px;background:black;z-index:5"></div>
					<ul class="wheel" style="background:lightgrey;">
					</ul>
				</div>
			</div>`
		);
		this.obj = this.wheelpicker.parts.find('.'+this.name);
		this.window = this.obj.find('.window');
		this.partHeader = this.obj.find('.partHeader');
		this.wheel = this.obj.find('.wheel');
	},
	renderItems: function(items){
		this.wheel.html('');
		for( var i=0;i<items.length;i++ ){
			items[i] = items[i] + (this.name==='years'?'年':'');
			items[i] = items[i] + (this.name==='months'?'月':'');
			items[i] = items[i] + (this.name==='days'?'日':'');
			this.wheel.append(
				'<li style="height:'+this.wheelpicker.itemHeight+';line-height:'+this.wheelpicker.itemHeight+';font-size:0.3rem;text-align:center">'+
					items[i]+
				'</li>'
			);
		}
		this.item = this.wheel.find('li').eq(0);
	},
	renderButtons: function(){
	},
	listen: function(){
		$(window).on('resize',this.resize.bind(this));
		this.window.on('touchstart',this.onTouchStart.bind(this));
		this.window.on('touchmove',this.onTouchMove.bind(this));
		this.window.on('touchend',this.onTouchEnd.bind(this))
	},
	setCurrentOne: function(){
		this.currentOne = - (Math.round( this.offset/this.itemH ) - 2);
		if( this.currentOne<0 ){
			this.currentOne = 0;
		}else if( this.currentOne>this.items.length-1 ){
			this.currentOne = this.items.length-1;
		}
	},
	autoScroll: function(direction){
		var self = this;
		this.interval = setInterval(function(){
			if(direction==='up'){
				self.offset += 3;
			}else if(direction==='down'){
				self.offset -= 3;
			}
			self.wheel.css({
				transition: '0s',
				transform: 'translate3d(0,'+self.offset+'px,0)'
			})
			self.setCurrentOne();
			if(self.currentOne===0||self.currentOne===self.items.length-1){
				clearInterval(self.interval);
				self.adjust();
			}
		},10);
	},
	adjust: function(){
		this.setCurrentOne();
		this.pick( this.currentOne );
	},
	pick: function(i){
		this.partHeader.html( this.items[i] );
		this.offset = -(i-2)*this.itemH;
		this.wheel.css({
			transition: '0.2s',
			transform: 'translate3d(0,'+this.offset+'px,0)'
		})
		this.isDown = false;
	},
	resize: function(){
		this.itemH = this.item.height();
		this.pick(this.currentOne);
	},
	onTouchStart: function(e){
		e.preventDefault();
		clearInterval(this.interval);
		this.isDown = true;
		this.Y0 = this.Y1 = e.originalEvent.changedTouches[0].pageY;
		this.t0 = new Date().getTime();
	},
	onTouchMove: function(e){
		this.Y2 = e.originalEvent.changedTouches[0].pageY;
		var distance = this.Y2 - this.Y1;
		this.offset += distance;
		this.wheel.css({
			transition: '0s',
			transform: 'translate3d(0,'+this.offset+'px,0)'
		})
		this.Y1 = this.Y2;
	},
	onTouchEnd: function(e){
		this.Y2 = e.originalEvent.changedTouches[0].pageY;
		var distance = this.Y2 - this.Y1;
		var totalDis = this.Y2 - this.Y0;
		this.t2 = new Date().getTime();
		// console.log(this.t2-this.t0)
		// console.log(totalDis)
		if( totalDis!==0&&this.t2-this.t0<100 ){
			if( this.Y2-this.Y0>=0 ){
				this.autoScroll('up');
			}else{
				this.autoScroll('down');
			}
		}else{
			this.offset += distance;
			this.adjust();
		}
	}
}

function Wheelpicker(config){
	this.elem = config.elem;
	this.obj = $(this.elem);
	this.names = config.names;
	this.items = config.items;
	this.itemHeight = '0.5rem';
	this.count = config.count || 3;
	this.itemWidth = (1/this.names.length)*100+'%';
	this.init();
}
Wheelpicker.prototype = {
	init: function(){
		this.renderParts();
		this.renderButtons();
	},
	renderParts: function(){
		this.obj.prepend(
			'<div class="parts" style="position:relative;width:100%;position:relative;overflow:hidden;"></div>'
		);
		this.parts = this.obj.find('.parts');
		this.css();
		for( var i=0;i<this.names.length;i++ ){
			new Part( this.names[i],this.items[i],this );
		};
	},
	renderButtons: function(){
		this.obj.append(
			'<div style="overflow:hidden;">'+
				'<div class="confirm" style="float:left;width:50%;height:40px;line-height:40px;text-align:center;">确定</div>'+
				'<div class="cancel" style="float:left;width:50%;height:40px;line-height:40px;text-align:center;">取消</div>'+
			'</div>'
		),
		this.confirmBtn = this.obj.find('.confirm');
	},
	css: function(){
		this.obj.css({
			position: 'relative',
			width: '100%',
			'font-size': '0.3rem',
			overflow: 'hidden'
		})
	}
}