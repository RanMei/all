$(document).ready(function(){
	var $questions = [
		{
			question: '0以下哪本书是俄国作家的作品？',
			0: 'A.呼啸山庄',
			1: 'B.静静的顿河',
			2: 'C.我的叔叔于勒',
			3: 'D.神曲',
			answer: 1
		},
		{
			question: '1以下哪本书是俄国作家的作品？',
			0: 'A.呼啸山庄',
			1: 'B.静静的顿河',
			2: 'C.我的叔叔于勒',
			3: 'D.神曲',
			answer: 1
		},
		{
			question: '2以下哪本书是俄国作家的作品？',
			0: 'A.呼啸山庄',
			1: 'B.静静的顿河',
			2: 'C.我的叔叔于勒',
			3: 'D.神曲',
			answer: 1
		},
		{
			question: '3以下哪本书是俄国作家的作品？',
			0: 'A.呼啸山庄',
			1: 'B.静静的顿河',
			2: 'C.我的叔叔于勒',
			3: 'D.神曲',
			answer: 1
		},
		{
			question: '4以下哪本书是俄国作家的作品？',
			0: 'A.呼啸山庄',
			1: 'B.静静的顿河',
			2: 'C.我的叔叔于勒',
			3: 'D.神曲',
			answer: 1
		},
		{
			question: '5以下哪本书是俄国作家的作品？',
			0: 'A.呼啸山庄',
			1: 'B.静静的顿河',
			2: 'C.我的叔叔于勒',
			3: 'D.神曲',
			answer: 1
		}
	];
	


	var $current = 0;
	var $switching = false;
	var $score = 0;
	var $cover = $('.cover');
	var $world = $('.world');
	var $mask = $('.mask');
	var $page0 = $('.page0');
	var $page1 = $('.page1');
	var $result = $('.result');
	
	function init(){
		$current = 0;
		$switching = false;
		$score = 0;
		$cover.show();
		$world.hide();
		$('body').css({overflow:'visible'});
		$page1.hide();
		$result.hide();
		$('.currentPanel').find('.title').html( $questions[$current].question );
		for( var i=0;i<4;i++ ){
			$('.currentPanel').find('ul>li').eq(i).html( $questions[$current][i] );
		};
	}

	init();

	$('.start').on('mouseenter',function(){
		$(this).addClass('toRect');
	})

	$('.start').on('click',function(){
		$('html').animate(  {"scrollTop":"0"}  ,0);
		$cover.hide();
		$('body').css({overflow:'hidden'});
		$world.show();
		$page1.show();
	})

	function toNext(){
		if( !$switching ){
			if( $current<$questions.length-1 ){
				console.log( $(this).index() );
				$score += $(this).index()===$questions[$current].answer?1:0;
				$switching = true;
				$('.nextPanel').find('.title').html( $questions[$current+1].question );
				for( var i=0;i<4;i++ ){
					$('.nextPanel').find('ul>li').eq(i).html( $questions[$current+1][i] );
				}
				$('.currentPanel').addClass('moveOut');
				$('.nextPanel').addClass('moveIn');
				setTimeout(function(){
					var _next = $('.nextPanel');
					var _current = $('.currentPanel');
					_next.removeClass('nextPanel moveIn moveOut').addClass('currentPanel');
					_current.removeClass('currentPanel moveIn moveOut').addClass('nextPanel');
					$current++;
					$switching = false;
				},1000);
			}else{
				$score += $(this).index()===$questions[$current].answer?1:0;
				$('.score').html($score);
				$page1.hide();
				$result.show();
			}
		};
	};

	$('.options').on('click','li',toNext);
	
	$('.getNow').on('click',function(){
		$mask.show();
	})
	$('.close').on('click',function(){
		$mask.hide();
	})
	$('.tryAgain').on('click',function(){
		init();
	})
	
});