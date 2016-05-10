import {$$rootDir,$$itemDir,$$phpDir,$$imgDir} from '../common.jsx';
import {CommentBox} from './CommentBox.jsx';

class ConfirmOrder extends React.Component {
	constructor(){
		super();
		this.state = {
			items: JSON.parse( sessionStorage.items )
		}
	}
	getTotal(){
		var total = 0;
		var items = this.state.items;
		for( var i=0;i<items.length;i++ ){
			total+= Number(items[i].price)*Number(items[i].quantity);
		}
		return total.toFixed(2);
	}
	render(){
		var items = this.state.items;
		var DI = this.props.DI;
		return (
			<div className="CONFIRM_ORDER">
				<div className="container">
					<div className="page-header">
						<p className="title">收货信息</p>
						<button className="add">添加收货信息</button>
					</div>
					<div className="deliveryInformation">
						<div className="di">
							<div className="content">
								<p>收货人：<span className="consignee">--</span></p>
								<p>联系电话：<span className="phoneNumber">--</span></p>
								<p>收货地址：<span className="deliveryAddress">--</span></p>
								<div className="operation">
									<button className="remove">删除</button>
									<button className="edit">编辑</button>
								</div>
							</div>
						</div>
					</div>
					<div className="page-header">
						<p className="title">确认商品</p>
					</div>
					<ul className="items-header">
						<li>商品信息</li>
						<li>单价</li>
						<li>数量</li>
						<li>小计</li>
					</ul>
					{items.map( (item)=>{return(
						<ul className="item">
							<li>
								<div className="thumbnail"></div>
								<p className="information">	
									<span className="name">{item.name}</span>
									<span className="spec"></span>
								</p>
							</li>
							<li><p className="price">￥{item.price}</p></li>
							<li><p className="quantity">{item.quantity}</p></li>
							<li><p className="subtotal">{item.subtotal}</p></li>
						</ul>
					) })}
					<div className="summary">
						<div className="right_">
							<p>共<span className="totalQuantity">{items.length}</span>件商品，总价<span className="totalPrice">￥{this.getTotal()}</span></p>
							<div className="submit">提交订单</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export {ConfirmOrder};