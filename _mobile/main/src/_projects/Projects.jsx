require('./Projects.less');

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: require('../api/projects.js').default
		};
	}
	componentWillMount(){
	}
	render() {
		return (
			<div className="PROJECTS">
				<div className="log">
					Ah, you finally got here! These are the projects I am maintaining currently.
				</div>
				{this.state.list.map((a,i)=>{
					return (
						<div className="panel--">
							<div className="title">
								{a.title}<br/>
								{a.desc}
							</div>
							<div className="panel-body">
								{a.hrefs.map(b=>{
									return (
										<span><a href={b} target="_blank">{b}</a><br/></span>
									)
								})}
							</div>
						</div>
					)
				})}
			</div>
		);
	}
}

export {Projects};