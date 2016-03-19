(function(){
	//
	var TodoList = React.createClass({displayName: "TodoList",
		render:function() {
			function createItem(item) {
				return React.createElement("li", {key: item.id}, item.todo);
			};
			return React.createElement("ul", null, this.props.items.map(createItem));
		}
	});
	//
	var Todo = React.createClass({displayName: "Todo",
		getInitialState: function() {
			return {//MODEL
				items: [],
				text: ""
			};
		},
		handleChange: function(e) {
			this.setState({
				text: e.target.value
			});
		},
		addNewItem: function(e) {
			e.preventDefault();
			var updatedItems = this.state.items.concat([{
				todo: (this.state.text+" "+new Date()),
				id: Date.now()
			}]);
			this.setState({//MODEL
				items: updatedItems,
				text: ""
			});
		},
		render: function() {
			return (//VIEW
				React.createElement("div", null, 
					React.createElement("h3", null, "TODO"), 
					React.createElement("form", {onSubmit: this.addNewItem}, 
						React.createElement("input", {onChange: this.handleChange, value: this.state.text}), 
						React.createElement("button", null, "Add")
					), 
					React.createElement(TodoList, {items: this.state.items})
				)
			);
		}
	});

})();