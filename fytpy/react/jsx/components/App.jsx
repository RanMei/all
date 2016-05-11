import {$$rootDir} from '../common.jsx';

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;

class SearchBar extends React.Component {
	render(){
		return (
			<div className="searchbar wrapper">
				<div className="container">
					<div className="search_box">
						<form>
							<input type="text" placeholder="请输入您想搜索的商品名称"/>
							<a href="search.html" className="a-search search_btn"><i className="fa fa-search"></i></a>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

class Topbar extends React.Component {
	componentWillReceiveProps(newProps){
	}
	componentDidUpdate(){
		console.log('<Topbar/> updated',this.props,this.state);
	}
	render(){
		console.log('<Topbar/> rendering',this.props,this.state);
		var user = this.props.user;
		return(
			<div className="topbar wrapper">
				<div className="container">
					<p><Link to="/home" className="a_home">欢迎来到飞越太平洋海淘网站</Link></p>
					<ul>
						<li>
							{user.username||<Link to="/signin" className="a-signin login">登录</Link>}
						</li><span className="separator">|</span>
						<li>
							{user.username?
							<a onClick={this.props.onLogout.bind(this)}>注销</a>:
							<a href="#/signin" className="a-signup register">注册</a>}
						</li><span className="separator">|</span>
						<li><i className="fa fa-file"></i> <a className="a_my_orders" href="./orders.html">我的订单</a></li><span className="separator">|</span>
						<li className="my_cart">
							<i className="fa fa-shopping-cart"></i> 
							<span> </span>
							<Link to="/shopping_cart" className="a-cart">
								我的购物车(<span className="quantityIn">{user.username?user.shoppingCart.length:0}</span>)
							</Link>
							<div className="cart_panel">
								我的购物车
							</div>
						</li>
					</ul>
					<div className="clear"></div>
				</div>
			</div>
		)
	}
}

class List extends React.Component {
	render(){
		return (
			<ul>
				{this.props.list.map(function(item){
					return (
						<li>{item}</li>
					)
				})}
			</ul>
		)
	}
}
class SearchBox extends React.Component {
	render(){
		return(
			<div className="searchbox">
				<input type="text"/>
				<a>search</a>
			</div>
		)
	}
}

class Footer extends React.Component {
	render(){
		return(
			<div className="footer wrapper" style={{background:"#F2F2F2"}}>
				<ul className="container">
					<li>	
						<h4>购物指南</h4>
						<a href="">新用户注册</a><br/>
						<a href="">购物流程</a><br/>
						<a href="">常见问题</a><br/>
						<a href="">发票制度</a><br/>
						<a href="">联系我们</a>
					</li>
					<li>	
						<h4>支付方式</h4>
						<a href="">在线付款</a><br/>
						<a href="">余额付款</a><br/>
						<a href="">优惠券使用说明</a>
					</li>
					<li>	
						<h4>配送方式</h4>
						<a href="">邮费说明</a><br/>
						<a href="">配送服务范围</a><br/>
						<a href="">配送速度查询</a><br/>
						<a href="">验货与签收</a>
					</li>
					<li>	
						<h4>售后服务</h4>
						<a href="">售后政策</a><br/>
						<a href="">退货政策</a><br/>
						<a href="">退货流程</a>
					</li>
					<li>	
						<h4>客服电话</h4>
						<p className="serviceTel">4006-118-118</p>
						<p>周一至周日9:00~22:00</p>
					</li>
				</ul>
			</div>
		)
	}
}

class BackToTop extends React.Component {
	toTop(){
		$(document).ready(function(){
			$("html,body").animate(  {"scrollTop":"0"}  ,500);
		});
		console.log(this);
	}
	render(){
		return (
			<div className="back_to_top" onClick={this.toTop.bind(this)}>
				<i className="fa fa-angle-up"></i>
			</div>
		);
	}
}

export {SearchBar,Topbar,List,SearchBox,Footer,BackToTop};