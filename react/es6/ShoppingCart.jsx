
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
						<li style={LiStyle}>
							{i}
							<input type='checkbox'/>
						</li>
						<li className='name' style={LiStyle}>{x.name}</li>
						<li className='price' style={LiStyle}>￥{x.price}</li>
						<li className='counter' style={LiStyle}>
							<button onClick={that.props.minusOne.bind(that,i)}>-</button>
							<span className='quantity'>{x.quantity}</span>
							<button onClick={that.props.plusOne.bind(that,i)}>+</button>
						</li>
						<li className='subtotal' style={LiStyle}>￥{x.price*x.quantity}</li>
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

class ShoppingCart extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			items:[
				{
					name:"猕猴桃",
					price:100,
					quantity:1
				},
				{
					name:"草莓",
					price:200,
					quantity:1
				}
			]
		}
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
	getTotalPrice(){
		var totalPrice = 0;
		for(var i=0;i<this.state.items.length;i++){
			totalPrice+=this.state.items[i].price*this.state.items[i].quantity;
		}
		return totalPrice;
	}
	render() {
		//console.log(React);
		//console.log(Function);
		return (
			<div className="shoppingCart container">
				<ItemList 
					items={this.state.items} 
					plusOne={this.plusOne.bind(this)}
					minusOne={this.minusOne.bind(this)}
					remove={this.remove.bind(this)}/>
				<p>￥{this.getTotalPrice()}</p>
				<button onClick={this.plusOne.bind(this,1)}>plus</button>
			</div>
		);
	}
}

export {ShoppingCart};