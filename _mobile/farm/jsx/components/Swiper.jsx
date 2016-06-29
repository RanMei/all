var X0,X1,X2;

var trainStyle = {
}
var itemStyle = {
}

var $trainOffset = 0;
var $width;
var $currentOne = 0;

class Swiper extends React.Component {
	constructor(props){
		super(props);
		var self = this;
		this.state = {
			trainStyle: {
				width: this.props.items.length+'00%'
			},
			itemStyle: {
				width: 100/this.props.items.length+'%'
			}
		}
	}
	componentDidMount(){
		var self = this;
		$width = Number( document.defaultView.getComputedStyle( React.findDOMNode(self.refs.Swiper) ).width.replace(/px/,'') );
		window.addEventListener('resize',function(){
			$width = Number( document.defaultView.getComputedStyle( React.findDOMNode(self.refs.Swiper) ).width.replace(/px/,'') );
			console.log($width);
		})
	}
	handleTouchStart(e){
		X0 = X1 = e.changedTouches[0].pageX;
		console.log(X1);
	}
	handleTouchMove(e){
		X2 = e.changedTouches[0].pageX;
		var distance = X2 - X1;
		$trainOffset += distance;
		X1 = X2;
		var trainStyle = {
			width: this.props.items.length+'00%',
			transition: '0s',
			transform: 'translate3d('+$trainOffset+'px,0,0)'
		}
		this.setState({
			trainStyle: trainStyle
		})
	}
	handleTouchEnd(e){
		X2 = e.changedTouches[0].pageX;
		var distance = X2 - X0;
		if( distance>0&&$currentOne>0 ){
			$currentOne--;
		}else if( distance<0&&$currentOne<this.props.items.length-1 ){
			$currentOne++;
		}
		$trainOffset = -$currentOne*$width;
		console.log($currentOne)
		this.setState({
			trainStyle: {
				width: this.props.items.length+'00%',
				transition: '0.3s',
				transform: 'translate3d('+$trainOffset+'px,0,0)'
			}
		})
	}
	render(){
		//trainStyle.width = this.props.items.length+'00%';
		//itemStyle.width = 100/this.props.items.length+'%';
		var self = this;
		return (
			<div className="Swiper" ref="Swiper"
				onTouchStart={this.handleTouchStart.bind(this)}
				onTouchMove={this.handleTouchMove.bind(this)}
				onTouchEnd={this.handleTouchEnd.bind(this)}>
				<ul className="train" style={this.state.trainStyle}>
					{this.props.items.map(function(elem){
						return(
							<li className="item" style={self.state.itemStyle}>
								<img src={elem} />
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

export {Swiper};