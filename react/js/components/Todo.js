(function(){
	//
	var TodoList = React.createClass({
		render:function() {
			function createItem(item) {
				return <li key={item.id}>{item.todo}</li>;
			};
			return <ul>{this.props.items.map(createItem)}</ul>;
		}
	});
	//
	var Todo = React.createClass({
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
				<div>
					<h3>TODO</h3>
					<form onSubmit={this.addNewItem}>
						<input onChange={this.handleChange} value={this.state.text} />
						<button>{"Add"}</button>
					</form>
					<TodoList items={this.state.items} />
				</div>
			);
		}
	});

})();