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
	var current = 0;
	var $switching = false;
	var $score = 0;
	


	$('.currentPanel').find('.title').html( $questions[current].question );
	for( var i=0;i<4;i++ ){
		$('.currentPanel').find('ul>li').eq(i).html( $questions[current][i] );
	};

	function toNext(){
		if( !$switching ){
			console.log( $(this).index() );
			$switching = true;
			$('.nextPanel').find('.title').html( $questions[current+1].question );
			for( var i=0;i<4;i++ ){
				$('.nextPanel').find('ul>li').eq(i).html( $questions[current+1][i] );
			}
			$('.currentPanel').addClass('moveOut');
			$('.nextPanel').addClass('moveIn');
			setTimeout(function(){
				_next = $('.nextPanel');
				_current = $('.currentPanel');
				_next.removeClass('nextPanel moveIn moveOut').addClass('currentPanel');
				_current.removeClass('currentPanel moveIn moveOut').addClass('nextPanel');
				current++;
				$switching = false;
			},1000);
		};
	};

	$('.options').on('click','li',toNext);

	
});