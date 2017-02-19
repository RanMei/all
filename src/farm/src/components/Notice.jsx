require('./Notice.less');

class Notice extends React.Component {
	constructor(){
		super();
		this.state = {
			show: false
		}
	}
	componentWillReceiveProps(newProps){
		console.debug('<NoticePretty/> newProps');
		if( newProps.notice.tick!==this.props.notice.tick ){
			this.showOnce();
		}
	}
	showOnce(){
		var self = this;
		this.setState({
			show: true
		})
		setTimeout(()=>{
			this.setState({
				show: false
			})
		},1200)
	}
	render(){
		var self = this;
		return (
			<p className="NOTICE" style={{display:(this.state.show===true?'block':'none')}}>
				{self.props.notice.text}
			</p>
		)
	}
}

Notice.defaultProps = {
	notice: {}
}

export {Notice};