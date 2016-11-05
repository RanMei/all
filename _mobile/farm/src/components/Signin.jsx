require('./Signin.less');

// import 'babel-polyfill';
import {Notice} from './Notice.jsx';
import {Navbar} from './Navbar.jsx';

import {API} from '../API/API.js';

class Signin extends React.Component {
	constructor(){
		super();
		this.state = {
			user:{
				id: '',
				password: ''
			}
		};
		window.scroll(0,0);
		console.log('<Signin/> constructing');
	}
	setUserID(e){
		var newUser = JSON.parse( JSON.stringify(this.state.user) );
		//Object.assign( {},this.state.user );
		newUser.id = e.target.value;
		this.setState({
			user: newUser
		});
	}
	setPassword(e){
		var new_user = JSON.parse( JSON.stringify(this.state.user) );
		new_user.password = e.target.value;
		this.setState({
			user: new_user
		});
	}
	login(){
		var self = this;
		API.LOGIN(self.state.user);
	}
	loginAsGuest(){
		API.LOGIN_AS_GUEST();
	}
	render(){
		return (
			<div className="SIGN_IN">

				<div className="header c-topbar">
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