import {$$rootDir,$$phpDir,$$itemDir} from '../common.jsx';

var NavbarS={width:"1000px",height:"60px",background:"red"};

const ItemStyle = {borderBottom:'1px solid grey'};
const LiStyle = {float:'left',width:'20%'};

class ItemList extends React.Component {
	render(){
		var that = this;
		return (
			<div>
				<ul>
				{that.props.items.map(function(x,i){
					return(
					<li className='item' key={x.name}>
						<input className="check" type="checkbox" checked={that.props.items[i].checked} onChange={that.props.checkThis.bind(that,i)}/>
						<div className="thumbnail"><img src={$$itemDir+x.itemID+'/0.jpg'}/></div>
						<p className="name">{x.name}</p>
						<p className="spec">{x.description}</p>
						<p className="price">￥{x.price}</p>
						<div className="counter">
							<div className="minus" onClick={that.props.minusOne.bind(that,i)}>-</div>
							<div className="quantity">{x.quantity}</div>
							<div className="plus" onClick={that.props.plusOne.bind(that,i)}>+</div>
						</div>
						<div className="subtotal">￥{x.price*x.quantity}</div>
						<p className="manipulation">
							<span className="delete" onClick={that.props.remove.bind(that,i)}>删除</span><br/>
							<span className="concern">移到我的关注</span>
						</p>
					</li>
					);
				})}
				</ul>
			</div>
		)
	}
}

// <ShoppingCart items={} />
class ShoppingCart extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			items: []
		}
		this.getItems();
	}
	getItems(){
		var self = this;
		fetch('/getShoppingCart', {
			method: 'POST',
			headers: {
				// 'Accept': 'application/json',
				//'Content-Type': 'application/json'
			}
		}).then(function(res){
			return res.json();
		}).then(function(data){
			console.log('<ShoppingCart/> item received',data);
			self.setState({
				items: data
			})	
		}).catch(function(e,f,g){
			console.log(e,f,g);
		})
	}
	getInitialState(){

	}
	componentWillMount(){
		// this.setState({
		// 	items: this.props.user.shoppingCart||[]
		// })
	}
	componentDidMount(){
		//console.log('<ShoppingCart/> mount',this.props,this.state)
	}
	componentWillReceiveProps(newProps){
		this.setState({
			items: typeof newProps.user.shoppingCart==='object'?newProps.user.shoppingCart:[]
		})
	}
	componentDidUpdate(){
		//console.log('<ShoppingCart/> updated',this.props,this.state);
	}
	//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	allChecked(){
		for(var i=0;i<this.state.items.length;i++){
			if( !this.state.items[i].checked ){
				return false;
			};
		};
		return true;
	}
	// @return {}
	getTotalPrice(){
		var totalPrice = 0;
		for(var i=0;i<this.state.items.length;i++){
			if(this.state.items[i].checked===true){
				totalPrice+=this.state.items[i].price*this.state.items[i].quantity;
			};
		}
		return totalPrice;
	}
	getTotalQuantity(){
		var totalQuantity = 0;
		for(var i=0;i<this.state.items.length;i++){
			if( this.state.items[i].checked===true ){
				totalQuantity++;
			};
		}
		return totalQuantity;
	}
	//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	checkAll(){
		if( this.allChecked() ){
			for(var i=0;i<this.state.items.length;i++){
				this.state.items[i].checked=false;
			};
		}else{
			for(var i=0;i<this.state.items.length;i++){
				this.state.items[i].checked=true;
			};
		};
		this.setState({
			items:this.state.items
		});
	}
	checkThis(i){
		this.state.items[i].checked = this.state.items[i].checked?false:true;
		this.setState({items:this.state.items});
	}
	minusOne(i) {
		if( this.state.items[i].quantity>1 ){
			this.state.items[i].quantity--;
			this.setState({
				items: this.state.items
			});
		};
	}
	plusOne(i) {
		this.state.items[i].quantity++;
		this.setState({
			items: this.state.items
		});
	}
	removeItem(i){
		this.props.act({
			type:'REMOVE_ITEM',
			itemID:this.state.items[i].itemID
		})
	}
	render() {
		//console.log(React);
		//console.log(Function);
		console.log('<ShoppingCart/> rendering',this.props,this.state)
		return (
			<div className="SHOPPING_CART">
				<div className="header">
					<p>购物车总共有： <span>1</span> 件商品</p>
					<div className="delete">
						<a href="">
							<img src="img/delete.png"/>
							<p>删除</p>
						</a>
					</div>
				</div>
				
				{this.state.items.map( (item)=>{
					return (
						<div className="item">
							<img className="thumbnail" src={"img/thumbnail/"+item.id+".jpg"}/>
							<p className="name">{item.name}</p>
							<p className="price">￥{item.price.toFixed(2)}</p>
							<div className="counter">
								<p className="counter1">-</p>
								<p className="counter2">1</p>
								<p className="counter3">+</p>
							</div>
						</div>
					);
				})}

				<div className="footerShadow"></div>
				<div className="footer">
					<a href="javascript:history.go(-1);" className="back"><img src="img/back.png"/></a>
					<p className="discount">已优惠：￥0.00</p>
					<p className="sum">总计：￥178.00</p>
					<a className="pay" href="">去结算</a>
				</div>
			
			
			
			</div>
		);
	}
}

export {ShoppingCart};