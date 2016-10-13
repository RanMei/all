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
			<div className="BLOG">
				<div className="panel">
					<div className="panel-header">This is my blog</div>
					{this.props.list.map((a,i)=>{
						return (
							<div className={i===this.props.list.length-1?'panel-footer':'panel-section'}>
								<a href={'#/post?time='+a.time}>
								{a.title}
								</a>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}
Blog.defaultProps = {
	list: []
}

export {Blog};