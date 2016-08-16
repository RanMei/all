class Navbar extends React.Component {
	constructor(){
		super();
		this.state = {};
	}
	render(){
		return (
			<div className="NAVBAR">
				<ul className="nav">
					<a href="#/home">
						<img src={"img/homepage"+(this.props.name==='home'?'2':'')+".png"}/>
						<p className={this.props.name==='home'?'active':''}>首页</p>
						<div className="line"></div>
					</a>
					<a href="">
						<img src={"img/classes"+(this.props.name==='classes'?'2':'')+".png"}/>
						<p>分类</p>
						<div className="line"></div>
					</a>
					<a href="#/shopping_cart">
						<img src="img/cart.png"/>
						<p>购物车</p>
						<div className="line"></div>
					</a>
					<a href="#/member">
						<img src={"img/mine"+(this.props.name==='mine'?'2':'')+".png"}/>
						<p className={this.props.name==='mine'?'active':''}>我的多利</p>
					</a>
				</ul>
			</div>
		)
	}
}

export {Navbar};