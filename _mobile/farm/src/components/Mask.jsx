require('./Mask.less');
import {$$store} from '../store/index.jsx';
import {API} from '../store/API/API.js';

class Mask extends React.Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){

	}
	cancel(){
		$$store.dispatch('CLOSE_MASK');
	}
	confirm(){
		$$store.dispatch('REMOVE');
		$$store.dispatch('CLOSE_MASK');
	}
	render(){
		var self = this;
		return (
			<div className="MASK" style={{display: (this.props.mask.text!==''?'table':'none')}}>
				<div className="__container">
					<div className="_panel">
						<div className="_header">
							确认删除
						</div>
						<p className="_text">{this.props.mask.text}</p>
						<div className="btn cancel" onClick={this.cancel.bind(this)}>取消</div>
						<div className="btn confirm" onClick={this.confirm.bind(this)}>确认</div>
					</div>
				</div>
			</div>
		)
	}
}

Mask.defaultProps = {

}

export {Mask};