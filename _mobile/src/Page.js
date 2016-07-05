import {ZeactElement} from './ZeactElement.js';
import {ZeactComponent} from './ZeactComponent.js';
import {Swiper} from './Swiper.js';

function Page( props ){
	this.refs = {};
	this.props = props;
}
Page.prototype = new ZeactComponent();
Page.prototype.render = function(){
	var createElement = ZeactElement.createElement.bind(this);
	var refs = this.refs;
	var fragment = 
		createElement('div',
			{
				ref: 'mask',
				style: 'position:relative; width:100%; background:grey; display:block;'
			},
			[
				new Swiper({items: [0,1,2,3,4,5]}).render()
			]
		);
	return fragment;
}

export {Page};