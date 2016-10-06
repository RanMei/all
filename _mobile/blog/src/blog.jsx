require('./common.less');
require('./blog.less');

var PropTypes = React.PropTypes;

var list = [{
	time: '2016-10-3',
	title: 'What is Functional Programming'
},{
	time: '2016-10-4',
	title: 'night'
}];

class Index extends React.Component {
	constructor(){
		super();
		this.state = {
			list: []
		}
	}
	componentDidMount(){
		this.setState({
			list: list
		})
	}
	toPost(a){

	}
	render(){
		return (
			<div className="INDEX">
				<div>index</div>
				{this.state.list.map(a=>{
					return (
						<a className="block" href={'./post.html?time='+a.time}>
							{a.title}
						</a>
					)
				})}
			</div>
		)
	}
}

ReactDOM.render(
	<Index/>,
	document.getElementById('root')
);