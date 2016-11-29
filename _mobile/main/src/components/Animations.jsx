require('./Animations.less');

class Animations extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: require('../api/animations.js').default
		};
	}
	render() {
		return (
			<div className="ANIMATIONS">
			<div className="panel">
			{this.state.list.map((a,i)=>{
				return (
					<div>
					<div className="panel-header">
					{a.title}
					</div>
					<div className={i===this.state.list.length-1?'panel-section last':'panel-section'}>
					{a.hrefs.map(b=>{
						return (
							<span><a href={b}>{b}</a><br/></span>
							)
					})}
					</div>
					</div>
					)
			})}
			</div>
			</div>
			);
	}
}

export {Animations};