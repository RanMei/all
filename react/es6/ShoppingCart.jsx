
var NavbarS={width:"1000px",height:"60px",background:"red"};

class Item extends React.Component {
	minusOne() {
		console.log(this.props);
	}
	render() {
		console.log(this.props);
		return (
			<li>
				{this.props.items[0].name}
				{this.props.items[0].quantity}
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
		console.log(React);
		return (
			<div className="shopping_cart container">
				<ul className="items">
					<Item items={this.state.items}/>
				</ul>			
			</div>
		);
	}
}

export {ShoppingCart};