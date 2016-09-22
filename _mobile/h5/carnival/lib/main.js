function App(){
	this.btn = document.querySelector('.btn');
	this.btnImg = document.querySelector('.btn-img');
	this.init();
}
App.prototype = {
	init: function(){
		var self = this;
		this.btn.addEventListener('touchstart',function(){
			self.btnImg.setAttribute('src','img/btn_active.png');
		});
		this.btn.addEventListener('touchmove',function(){
			self.btnImg.setAttribute('src','img/btn.png');
		})
		this.btn.addEventListener('touchend',function(){
			self.btnImg.setAttribute('src','img/btn.png');
		})
		this.btn.addEventListener('touchcancel',function(){
			self.btnImg.setAttribute('src','img/btn.png');
		})
	}
}
new App();