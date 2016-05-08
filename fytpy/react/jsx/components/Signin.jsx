class Signin extends React.Component {
	constructor(){
		super();
		this.state = {};
	}
	getID(e){
		this.setState({userID:e.target.value});
		// console.log(this.state);
	}
	getPwd(e){
		this.setState({password:e.target.value});
	}
	login(){
		if( this.state.userID&&this.state.password ){
			this.props.act({
				type:'LOGIN',
				data:this.state
			});
		}else{
			alert('Invalid username or password.');
		}
	}
	render(){
		return (
			<div className="SIGN_IN wrapper">
				<div className="shade1">
					<div></div>
				</div>
				<div className="panel container">
					<div className="register">
						<div className="register-center">
							<div className="register-header">
								<h1>新会员注册</h1>
							</div>
							<form className='register-form'>
								<input type="text" name="username" placeholder="请输入11位手机号"/>
								<p className="info"></p>
								<input type="password" name="password" placeholder="密码（6-20位字母、数字与符号的组合）"/>
								<p className="info"></p>
								<input type="password" name="password2" placeholder="确认密码"/>
								<p className="info"></p>
								<input type="text" name="verif" placeholder="请输入验证码"/>
								<p className="info"></p>
								<input type="checkbox" name="agree"/><span>已同意《飞越太平洋服务条款》</span>
								<div className="register-button">注 册</div>
							</form>
						</div>
					</div>
					<div className="middle-line"></div>
					<div className="login">
						<div className="login-center">
							<div className="login-header">
								<h1 className="hydl">会员登录</h1>
							</div>
							<form className="login-form">
								<input 
									type="text" 
									name="username" 
									placeholder="请输入您的用户名"
									onChange={this.getID.bind(this)}
								/>
								<p></p>
								<input 
									type="password" 
									name="password" 
									placeholder="请输入您的密码"
									onChange={this.getPwd.bind(this)}
								/>
								<p></p>
								<input type="checkbox" name="login-automatically"/><span>下次自动登录</span>
								<div 
									className="login-button"
									onClick={this.login.bind(this)}
								>登 录</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export {Signin};