
module.exports = {
	components: {
		swiper: require('./components/swiper.vue')
	},
	template: `
		<div style="width:100%;height:100vh;background:black;overflow:hidden">
			<swiper :items="items"></swiper>
		</div>
	`,
	data: function(){
		return {
			items: [{
				background: 'red'
			},{
				background: 'orange'
			},{
				background: 'yellow'
			},{ 
				background: 'green'
			},{
				background: 'blue'
			}]
		}
	}
}