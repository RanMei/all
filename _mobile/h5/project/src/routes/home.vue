<template>
	<slider 
	:show="state==='container'"></slider>
</template>

<script type="text/javascript">
export default {
	data: function(){
		return {
			state: 'container',
			maskOpacity: 1,
			user: {
				name: '',
				phone: ''
			}
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
}
</script>