//import {ZeactElement} from './ZeactElement.js';

import {Zeact} from './Zeact.js';
import {ZeactComponent} from './ZeactComponent.js';
import {Mask} from './Mask.js';
import {Swiper} from './Swiper.js';

class Page extends ZeactComponent {
	constructor(props){
		super();
		this.refs = {};
		this.props = props;	
	}
	render(){
		var self = this;
		var createElement = Zeact.createElement.bind(this);
		var refs = this.refs;
		//var swiperA = new Swiper({items: [0,1,2,3,4,5]});
		//var maskA = new Mask({text: '确定退出吗？'});
		var fragment = 
			createElement('div',
				{
					ref: 'page',
					style: 'position:relative; width:100%; background:grey; display:block;'
				},
				createElement(
					Mask,
					{
						ref: 'maskA',
						text: '确定退出吗？'
					}
				),
				createElement(
					Swiper,
					{
						ref: 'swiperA',
						items: [0,1,2,3,4,5]
					}
				),
				createElement(
					Swiper,
					{
						ref: 'swiperB',
						items: [0,1,2,3,4,5,6,7,8,111]
					}
				),
				createElement('p',
					{ref: 'p'},
					'退出'
				)
			);
		refs.p.addEventListener('click',function(){
			//self.props.act({type:'EXIT'});
			refs.maskA.obj.show();
		})
		return fragment;
	}
}

export {Page};