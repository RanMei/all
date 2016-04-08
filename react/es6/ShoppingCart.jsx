
var NavbarS={width:"1000px",height:"60px",background:"red"};

class ItemList extends React.Component {
	render(){
		var that = this;
		function renderItem(x,i) {
			return (
				<li key={i}>
					{i}
					{x.name}
					{x.quantity}
					<button>-</button>
					<button>+</button>
				</li>		
			);
		};
		return (
			<ul>{this.props.items.map(renderItem)}</ul>
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
		this.plusOne = this.plusOne.bind(this);
	}
	plusOne(i) {
		this.state.items[i].quantity++;
		this.setState({
			items: this.state.items
		});
	}
	render() {
		//console.log(React);
		console.log(Function);
		return (
			<div className="shopping_cart container">
				<ItemList items={this.state.items} plusOne={this.plusOne}/>
				<button onClick={this.plusOne.bind(this,1)}>plus</button>
			</div>
		);
	}
}

export {ShoppingCart};