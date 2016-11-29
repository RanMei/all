require('./List.less');

class List extends React.Component {
	constructor(){
		super();
	}
	componentDidMount(){
	}
	render(){
		return (
			<div className="List">
				{this.props.list.map((a,i)=>{
					return (
						<div className="list-item">
							<a className="title" href={'#/post?time='+a.time}>
								{a.title}
							</a>
							<p className="time">{a.time}</p>
						</div>
					)
				})}
			</div>
		)
	}
}
List.defaultProps = {
	list: []
}

export {List};