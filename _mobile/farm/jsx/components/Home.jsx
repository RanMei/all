import {$$imgDir} from '../common.jsx';

import {Navbar} from './Navbar.jsx';

class Home extends React.Component {
	render() {
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
					
					<div className="slider">
						<ul className="slider-imgs">
							<li><img src="images/index/slider_3.jpg"/></li>
							<li><img src="images/index/slider_0.jpg"/></li>
							<li><img src="images/index/slider_1.jpg"/></li>
							<li><img src="images/index/slider_2.jpg"/></li>
						</ul>
						<ul className="slider-tabs">
							<li className="selected"></li><li></li><li></li><li></li>
						</ul>
					</div>
				
					<div className="panel">
						<div className="panel-header">	
							<p className="class-name">时令果蔬</p>
							<p className="more"><a href="">更多</a></p>
						</div>
						<ul className="row">
							<a href="items/item.html" className="item">
								<img className="thumbnail" src="images/index/1.jpg"/>
								<p className="name">苍溪红心猕猴桃24粒礼品装(约2.5kg）</p>
								<p className="description">维C之冠，水果之王</p>
								<p className="price">￥178.00</p>
							</a>
							<a href="" className="item">
								<img className="thumbnail" src="images/index/2.jpg"/>
								<p className="name">苍溪红心猕猴桃24粒礼品装(约2.5kg）</p>
								<p className="description">维C之冠，水果之王</p>
								<p className="price">￥178.00</p>
							</a>
						</ul>	
						<ul className="row">
							<a href="" className="item">
								<img className="thumbnail" src="images/index/3.jpg"/>
								<p className="name">苍溪红心猕猴桃24粒礼品装(约2.5kg）</p>
								<p className="description">维C之冠，水果之王</p>
								<p className="price">￥178.00</p>
							</a>
							<a href="" className="item">
								<img className="thumbnail" src="images/index/4.jpg"/>
								<p className="name">苍溪红心猕猴桃24粒礼品装(约2.5kg）</p>
								<p className="description">维C之冠，水果之王</p>
								<p className="price">￥178.00</p>
							</a>
						</ul>	
					</div>
					<div className="panel">
						<div className="panel-header">	
							<p className="class-name">水产海鲜</p>
							<p className="more"><a href="">更多</a></p>
						</div>
						<ul className="row">
							<a href="" className="item">
								<img className="thumbnail" src="images/index/5.jpg"/>
								<p className="name">苍溪红心猕猴桃24粒礼品装(约2.5kg）</p>
								<p className="description">维C之冠，水果之王</p>
								<p className="price">￥178.00</p>
							</a>
							<a href="" className="item">
								<img className="thumbnail" src="images/index/6.jpg"/>
								<p className="name">苍溪红心猕猴桃24粒礼品装(约2.5kg）</p>
								<p className="description">维C之冠，水果之王</p>
								<p className="price">￥178.00</p>
							</a>
						</ul>	
						<ul className="row">
							<a href="" className="item">
								<img className="thumbnail" src="images/index/7.jpg"/>
								<p className="name">苍溪红心猕猴桃24粒礼品装(约2.5kg）</p>
								<p className="description">维C之冠，水果之王</p>
								<p className="price">￥178.00</p>
							</a>
							<a href="" className="item">
								<img className="thumbnail" src="images/index/8.jpg"/>
								<p className="name">苍溪红心猕猴桃24粒礼品装(约2.5kg）</p>
								<p className="description">维C之冠，水果之王</p>
								<p className="price">￥178.00</p>
							</a>
						</ul>	
					</div>
					<div className="panel">
						<div className="panel-header">	
							<p className="class-name">新鲜菜蔬</p>
							<p className="more"><a href="">更多</a></p>
						</div>
						<ul className="row">
							<a href="" className="item">
								<img className="thumbnail" src="images/index/9.jpg"/>
								<p className="name">苍溪红心猕猴桃24粒礼品装(约2.5kg）</p>
								<p className="description">维C之冠，水果之王</p>
								<p className="price">￥178.00</p>
							</a>
							<a href="" className="item">
								<img className="thumbnail" src="images/index/10.jpg"/>
								<p className="name">苍溪红心猕猴桃24粒礼品装(约2.5kg）</p>
								<p className="description">维C之冠，水果之王</p>
								<p className="price">￥178.00</p>
							</a>
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