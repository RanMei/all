require('./common.less');

var PropTypes = React.PropTypes;

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

import {AppContainer} from './containers/AppContainer.jsx';
import {Home} from './components/Home.jsx';
import {Projects} from './components/Projects.jsx';
import {Animations} from './components/Animations.jsx';
import {BlogContainer} from './containers/BlogContainer.jsx';
import {Post} from './components/Post.jsx';

// The router.
ReactDOM.render(
	(	
		<Router history={ hashHistory } >
			<Route path="/" component={AppContainer}>
				<Route path="/home" component={Home} />
				<Route path="/projects" component={Projects} />
				<Route path="/animations" component={Animations} />
				<Route path="/blog" component={BlogContainer} />
				<Route path="/post" component={Post} />
				<IndexRoute path="/home" component={Home} />
			</Route>
		</Router>
	),
	document.getElementById('app')
);