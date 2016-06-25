import {$$imgDir} from '../common.jsx';

class Home extends React.Component {
	render() {
		return (
			<div id="home" className="ka-slideDown">
				<Showcase/>
			</div>
		);
	}
}

class Showcase extends React.Component {
	render(){
		return (
			<div className="container">
				<div className="box2">
					<ul className="col1">
						<li>
							<div className="upper">
								<div className="icon"><a href=""><img src={$$imgDir+"084337.png"}/></a></div>
								<a href="" className="title">玩具模型</a>
							</div>
							<div className="lower">
								<a href="">模型公仔</a> <a href="">仿真收藏</a> <a href="">更多></a></div>
						</li>
						<li>
							<div className="upper">
								<div className="icon"><a href=""><img src={$$imgDir+"153449.png"}/></a></div>
								<a href="" className="title">数码配件</a>
							</div>
							<div className="lower">
								<a href="">手机配件</a> <a href="">充电装备</a> <a href="">更多></a></div>
						</li>
						<li>
							<div className="upper">
								<div className="icon"><a href=""><img src={$$imgDir+"160245.png"}/></a></div>
								<a href="" className="title">服装服饰</a>
							</div>
							<div className="lower">
								<a href="">男装</a> <a href="">女装</a> <a href="">更多></a></div>
						</li>
						<li>
							<div className="upper">
								<div className="icon"><a href=""><img src={$$imgDir+"161113.png"}/></a></div>
								<a href="" className="title">居家日用</a>
							</div>
							<div className="lower">
								<a href="">创意文具</a> <a href="">抱枕靠垫</a> <a href="">更多></a></div>
						</li>
					</ul>
					<div className="col2">
						<dl>
							<dt><a href="#/item?id=1602091546"><img src={$$imgDir+"index/1602091546.jpg"}/></a></dt>
							<dt><a href="#/item?id=1602091458"><img src={$$imgDir+"144118.jpg"}/></a></dt>
							<dd><a href=""><img src={$$imgDir+"144233.jpg"}/></a></dd>
							<dd><a href=""><img src={$$imgDir+"144245.jpg"}/></a></dd>
							<dd><a href=""><img src={$$imgDir+"144256.jpg"}/></a></dd>
							<dd><a href=""><img src={$$imgDir+"144311.jpg"}/></a></dd>		
						</dl>
					</div>
				</div>
			</div>
		)
	}
}

export {Home};