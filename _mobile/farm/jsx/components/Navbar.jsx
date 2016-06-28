class Navbar extends React.Component {
	constructor(){
		super();
		this.state = {
			user:{
				userID: '',
				password:''
			}
		};
	}
	setUserID(e){
		var user = this.state.user;
		user.userID = e.target.value;
		this.setState({
			user: user
		});
	}
	setPassword(e){
		var user = this.state.user;
		user.password = e.target.value;
		this.setState({
			user: user
		});
	}
	login(){
		this.props.act({
			type: 'LOGIN',
			user: this.state.user
		})
	}
	render(){
		return (
			<div className="NAVBAR">
				<ul className="nav">
					<a href="index.html">
						<img src="img/homepage.png"/>
						<p>首页</p>
						<div className="line"></div>
					</a>
					<a href="">
						<img src="img/class.png"/>
						<p>分类</p>
						<div className="line"></div>
					</a>
					<a href="shopping_cart.html">
						<img src="img/cart.png"/>
						<p>购物车</p>
						<div className="line"></div>
					</a>
					<a href="">
						<img src="img/mine2.png"/>
						<p className="selected">我的多利</p>
					</a>
				</ul>
			</div>
		)
	}
}

export {Navbar};