require('./Mask.less');

class Mask extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			show: false
		}
	}
	componentDidMount(){

	}
	render(){
		var self = this;
		return (
			<div className="MASK" style={{display: (this.state.show?'block':'none')}}>
				<div className="_panel">
					<div className="_header">
						确认删除
					</div>
				</div>
			</div>
		)
	}
}

Mask.defaultProps = {

}

export {Mask};