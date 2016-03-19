(function(){
	var NavbarS={width:"1000px",height:"60px",background:"red"};
	
	var Item=React.createClass({displayName: "Item",
		render:function(){
			return (
				React.createElement("li", null, 
					this.state.items[0].name, 
					this.state.items[0].quantity, 
					React.createElement("button", {onClick: this.minusOne}, "-"), 
					React.createElement("button", {onClick: this.plusOne}, "+")
				)		
			);	
		}
	});
	
	var ShoppingCart=React.createClass({displayName: "ShoppingCart",
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
				React.createElement("div", {className: "shopping_cart container"}, 
					React.createElement("ul", {className: "items"}, 
						React.createElement(Item, null)
					)			
				)
			
			);
		}
	});

})();