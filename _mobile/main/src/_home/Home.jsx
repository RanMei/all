require('./Home.less');

class Home extends React.Component {
	render(){
		return (
			<div className="HOME">
				<div className="block">
					Greetings! I am a front-end developer.<br/>
					Github: github.com/403177368<br/>
					Website: madsoap.net<br/>
					Welcome, my friend! This is my personal website! Maybe you want to tap the navicon on top-left?
				</div>
			</div>
		)
	}
}

export {Home};