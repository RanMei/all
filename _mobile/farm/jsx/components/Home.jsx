import {$$imgDir} from '../common.jsx';

import {Navbar} from './Navbar.jsx';
import {Swiper} from './Swiper.jsx';


var swiperItems = [
	'img/index/slider_0.jpg',
	'img/index/slider_1.jpg',
	'img/index/slider_2.jpg',
	'img/index/slider_3.jpg'
]

class Home extends React.Component {
	constructor(props) {
        super(props);
        var self = this;
		self.state = {items: []};
		self.getItems();
		console.log('<Home/> constructing',self.state);
    }
    getItems(){
    	var self = this;
		fetch('/getItems', {
			method: 'POST',
			headers: {
				// 'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( self.state.user )
		}).then(function(res){
			return res.json();
		}).then(function(data){
			self.setState({
				items: data
			})
		})
    }
	render() {
		window.scroll(0,0);
		if( !sessionStorage.userID ){
			location.hash = 'signin';
			return <div></div>
		}else{
			return (
				<div className="HOME">
					<div className="searchbar">
						<div className="search">
							<img src="img/search.png"/>
							<input type="text" name="" placeholder="请输入产品名称"/>
						</div>
					</div>
					
					<Swiper items={swiperItems} />
				
					<div className="panel">
						<div className="panel-header">	
							<p className="class-name">时令果蔬</p>
							<p className="more"><a href="">更多</a></p>
						</div>
						<ul className="panel-body">
							{this.state.items.map(function(item,i){
								var href = '#/item?id='+item.id;
								var src = 'img/thumbnail/'+item.id+'.jpg';
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
					<div className="panel">
						<div className="panel-header">	
							<p className="class-name">水产海鲜</p>
							<p className="more"><a href="">更多</a></p>
						</div>
						<ul className="panel-body">
							{this.state.items.map(function(item,i){
								var src = 'img/thumbnail/'+item.id+'.jpg';
								var style = {
									float: i%2===0?'left':'right'
								};
								return (
									<div className="item">
										<a href="items/item.html" style={style}>
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
					<div className="panel">
						<div className="panel-header">	
							<p className="class-name">新鲜菜蔬</p>
							<p className="more"><a href="">更多</a></p>
						</div>
						<ul className="panel-body">
							{this.state.items.map(function(item,i){
								var src = 'img/thumbnail/'+item.id+'.jpg';
								var style = {
									float: i%2===0?'left':'right'
								};
								return (
									<div className="item">
										<a href="items/item.html" style={style}>
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
					<Navbar />
				</div>
			);
		};
	}
}

export {Home};