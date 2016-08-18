var app = new Vue({
	el: '#app',
	data: {
		maskShown: false,
		items: []
	},
	methods: {
		init: function(){
			this.items = [
				{
					name: '西红柿',
					quantity: 1
				},
				{
					name: '黄瓜',
					quantity: 1
				}
			]
			//this.maskShown = true;
		},
		cancel: function(){
			this.maskShown = false;
		},
		push: function(){
			this.items.push({
				name: '茄子',
				quantity: 1
			})
		}
	}
})

app.init();