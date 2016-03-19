(function( React,ReactDOM ){
	
	var CommentBoxStyle={
		width:"300px",
		padding:"15px",
		border:"1px solid black",
		background:"lightblue",
		color:"red"
	}
	
	var CommentStyle={
		marginBottom:"5px",
		background:"white"
	}
	
	var CommentList = React.createClass({
		render:function() {
			function renderComment(comment) {
				return (
					<li key={comment.id} style={CommentStyle}>
						{comment.id}
						<span style={{color:"blue"}}>{comment.author}</span>
						{comment.time}<br/>
						{comment.text}
					</li>
				);
			};
			return <ul>{this.props.comments.map(renderComment)}</ul>;
		}
	});
	//
	var CommentBox = React.createClass({
		getInitialState: function() {
			return {//MODEL //this.state={}
				comments: [
					{
						author:"Ned",
						time:"2016-03-01 10:11:33",
						text:"Good!",
						id:1
					},
					{
						author:"Rob",
						time:"2016-03-01 13:11:33",
						text:"Nice!",
						id:2
					}
				],
				text: ""
			};
		},
		handleChange: function(e) {
			this.setState({
				text: e.target.value
			});
		},
		submitComment: function(e) {
			e.preventDefault();
			var updatedComments = this.state.comments.concat([{
				author: "Jon",
				time: "",
				text: (this.state.text),
				id: this.state.comments.length+1
			}]);
			this.setState({//MODEL
				comments: updatedComments,
				text: ""
			});
		},
		render: function() {
			return (//VIEW
				<div style={CommentBoxStyle}>
					<h3>CommentBox</h3>
					<CommentList comments={this.state.comments} />
					<form onSubmit={this.submitComment}>
						<input value={this.state.text} onChange={this.handleChange} placeholder="Your comment here..."/>
						<button>{"comment"}</button>
					</form>
				</div>
			);
		}
	});
	
	ReactDOM.render(
		<CommentBox />,
		document.getElementById("CommentBox")
	);

})( React,ReactDOM );