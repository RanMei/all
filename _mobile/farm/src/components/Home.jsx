require('./Home.less');

import {$$imgDir} from '../common.jsx';

import {Navbar} from './Navbar.jsx';
import {Swiper} from './Swiper.jsx';

class Home extends React.Component {
	constructor(props) {
        super(props);
        var self = this;
		console.log('<Home/> constructing');
    }
    componentWillMount(){
    }
    back(){
    	//console.log(111)
    	history.go(-1);
    }
	render() {
		//console.log(this.props)
		window.scroll(0,0);
		return (
			<div className="HOME">
				<div className="searchbar">
					<div className="search">
						<div className="icon">
							<i className="fa fa-search"></i>
						</div>
						<input type="text" name="" placeholder="请输入产品名称"/>
					</div>
				</div>
				
				<Swiper 
					sticky={true}
					items={this.props.homeSwiper}
					style={{height:'4rem'}}/>
				
				{[0,1,2].map(()=>{
				return(
				<div className="block">
					{this.props.items.map(function(a){
						return (
							<a className="item-2" href={'#/item?id='+a.id}>
								<img src={'img/items/'+a.id+'/t.jpg'}/>
								<div className="tag">
									<p className="name">
										{a.name}
									</p>
									<p className="price">
										￥{a.price.toFixed(2)}
									</p>
								</div>
							</a>
						)
					})}
				</div>
				)
				})}

				<div className="block">
					<div className="block-header">	
						<i className="fa fa-heart-o"></i> 猜你喜欢
					</div>
					{this.props.items.map(function(item,i){
						var href = '#/item?id='+item.id;
						var src = 'img/items/'+item.id+'/t.jpg';
						var style = {
							float: i%2===0?'left':'right'
						};
						return (
							<div className="item">
								<a href={href}>
									<img className="thumbnail" src={src}/>
									<p className="name">{item.name}</p>
									<p className="price">￥{item.price.toFixed(2)}</p>
								</a>
							</div>
						)
					})}
				</div>

				<div className="nav_shadow">
				</div>
				<Navbar name='home'/>
			</div>
		);

	}
}
Home.propTypes = {
	homeSwiper: React.PropTypes.array.isRequired,
	items: React.PropTypes.number.isRequired
}
Home.defaultProps = {
	homeSwiper: [],
	items: []
}

export {Home};