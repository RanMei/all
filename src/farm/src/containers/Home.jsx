import React from 'react';
import './Home.less';

import {Navbar} from '../components/Navbar.jsx';
import {Swiper} from '../components/Swiper.jsx';
import {Showcase} from '../components/Showcase.js';
import {Showcase2} from '../components/Showcase2.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    var self = this;
    console.log('<Home/> constructing');
  }
  componentDidMount(){
    //window.scroll(0,0);
  }
  back(){
    //console.log(111)
    history.go(-1);
  }
  render() {
    return (
      <div className="Home">
        <div className="searchbar">
          <div className="search">
            <div className="icon">
              <i className="fa fa-search"></i>
            </div>
            <input type="text" name="" placeholder="请输入产品名称"/>
          </div>
        </div>
        
        <Swiper 
          sticky={true}
          items={this.props.homeSwiper}
          style={{height:'4rem'}}/>
        
        {[0,1,2].map(()=>{
          return <Showcase items={this.props.items}/>
        })}

        <div className="block">
          <div className="block-header">  
            <i className="fa fa-heart-o"></i> 猜你喜欢
          </div>
          <Showcase2 items={this.props.items}/>
        </div>

        <Navbar name='home'/>
      </div>
    );

  }
}
Home.propTypes = {
  homeSwiper: React.PropTypes.array.isRequired,
  items: React.PropTypes.number.isRequired
}
Home.defaultProps = {
  homeSwiper: [],
  items: []
}

Home = ReactRedux.connect(function(state){
  return {
    homeSwiper: state.homeSwiper,
    items: state.items
  }
})( Home );

export {Home};