import './Slider.less';

class Slider extends React.Component {
	//constructor(){}
	render(){
		return (
			<div className="SLIDER">
				<a href="#/home">Home</a>
				<a href="#/projects">Projects</a>
				<a href="#/animations">Animation</a>
				<a href="#/blog"
				style={{}}>Blog</a>
				<a href="./_mobile/farm/index.html">Farm</a>
				<a href="./_mobile/vue/index.html">Vue</a>
				<a href="./time/index.html">Time</a>
				<a href="./time/admin.html">Admin</a>
			</div>
		)
	}
}

Slider.defaultProps = {
	items: [{
		name: 'Home',
		href: '#/home',
		background: 'red'
	}]
}

export {Slider};