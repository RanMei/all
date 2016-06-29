import {$$rootDir,$$itemDir,$$phpDir,$$imgDir} from '../common.jsx';
import {CommentBox} from './CommentBox.jsx';

function getItem(){
	var itemID = location.hash.match(/\?id=(\w+)/)[1];
	var item;
	console.log(itemID)
	$.ajax({
		headers:{
			'Content-type': 'application/json'
		},
		type:'post',
		url:'/getItem',
		data: JSON.stringify({itemID:itemID}),
		async: false
	}).done(function(data){
		//console.log( data );
		console.log('item received');
		item = data;
	}).error(function(e,f,g){
		console.log(e,f,g);
	})
	return item;
}

class Item extends React.Component {
	constructor(){
		super();
		var item = getItem();
		item.quantity = 1;
		this.state = {
			item: item,
			tabPanel: 0,
			thumbnail: 0
		};
		window.scroll(0,0);
		console.log('<Item/> constructing',this.props,this.state);
	}
	componentWillMount(){
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
				<div className="slider">
					<ul className="train">
						<a href=""><img src="0001/2.jpg"/></a>
						<a href=""><img src="0001/0.jpg"/></a>
						<a href=""><img src="0001/1.jpg"/></a>
						<a href=""><img src="0001/2.jpg"/></a>
					</ul>
					<ul className="tabs">
						<li className="selected"></li><li></li><li></li><li></li>
					</ul>
				</div>
			
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