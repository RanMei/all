import './Topbar.less';

class Topbar extends React.Component {
	constructor(props){
		super(props);
	}
	back(){
    	history.go(-1);
    }
	render(){
		return (
			<div className="Topbar">
				<div className="content__">
					<div className="c-icon">
						<i className="fa fa-angle-left" onClick={this.back.bind(this)}></i>
					</div>
					<div className="c-text">{this.props.name}</div>
				</div>
			</div>
		)
	}
}

Topbar.defaultProps = {
	name: ''
}

export {Topbar};