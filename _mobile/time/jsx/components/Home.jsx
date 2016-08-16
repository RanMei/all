import {$$imgDir} from '../common.jsx';

import {Navbar} from './Navbar.jsx';
import {Swiper} from './Swiper.jsx';

class Home extends React.Component {
	constructor(props) {
        super(props);
  //       var self = this;
		// self.state = {items: []};
		// self.getItems();
		// console.log('<Home/> constructing',self.state);
    }
    getItems(){
    	var self = this;
		fetch('/getItems', {
			method: 'POST',
			headers: {
				// 'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( self.state.user )
		}).then(function(res){
			return res.json();
		}).then(function(data){
			self.setState({
				items: data
			})
		})
    }
	render() {
		window.scroll(0,0);
		
			return (
				<div className="HOME">
					<div className="banner">
					</div>
					<div className="navbar">
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<a className="toSignin" href="#/signin">
							<img src="img/mine.png"/>
						</a>
					</div>
					<div className="searchbar">
					</div>
					<ul className="showcase">
						<li>
							<p>模玩</p>
						</li>
						<li>
							<p>模玩</p>
						</li>
						<li>
							<p>模玩</p>
						</li>
						<li>
							<p>模玩</p>
						</li>
						<li>
							<p>模玩</p>
						</li>
					</ul>
				</div>
			);

	}
}

export {Home};