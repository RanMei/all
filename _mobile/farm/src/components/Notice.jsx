class Notice extends React.Component {
	constructor(){
		super();
		this.style = {
			notice: {
				position: 'fixed',
				left: 0,
				top: 0,
				bottom: 0,
				right: 0,
				margin: 'auto',
				width: '3rem',
				height: '1rem',
				borderRadius: '0.1rem',
				background: 'black',
				opacity: '0.5',
				color: 'white',
				textAlign: 'center',
				fontSize: '0.14rem',
				lineHeight: '1rem',
				zIndex: '1000',
				display: 'none'
			}
		}
	}
	render(){
		var self = this;
		return (
			<p className={this.props.shown===true?'shown':''} style={this.style.notice}>
				{self.props.text}
			</p>
		)
	}
}

export {Notice};