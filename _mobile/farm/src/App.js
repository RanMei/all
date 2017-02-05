var PropTypes = React.PropTypes;

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

import {App} from './containers/App.jsx';
import {Home} from './containers/Home.jsx';
import {Item} from './containers/Item.jsx';
import {Member} from './containers/Member.jsx';
import {Signin} from './containers/Signin.jsx';
import {ShoppingCart} from './containers/ShoppingCart.jsx';
import {Category} from './containers/Category.jsx';
import {DIManagement} from './containers/DIManagement.jsx';

var Provider = ReactRedux.Provider;

import store from './store/store.js';

var MyApp = ()=>(
  <Provider store={store}>    
    <Router history={ hashHistory } >
      <Route path="/" component={App}>
        <IndexRoute path="/home" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/item" component={Item} />
        <Route path="/shopping_cart" getComponent={function(nextState, cb) {
          require.ensure([], (require) => {
            cb( null, require('./containers/ShoppingCart.jsx').ShoppingCart )
          })
        }} />

        <Route path="/member" component={Member} />
        <Route path="/signin" component={Signin} />
        <Route path="/di_management" component={DIManagement} />
      </Route>
    </Router>
  </Provider>
);

export default MyApp;

