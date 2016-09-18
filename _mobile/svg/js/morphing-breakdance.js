function App(){
	this.CONFIG = {
		duration: 1000,
		easing: 'elastic-out',
		rotation: 'none',
	};
	this.M = new SVGMorpheus('#Layer_1', this.CONFIG);
	this.poses = [
		{id:'pose1'},
		{id:'pose2'},
		{id:'pose3'},
		{id:'pose4'},
		{id:'pose5'}
	];
	console.log(this.M)
	this.current = -1;
	this.init();
}
App.prototype = {
	init: function(){
		var self = this;
		this.update();
		setInterval(function(){
			self.update();
		},1000)
	},
	update: function(){
		if( this.current<this.poses.length-1 ){
			this.current++;
		}else{
			this.current = 0;
		}
		var pose = this.poses[this.current];
		this.M.to( pose.id,{
			easing: 'elastic-out',
			duration: 1000
		})
	}
}
new App();