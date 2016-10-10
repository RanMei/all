function Vue(config){
	var self = this;
	this.$el = config.el? document.querySelector(config.el) : null;
	
	this.$data = {};
	this._watchers = {};
	for(var key in config.data){
		Object.defineProperty(this,key,{
			get: function(){
				//console.log('getting');
				return config.data[key];
			},
			set: function(newVal){
				//console.log('setting '+key+' to '+newVal);
				config.data[key] = newVal;
				self.cycle(key)
			}
		});
		//console.log( config.data[key] )
		//this.$data[key] = this[key];
		this._watchers[key] = (function(){
			var arr = [];
			[].forEach.call(self.$el.childNodes,function(a){
				console.log(a)
				if(a.nodeType===3){
					arr.push({
						node: a,
						text: a.nodeValue
					})
				}
			})
			return arr;
		})();
	}

	for(var key in config.methods){
		this[key] = config.methods[key];
	}

	if( config.mounted ){
		config.mounted.call(this);
	}

}

Vue.prototype = {
	cycle: function(key){
		var self = this;
		this._watchers[key].forEach(function(a){
			a.node.nodeValue = a.text.replace('{{'+key+'}}',self[key])
		})
	}
}

new Vue({
	el: 'body',
	data: {
		name: 'John'
	},
	mounted: function(){
		var self = this;
		var name = 1;
		console.log(this)
		setInterval(function(){
			self.name = name;
			name++;
		},500)
		console.log(document.body)
	}
})