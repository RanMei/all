require('./Category.less');

import {Topbar} from '../components/Topbar.js';
import {Navbar} from '../components/Navbar.jsx';
import {Showcase} from '../components/Showcase.js';

class Category extends React.Component {
	constructor(props) {
        super(props);
        var self = this;
		console.log('<Home/> constructing',self.state);
    }
    back(){
    	console.log(111)
    	history.go(-1);
    }
	render() {
		window.scroll(0,0);
		return (
			<div className="CATEGORY">
				<Topbar name="商品分类"/>
				<Showcase items={this.props.items}/>
				<Navbar name="category"/>
			</div>
		);

	}
}

Category.defaultProps = {
	items: []
}

export {Category};