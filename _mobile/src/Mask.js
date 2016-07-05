import {ZeactElement} from './ZeactElement.js';
import {ZeactComponent} from './ZeactComponent.js';

function Mask( props ){
	this.refs = {};
	this.props = props;
}
Mask.prototype = new ZeactComponent();
Mask.prototype.show = function(){
	this.refs.mask.display = 'block';
}
Mask.prototype.render = function(){
	var createElement = ZeactElement.createElement.bind(this);
	var refs = this.refs;
	var fragment = 
		createElement('div',
			{
				ref: 'mask',
				style: 'position:fixed; left:0; top:0; width:100%; height:100%; display:block; z-index:1000;'},
			[
				createElement('div',
					{	
						ref: 'bg',
						style: 'width:100%; height:100%; background:rgba(0,0,0,0.5);'}
				),
				createElement('div',{ref:'panel'},[
					createElement('p',{ref:'text'}),
					createElement('div',{ref:'buttons'},[
						createElement('div',
							{
								ref:'confirm',
								style: 'background: #197FEE;'
							},['确定']),
						createElement('div',{ref:'cancel'},['取消'])
					])
				])
			]
		);

	refs.panel.style.cssText += 
		'position:absolute; left:0; top:0; right:0; bottom:0; width:5rem; height:3rem; margin:auto; background:white;'+
		'font-size:0.3rem;';
	refs.text.style.cssText +=
		'box-sizing:border-box; height:2rem; padding:0.15rem';
	refs.buttons.style.cssText +=
		'height:1rem; overflow:hidden;';
	refs.confirm.style.cssText +=
		'float:left; width:50%; height:1rem; line-height:1rem; text-align:center;';
	refs.cancel.style.cssText +=
		'float:left; width:50%; height:1rem; line-height:1rem; text-align:center;';

	refs.text.innerHTML = this.props.text;
	refs.cancel.addEventListener('click',function(){
		refs.mask.style.display = 'none';
	})

	return fragment;
}

export {Mask};

/*
var $ = window.$;


// function createTemplate(){


// 	console.log( refs )

// 	$mask 	= $( refs.mask );
// 	$bg 	= $( refs.bg );
// 	$panel 	= $( refs.panel );
// 	$text 	= $( refs.text );
// 	$buttons = $( refs.buttons );
// 	$button = $( [refs.confirm,refs.cancel] );
// 	$confirm = $( refs.confirm );
// 	$cancel = $( refs.cancel );

// 	$('body').prepend($mask);
// };
// createTemplate();

// $mask.css({
// 	position: 'fixed',
// 	left: 0,
// 	top: 0,
// 	width: '100%',
// 	height: '100%',
// 	display: 'none',
// 	'z-index': 1000
// });
// $bg.css({
// 	width: '100%',
// 	height: '100%',
// 	background: 'rgba(0,0,0,0.5)'
// });
// $panel.css({
// 	position: 'absolute',
// 	left: 0, top: 0, right: 0, bottom: 0,
// 	width: '5rem',
// 	height: '3rem',
// 	margin: 'auto',
// 	background: 'white',
// 	'font-size': '0.3rem'
// })
// $text.css({
// 	'box-sizing': 'border-box',
// 	height: '2rem',
// 	padding: '0.15rem'
// })
// $buttons.css({
// 	height: '1rem',
// 	overflow: 'hidden'
// })
// $button.css({
// 	float: 'left',
// 	width: '50%',
// 	height: '1rem',
// 	'line-height': '1rem',
// 	'text-align': 'center'
// })


var $mask, $bg, $panel, $text, $buttons, $button, $confirm, $cancel;

// var a = new ZeactComponent();
// var createElement = ZeactElement.createElement.bind(a);
// var refs = a.refs;

function createFragment(){

}

var obj = {
	type: 'div',
	childNodes: [
		{
			type: 'div'
		},
		{
			type: 'div'
		}
	]
}

function useStringTemplate(){
	$('body').prepend(
		'<div class="mask2016">'+
			'<div class="bg"></div>'+
			'<div class="panel">'+
				'<p class="text"></p>'+
				'<div class="buttons">'+
					'<div class="button confirm">确定</div>'+
					'<div class="button cancel">取消</div>'+
				'</div>'+
			'</div>'+
		'</div>'
	);

	$mask = $('.mask2016');
	$bg = $mask.find('.bg');
	$panel = $mask.find('.panel');
	$text = $mask.find('.text');
	$buttons = $mask.find('.buttons');
	$button = $mask.find('.button');
	$confirm = $mask.find('.confirm');
	$cancel = $mask.find('.cancel');
};

	// var _confirm = createElement(
	// 	'div',
	// 	{style: 'background: #197FEE;'},
	// 	['确定']);
	// var _cancel = createElement('div',null,['取消']);
	// var _buttons = createElement('div',null,[_confirm,_cancel]);

	// var _text = createElement('p');

	// var _panel = createElement('div',null,[_text,_buttons]);

	// var _bg = createElement(
	// 	'div',
	// 	{style: 'width:100%; height:100%; background:rgba(0,0,0,0.5);'}
	// );

	// var _mask = createElement(
	// 	'div',
	// 	{style: 'position:fixed; left:0; top:0; width:100%; height:100%; display:none; z-index:1000;'},
	// 	[_bg,_panel]
	// );


function zConfirm( text,callback1,callback2 ){
	$text.html( text );
	$mask.show();
	// $bg.on('click',function(){
	// 	$mask.hide();
	// })
	$cancel.on('click',function(){
		callback2();
		$mask.hide();
	})
}

*/