require('./ShoppingCart.less');

import {Navbar} from './Navbar.jsx';

import {API} from '../API/API.js';

class ShoppingCart extends React.Component {
	constructor (props){
		super(props);
	}
	componentWillMount(){
	}
	componentDidMount(){
	}
	componentWillReceiveProps(newProps){
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
			API.UNCHECK_ALL();
		}else{
			API.CHECK_ALL();
		};
	}
	checkThis(i){
		API.CHECK_THIS(i);
	}
	minusOne(i) {
		if( this.props.items[i].quantity>1 ){
			this.props.act({
				type: 'MINUS',
				i: i
			})
		};
	}
	plusOne(i) {
		this.props.act({
			type: 'PLUS',
			i: i
		})
	}
	remove(i){
		if( this.props.items.length===0 ){
			API.ALERT( '您的购物车是空的！' );
		}else{
			API.CONFIRM( '确认删除选中的商品吗？' );
		}
	}
	render() {
		//console.log(React);
		//console.log(Function);
		console.debug('<ShoppingCart/> rendering')
		return (
			<div className="SHOPPING_CART">
				<div className="header c-topbar">
					购物车<span className="remove" onClick={this.remove.bind(this)}>删除</span>
				</div>
				
				{this.props.items.length===0?
					<p className="_info">您的购物车是空的</p>:null
				}

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

ShoppingCart.defaultProps = {
	items: []
}

export {ShoppingCart};