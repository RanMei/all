import {ZeactElement} from './ZeactElement.js';
import {ZeactComponent} from './ZeactComponent.js';

function Item(){
	this.refs = {};
}
Item.prototype = new ZeactComponent();
Item.prototype.render = function(){

}

function Swiper( props ){
	this.refs = {};
	this.props = props;
	this.width = null;
	this.offset = 0;
	this.currentOne = 0;
	this.length = props.items.length;
}
Swiper.prototype = new ZeactComponent();
Swiper.prototype.show = function(){
	this.refs.mask.display = 'block';
}
Swiper.prototype.go = function(i){

}
Swiper.prototype.setWidth = function(){
	this.width = Number( document.defaultView.getComputedStyle(this.refs.swiper).width.replace(/px/,'') );
}
Swiper.prototype.render = function(){
	var self = this;
	var createElement = ZeactElement.createElement.bind(this);
	var refs = this.refs;
	var fragment = 
		createElement('div',
			{
				ref: 'swiper',
				style: 'width:5.4rem; height:6.9rem; margin:auto; background:red; overflow:hidden;'
			},
			[
			createElement('ul',
				{	
					ref: 'train',
					style: 'width:'+self.length+'00%; height:100%;'
				},
				self.props.items.map(function(elem){
					return createElement('li',{style: 'float:left; width:'+(100/self.length)+'%;'},[elem+''])
				})
			)]
		);
	refs.swiper.addEventListener('touchstart',function(e){
		self.setWidth();
		self.X0 = self.X1 = e.changedTouches[0].pageX;
	})
	refs.swiper.addEventListener('touchmove',function(e){
		self.X2 = e.changedTouches[0].pageX;
		var distance = self.X2 - self.X1;
		self.offset += distance;
		self.X1 = self.X2;
		refs.train.style.cssText += 'transition:0s; transform:translate3d('+self.offset+'px,0,0)';
	})
	refs.swiper.addEventListener('touchend',function(e){
		self.X2 = e.changedTouches[0].pageX;
		var distance = self.X2 - self.X0;
		if( distance<0&&self.currentOne<self.length-1 ){
			self.currentOne++;
		}else if( distance>0&&self.currentOne>0 ){
			self.currentOne--;
		}
		self.offset = -self.currentOne*self.width;
		refs.train.style.cssText += 'transition:0.3s; transform:translate3d('+self.offset+'px,0,0)';
	})
	window.addEventListener('resize',function(){
		self.setWidth();
		self.offset = -self.currentOne*self.width;
		refs.train.style.cssText += 'transition:0.1s; transform:translate3d('+self.offset+'px,0,0)';
	})
	return fragment;
}

export {Swiper};