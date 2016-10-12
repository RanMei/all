require('./Home.less');

class Home extends React.Component {
	render(){
		return (
			<div className="HOME">
				<h1>These are the projects I am maintaining right now.</h1>
				<a className="block" href="./_mobile/farm/index.html" target="_blank">
					Farm<br/>
					This is a E-commerce webapp built with react, react-router, redux and webpack.
				</a>	
			</div>
		)
	}
}

export {Home};