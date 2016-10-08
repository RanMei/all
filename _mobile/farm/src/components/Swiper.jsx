require('./Swiper.less');

class Swiper extends React.Component {
	constructor(props){
		super(props);
		var self = this;

		this.$trainOffset = 0;
		this.$currentOne = this.props.items.length;
		
		this.X0 = null;
		this.X1 = null;
		this.Y0 = null;
		this.Y1 = null;

		this.cycle = false;
		this.switching = false;
		//console.log(this.props)

		this.state = {
			items: this.getNewItems(this.props.items),
			trainStyle: {
				marginLeft: `-${this.props.items.length}00%`
			},
			itemStyle: {
			},
			currentDot: 0
		}
	}
	componentDidMount(){
		//console.log(this.props)
		var self = this;
		//self.setWidth();
		window.addEventListener('resize',function(){
			//self.setWidth();
		})
		if( this.props.autoplay===true ){
			setInterval( ()=>{
				if( this.cycle===false&&this.switching===false ){
					this.cycle = true;
					this.toNext();
				};
			},self.props.interval );
		};
		this.$currentOne = this.props.items.length;
		//console.log(this.$currentOne)
	}
	componentWillReceiveProps(newProps){
		this.$trainOffset = 0;
		this.$currentOne = newProps.items.length;
		this.setState({
			items: this.getNewItems(newProps.items),
			trainStyle: {
				marginLeft: `-${newProps.items.length}00%`
			}
		})
	}
	getNewItems(items){
		var items1 = JSON.parse( JSON.stringify(items) );
		var items2 = JSON.parse( JSON.stringify(items) );
		var newItems = items1.concat(items2);
		newItems.forEach((a,i)=>{
			a._id = i;
		})
		return newItems;
	}
	getCurrentDot(self){
		if( self.$currentOne>self.props.items.length-1 ){
			return self.$currentOne - self.props.items.length;
		}else{
			return self.$currentOne;
		}
	}
	setWidth(){
		var self = this;
		var _Swiper = React.findDOMNode(self.refs.Swiper);
		self.$width = Number( document.defaultView.getComputedStyle( _Swiper ).width.replace(/px/,'') );
	}
	toNext(){
		var self = this;
		if(this.switching===false){
			this.switching = true;
			if( self.$currentOne<self.state.items.length-1 ){
				self.$currentOne++;
			}else{
				self.$currentOne = 0;
			};
			//console.log(self.$currentOne)
			this.setState({
				trainStyle: {
					marginLeft: `-${this.props.items.length}00%`,
					transition: `${this.props.duration/1000}s`,
					transform: 'translate3d(-5%,0,0)',
					webkitTransform: 'translate3d(-5%,0,0)'
				},
				currentDot: self.getCurrentDot(self)
			})
			setTimeout(()=>{
				var newItems = JSON.parse( JSON.stringify(this.state.items) );
				var a = newItems.splice(0,1)[0];
				newItems.push(a);
				//console.log(newItems)
				this.setState({
					items: newItems,
					trainStyle: {
						marginLeft: `-${this.props.items.length}00%`,
						transition: '0s',
						transform: 'translate3d(0,0,0)',
						webkitTransform: 'translate3d(0,0,0)'
					}
				})
				this.switching = false;
				this.cycle = false;
			},self.props.duration)
		};
	}
	toPrev(){
		var self = this;
		if(this.switching===false){
			this.switching = true;
			if( self.$currentOne>0 ){
				self.$currentOne--;
			}else{
				self.$currentOne = self.state.items.length-1;
			};
			this.setState({
				trainStyle: {
					marginLeft: `-${this.props.items.length}00%`,
					transition: `${this.props.duration/1000}s`,
					transform: 'translate3d(5%,0,0)',
					webkitTransform: 'translate3d(5%,0,0)'
				},
				currentDot: self.getCurrentDot(self)
			})
			setTimeout(()=>{
				var newItems = JSON.parse( JSON.stringify(this.state.items) );
				var a = newItems.splice(newItems.length-1,1)[0];
				newItems.unshift(a);
				//console.log(newItems)
				this.setState({
					items: newItems,
					trainStyle: {
						marginLeft: `-${this.props.items.length}00%`,
						transition: '0s',
						transform: 'translate3d(0,0,0)',
						webkitTransform: 'translate3d(0,0,0)'
					}
				})
				this.switching = false;
				this.cycle = false;
			},self.props.duration)
		};
	}
	handleTouchStart(e){
		if(this.cycle===false&&this.switching===false){
			this.cycle = true;
			this.X0 = this.X1 = e.changedTouches[0].pageX;
		}
	}
	handleTouchMove(e){
		if(this.cycle===true&&this.switching===false){
			if( this.props.sticky===true ){
				this.X2 = e.changedTouches[0].pageX;
				var distance = this.X2 - this.X1;
				this.$trainOffset += distance;
				this.X1 = this.X2;
				var trainStyle = {
					marginLeft: `-${this.props.items.length}00%`,
					transition: '0s',
					transform: 'translate3d('+this.$trainOffset+'px,0,0)',
					webkitTransform: 'translate3d('+this.$trainOffset+'px,0,0)'
				}
				this.setState({
					trainStyle: trainStyle
				})
			};
		};
	}
	handleTouchEnd(e){
		if(this.cycle===true&&this.switching===false){
			this.X2 = e.changedTouches[0].pageX;
			var distance = this.X2 - this.X0;
			//console.log(distance);
			this.$trainOffset = 0;
			if( distance>0 ){
				this.toPrev();
			}else if( distance<0 ){
				this.toNext();
			}else{

			}
		};
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
					{this.state.items.map(function(a,i){
						return(
							<a className="item" href={a.href||'#/'} key={i} style={{
								backgroundImage: a.background?`url(${a.background})`:''
							}}>
								{a.img?<img src={a.img}/>:null}
							</a>
						)
					})}
				</ul>
				<div className="pagi">
					<ul className="pagination" ref="pagination">
						{this.props.pagi?this.props.items.map(function(elem,i){
							return(
								<li className={i===self.state.currentDot?'dot active':'dot'}>
								</li>
							)
						}):null}
					</ul>
				</div>
			</div>
		)
	}
}

Swiper.defaultProps = {
	items: [],
	duration: 500,
	interval: 3000,
	sticky: true,
	autoplay: true,
	pagi: true
}

export {Swiper};