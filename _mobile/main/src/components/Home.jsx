require('./Home.less');

class Home extends React.Component {
	render(){
		return (
			<div className="HOME">
				<a className="block" href="./_mobile/farm/index.html" target="_blank">
					Farm<br/>
					This is a E-commerce webapp built with react, react-router, redux and webpack.
				</a>	
			</div>
		)
	}
}

export {Home};