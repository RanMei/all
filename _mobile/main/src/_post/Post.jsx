require('./Post.less');

var PropTypes = React.PropTypes;

class Post extends React.Component {
	constructor(){
		super();
	}
	componentDidMount(){
	}
	render(){
		return (
			<div className="Post">
				<div className="post-title">{this.props.post.title}</div>
				<div className="post-time">{this.props.post.time}</div>
				<div className="post-body">
					{this.props.post.body.map(a=>{
						return <p>{a}</p>
					})}
				</div>
			</div>
		)
	}
}

Post.defaultProps = {
	title: '--',
	body: []
}

export {Post};