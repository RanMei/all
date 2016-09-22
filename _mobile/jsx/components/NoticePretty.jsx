class NoticePretty extends React.Component {
	constructor(){
		super();
		this.style = {
			position: 'fixed',
			left: 0,
			top: 0,
			width: '100%',
			height: '1.5rem',
			background: 'blue',
			opacity: '0.8',
			color: 'white',
			textAlign: 'center',
			fontSize: '0.4rem',
			lineHeight: '1.5rem',
			transition: 'transform 0.5s',
			zIndex: '1000',
			transform: 'translate3d(0,-100%,0)'
		}
	}
	componentWillReceiveProps(newProps){
		console.debug('<NoticePretty/> newProps');
		if( newProps.notice.text==='您输入的用户名或密码有误！' ){
			this.refs.p.style.background = 'red';
		}else{
			this.refs.p.style.background = 'blue';
		}
		if( newProps.notice.tick!==this.props.notice.tick ){
			this.showOnce();
		}
	}
	showOnce(){
		this.refs.p.style.transform = 'translate3d(0,0,0)';
		setTimeout(()=>{
			this.refs.p.style.transform = 'translate3d(0,-100%,0)';
		},800)
	}
	render(){
		var self = this;
		return (
			<p style={this.style} ref="p">
				{self.props.notice.text}
			</p>
		)
	}
}

export {NoticePretty};