require('./Home.less');

class Home extends React.Component {
	render(){
		return (
			<div className="HOME col-70">
				<div className="log">
					Welcome, my friend! This is my personal website! Maybe you want to tap the navicon on top-left?
				</div>
				<div className="panel" href="./_mobile/farm/index.html" target="_blank">
					<div className="panel-header">Farm</div>
					<div className="panel-footer">
						This is a E-commerce webapp built with react, react-router, redux and webpack.
					</div>
				</div>
				<div className="panel" href="./_mobile/farm/index.html" target="_blank">
					<div className="panel-header">Time</div>
					<div className="panel-footer">
						This is a E-commerce webapp built with vue, vue-router, vuex and webpack.
					</div>
				</div>	
			</div>
		)
	}
}

export {Home};