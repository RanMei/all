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
			<div className="SIGN_IN">
				<div className="header">
					<img className="grass" src="img/grass1.png"/>
					<div className="outer-round">
						<div className="logo"></div>
						<div className="word">多利农庄</div>
					</div>
				</div>

				<form>
					<input type="text" name="user_id" placeholder="手机号/邮箱"/><br/>
					<input type="password" name="password" placeholder="密码"/><br/>
				</form>
				
				<a href="index.html" className="login">登录</a>
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