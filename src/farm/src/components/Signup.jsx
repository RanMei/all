require('./Signup.less');

class Signup extends React.Component {
	constructor(){
		super();
		this.state = {};
	}
	getID(e){
		this.setState({userID:e.target.value});
		console.log(this.state);
	}
	getPwd(e){
		this.setState({password:e.target.value});
	}
	login(){
		if( this.state.userID==='111'&&this.state.password==='111111' ){
			this.props.onLogin({
				type:'LOGIN',
				data:this.state
			});
		}else{
			alert('Invalid username or password.');
		}
	}
	render(){
		return(
			<div className="SIGNUP">
				<img className="grass" src="img/grass1.png"/>
				<div className="spacer"></div>
				<div className="outer-circle">
					<div className="circle"></div>
					<div className="word">多利农庄</div>
				</div>
				<p className="words">切换到 <a href="">邮箱注册</a><span> | </span>已经有账号了？点此 <a href="#/signin">登录</a></p>
				
				<form>
					<input className="input1" type="text" name="phonenumber" placeholder="请输入手机号码"/><br/>
					<input className="input1" type="text" name="verif" placeholder="请输入短信验证码"/>
					<a href="" className="get-verif">获取验证码(60)</a><br/>
					<input className="input1" type="password" name="password" placeholder="设置新密码（6-18位数字或字母）"/><br/>
					<input className="input1" type="password" name="password2" placeholder="再次输入密码"/><br/>
					<div className="cb">
						<input id="agree" type="checkbox" name="agree"/>
						<label htmlFor="agree">
							<img className="check" src="img/checkmark.png"/>
						</label>
						<p>同意多利庄园使用协议</p>
					</div>
				</form>
				
				
				
				<a className="register" href="">注 册</a>
			</div>
		)
	}
}

export {Signup};