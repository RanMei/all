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
		location.hash = 'signin';
	}
	render() {
		window.scroll(0,0);
		if( !sessionStorage.userID ){
			location.hash = 'signin';
			return <div></div>
		}else{
			return (
				<div className="MEMBER">
					{this.props.user.userID?

					<div>
						<div className="header">
							<div className="outerRound">
								<div className="innerRound"></div>
							</div>
							<p className="account">{this.props.user.userID}</p>
						</div>
						
						<div className="box box1">
							<ul>
								<a href="my_orders.html">
									<img className="icon" src="img/orders.png"/>
									<p>我的订单</p>
									<img className="arrow" src="img/arrow.png"/>
								</a>
								<a href="">
									<img className="icon" src="img/crate.png"/>
									<p>我的菜箱</p>
									<span className="tip">会员可以选菜了！</span>
									<img className="arrow" src="img/arrow.png"/>
								</a>
								<a href="">
									<img className="icon" src="img/combo.png"/>
									<p>绑定套餐</p>
									<img className="arrow" src="img/arrow.png"/>
								</a>
							</ul>
						</div>
						
						<div className="box box2">
							<ul>
								<a href="coupon.html">
									<img className="icon" src="img/coupons.png"/>
									<p>我的抵用券</p>
									<img className="arrow" src="img/arrow.png"/>
								</a>
								<a href="delivery_address.html">
									<img className="icon" src="img/address.png"/>
									<p>收货地址管理</p>
									<img className="arrow" src="img/arrow.png"/>
								</a>
								<a href="favorite.html">
									<img className="icon" src="img/collection.png"/>
									<p>我的收藏</p>
									<img className="arrow" src="img/arrow.png"/>
								</a>
								<a href="favorite.html">
									<img className="icon" src="img/favorite.png"/>
									<p>我的喜好</p>
									<img className="arrow" src="img/arrow.png"/>
								</a>
							</ul>
						</div>					
						<a className="logout" onClick={this.logout.bind(this)}>退出登录</a>
					</div>
					:
					<div>
						<a className="login" href="#/signin">去登录</a>
					</div>
					}
					<Navbar name="mine" />
				</div>
			);
		};
	}
}

export {Member};