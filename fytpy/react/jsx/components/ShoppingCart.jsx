import {$$rootDir,$$phpDir,$$itemDir} from '../common.jsx';

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
					<li className='item' key={i}>
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
		console.log('ShoppingCart props',this.props)
		this.state = {
			items: this.props.user.shoppingCart||[]
		}
	}
	componentWillReceiveProps(newProps){
		this.setState({
			items: {}
		})
		this.setState({
			items: typeof newProps.user.shoppingCart==='object'?newProps.user.shoppingCart:[]
		})
	}
	componentWillMount(){
	}
	//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	allChecked(){
		for(var i=0;i<this.state.items.length;i++){
			if( !this.state.items[i].checked ){
				return false;
			};
		};
		return true;
	}
	// @return {}
	getTotalPrice(){
		var totalPrice = 0;
		for(var i=0;i<this.state.items.length;i++){
			if(this.state.items[i].checked===true){
				totalPrice+=this.state.items[i].price*this.state.items[i].quantity;
			};
		}
		return totalPrice;
	}
	getTotalQuantity(){
		var totalQuantity = 0;
		for(var i=0;i<this.state.items.length;i++){
			if( this.state.items[i].checked===true ){
				totalQuantity++;
			};
		}
		return totalQuantity;
	}
	//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	checkAll(){
		if( this.allChecked() ){
			for(var i=0;i<this.state.items.length;i++){
				this.state.items[i].checked=false;
			};
		}else{
			for(var i=0;i<this.state.items.length;i++){
				this.state.items[i].checked=true;
			};
		};
		this.setState({
			items:this.state.items
		});
	}
	checkThis(i){
		this.state.items[i].checked = this.state.items[i].checked?false:true;
		this.setState({items:this.state.items});
	}
	minusOne(i) {
		if( this.state.items[i].quantity>1 ){
			this.state.items[i].quantity--;
			this.setState({
				items: this.state.items
			});
		};
	}
	plusOne(i) {
		this.state.items[i].quantity++;
		this.setState({
			items: this.state.items
		});
	}
	removeItem(i){
		this.props.act({
			type:'REMOVE_ITEM',
			itemID:this.state.items[i].itemID
		})
	}
	render() {
		//console.log(React);
		//console.log(Function);
		return (
			<div className="shopping-cart wrapper">
				<div className="container">
					<div className="shopping-cart-header1">我的购物车</div>
					<div className="shopping-cart-header2">
						<input className="check" type="checkbox" checked={this.allChecked()} onChange={this.checkAll.bind(this)}/>
						<div className="thumbnail">全选</div>
						<p className="name">商品</p>
						<p className="spec">规格</p>
						<p className="price">单价(元)</p>
						<div className="counter">数量</div>
						<div className="subtotal">小计(元)</div>
						<p className="manipulation">操作</p>
					</div>
					<ItemList 
						items={this.state.items} 
						checkThis={this.checkThis.bind(this)}
						plusOne={this.plusOne.bind(this)}
						minusOne={this.minusOne.bind(this)}
						remove={this.removeItem.bind(this)}/>
					<div style={{overflow:"hidden",background:"white"}}>
						<ul className="summary">
							<li>已选择<span className="totalQuantity">{this.getTotalQuantity()}</span>件商品</li>
							<li>总价（不含运费）：<span className="note">￥</span><span className="totalPrice">{this.getTotalPrice()}</span></li>
							<li className="checkout">去结算</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export {ShoppingCart};