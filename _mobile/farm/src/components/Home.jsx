import {$$imgDir} from '../common.jsx';

import {Navbar} from './Navbar.jsx';
import {Swiper} from './Swiper.jsx';


var swiperItems = [
	'img/index/slider_0.png',
	'img/index/slider_1.png',
	'img/index/slider_2.png',
	'img/index/slider_3.png'
]

class Home extends React.Component {
	constructor(props) {
        super(props);
        var self = this;
		self.state = {
			items: []
		};
		self.getItems();
		console.log('<Home/> constructing',self.state);
    }
    getItems(){
    	var self = this;
    	this.state.items = require('../data/items.js').dataItems;
		// fetch('/getItems', {
		// 	method: 'POST',
		// 	headers: {
		// 		// 'Accept': 'application/json',
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify( self.state.user )
		// }).then(function(res){
		// 	return res.json();
		// }).then(function(data){
		// 	self.setState({
		// 		items: data
		// 	})
		// })
    }
    back(){
    	console.log(111)
    	history.go(-1);
    }
	render() {
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
				
				<Swiper items={swiperItems}
					style={{height:'4rem'}}/>
				
				<div className="block-2">
					{this.state.items.map(function(a){
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

				<div className="panel">
					<div className="panel-header">	
						<p className="class-name">时令果蔬</p>
						<p className="more"><a href="">更多</a></p>
					</div>
					<ul className="panel-body">
						{this.state.items.map(function(item,i){
							var href = '#/item?id='+item.id;
							var src = 'img/items/'+item.id+'/t.jpg';
							var style = {
								float: i%2===0?'left':'right'
							};
							return (
								<div className="item">
									<a href={href} style={style}>
										<img className="thumbnail" src={src}/>
										<p className="name">{item.name}</p>
										<p className="description">{item.desc}</p>
										<p className="price">￥{item.price.toFixed(2)}</p>
									</a>
								</div>
							)
						})}
					</ul>
				</div>

				<div className="nav_shadow">
				</div>
				<Navbar name='home'/>
			</div>
		);

	}
}

export {Home};