require('./Swiper.less');

class Swiper extends React.Component {
	constructor(props){
		super(props);
		var self = this;
		this.width = 0;
		this.Swiper = null;
		this.train = null;
		this.dots = null;
		this.$trainOffset = 0;
		this.$currentOne = 0;
		
		this.X0 = null;
		this.X1 = null;
		this.Y0 = null;
		this.Y1 = null;

		this.cycle = false;
		this.switching = false;
		this.moveCount = 0;
		this.canScroll = false;
		//console.log(this.props)

		this.state = {
			items: this.getNewItems(this.props.items),
			trainStyle: {
			},
			itemStyle: {
			},
			currentDot: 0
		}
	}
	componentDidMount(){
		//console.log(this.props)
		var self = this;
		this.train = this.refs.train;
		
		self.setWidth();
		window.addEventListener('resize',function(){
			self.setWidth();
		},50)
		if( this.props.autoplay===true ){
			setInterval( ()=>{
				if( this.cycle===false&&this.switching===false ){
					this.cycle = true;
					this.toNext();
				};
			},self.props.interval );
		};
		//console.log(this.$currentOne)
	}
	componentWillReceiveProps(newProps){
		this.$trainOffset = 0;
		this.$currentOne = 0;
		this.train.style.transition = '0s';
		this.train.style.transform = 'translate3d(0,0,0)';
		this.setState({
			items: this.getNewItems(newProps.items)
		})
	}
	getNewItems(items){
		var newItems = JSON.parse( JSON.stringify(items) );
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
		var swiper = self.refs.Swiper;
		self.width = Number( document.defaultView.getComputedStyle( swiper ).width.replace(/px/,'') );
		self.$trainOffset = -self.width*self.$currentOne;
		self.train.style.transition = '0s';
		self.train.style.transform = 'translate3d('+self.$trainOffset+',0,0)';
	}
	updatePagi(){

	}
	toNext(){
		var self = this;
		if( this.cycle ){
			this.switching = true;
			if( self.$currentOne<self.state.items.length-1 ){
				self.$currentOne++;
				self.$trainOffset = -self.$currentOne*self.width;
			}else{
				if( self.props.carousel ){
					self.$currentOne = 0;
					self.$trainOffset = -self.state.items.length*self.width;
				}else if( self.props.autoplay){
					self.$currentOne = 0;
					self.$trainOffset = 0;
				}else{
					self.$trainOffset = -self.$currentOne*self.width;
				}
			};
			self.setState({currentDot:self.$currentOne})
			self.train.style.transition = self.props.duration+'ms';
			self.train.style.transform = 'translate3d('+self.$trainOffset+'px,0,0)';
			setTimeout(()=>{
				self.train.style.transition = '0s';
				if( self.props.carousel&&self.$currentOne===0 ){
					self.$trainOffset = 0;
					self.train.style.transform = 'translate3d(0,0,0)';
				};
				this.switching = false;
				this.cycle = false;
			},self.props.duration)
		};
	}
	toPrev(){
		var self = this;
		if( this.cycle ){
			this.switching = true;
			if( self.$currentOne>0 ){
				self.$currentOne--;
				self.$trainOffset = -self.$currentOne*self.width;
			}else{
				if( self.props.carousel ){
					self.$currentOne = self.state.items.length-1;
					self.$trainOffset = self.width;
				}else{
					self.$trainOffset = 0;
				};
			};
			self.setState({currentDot:self.$currentOne})
			self.train.style.transition = self.props.duration+'ms';
			self.train.style.transform = 'translate3d('+self.$trainOffset+'px,0,0)';
			setTimeout(()=>{
				self.train.style.transition = '0s';
				if( self.props.carousel&&self.$currentOne===self.state.items.length-1 ){
					self.$trainOffset = -(self.state.items.length-1)*self.width;
					self.train.style.transform = 'translate3d('+self.$trainOffset+'px,0,0)';
				};
				this.switching = false;
				this.cycle = false;
			},self.props.duration)
		};
	}
	handleTouchStart(e){
		if( !this.cycle ){
			this.cycle = true;
			this.moveCount = 0;
			this.X0 = this.X1 = e.changedTouches[0].pageX;
		}
	}
	handleTouchMove(e){
		if( this.cycle ){
			this.moveCount++;
			
			if( this.props.sticky===true ){
				this.X2 = e.changedTouches[0].pageX;
				var distance = this.X2 - this.X1;
				this.$trainOffset += distance;
				this.train.style.transition = '0s';
				this.train.style.transform = 'translate3d('+this.$trainOffset+'px,0,0)';
				this.X1 = this.X2;
			};
		};
	}
	handleTouchEnd(e){
		if( this.cycle ){
			this.X2 = e.changedTouches[0].pageX;
			var distance = this.X2 - this.X0;
			if( distance>0 ){
				this.toPrev();
			}else if( distance<0 ){
				this.toNext();
			}else{
				this.switching = false;
				this.cycle = false;
			}
		};
	}
	render(){
		var self = this;
		var items = this.state.items;
		return (
			<div className="Swiper" ref="Swiper"
				style={this.props.style}
				onTouchStart={this.handleTouchStart.bind(this)}
				onTouchMove={this.handleTouchMove.bind(this)}
				onTouchEnd={this.handleTouchEnd.bind(this)}>
				<ul className="train"
				style={{marginLeft:self.props.carousel?'-100%':'0'}}
				ref="train">
					{this.props.carousel&&items.length>0?
						<a className="item" style={{
							backgroundImage: items[items.length-1].background?`url(${items[items.length-1].background})`:''
						}}></a>:null
					}
					{items.map(function(a,i){
						return(
							<a className="item" href={a.href||'#/'} key={i} style={{
								backgroundImage: a.background?`url(${a.background})`:''
							}}>
								{a.img?<img src={a.img}/>:null}
							</a>
						)
					})}
					{this.props.carousel&&items.length>0?
					<a className="item" style={{
						backgroundImage: items[0].background?`url(${items[0].background})`:''
					}}></a>:null}
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
	duration: 300,
	interval: 1500,
	carousel: false,
	sticky: true,
	autoplay: true,
	pagi: true
}

export {Swiper};