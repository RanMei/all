import './Item.less';

import {Topbar} from '../components/Topbar.js';
import {Swiper} from '../components/Swiper.jsx';
import {CommentBox} from '../components/CommentBox.jsx';

import dir from 'api/config.js';

import store from 'store/store.js';
import ac from 'store/actions/index.js';
import {API} from 'store/API/API.js';

class Item extends React.Component {
  constructor(){
    super();
    this.state = {
      quantity: 1,
      tabPanel: 0,
      options: {},
      thumbnail: 0
    };
    window.scroll(0,0);
    console.log('<Item/> constructing',this.props,this.state);
  }
  componentWillMount(){
    var self = this;
    var id = location.hash.match(/\?id=(\w+)/)[1];
    store.dispatch( ac.fetch_item(id) );
  }
  componentWillReceiveProps(new_props){
    var new_options = JSON.parse( JSON.stringify(this.state.options) )
    if( new_props.item.specs ){
      for( var key in new_props.item.specs ){
        new_options[key] = '';
      }
    };
    this.setState({
      options: new_options
    })
  }
  thumbnails(){
    var id = this.props.item.id;
    return [{
      img: dir.img+'/items/'+id+'/t.jpg'
    },{
      img: dir.img+'/items/'+id+'/t.jpg'
    },{
      img: dir.img+'/items/'+id+'/t.jpg'
    },{
      img: dir.img+'/items/'+id+'/t.jpg'
    }];
  }
  increase(){
    var val = this.state.quantity + 1;
    this.setState({
      quantity: val
    });
  }
  decrease(){
    if( this.state.quantity>1 ){
      this.setState({
        quantity: this.state.quantity - 1
      });
    };
  }
  toImg( index ){
    this.setState({
      thumbnail: index
    });
  }
  toTab( index ){
    this.setState({
      tabPanel: index
    });
  }
  ADD_TO_CART(){
    for( var key in this.state.options ){
      if( this.state.options[key] === '' ){
        store.dispatch({
          type: 'ALERT',
          text: `请选择${key}!`
        });
        return;
      }
    }
    var newItem = JSON.parse( JSON.stringify(this.props.item) );
    newItem.selected = false;
    newItem.spec = this.getSpec(this.state.options);
    // dispatch an action.
    store.dispatch( ac.addToCart(newItem) );
  }
  getSpec( options ){
    var spec = '';
    for( var key in options ){
      spec += key+':'+options[key]+';';
    }
    return spec;
  }
  buyNow(){
    console.log( JSON.stringify([this.state.item]) );
    sessionStorage.items = JSON.stringify([this.state.item]);
    location.hash = 'confirm_order';
  }
  back(){
    history.go(-1);
  }
  toCart(){
    location.hash = 'shopping_cart';
  }
  checkOption(key,value){
    var newOptions = JSON.parse( JSON.stringify(this.state.options) );
    newOptions[key] = value;
    this.setState({
      options: newOptions
    })
  }
  render(){
    console.debug('<Item/> rendering');
    var self = this;
    var item = this.props.item;
    return (
      <div className="ITEM">
        
        <Topbar name="商品详情"/>
        <Swiper 
          sticky={true} carousel={false}
          autoplay={false}
          items={this.thumbnails()}/>
        
        <div className="info">
          <p className="name">{item.name}</p>
          <p className="price">￥{item.price.toFixed(2)}</p>
        </div>

        {item.specs?(function(){
          var arr = [];
          for( var key in item.specs ){
            arr.push(
              <ul className="spec">
                <li className="_key">{key}</li>
                {item.specs[key].map(a=>{
                  return (
                    <li className={a===self.state.options[key]?'_option active':'_option'} 
                    onClick={self.checkOption.bind(self,key,a)}>
                      {a}
                    </li>
                  )
                })}
              </ul>
            );
          }
          return arr;
        })():null}

        <div className="block-quantity">
          <p>购买数量</p>
          <div className="counter">
            <p className="minus" onClick={this.decrease.bind(this)}>-</p>
            <p className="quantity">{this.state.quantity}</p>
            <p className="plus" onClick={this.increase.bind(this)}>+</p>
          </div>
        </div>
        
        <div className="details">
          <img src={dir.img+'/items/1609291750/d0.jpg'||'./img/grey.svg'}/>
        </div>
      
        <div className="item_nav_shadow"></div>
        <div className="item_nav">
          <div className="part-left">
            <div className="favor">
              <p className="icon-star">
                <i className="fa fa-star-o"></i>
              </p>
              <p className="text-favor">
                收藏
              </p>
            </div>
            <div className="favor favor_cart" onClick={this.toCart.bind(this)}>
              <div className="redDot" style={{display:(this.props.inCart===0?'none':'block')}}></div>
              <p className="icon-star">
                <i className="fa fa-shopping-cart"></i>
              </p>
              <p className="text-favor">
                购物车
              </p>
            </div>
          </div>
          <a className="to_cart" onClick={this.ADD_TO_CART.bind(this)}>加入购物车</a>
          <a className="to-buy" onClick={this.buyNow.bind(this)}>立即购买</a>
        </div>
      </div>
    )
  }
}

Item.defaultProps = {
  item: {
    id: '',
    name: '',
    specs: [],
    price: 0
  },
  inCart: 0
}

Item = ReactRedux.connect(function(state){
  return {
    inCart: state.shoppingCart.length,
    item: state.item
  }
})( Item );

export {Item};