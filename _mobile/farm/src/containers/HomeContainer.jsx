import {$$store} from '../store/index.jsx';
import {Home} from '../components/Home.jsx';

var HomeContainer = ReactRedux.connect(function(state){
	return {
		homeSwiper: state.homeSwiper,
		items: state.items
	}
})( Home );

export {HomeContainer};