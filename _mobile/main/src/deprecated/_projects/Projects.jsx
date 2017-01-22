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
							<div className="heading__">
								<span className="title">{a.title}</span>
							</div>
							{a.desc?
								<div className="desc">
									{a.desc}
								</div>
							:null}
							<div className="panel-body">
								{a.hrefs? a.hrefs.map(b=>{
									return (
										<span><a href={b} target="_blank">{b}</a><br/></span>
									)
								}):null}
							</div>
						</div>
					)
				})}
			</div>
		);
	}
}

export {Projects};