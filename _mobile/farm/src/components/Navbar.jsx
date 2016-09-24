class Navbar extends React.Component {
	constructor(){
		super();
		this.state = {};
	}
	render(){
		return (
			<div className="NAVBAR">
				<ul className="nav">
					<a href="#/home" className={this.props.name==='home'?'active':''}>
						<div className="icon">
							<i className="fa fa-home"></i>
						</div>
						<p>首页</p>
					</a>
					<a href="">
						<div className="icon">
							<i className="fa fa-th"></i>
						</div>
						<p>分类</p>
					</a>
					<a href="#/shopping_cart" className={this.props.name==='shoppingCart'?'active':''}>
						<div className="icon">
							<i className="fa fa-shopping-cart"></i>
						</div>
						<p>购物车</p>
					</a>
					<a href="#/member" className={this.props.name==='mine'?'active':''}>
						<div className="icon">
							<i className="fa fa-user"></i>
						</div>
						<p>我</p>
					</a>
				</ul>
			</div>
		)
	}
}

export {Navbar};