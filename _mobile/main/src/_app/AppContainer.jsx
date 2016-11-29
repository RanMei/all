import {Navbar} from '../components/Navbar.jsx';
import {Slider} from '../components/Slider.jsx';
import {Footer} from '../components/Footer.jsx';

class AppContainer extends React.Component {
	constructor(){
		super();
		console.debug('<App/> constructing');
	}
	render() {
		return (
			<div className="container">
				<Navbar/>
				<Slider/>
				{this.props.children}
				<Footer/>
			</div>
		);
	}
}

export {AppContainer};