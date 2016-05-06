import {$$rootDir} from '../common.jsx';

var NavbarS={width:"1000px",height:"60px",background:"red"};

const ItemStyle = {borderBottom:'1px solid grey'};
const LiStyle = {float:'left',width:'20%'};

class ItemList extends React.Component {
	render(){
		var that = this;
		function renderItem(x,i) {
			return (
				<li className='item' key={i} style={ItemStyle}>
					<ul style={{overflow:'hidden'}}>
						<li>
							{i}
							<input type='checkbox' checked={that.props.items[i].checked} onChange={that.props.checkThis.bind(that,i)}/>
						</li>
						<li className='name'>{x.name}</li>
						<li className='price'>￥{x.price}</li>
						<li className='counter'>
							<button onClick={that.props.minusOne.bind(that,i)}>-</button>
							<span className='quantity'>{x.quantity}</span>
							<button onClick={that.props.plusOne.bind(that,i)}>+</button>
						</li>
						<li className='subtotal'>￥{x.price*x.quantity}</li>
						<li className='operations'>
							<button onClick={that.props.remove.bind(that,i)}>删除</button>
						</li>
					</ul>
				</li>		
			);
		};
		return (
			<div>
				<ul>{that.props.items.map(renderItem)}</ul>
			</div>
		)
	}
}

// <ShoppingCart items={} />
class ShoppingCart extends React.Component {
	constructor (props){
		super(props);
	}
	componentWillMount(){
		var self = this;
		var items;
		console.log($$rootDir);
		// Get data.
		$.ajax({
			url: $$rootDir+'database/items.json',
			type: 'POST',
			dataType: 'json',
			async: false
		}).done(
			function(data){
				console.log(data);
				items = data.items;
				self.state = {
					items: items
				};
			}
		);
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
	remove(i){
		this.state.items.splice(i,1);
		this.setState({
			items: this.state.items
		});
	}
	render() {
		//console.log(React);
		//console.log(Function);
		return (
			<div className="shoppingCart container">
				<ul className="sc-header">
					<li>
						序号
						<input type='checkbox' checked={this.allChecked()} onChange={this.checkAll.bind(this)}/>
					</li>
					<li>商品名称</li>
					<li>单价</li>
					<li>数量</li>
					<li>小计</li>
					<li>操作</li>
				</ul>
				<ItemList 
					items={this.state.items} 
					checkThis={this.checkThis.bind(this)}
					plusOne={this.plusOne.bind(this)}
					minusOne={this.minusOne.bind(this)}
					remove={this.remove.bind(this)}/>
				<p className='summary'>
					共选中{this.getTotalQuantity()}件商品 总价：￥{this.getTotalPrice()}
					<button>去结算</button>
				</p>
			</div>
		);
	}
}

export {ShoppingCart};