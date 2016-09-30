require('./Signin.less');

// import 'babel-polyfill';
import {Notice} from './Notice.jsx';
import {Navbar} from './Navbar.jsx';

class Signin extends React.Component {
	constructor(){
		super();
		this.state = {
			user:{
				userID: '',
				password: ''
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
		if( this.state.user.userID==='15911111111'&&this.state.user.password==='111111' ){
			self.props.act({
				type: 'ALERT',
				text: '登录成功！'
			})
			self.props.act({
				type: 'LOGIN',
				user: self.state.user
			})
		}else{
			self.props.act({
				type: 'ALERT',
				text: '您输入的用户名或密码有误！'
			})
		}

		// fetch('/login', {
		// 	method: 'POST',
		// 	headers: {
		// 		// 'Accept': 'application/json',
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify( self.state.user )
		// }).then(function(res){
		// 	return res.text();
		// }).then(function(data){
		// 	if( data==='true' ){
		// 		self.props.act({
		// 			type: 'ALERT',
		// 			text: '登录成功！'
		// 		})
		// 		self.props.act({
		// 			type: 'LOGIN',
		// 			user: self.state.user
		// 		})
		// 	}else{
		// 		self.props.act({
		// 			type: 'ALERT',
		// 			text: '您输入的用户名或密码有误！'
		// 		})
		// 	}				
		// })
	}
	loginAsGuest(){

		this.props.act({
			type: 'LOGIN',
			user: {
				userID: '游客'
			}
		})
		this.props.act({
			type: 'ALERT',
			text: '登录成功！'
		})
	}
	render(){
		return (
			<div className="SIGN_IN">

				<div className="header">
					登录<span className="a-guest" onClick={this.loginAsGuest.bind(this)}>游客登录 ></span>
				</div>

				<input type="text" name="user_id" placeholder="手机号/邮箱" 
				onChange={this.setUserID.bind(this)}/>
				<input type="password" name="password" placeholder="密码" onChange={this.setPassword.bind(this)}/>

				<a className="login" onClick={this.login.bind(this)}>登录</a>
				<div className="options">
					<a className="a-signup" href="#/signup">注册账号</a>
					<a className="a-retrive" href="retrive_password.html">忘记密码</a>
				</div>

				<Navbar name="mine"/>
			</div>
		)
	}
}

export {Signin};