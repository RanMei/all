class Signin extends React.Component {
	constructor(){
		super();
		this.state = {
			user:{
				userID: '',
				password:''
			}
		};
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
				data:{
					userID:this.state.userID,
					password:this.state.password
				}
			});
		}else{
			alert('Invalid username or password.');
		}
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
	setPassword2(e){
		var user = this.state.user;
		user.password2 = e.target.value;
		this.setState({
			user: user
		});
	}
	checkUserID(){
		if( !this.state.user.userID ){
			return ''
		}else{
			return (/^\d{11}$/.test(this.state.user.userID))?'success':'error';
		};
	}
	checkPassword(){
		if( !this.state.user.password ){
			return '';
		}else{
			return (/^\w{6,20}$/.test(this.state.user.password))?'success':'error';
		};
	}
	checkPassword2(){
		if( !this.state.user.password2 ){
			return '';
		}else{
			return (/^\w{6,20}$/.test(this.state.user.password2))&&(this.state.user.password===this.state.user.password2)?'success':'error';
		};
	}
	register(){
		if( 
			this.checkUserID()==='success'&&
			this.checkPassword()==='success'&&
			this.checkPassword2()==='success'&&
			this.verif ){
			this.props.act({
				type:'REGISTER',
				user:this.state.user
			})
		}else{
			alert("您输入的信息有误！")
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
								<input 
									type="text" 
									name="username" 
									placeholder="请输入11位手机号" 
									onChange={this.setUserID.bind(this)} 
									className={this.checkUserID()}/>
								<p className="info"></p>
								<input 
									type="password" 
									name="password" 
									placeholder="密码（6-20位字母、数字与符号的组合）" 
									onChange={this.setPassword.bind(this)}
									className={this.checkPassword()}/>
								<p className="info"></p>
								<input 
									type="password" 
									name="password2" 
									placeholder="确认密码"
									onChange={this.setPassword2.bind(this)}
									className={this.checkPassword2()}
									/>
								<p className="info"></p>
								<input type="text" name="verif" placeholder="请输入验证码"/>
								<p className="info"></p>
								<input type="checkbox" name="agree"/><span>已同意《飞越太平洋服务条款》</span>
								<div className="register-button" onClick={this.register.bind(this)}>注 册</div>
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