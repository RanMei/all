
var NavbarS={width:"1000px",height:"60px",background:"red"};

class Item extends React.Component {
	render() {
		return (
			<li>
				{this.state.items[0].name}
				{this.state.items[0].quantity}
				<button onClick={this.minusOne}>-</button>
				<button onClick={this.plusOne}>+</button>
			</li>		
		);
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
				}
			]
		}
	}
	plusOne() {
		var q=this.state.items[0].quantity+1;
		this.setState({
			items:[
				{
					name:"猕猴桃",
					price:100,
					quantity:q
				}
			]
		});
	}
	render() {
		return (
			<div className="shopping_cart container">
				<ul className="items">
					<Item />
				</ul>			
			</div>
		);
	}
}

export {ShoppingCart};