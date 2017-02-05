import './ShoppingCart.less';

import {Navbar} from '../components/Navbar.jsx';

import dir from 'api/config.js';
import store from 'store/store.js';
import {API} from 'store/API/API.js';

class ShoppingCart extends React.Component {
  constructor (props){
    super(props);
    console.log('<ShoppingCart/> constructing')
  }
  componentWillMount(){
  }
  componentDidMount(){
  }
  componentWillReceiveProps(newProps){
  }
  componentDidUpdate(){
  }
  componentWillUnmount(){
    sessionStorage.shoppingCart = JSON.stringify( this.props.items );
  }
  // computed
  allChecked(){
    for(var i=0;i<this.props.items.length;i++){
      if( !this.props.items[i].selected ){
        return false;
      };
    };
    return true;
  }
  getTotalPrice(){
    var totalPrice = 0;
    for(var i=0;i<this.props.items.length;i++){
      if(this.props.items[i].selected===true){
        totalPrice+=this.props.items[i].price*this.props.items[i].quantity;
      };
    }
    return totalPrice;
  }
  totalQuantity( items ){
    var totalQuantity = 0;
    for(var i=0;i<items.length;i++){
      if( items[i].selected===true ){
        totalQuantity++;
      };
    }
    return totalQuantity;
  }
  // methods
  checkAll(){
    store.dispatch({
      type: 'CHECK_ALL'
    })
  }
  checkThis(i){
    store.dispatch({
      type: 'CHECK_THIS',
      i
    })
  }
  minusOne(i) {
    store.dispatch({
      type: 'MINUS',
      i
    })
  }
  plusOne(i) {
    store.dispatch({
      type: 'PLUS',
      i
    })
  }
  remove(i){
    if( this.props.items.length===0 ){
      store.dispatch({
        type: 'ALERT',
        text: '您的购物车是空的！'
      });
    }else{
      store.dispatch({
        type: 'CONFIRM',
        text: '确认删除选中的商品吗？'
      });
    }
  }
  render() {
    //console.log(React);
    //console.log(Function);
    console.debug('<ShoppingCart/> rendering')
    return (
      <div className="ShoppingCart">
        <div className="header c-topbar">
          购物车<span className="remove" onClick={this.remove.bind(this)}>删除</span>
        </div>
        
        {this.props.items.length===0?
          <p className="_info">您的购物车是空的</p>:null
        }

        {this.props.items.map( (item,i)=>{
          return (
            <div className="item">
              <div className="part part-left">
                <div className={item.selected?'circle active':'circle'} onClick={this.checkThis.bind(this,i)}>
                  <i className="fa fa-check"></i>
                </div>
              </div>
              <img className="part thumbnail" src={dir.img+'/items/'+item.id+'/t.jpg'}/>
              <div className="part part-3">
                <p className="name">{item.name}</p>
                <p className="spec">{item.spec}</p>
                <div className="counter">
                  <p className="counter1" onClick={this.minusOne.bind(this,i)}>-</p>
                  <p className="counter2">{item.quantity}</p>
                  <p className="counter3" onClick={this.plusOne.bind(this,i)}>+</p>
                </div>
              </div>
              <div className="part part-4">
                <p className="price">￥{item.price.toFixed(2)}</p>
                <p className="quantity">x{item.quantity}</p>
              </div>
            </div>
          );
        })}

        <div className="footer">
          <div className="content__">
            <div className={this.allChecked()?'circle active':'circle'} onClick={this.checkAll.bind(this)}>
              <i className="fa fa-check"></i>
            </div>
            <p className="text-all">全选</p>
            <a className={
              this.totalQuantity(this.props.items)>0?'pay':'pay disabled'
            } href="">去结算({this.totalQuantity(this.props.items)})</a>
            <p className="sum">总计：<span className="money">￥{this.getTotalPrice().toFixed(2)}</span></p>
          </div>
        </div>
        <Navbar name="shoppingCart"/>
      
      </div>
    );
  }
}

ShoppingCart.defaultProps = {
  items: []
}

ShoppingCart = ReactRedux.connect(function(state){
  return {
    items: state.shoppingCart
  }
})( ShoppingCart );

export {ShoppingCart};