require('./index.less');

Vue.component( 'imgBlured',require('./img-blured.vue') );
Vue.component( 'stackBoth',require('./stack-both.vue') );
Vue.component( 'buttonAlarm',require('./button-alarm.vue') );

new Vue({
	el: 'body'
})