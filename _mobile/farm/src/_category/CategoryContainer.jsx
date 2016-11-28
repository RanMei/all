import {Category} from './Category.jsx';

var CategoryContainer = ReactRedux.connect(function(state){
	return {
		items: state.items
	}
})( Category );

export {CategoryContainer};