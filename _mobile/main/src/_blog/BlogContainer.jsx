import {List} from './List.jsx';
import posts from '../api/posts.js';

class BlogContainer extends React.Component {
	constructor(){
		super();
	}
	componentDidMount(){

	}
	toPost(a){

	}
	render(){
		return (
			<div className="Blog">
				<List list={posts}/>
			</div>
		)
	}
}

export {BlogContainer};