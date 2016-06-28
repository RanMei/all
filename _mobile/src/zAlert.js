var $ = window.$;

var createElement = require('./createElement.js');

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

var $mask, $bg, $panel, $text, $buttons, $button, $confirm, $cancel;

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

function useElementCreating(){
	var _confirm = createElement('div',null,['确定']);
	var _cancel = createElement('div',null,['取消']);
	var _buttons = createElement('div',null,[_confirm,_cancel]);

	var _text = createElement('p');

	var _panel = createElement('div',null,[_text,_buttons]);

	var _bg = createElement(
		'div',
		{style: 'width:100%; height:100%; background:rgba(0,0,0,0.5);'}
	);

	var _mask = createElement(
		'div',
		{style: 'position:fixed; left:0; top:0; width:100%; height:100%; display:none; z-index:1000;'},
		[_bg,_panel]
	);

	$mask 	= $( _mask );
	$bg 	= $( _bg );
	$panel 	= $( _panel );
	$text 	= $( _text );
	$buttons = $( _buttons );
	$button = $( [_confirm,_cancel] );
	$confirm = $( _confirm );
	$cancel = $( _cancel );

	$('body').prepend($mask);
};
useElementCreating();

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
$panel.css({
	position: 'absolute',
	left: 0, top: 0, right: 0, bottom: 0,
	width: '5rem',
	height: '3rem',
	margin: 'auto',
	background: 'white',
	'font-size': '0.3rem'
})
$text.css({
	'box-sizing': 'border-box',
	padding: '0.15rem'
})
$buttons.css({
	overflow: 'hidden'
})
$button.css({
	float: 'left',
	width: '50%',
	'text-align': 'center'
})

$bg.on('click',function(){
	$mask.hide();
})
$cancel.on('click',function(){
	$mask.hide();
})

function zAlert( text ){
	$text.html( text );
	$mask.show();
}

export {zAlert};