// import 'babel-polyfill';
class Mask extends React.Component {
	constructor(){
		super();
		this.style = {
			mask: {
				position: 'fixed',
				left: 0,
				top: 0,
				width: '100%',
				height: '100%',
				zIndex: '1000'
			},
			p: {
				position: 'absolute',
				left: 0,
				top: 0,
				bottom: 0,
				right: 0,
				margin: 'auto',
				width: '3rem',
				height: '1rem',
				borderRadius: '0.1rem',
				background: 'black',
				opacity: '0.5',
				color: 'white',
				textAlign: 'center',
				fontSize: '0.2rem',
				lineHeight: '1rem'
			}
		}
	}
	render(){
		var self = this;
		return (
			<div style={this.style.mask}>
				<p style={this.style.p}>
					{self.props.text}
				</p>
			</div>
		)
	}
}


class Signin extends React.Component {
	constructor(){
		super();
		this.state = {
			user:{
				userID: '',
				password: ''
			},
			alert: false,
			text: 'xxx'
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
				self.setState({
					text: '登录成功！',
					alert: true
				})
				self.props.act({
					type: 'LOGIN',
					user: self.state.user
				})
			}else{
				self.setState({
					text: '您输入的用户名或密码有误！',
					alert: true
				})
				setTimeout(function(){
					self.setState({
						alert: false
					})
				},800)
			}				
		})
	}
	render(){
		return (
			<div className="SIGN_IN">
				{this.state.alert===true?
				<Mask text={this.state.text}/>:''}
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
						<a href="#/signup">注册账号</a>
						<span>|</span>
						<a href="retrive_password.html">忘记密码</a>
					</p>
				</div>
			</div>
		)
	}
}

export {Signin};