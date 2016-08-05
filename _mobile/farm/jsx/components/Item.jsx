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
		var item = {
			name: null,
			price: 0,
			desc: null
		};
		item.quantity = 1;
		this.state = {
			item: item,
			tabPanel: 0,
			thumbnail: 0
		};
		window.scroll(0,0);
		console.log('<Item/> constructing',this.props,this.state);
		this.getItem();
	}
	componentWillMount(){
	}
	getItem(){
		var self = this;
		var itemID = location.hash.match(/\?id=(\w+)/)[1];
		fetch('/getItem', {
			method: 'POST',
			headers: {
				// 'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({itemID:itemID})
		}).then(function(res){
			return res.json();
		}).then(function(data){
			console.log('<Item/> item received');
			data.quantity = 1;
			self.setState({
				item: data
			})	
		}).catch(function(e,f,g){
			console.log(e,f,g);
		})
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
	toCart(){
		// Perform an action.
		this.props.act({
			type:'ADD_TO_CART',
			itemID: this.state.item.itemID,
			quantity: this.state.item.quantity
		});
	}
	buyNow(){
		console.log( JSON.stringify([this.state.item]) );
		sessionStorage.items = JSON.stringify([this.state.item]);
		location.hash = 'confirm_order';
	}
	render(){
		console.log('<Item/> rendering',this.props,this.state);
		var item = this.state.item;
		return (
			<div className="ITEM">

				<Swiper items={swiperItems}/>
			
				<div className="desc">
					<div className="upper">
						<h1 className="price">{item.price.toFixed(2)}</h1>
						<div className="counter">
							<p className="minus" onClick={this.decrease.bind(this)}>-</p>
							<p className="quantity">{item.quantity}</p>
							<p className="plus" onClick={this.increase.bind(this)}>+</p>
						</div>
					</div>
					<div className="lower">
						<p>{item.name}</p>
						<p>{item.desc}</p>
					</div>
				</div>
				
				<div className="item_spec">
					<p>商品规格</p>
					<div className="spec spec1 selected">24粒/盒</div>
					<div className="spec spec2">8粒/盒</div>
				</div>
				
				<div className="details">
					<ul>
						<li className="selected">商品介绍</li>
						<li>商品参数</li>
						<li>用户评价</li>
					</ul>
					<div className="line">
					</div>
					<div className="square">
						<img src="0001/d0.jpg"/>
						<img src="0001/d1.jpg"/>
						<img src="0001/d2.jpg"/>
					</div>
				</div>
			
				<div className="item_nav_shadow"></div>
				<div className="item_nav">
					<a href="#/home" className="home">	
						<img src="./img/homepage.png"></img>
						<p>首页</p>
					</a>
					<a href="javascript:void(0);" className="to_cart">加入购物车</a>
				</div>
			</div>
		)
	}
}

export {Item};