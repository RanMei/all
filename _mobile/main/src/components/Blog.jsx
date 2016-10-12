//require('./common.less');
require('./Blog.less');

class Blog extends React.Component {
	constructor(){
		super();
	}
	componentDidMount(){
	}
	render(){
		return (
			<div className="INDEX">
				<h1>This is my blog</h1>
				{this.props.list.map(a=>{
					return (
						<a className="block" href={'#/post?time='+a.time}>
							{a.title}
						</a>
					)
				})}
			</div>
		)
	}
}
Blog.defaultProps = {
	list: []
}

export {Blog};