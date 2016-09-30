require('./ShoppingCart.less');

import {Navbar} from './Navbar.jsx';

var NavbarS={width:"1000px",height:"60px",background:"red"};

const ItemStyle = {borderBottom:'1px solid grey'};
const LiStyle = {float:'left',width:'20%'};

class ItemList extends React.Component {
	render(){
		var that = this;
		return (
			<div>
				<ul>
				{that.props.items.map(function(x,i){
					return(
					<li className='item' key={x.name}>
						<input className="check" type="checkbox" checked={that.props.items[i].checked} onChange={that.props.checkThis.bind(that,i)}/>
						<div className="thumbnail"><img src={$$itemDir+x.itemID+'/0.jpg'}/></div>
						<p className="name">{x.name}</p>
						<p className="spec">{x.description}</p>
						<p className="price">￥{x.price}</p>
						<div className="counter">
							<div className="minus" onClick={that.props.minusOne.bind(that,i)}>-</div>
							<div className="quantity">{x.quantity}</div>
							<div className="plus" onClick={that.props.plusOne.bind(that,i)}>+</div>
						</div>
						<div className="subtotal">￥{x.price*x.quantity}</div>
						<p className="manipulation">
							<span className="delete" onClick={that.props.remove.bind(that,i)}>删除</span><br/>
							<span className="concern">移到我的关注</span>
						</p>
					</li>
					);
				})}
				</ul>
			</div>
		)
	}
}

// <ShoppingCart items={} />
class ShoppingCart extends React.Component {
	constructor (props){
		super(props);
		// this.state = {
		// 	items: []
		// }
		//this.getItems();
	}
	getItems(){
		var self = this;

		var items = JSON.parse( sessionStorage.shoppingCart );

		items.forEach((a)=>{
			a.selected = false;
		})

		this.state.items = items;
		
		// fetch('/getShoppingCart', {
		// 	method: 'POST',
		// 	headers: {
		// 		// 'Accept': 'application/json',
		// 		//'Content-Type': 'application/json'
		// 	}
		// }).then(function(res){
		// 	return res.json();
		// }).then(function(data){
		// 	console.log('<ShoppingCart/> item received',data);
		// 	self.setState({
		// 		items: data
		// 	})	
		// }).catch(function(e,f,g){
		// 	console.log(e,f,g);
		// })
	}
	getInitialState(){

	}
	componentWillMount(){
		// this.setState({
		// 	items: this.props.user.shoppingCart||[]
		// })
	}
	componentDidMount(){
		//console.log('<ShoppingCart/> mount',this.props,this.state)
	}
	componentWillReceiveProps(newProps){
		// this.setState({
		// 	items: typeof newProps.user.shoppingCart==='object'?newProps.user.shoppingCart:[]
		// })
	}
	componentDidUpdate(){
	}

	// computed
	allChecked(){
		for(var i=0;i<this.props.items.length;i++){
			if( !this.props.items[i].selected ){
				return false;
			};
		};
		return true;
	}
	getTotalPrice(){
		var totalPrice = 0;
		for(var i=0;i<this.props.items.length;i++){
			if(this.props.items[i].selected===true){
				totalPrice+=this.props.items[i].price*this.props.items[i].quantity;
			};
		}
		return totalPrice;
	}
	getTotalQuantity( items ){
		var totalQuantity = 0;
		for(var i=0;i<items.length;i++){
			if( items[i].selected===true ){
				totalQuantity++;
			};
		}
		return totalQuantity;
	}
	// methods
	checkAll(){
		if( this.allChecked() ){
			this.props.act({
				type: 'UNCHECK_ALL'
			})
			// for(var i=0;i<this.state.items.length;i++){
			// 	this.state.items[i].selected = false;
			// };
			// this.state.allChecked = false;
		}else{
			this.props.act({
				type: 'CHECK_ALL'
			})
			// for(var i=0;i<this.state.items.length;i++){
			// 	this.state.items[i].selected = true;
			// };
			// this.state.allChecked = true;
		};
		// this.setState({
		// 	// allChecked: this.state.allChecked,
		// 	items: this.state.items
		// });
	}
	checkThis(i){
		this.props.act({
			type: 'CHECK_THIS',
			i: i
		})

		// this.state.items[i].selected = this.state.items[i].selected?false:true;
		// // if( this.state.items[i].selected===false ){
		// // 	this.state.allChecked = false;
		// // }
		// this.setState({
		// 	// allChecked: this.state.allChecked,
		// 	items: this.state.items
		// });
	}
	minusOne(i) {
		if( this.props.items[i].quantity>1 ){
			this.props.act({
				type: 'MINUS',
				i: i
			})
		};

		// if( this.state.items[i].quantity>1 ){
		// 	this.state.items[i].quantity--;
		// 	this.setState({
		// 		items: this.state.items
		// 	});
		// };
	}
	plusOne(i) {
		this.props.act({
			type: 'PLUS',
			i: i
		})
		// this.state.items[i].quantity++;
		// this.setState({
		// 	items: this.state.items
		// });
	}
	remove(i){
		this.props.act({
			type: 'REMOVE'
		})
		// var items = JSON.parse( JSON.stringify(this.state.items) );
		// var newItems = [];
		// items.forEach((a)=>{
		// 	if( !a.selected ){
		// 		newItems.push(a);
		// 	}
		// })
		// this.setState({
		// 	items: newItems
		// })
		// sessionStorage.shoppingCart = JSON.stringify(newItems);
		// this.props.act({
		// 	type:'REMOVE_ITEM',
		// 	itemID:this.state.items[i].itemID
		// })
	}
	render() {
		//console.log(React);
		//console.log(Function);
		console.debug('<ShoppingCart/> rendering',this.props,this.state)
		return (
			<div className="SHOPPING_CART">
				<div className="header">
					购物车<span className="remove" onClick={this.remove.bind(this)}>删除</span>
				</div>
				
				{this.props.items.map( (item,i)=>{
					return (
						<div className="item">
							<div className="part part-left">
								<div className={item.selected?'circle active':'circle'} onClick={this.checkThis.bind(this,i)}>
									<i className="fa fa-check"></i>
								</div>
							</div>
							<img className="part thumbnail" src={"img/items/"+item.id+"/t.jpg"}/>
							<div className="part part-3">
								<p className="name">{item.name}</p>
								<p className="spec">{item.spec}</p>
								<div className="counter">
									<p className="counter1" onClick={this.minusOne.bind(this,i)}>-</p>
									<p className="counter2">{item.quantity}</p>
									<p className="counter3" onClick={this.plusOne.bind(this,i)}>+</p>
								</div>
							</div>
							<div className="part part-4">
								<p className="price">￥{item.price.toFixed(2)}</p>
								<p className="quantity">x{item.quantity}</p>
							</div>
						</div>
					);
				})}

				<div className="footer">
					<div className={this.allChecked()?'circle active':'circle'} onClick={this.checkAll.bind(this)}>
						<i className="fa fa-check"></i>
					</div>
					<p className="text-all">全选</p>
					<a className="pay" href="">去结算({this.getTotalQuantity(this.props.items)})</a>
					<p className="sum">总计：<span className="money">￥{this.getTotalPrice().toFixed(2)}</span></p>
					
				</div>
				<div className="navbarShadow"></div>
				<Navbar name="shoppingCart"/>
			
			
			</div>
		);
	}
}

export {ShoppingCart};