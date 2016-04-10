import {CommentBox} from './CommentBox.jsx';
import {ShoppingCart} from './ShoppingCart.jsx';

$.ajax({
	url: './database/items.json',
	type: 'POST',
	dataType: 'json'
}).then(
	function(data){
		ReactDOM.render(
			<ShoppingCart items={data.items} />,
			document.getElementById('ShoppingCart')
		);
	}
);

ReactDOM.render(
	<CommentBox />,
	document.getElementById('CommentBox')
);