var $ = window.$;

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

var $mask = $('.mask2016');
var $bg = $mask.find('.bg');
var $panel = $mask.find('.panel');
var $text = $mask.find('.text');
var $buttons = $mask.find('.buttons');
var $button = $mask.find('.button');
var $confirm = $mask.find('.confirm');
var $cancel = $mask.find('.cancel');

$mask.css({
	position: 'fixed',
	left: 0,
	top: 0,
	width: '100%',
	height: '100%',
	display: 'none',
	'z-index': 1000
});
$bg.css({
	width: '100%',
	height: '100%',
	background: 'rgba(0,0,0,0.5)'
});
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