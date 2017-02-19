require('./DIManagement.less');

class DIManagement extends React.Component {
	constructor(){
		super();
		this.state = {
		}
		//console.log('<ConfirmOrder/> creating',this.props,this.state);
	}
	componentWillMount(){
		this.setState({
			user: this.props.user
		})
		//console.log('<ConfirmOrder/> will mount',this.props,this.state);
	}
	componentWillReceiveProps(newProps){
		this.setState({
			deliveryInformation:newProps.DI
		});
	}
	componentDidUpdate(){
		//console.log('<ConfirmOrder/> updated',this.props,this.state);
	}
	getTotal(){
		var total = 0;
		var items = this.state.items;
		for( var i=0;i<items.length;i++ ){
			total+= Number(items[i].price)*Number(items[i].quantity);
		}
		return total.toFixed(2);
	}
	setConsignee(e){
		var targetDI = this.state.targetDI||{};
		targetDI.consignee = e.target.value;
		this.setState({
			targetDI: targetDI
		})
	}
	setPhoneNumber(e){
		var targetDI = this.state.targetDI||{};
		targetDI.phoneNumber = e.target.value;
		this.setState({
			targetDI: targetDI
		})
	}
	setDeliveryAddress(e){
		var targetDI = this.state.targetDI||{};
		targetDI.deliveryAddress = e.target.value;
		this.setState({
			targetDI: targetDI
		})
	}
	addDI(){
		this.setState({
			veilVisible: true
		})
	}
	editDI(i){
		this.setState({
			veilVisible: true,
			targetDI: this.props.user.deliveryInformation[i]
		})
	}
	deleteDI(i){
		this.props.act({
			type: 'DELETE_DI',
			date: this.props.user.deliveryInformation[i].date
		})
	}
	savetargetDI(){
		if( 
			!this.state.targetDI.consignee||
			!this.state.targetDI.phoneNumber||
			!this.state.targetDI.deliveryAddress
		){
			alert('您输入的信息不完整！');
		}else{
			this.props.act({
				type: 'SAVE_NEW_DI',
				consignee: this.state.targetDI.consignee,
				phoneNumber: this.state.targetDI.phoneNumber,
				deliveryAddress: this.state.targetDI.deliveryAddress,
				date: new Date()
			})
			this.hideVeil();
		};
	}
	hideVeil(){
		this.setState({
			veilVisible: false,
			targetDI: {}
		})
	}
	back(){
		history.go(-1);
	}
	render(){
		var self = this;
		console.log('<DIManagement/> rendering');
		return (
			<div className="DIMANAGEMENT">
				<div className="c-topbar topbar">
					<div className="c-icon">
						<i className="fa fa-angle-left" onClick={this.back.bind(this)}></i>
					</div>
					<div className="c-text">收货地址管理</div>
				</div>
				<div className="add">新增收货地址</div>
			</div>
		)
	}
}

export {DIManagement};