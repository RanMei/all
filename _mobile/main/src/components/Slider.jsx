import './Slider.less';

class Slider extends React.Component {
	//constructor(){}
	render(){
		return (
			<div className="SLIDER">
				<a href="#/home">Home</a>
				<a href="#/projects">Projects</a>
				<a href="#/animations">Animation</a>
				<a href="#/blog">Blog</a>
			</div>
		)
	}
}

export {Slider};