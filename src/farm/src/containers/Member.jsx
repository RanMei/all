import './Member.less';

import {Navbar} from '../components/Navbar.jsx';

import dir from 'api/config.js';
import store from 'store/store.js';
import ac from 'store/actions/index.js';

class Member extends React.Component {
	constructor() {
		super();
		console.log('<Member/> constructing');
	}
	logout() {
		store.dispatch( ac.logout() );
	}
	toDIManagement(){
		location.hash = 'di_management';
	}
	render() {
		window.scroll(0,0);
		if( !sessionStorage.user ){
			location.hash = 'signin';
			return <div></div>
		}else{
			return (
				<div className="MEMBER">
					<div>
						<div className="header">
							<div className="outerRound">
								<div className="innerRound">
									<img src={dir.img+'/avatar.png'}/>
								</div>
							</div>
							<p className="account">{this.props.user.id}</p>
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
							<div className="row" onClick={this.toDIManagement.bind(this)}>
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

Member = ReactRedux.connect(function(state){
	return {
		user: state.user
	}
})( Member );

export {Member};