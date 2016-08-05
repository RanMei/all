// import 'babel-polyfill';

class Signin extends React.Component {
	constructor(){
		super();
		this.state = {
			user:{
				userID: '',
				password:''
			}
		};
		window.scroll(0,0);
		console.log('<Signin/> constructing');
	}
	setUserID(e){
		var user = Object.assign( {},this.state.user );
		user.userID = e.target.value;
		this.setState({
			user: user
		});
	}
	setPassword(e){
		var user = Object.assign( {},this.state.user );
		user.password = e.target.value;
		this.setState({
			user: user
		});
	}
	login(){
		var self = this;
		fetch('/login', {
			method: 'POST',
			headers: {
				// 'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( self.state.user ),
			async: false
		}).then(function(res){
			return res.text();
		}).then(function(data){
			if( data==='true' ){
				self.props.act({
					type: 'LOGIN',
					user: self.state.user
				})
			}else{
				alert('您输入的用户名或密码有误！');
			}				
		})
	}
	render(){
		return (
			<div className="SIGN_IN">
				<div className="header">
					<img className="grass" src="img/grass1.png"/>
					<div className="outer-round">
						<div className="logo">
							<img src="img/kiwifruit.png"/>
						</div>
						<div className="word">多利农庄</div>
					</div>
				</div>

				<form>
					<input type="text" name="user_id" placeholder="手机号/邮箱" onChange={this.setUserID.bind(this)}/><br/>
					<input type="password" name="password" placeholder="密码" onChange={this.setPassword.bind(this)}/><br/>
				</form>
				
				<a className="login" onClick={this.login.bind(this)}>登录</a>
				<div className="options">
					<p>
						<a href="signup.html">注册账号</a>
						<span>|</span>
						<a href="retrive_password.html">忘记密码</a>
					</p>
				</div>
			</div>
		)
	}
}

export {Signin};