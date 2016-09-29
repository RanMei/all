require('./Swiper.less');

class Swiper extends React.Component {
	constructor(props){
		super(props);
		var self = this;
		this.$trainOffset = 0;
		this.$currentOne = 0;
		
		this.X0 = null;
		this.X1 = null;

		this.state = {
			trainStyle: {
				width: this.props.items.length+'00%'
			},
			itemStyle: {
				width: 100/this.props.items.length+'%'
			},
			currentOne: 0
		}
	}
	componentDidMount(){
		console.log(this.props)
		var self = this;
		var _Swiper = React.findDOMNode(self.refs.Swiper);

		this.$width = Number( document.defaultView.getComputedStyle( _Swiper ).width.replace(/px/,'') );
		window.addEventListener('resize',function(){
			self.$width = Number( document.defaultView.getComputedStyle( React.findDOMNode(self.refs.Swiper) ).width.replace(/px/,'') );
		})
		if( this.props.autoplay===true ){
			setInterval( this.toNext.bind(this),3000 );
		};
	}
	toNext(){
		var self = this;
		if( self.$currentOne<self.props.items.length-1 ){
			self.$currentOne++;
		}else{
			self.$currentOne = 0;
		};
		self.toItem( self.$currentOne );
	}
	handleTouchStart(e){
		this.X0 = this.X1 = e.changedTouches[0].pageX;
		console.log(this.X1);
	}
	handleTouchMove(e){
		this.X2 = e.changedTouches[0].pageX;
		var distance = this.X2 - this.X1;
		this.$trainOffset += distance;
		this.X1 = this.X2;
		var trainStyle = {
			width: this.props.items.length+'00%',
			transition: '0s',
			transform: 'translate3d('+this.$trainOffset+'px,0,0)'
		}
		this.setState({
			trainStyle: trainStyle
		})
	}
	handleTouchEnd(e){
		this.X2 = e.changedTouches[0].pageX;
		var distance = this.X2 - this.X0;
		if( distance>0&&this.$currentOne>0 ){
			this.$currentOne--;
		}else if( distance<0&&this.$currentOne<this.props.items.length-1 ){
			this.$currentOne++;
		}
		this.toItem( this.$currentOne );
	}
	toItem( i ){
		this.$trainOffset = -i*this.$width;
		this.setState({
			trainStyle: {
				width: this.props.items.length+'00%',
				transition: '0.3s',
				transform: 'translate3d('+this.$trainOffset+'px,0,0)'
			},
			currentOne: i
		})
	}
	render(){
		var self = this;
		return (
			<div className="Swiper" ref="Swiper"
				style={this.props.style}
				onTouchStart={this.handleTouchStart.bind(this)}
				onTouchMove={this.handleTouchMove.bind(this)}
				onTouchEnd={this.handleTouchEnd.bind(this)}>
				<ul className="train" style={this.state.trainStyle}>
					{this.props.items.map(function(elem){
						return(
							<a className="item" style={self.state.itemStyle}>
								<img src={elem} />
							</a>
						)
					})}
				</ul>
				<div className="pagi">
					<ul className="pagination" ref="pagination">
						{this.props.items.map(function(elem,i){
							return(
								<li className={i===self.state.currentOne?'dot active':'dot'}>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		)
	}
}

Swiper.defaultProps = {
	autoplay: true
}

export {Swiper};