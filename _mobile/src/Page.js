import {ZeactElement} from './ZeactElement.js';
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
		var createElement = ZeactElement.createElement.bind(this);
		var refs = this.refs;
		var swiperA = new Swiper({items: [0,1,2,3,4,5]});
		var maskA = new Mask({text: '确定退出吗？'});
		var fragment = 
			createElement('div',
				{
					ref: 'page',
					style: 'position:relative; width:100%; background:grey; display:block;'
				},
				[
					maskA.render(),
					swiperA.render(),
					createElement('p',
						{ref: 'p'},
						['退出']
					)
				]
			);
		refs.p.addEventListener('click',function(){
			//self.props.act({type:'EXIT'});
			maskA.show();
		})
		return fragment;
	}
}

export {Page};