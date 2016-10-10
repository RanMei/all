require('./index.less');

Vue.component( 'imgBlured',require('./components/img-blured.vue') );
Vue.component( 'stackBoth',require('./components/stack-both.vue') );
Vue.component( 'countdown',require('./components/countdown.vue') );
Vue.component( 'buttonAlarm',require('./components/button-alarm-2.vue') );


new Vue({
	el: '.root',
	data: {
		items: [],
		timeleft: 800000000,

		hasAlarm: true, 
		// 'pending','unset','resolved','set'
		alarmState: 'unset'
	},
	created: function(){

	},
	mounted: function(){
		this.items = [{
			id: 0,
			title: '美国队长',
			score: 6.7,
			intro: 'Cocain business controlls America!',
			_class: ''
		},{
			id: 1,
			title: '超人',
			score: 2.5,
			intro: 'Freedom, justice and American way!',
			_class: ''
		},{
			id: 2,
			title: '纨绔大小姐',
			score: 9.4,
			intro: 
			'云落枫，华夏医学天才，意外身亡，魂附于龙啸大陆将军府废物大小姐。这废物不但文不成武不就，更是胸大无脑，骄横任性，有了太子这样完美的未婚夫还不够，居然当众强抢美男，导致太子一怒之下解除婚约。 可废物受不了这个刺激，竟是上吊了结此生。再睁眼，她已非昔日废物大小姐。 契约神典，怀揣灵药空间，妙手回春，医绝天下！',
			_class: ''
		}];
	},
	methods: {
		act: function(action){
			//console.log(action.type)
			switch(action.type){
				case 'SET_ALARM':
					this.alarmState = 'set';
					break;
				case 'MINUS':
					if( this.timeleft-60000>0 ){
						this.timeleft -= 60000;
					}else{
						this.timeleft = 0;
					}
					break;
			}
		}
	}
})