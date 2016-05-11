import {$$rootDir,$$itemDir,$$phpDir,$$imgDir} from '../common.jsx';
import {CommentBox} from './CommentBox.jsx';

class ConfirmOrder extends React.Component {
	constructor(){
		super();
		this.state = {
			items: JSON.parse( sessionStorage.items ),
			veilVisible: false
		}
		console.log('<ConfirmOrder/> creating',this.props,this.state);
	}
	componentWillMount(){
		this.setState({
			user: this.props.user
		})
		console.log('<ConfirmOrder/> will mount',this.props,this.state);
	}
	componentWillReceiveProps(newProps){
		this.setState({DI:newProps.DI});
	}
	componentDidUpdate(){
		console.log('<ConfirmOrder/> updated',this.props,this.state);
	}
	getTotal(){
		var total = 0;
		var items = this.state.items;
		for( var i=0;i<items.length;i++ ){
			total+= Number(items[i].price)*Number(items[i].quantity);
		}
		return total.toFixed(2);
	}
	addDI(){
		this.setState({
			veilVisible: true
		})
	}
	setConsignee(e){
		var newDI = this.state.newDI||{};
		newDI.consignee = e.target.value;
		this.setState({
			newDI: newDI
		})
	}
	setPhoneNumber(e){
		var newDI = this.state.newDI||{};
		newDI.phoneNumber = e.target.value;
		this.setState({
			newDI: newDI
		})
	}
	saveNewDI(){

	}
	hideVeil(){
		this.setState({
			veilVisible: false
		})
	}
	render(){
		var items = this.state.items;
		var DI = this.props.user.deliveryInformation||[];
		//console.log(this.props);
		//console.log(this.state);
		return (
			<div className="CONFIRM_ORDER">
				{this.state.veilVisible?
				<div className="veil">
					<div className="bg">
					</div>
					<div className="panel">
						<div className="close" onClick={this.hideVeil.bind(this)}>
							<i className="fa fa-remove"></i>
						</div>
						<input 
							type="text" 
							name="consignee" 
							placeholder="收货人姓名"
							onChange={this.setConsignee.bind(this)}/>
						<input 
							type="text" 
							name="phoneNumber" 
							placeholder="请输入11位手机号码"
							onChange={this.setPhoneNumber.bind(this)}/>
						<textarea placeholder="请输入详细收货地址"></textarea>
						<div className="date"></div>
						<button className="save" onClick={this.saveNewDI.bind(this)}>保存收货信息</button>
					</div>
				</div>:''
				}
				<div className="container">
					<div className="deliveryInformation">
						<div className="page-header">
							<p className="title">收货信息</p>
							<button className="add" onClick={this.addDI.bind(this)}>添加收货信息</button>
						</div>
						<div className="di-content">
							{DI.map(function(elem){
								return (
									<div className="di">
										<div className="content">
											<p>收货人：<span className="consignee">{elem.consignee}</span></p>
											<p>联系电话：<span className="phoneNumber">{elem.phoneNumber}</span></p>
											<p>收货地址：<span className="deliveryAddress">{elem.deliveryAddress}</span></p>
											<div className="operation">
												<button className="remove">删除</button>
												<button className="edit">编辑</button>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className="itemsInfo">
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
					</div>
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