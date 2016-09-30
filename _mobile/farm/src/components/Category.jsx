require('./Category.less');

import {Navbar} from './Navbar.jsx';

class Category extends React.Component {
	constructor(props) {
        super(props);
        var self = this;
		self.state = {
			items: []
		};
		self.getItems();
		console.log('<Home/> constructing',self.state);
    }
    getItems(){
    	var self = this;
    	this.state.items = require('../data/items.js').dataItems;
		// fetch('/getItems', {
		// 	method: 'POST',
		// 	headers: {
		// 		// 'Accept': 'application/json',
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify( self.state.user )
		// }).then(function(res){
		// 	return res.json();
		// }).then(function(data){
		// 	self.setState({
		// 		items: data
		// 	})
		// })
    }
    back(){
    	console.log(111)
    	history.go(-1);
    }
	render() {
		window.scroll(0,0);
		return (
			<div className="CATEGORY">

				<Navbar name="category"/>
			</div>
		);

	}
}

export {Category};