var root = new Vue({
	el: '#root',
	data: {
		name: 'John',
		age: 21
	},
	watch: {
		name: function(){

		}
	},
	mounted: function(){
		var self = this;
		setTimeout(function(){
			self.name = 'Jack'
		},2000);
	}
})

console.log(root)
