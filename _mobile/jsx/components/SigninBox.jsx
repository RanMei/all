class SigninBox extends React.Component {
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
			<div className="signinBox">
				<input type="text" name="userID" onChange={this.getID.bind(this)}/>
				<input type="password" name="password" onChange={this.getPwd.bind(this)}/>
				<a className="a_login" onClick={this.login.bind(this)}>login</a>
			</div>
		)
	}
}

export {SigninBox};