//require('./common.less');
//require('./blog.less');

var PropTypes = React.PropTypes;

var posts = [{
	title: 'What is functional programming?',
	time: '2016-10-3',
	body: [
		'Functional programming is a programming paradigm.',
		'These are some important concepts in functional programming: higher-order function, pure function, side effects...'
	]
},{
	title: 'How to learn English?',
	time: '2016-10-4',
	body: [
		'huh?adsgadga',
		'what the hell?dfadfafa',
		'dgfdgsfdhfdhfsdh'
	]
}];

class Post extends React.Component {
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
			<div className="POST">
				<div className="post-title">{this.state.post.title}</div>
				<div className="post-body">
					{this.state.post.body.map(a=>{
						return <p>{a}</p>
					})}
				</div>
			</div>
		)
	}
}

export {Post};