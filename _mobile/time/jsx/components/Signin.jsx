// import 'babel-polyfill';

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

				</div>
			</div>
		)
	}
}

export {Signin};