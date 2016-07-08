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
					style: 'position:relative; width:100%; background:grey; display:block; overflow:hidden;'
				},
				createElement(
					'img',
					{
						ref: 'bg',
						src: 'img/bg.png',
						style: 'width: 100%'
					}
				),
				createElement(
					'div',
					{
						ref: 'content',
						style: 'position:absolute; left:0; top:0; width: 100%; height:100%;'
					},
					createElement(
						Swiper,
						{
							ref: 'swiperA',
							items: self.props.items
						}
					)
				),
				createElement(
					Mask,
					{
						ref: 'maskA',
						text: '确定退出吗？'
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