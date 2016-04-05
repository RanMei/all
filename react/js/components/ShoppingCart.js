(function(){
	var NavbarS={width:"1000px",height:"60px",background:"red"};
	
	var Item=React.createClass({
		render:function(){
			return (
				<li>
					{this.state.items[0].name}
					{this.state.items[0].quantity}
					<button onClick={this.minusOne}>-</button>
					<button onClick={this.plusOne}>+</button>
				</li>		
			);	
		}
	});
	
	var ShoppingCart=React.createClass({
		getInitialState:function(){
			return {
				items:[
					{
						name:"猕猴桃",
						price:100,
						quantity:1
					}
				]
			}
		},
		plusOne:function(){
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
		},
		render:function(){
			return (
				<div className="shopping_cart container">
					<ul className="items">
						<Item />
					</ul>			
				</div>
			
			);
		}
	});

})();