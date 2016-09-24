import {$$imgDir} from '../common.jsx';

import {Navbar} from './Navbar.jsx';

class Member extends React.Component {
	constructor() {
		super();
		console.log('<Member/> constructing');
	}
	logout() {
		this.props.act({
			type: 'LOGOUT'
		})
	}
	render() {
		window.scroll(0,0);
		if( !sessionStorage.userID ){
			location.hash = 'signin';
			return <div></div>
		}else{
			return (
				<div className="MEMBER">
					<div>
						<div className="header">
							<div className="outerRound">
								<div className="innerRound">
									<img src="img/avatar.png"/>
								</div>
							</div>
							<p className="account">{this.props.user.userID}</p>
						</div>
						<div className="block">
							<div className="row">
								全部订单<i className="fa fa-angle-right"></i>
							</div>
						</div>
						<div className="block">
							<div className="row">
								修改密码<i className="fa fa-angle-right"></i>
							</div>
							<div className="row">
								收货地址管理<i className="fa fa-angle-right"></i>
							</div>
						</div>
						<a className="logout" onClick={this.logout.bind(this)}>退出登录</a>
					</div>
					<Navbar name="mine" />
				</div>
			);
		}
	}
}

export {Member};