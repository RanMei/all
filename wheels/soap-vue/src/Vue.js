var forEach = [].forEach;

function Vue(config){
	var self = this;
	this.$el = config.el? document.querySelector(config.el) : null;
	
	this.$data = {};
	this._watchers = {};

	this._tokens = [];
	for(var key in config.data){
		(function(){
			var val = config.data[key];
			Object.defineProperty(self,key,{
				get: function(){
					return val;
				},
				set: function(newVal){
					val = newVal;
					self.cycle()
				}
			});
		})()
		this._tokens.push({
			key: key,
			reAttr: new RegExp(key,'g'),
			reText: new RegExp('{{'+key+'}}','g')
		});
	}
	this._updated = [];
	console.log(this)

	for(var key in config.methods){
		this[key] = config.methods[key];
	}

	if( config.mounted ){
		config.mounted.call(this);
	}

	this.init();
}

Vue.prototype = {
	init: function(){
		this.$traverse(this.$el);
		this.cycle();
	},
	$traverse: function(node){
		var self = this;

		forEach.call(node.childNodes,function(a){
			if(a.childNodes.length===0){
				if(a.nodeType===3&&a.nodeValue.match(/{{.+}}/)){
					self._updated.push({
						node: a,
						type: 'text',
						text: a.nodeValue
					})
				}
			}else{
				forEach.call(a.attributes,function(b){
					if(b.name.match(/^:/)){
						self._updated.push({
							node: a,
							type: 'class',
							text: b.value
						})
					}
				});
				self.$traverse(a);
			}
		})
	},
	cycle: function(){
		var self = this;
		this._updated.forEach(function(a){
			if(a.type==='class'){
				var newList = a.text;
				self._tokens.forEach(function(b){
					newList = newList.replace(b.reAttr,self[b.key]);
				})
				a.node.className = newList;
			}else if(a.type==='text'){
				var newText = a.text;
				self._tokens.forEach(function(b){
					newText = newText.replace(b.reText,self[b.key]);
				})
				a.node.nodeValue = newText;
			}
		})
	}
}

new Vue({
	el: 'body',
	data: {
		name: 'John',
		age: '21'
	},
	mounted: function(){
		var self = this;
		var name = 1;
		setInterval(function(){
			self.name = name;
			name++;
		},500)

	}
})