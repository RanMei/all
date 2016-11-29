//require('./common.less');
//require('./blog.less');
import posts from '../api/posts';
import {Post} from './Post.jsx';

var PropTypes = React.PropTypes;

class PostContainer extends React.Component {
	constructor(){
		super();
		this.state = {
			post: {
				title: '--',
				body: []
			}
		}
	}
	componentDidMount(){
		var newPost;
		var time = location.hash.match(/time=[\d|-]+/)[0].replace(/time=/,'');
		posts.forEach(a=>{
			if(a.time===time){
				newPost = a;
			}
		})
		this.setState({
			post: newPost
		})
	}
	render(){
		return (
			<div className="PostContainer">
				<Post post={this.state.post}/>
			</div>
		)
	}
}

export {PostContainer};