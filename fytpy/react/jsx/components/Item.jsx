import {$$rootDir,$$itemDir,$$phpDir,$$imgDir} from '../common.jsx';
import {CommentBox} from './CommentBox.jsx';

function getItem(){
	var itemID = location.hash.match(/\?id=(\w+)/)[1];
	var item;
	console.log( 'itemID',itemID );
	$.ajax({
		type:'post',
		url:$$phpDir+'item.php',
		data:{itemID:itemID},
		async:false
	}).done(function(data){
		//console.log('typeof data---',typeof data);
		console.log(data);
		item = eval('('+data+')');
	}).error(function(e){
		console.log(e);
	})
	return item;
}

class Item extends React.Component {
	constructor(){
		super();
		this.state = {
			item: getItem(),
			tabPanel: 0,
			thumbnail: 0
		};
		console.log('Item state',this.state);
	}
	componentWillMount(){
	}
	increase(){
		this.state.item.quantity++;
		this.setState({
			item:this.state.item
		});
	}
	decrease(){
		this.state.item.quantity>1?this.state.item.quantity--:'';
		this.setState({
			item:this.state.item
		});		
	}
	toImg( index ){
		this.setState({
			thumbnail: index
		});
	}
	toTab( index ){
		this.setState({
			tabPanel: index
		});
	}
	toCart(){
		// Perform an action.
		this.props.act({
			type:'ADD_TO_CART',
			itemID: this.state.item.itemID,
			quantity: this.state.item.quantity
		});
	}
	buyNow(){
		console.log( JSON.stringify([this.state.item]) );
		sessionStorage.items = JSON.stringify([this.state.item]);
		location.hash = 'confirm_order';
	}
	render(){
		var item = this.state.item;
		var self = this;
		var thumbnail = this.state.thumbnail;
		return (
			<div id="ITEM">
				<div className="item container">
					<div className="header">
						<p>
							<a href="#/home">主页</a> > <a href="" className="item_class">{item.class_}</a> > <a href="" className="sub_class">{item.sub_class}</a>
						</p>
					</div>
					<div className="images">
						<div className="thumbnail">
							<img src={$$itemDir+item.itemID+'/'+thumbnail+'.jpg'}/>
						</div>
						<ul className="tabs">
							{[0,1,2,3].map(function(i){
								return 	<li><img src={$$itemDir+item.itemID+'/'+i+'.jpg'} onMouseOver={self.toImg.bind(self,i)}/></li>;
							})}
						</ul>
					</div>		
					<div className="information">
						<p className="name">{item.name}</p>
						<p className="description">{item.description}</p>
						<p className="priceWrapper"><b>￥<span className="price">{Number(item.price).toFixed(2)}</span></b></p>
						<div className="shuliang">
							<p>数量：</p>
							<div className="counter">
								<div className="minus" onClick={this.decrease.bind(this)}>-</div>
								<div className="quantity">{item.quantity}</div>
								<div className="plus" onClick={this.increase.bind(this)}>+</div>
							</div>
						</div>
						<div className="buy" onClick={this.buyNow.bind(this)}>立即购买</div>
						<div className="toCart" onClick={this.toCart.bind(this)}>放入购物车</div>
						
					</div>
				</div>
				<div className="box container">
					<div className="box-header">
						<ul className="tab">
							{[0,1,2].map(function(i){
								return (
									<li 
										className={self.state.tabPanel===i?'active':''} 
										onClick={self.toTab.bind(self,i)}>商品详情</li>
								)
							})}
						</ul>
					</div>
					<ul className="content">
						{this.state.tabPanel===0?
						<li className="imgs_detailed">
							<img src={$$itemDir+item.itemID+'/d0.jpg'}/>
							<img src={$$itemDir+item.itemID+'/d1.jpg'}/>
							<img src={$$itemDir+item.itemID+'/d2.jpg'}/>
						</li>:''
						}
						{this.state.tabPanel===1?
						<li>
							尚无评价晒单
							<CommentBox/>
						</li>:''
						}
						{this.state.tabPanel===2?
						<li>
							<h3>退货政策</h3>
							<p>
								自实际收到商品之日起15日内可以退货。<br/>
								3C类商品：此类所退换商品要求不影响二次销售，配件完整，包装齐全（不带有店铺或商品商标logo的非密封性包装除外），商品外观无磨损，无使用痕迹，整体无磕碰。如有赠品，需如数退回。
							</p>
							<h3>配送速度查询</h3>
							<p>
								1.下单成功之后，订单会随时更新您的订单状态。<br/>
								2.您可以登录到您的时光网账户中，实时查看您订单的生产及配送情况。<br/>
								3.订单显示已发货状态，即可看到物流信息更新显示。<br/>	4.当您的包裹发货时，我们将会以短信的方式附上运单号码告知您，您可以到时光网账户跟踪物流信息或者根据快递单号直接进行查询。
							</p>
							<h3>服务承诺</h3>
							<p>
								1.时光网所售的产品都是官方授权，100%正品保证，您可以放心购买。<br/>
								2.如您的商品自签收之日起15天内出现质量问题、商品破损等问题可申请退货(特殊商品除外)。<br/>
								3.订单取消成功后，退款大约3-7个工作日内退至原支付账户。
							</p>
							<h3>权利声明</h3>
							<p>														时光网上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是时光网重要的经营资源，未经许可，禁止非法转载使用。<br/>				注：因部分品牌会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与网站图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本网站没有及时更新，请大家谅解！
							</p>
						</li>:''
						}
					</ul>
				</div>
			</div>
		)
	}
}

export {Item};