import {_} from './_.js';
import {ZeactElement} from './ZeactElement.js';
import {ZeactComponent} from './ZeactComponent.js';

var person = {
	name: 'John',
	wife: {
		name: 'Jane',
		father: {
			name: 'Robert'
		},
		number: [1,3,4,5,67,8,8]
	}
}
var man = _.deepClone(person);
man.wife.father.name = 'Micky';
man.wife.number[0] = 111111111;
console.log(person);

class Item extends ZeactComponent {
	constructor(props){
		super();
		this.props = props;
	}
	render(){
		var createElement = ZeactElement.createElement.bind(this);
		var fragment = 
			createElement(
				'li',
				{style: 'float:left; width:'+this.props.width+';'},
				createElement(
					'img',
					{
						src: this.props.src,
						style: 'height:6.9rem; margin:auto; display:block;'
					}
				)
			);
		return fragment;
	}
}

class Swiper extends ZeactComponent {
	constructor(props){
		super();
		this.refs = {};
		this.props = props;
		this.width = null;
		this.offset = 0;
		this.currentOne = 0;
		this.length = props.items.length;
		this.state = {
			currentOne: 0
		}
	}
	show(){
		this.refs.mask.display = 'block';
	}
	update(key){
		var self = this;
		switch(key){
			case 'currentOne':
				self.go( this.state.currentOne );
		}
	}
	go(i){
		var refs = this.refs;
		_.forEach( refs.pagination.children,function(child){
			child.style.background = 'white';
		} )
		refs.pagination.children[i].style.background = 'green';
		this.offset = -i*this.width;
		refs.train.style.cssText += 'transition:0.3s; transform:translate3d('+this.offset+'px,0,0)';
		//refs.number.innerHTML = this.state.currentOne;
	}
	setWidth(){
		this.width = Number( document.defaultView.getComputedStyle(this.refs.swiper).width.replace(/px/,'') );
	}
	render(){
		var self = this;
		var createElement = ZeactElement.createElement.bind(this);
		var refs = this.refs;
		var fragment = 
			createElement('div',
				{
					ref: 'swiper',
					style: 'position:relative; width:6rem; height:6.9rem; margin:auto; margin-top:3.35rem;'
				},
				createElement('ul',
					{	
						ref: 'train',
						style: 'position:absolute; width:'+self.length+'00%; height:100%;'
					},
					self.props.items.map(function(elem,i){
						return createElement(
							Item,
							{
								width: (100/self.length)+'%',
								src: 'img/card_'+i+'.png'
							}
						)
					})
				),
				//createElement('p',{ref:'number',style:'position:absolute; left:0; top:0;'},this.state.currentOne),
				createElement('ul',{ref:'pagination',style:'position:absolute; left:0; top:0; overflow:hidden;'},
					self.props.items.map(function(elem){
						return createElement('li',{style: 'float:left; width:0.2rem; height:0.2rem; margin:0.2rem; border-radius:50%; background:white;'})
					})
				)
			);
		
		refs.pagination.children[self.currentOne].style.background = 'green';
		_.forEach( refs.pagination.children,function(child,i){
			child.addEventListener('click',function(){
				self.currentOne = i;
				self.setState({
					currentOne: i
				})
			})
		} )
		// refs.items = [].slice.call(refs.train.children,0);
		// console.log(refs.items);
		// var firstClone = refs.items[0].cloneNode(true);
		// firstClone.style.cssText += 'position:absolute; top:0; right:-'+(100/self.length)+'%;';
		// refs.train.appendChild( firstClone );
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
			self.setState({
				currentOne: self.currentOne
			})
			//self.go( self.currentOne );
		})
		setInterval(function(){
			self.setWidth();
			self.currentOne++;
			if(self.currentOne>=self.length){
				self.currentOne = 0;
			};
			self.go( self.currentOne );
		},2000)
		window.addEventListener('resize',function(){
			self.setWidth();
			self.offset = -self.currentOne*self.width;
			refs.train.style.cssText += 'transition:0.1s; transform:translate3d('+self.offset+'px,0,0)';
		})
		//console.log(self)
		return fragment;
	}

}

export {Swiper};