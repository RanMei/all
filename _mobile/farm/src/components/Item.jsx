import {$$rootDir,$$itemDir,$$phpDir,$$imgDir} from '../common.jsx';
import {CommentBox} from './CommentBox.jsx';
import {Swiper} from './Swiper.jsx';

var swiperItems = [
	'img/index/slider_0.jpg',
	'img/index/slider_1.jpg',
	'img/index/slider_2.jpg',
	'img/index/slider_3.jpg'
]

class Item extends React.Component {
	constructor(){
		super();
		this.state = {
			item: {
				name: '--',
				price: 0,
				desc: '',
				quantity: 1
			},
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
		var items = require('../data/items.js').dataItems;
		items.forEach((a)=>{
			if( id===a.id ){
				item = a;
				item.quantity = 1;
			}
		})
		self.setState({
			item: item
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
		var cart = (typeof sessionStorage.shoppingCart==='string')? JSON.parse( sessionStorage.shoppingCart ):[];
		cart.push( this.state.item );
		sessionStorage.shoppingCart = JSON.stringify(cart);
		console.log(sessionStorage)
		this.props.act({
			type: 'ALERT',
			text: '成功加入购物车'
		});
		// Perform an action.
		this.props.act({
			type:'ADD_TO_CART',
			itemID: this.state.item.id,
			quantity: this.state.item.quantity
		});
	}
	buyNow(){
		console.log( JSON.stringify([this.state.item]) );
		sessionStorage.items = JSON.stringify([this.state.item]);
		location.hash = 'confirm_order';
	}
	back(){
    	console.log(111)
    	history.go(-1);
    }
	render(){
		console.log('<Item/> rendering',this.props,this.state);
		var item = this.state.item;
		return (
			<div className="ITEM">
				<div className="topbar">
					<i className="fa fa-angle-left" onClick={this.back.bind(this)}></i> <span className="_text">商品详情</span>
				</div>
				<Swiper items={swiperItems}/>
				<div className="info">
					<p className="name">{item.name}</p>
					<p className="price">￥{item.price.toFixed(2)}</p>
				</div>
				<div className="block-quantity">
					<p>购买数量</p>
					<div className="counter">
						<p className="minus" onClick={this.decrease.bind(this)}>-</p>
						<p className="quantity">{item.quantity}</p>
						<p className="plus" onClick={this.increase.bind(this)}>+</p>
					</div>
				</div>
				
				<div className="details">
					<img src={'./img/items/'+item.id+'/d0.jpg'}/>
				</div>

					<ul>
						<li className="selected">商品介绍</li>
						<li>商品参数</li>
						<li>用户评价</li>
					</ul>
			
				<div className="item_nav_shadow"></div>
				<div className="item_nav">
					<div className="favor">
						<p className="icon-star">
							<i className="fa fa-star-o"></i>
						</p>
						<p className="text-favor">
							收藏
						</p>
					</div>
					<a className="to_cart" onClick={this.addToCart.bind(this)}>加入购物车</a>
					<a className="to-buy" onClick={this.buyNow.bind(this)}>立即购买</a>
				</div>
			</div>
		)
	}
}

export {Item};