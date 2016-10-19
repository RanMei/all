require('./Projects.less');

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		};
	}
	componentWillMount(){
		var list = require('../data/list.js').default;
		this.setState({
			list: list
		})
	}
	render() {
		return (
			<div className="PROJECTS">
				<div className="log">
					Ah, you finally got here! These are the projects I am maintaining currently.
				</div>
				{this.state.list.map((a,i)=>{
					return (
						<div className="panel col-70">
							<div className="panel-footer">
							{a.map(b=>{
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