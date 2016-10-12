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
	hide(){
		this.setState({
			show: false
		})
	}
	render(){
		return (
			<div className="NAVBAR">
				<div className="navicon" onClick={this.toggle.bind(this)}>
					<i className="fa fa-navicon"></i>
				</div>
				MadSoap
				<div className={this.state.show?'box _show':'box'} onClick={this.hide.bind(this)}>
					<div className="section">
						<div className="tab"><a href="#/home">Home</a></div>
						<div className="tab"><a href="#/animations">Animations</a></div>
						<div className="tab"><a href="#/blog">Blog</a></div>
					</div>
					<div className="section-bottom">
						<div className="tab"><a href="./_mobile/farm/index.html" target="_blank">Farm</a></div>
						<div className="tab"><a href="./front_end.html" target="_blank">Animation Library</a></div>
					</div>
				</div>
			</div>
		)
	}
}

export {Navbar};