import './Mask.less';
import store from '../store/store.js';
import {API} from '../store/API/API.js';

class Mask extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){

  }
  cancel(){
    store.dispatch({
      type: 'CLOSE_MASK'
    });
  }
  confirm(){
    store.dispatch({
      type: 'REMOVE'
    });
    store.dispatch({
      type: 'CLOSE_MASK'
    });
  }
  render(){
    var self = this;
    return (
      <div className="Mask" style={{display: (this.props.mask.show?'table':'none')}}>
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