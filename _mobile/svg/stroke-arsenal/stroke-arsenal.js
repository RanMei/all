function Arsenal(){
	this.cannon = document.querySelector('#cannon');
	this.init();
}
Arsenal.prototype = {
	init: function(){
		this.cannon.style.animation = '2s cannon forwards';
	}
}
new Arsenal();