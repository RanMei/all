require('./Navbar.less');

class Navbar extends React.Component {
	constructor(){
		super();
		this.state = {
			show: false
		};
	}
	toggle(){
		if(this.state.show){
			this.setState({
				show: false
			})
		}else{
			this.setState({
				show: true
			})
		}
	}
	render(){
		return (
			<div className="NAVBAR">
				<div className="navicon" onClick={this.toggle.bind(this)}>
					<i className="fa fa-navicon"></i>
				</div>
				MyHome
				<div className={this.state.show?'box _show':'box'}>
					<div className="tab"><a href="#/home">Home</a></div>
					<div className="tab"><a href="#/animations">Animations</a></div>
				</div>
			</div>
		)
	}
}

export {Navbar};