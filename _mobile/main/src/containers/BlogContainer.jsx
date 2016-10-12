import {Blog} from '../components/Blog.jsx';

var list = [{
	time: '2016-10-3',
	title: 'What is Functional Programming'
},{
	time: '2016-10-4',
	title: 'night'
}];

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
			<Blog list={list}/>
		)
	}
}

export {BlogContainer};