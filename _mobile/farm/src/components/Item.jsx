require('./Item.less');

import {$$rootDir,$$itemDir,$$phpDir,$$imgDir} from '../common.jsx';
import {CommentBox} from './CommentBox.jsx';
import {Swiper} from './Swiper.jsx';

class Item extends React.Component {
	constructor(){
		super();

		this.state = {
			item: {
				name: '--',
				price: 0,
				desc: '--',
				quantity: 1
			},
			thumbnails: [],
			options: {},
			tabPanel: 0,
			thumbnail: 0
		};
		window.scroll(0,0);
		console.log('<Item/> constructing',this.props,this.state);
	}
	componentWillMount(){
		this.getItem();
	}
	getItem(){
		var self = this;
		var id = location.hash.match(/\?id=(\w+)/)[1];
		var item;
		var options = {};
		var items = require('../data/items.js').dataItems;
		items.forEach((a)=>{
			if( id===a.id ){
				item = a;
				item.quantity = 1;
				if( item.specs ){
					for( var key in item.specs ){
						options[key] = '';
					}
				};
			}
		})
		var newThumbnails = [{
			img: 'img/items/'+id+'/t.jpg'
		},{
			img: 'img/items/'+id+'/t.jpg'
		},{
			img: 'img/items/'+id+'/t.jpg'
		},{
			img: 'img/items/'+id+'/t.jpg'
		}];
		self.setState({
			item: item,
			options: options,
			thumbnails: newThumbnails
		})

		// fetch('/getItem', {
		// 	method: 'POST',
		// 	headers: {
		// 		// 'Accept': 'application/json',
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify({itemID:itemID})
		// }).then(function(res){
		// 	return res.json();
		// }).then(function(data){
		// 	console.log('<Item/> item received');
		// 	data.quantity = 1;
		// 	self.setState({
		// 		item: data
		// 	})	
		// }).catch(function(e,f,g){
		// 	console.log(e,f,g);
		// })
	}
	increase(){
		this.state.item.quantity++;
		this.setState({
			item:this.state.item
		});
	}
	decrease(){
		this.state.item.quantity>1?this.state.item.quantity--:'';
		this.setState({
			item:this.state.item
		});		
	}
	toImg( index ){
		this.setState({
			thumbnail: index
		});
	}
	toTab( index ){
		this.setState({
			tabPanel: index
		});
	}
	addToCart(){
		for( var key in this.state.options ){
			if( this.state.options[key] === '' ){
				this.props.act({
					type: 'ALERT',
					text: `请选择${key}!`
				})
				return;
			}
		}
		var newItem = JSON.parse( JSON.stringify(this.state.item) );
		newItem.selected = false;
		newItem.spec = this.getSpec(this.state.options);
		// Perform an action.
		this.props.act({
			type:'ADD_TO_CART',
			item: newItem
		});
		this.props.act({
			type: 'ALERT',
			text: '成功加入购物车'
		});
	}
	getSpec( options ){
		var spec = '';
		for( var key in options ){
			spec += key+':'+options[key]+';';
		}
		return spec;
	}
	buyNow(){
		console.log( JSON.stringify([this.state.item]) );
		sessionStorage.items = JSON.stringify([this.state.item]);
		location.hash = 'confirm_order';
	}
	back(){
    	history.go(-1);
    }
    toCart(){
    	location.hash = 'shopping_cart';
    }
    checkOption(key,value){
    	var newOptions = JSON.parse( JSON.stringify(this.state.options) );
    	newOptions[key] = value;
    	this.setState({
    		options: newOptions
    	})
    }
	render(){
		console.log('<Item/> rendering',this.props,this.state);
		var self = this;
		var item = this.state.item;
		return (
			<div className="ITEM">
				<div className="topbar c-topbar">
					<div className="c-icon">
						<i className="fa fa-angle-left" onClick={this.back.bind(this)}></i>
					</div>
					<div className="c-text">商品详情</div>
				</div>
				<div className="topbar-shadow"></div>
				
				<Swiper 
					sticky={false}
					autoplay={false}
					items={this.state.thumbnails}/>
				
				<div className="info">
					<p className="name">{item.name}</p>
					<p className="price">￥{item.price.toFixed(2)}</p>
				</div>

				{item.specs?(function(){
					var arr = [];
					for( var key in item.specs ){
						arr.push(
							<ul className="spec">
								<li className="_key">{key}</li>
								{item.specs[key].map(a=>{
									return (
										<li className={a===self.state.options[key]?'_option active':'_option'} 
										onClick={self.checkOption.bind(self,key,a)}>
											{a}
										</li>
									)
								})}
							</ul>
						);
					}
					return arr;
				})():null}

				<div className="block-quantity">
					<p>购买数量</p>
					<div className="counter">
						<p className="minus" onClick={this.decrease.bind(this)}>-</p>
						<p className="quantity">{item.quantity}</p>
						<p className="plus" onClick={this.increase.bind(this)}>+</p>
					</div>
				</div>
				
				<div className="details">
					<img src={'./img/items/1609291750/d0.jpg'||'./img/grey.svg'}/>
				</div>
			
				<div className="item_nav_shadow"></div>
				<div className="item_nav">
					<div className="part-left">
						<div className="favor">
							<p className="icon-star">
								<i className="fa fa-star-o"></i>
							</p>
							<p className="text-favor">
								收藏
							</p>
						</div>
						<div className="favor" onClick={this.toCart.bind(this)}>
							<div className="redDot" style={{display:(this.props.inCart===0?'none':'block')}}></div>
							<p className="icon-star">
								<i className="fa fa-shopping-cart"></i>
							</p>
							<p className="text-favor">
								购物车
							</p>
						</div>
					</div>
					<a className="to_cart" onClick={this.addToCart.bind(this)}>加入购物车</a>
					<a className="to-buy" onClick={this.buyNow.bind(this)}>立即购买</a>
				</div>
			</div>
		)
	}
}

export {Item};