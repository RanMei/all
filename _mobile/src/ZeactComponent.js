function ZeactComponent(props){
	this.props = props||{};
	this.refs = {};
	this.state = {};
	this.setState = function(obj){
		var self = this;
		var stateChanged = false;
		for( var key in obj ){
			if( obj[key]===self.state[key] ){

			}else{
				self.state[key] = obj[key];
				stateChanged = true;
			}
		}
		if( stateChanged ){
			self.update();
		}
	}
	this.update = function(){
		
	}
}

export {ZeactComponent};