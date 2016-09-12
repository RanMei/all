var mask = require('./components/mask.vue');
var container = require('./components/container.vue');

Vue.component( 'mask',mask );
Vue.component( 'container',container );

new Vue({
	el: 'body',
	components: {
		mask, container
	},
	data: {
		state: 'loading',
		maskOpacity: 1,
		user: {
			name: '',
			phone: ''
		}
	},
	computed: {
		currentPage: function(){
			return this.pages[this.current];
		}
	},
	ready: function(){
		
	},
	methods: {
		act: function(str){
			switch (str) {
				case 'SHOW_CONTAINER':
					this.maskOpacity = 0;
					setTimeout(()=>{
						this.state = 'container';
					},1000);
					break;
			}
		},
		submit: function(){
			fetch('./php/register.php', {
				method: 'POST',
				// mode: 'no-cors',
				headers: {
					//'Access-Control-Allow-Origin': 'http://madsoap.net/',
					// 'Accept': 'application/json',
					// 'Content-Type': 'application/json'
					//'Content-Type':'application/x-www-form-urlencoded'
				},
				body: JSON.stringify( this.user )
			}).then(function(res){
				return res.json();
			}).then(function(data){
				console.log(data);
			}).catch(function(e,f,g){
				console.log(e,f,g);
			})
		}
	}
})