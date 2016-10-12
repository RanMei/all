import {Navbar} from '../components/Navbar.jsx';
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
				{this.props.children}
				<Footer/>
			</div>
		);
	}
}

export {AppContainer};