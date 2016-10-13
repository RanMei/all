require('./Animations.less');

class Animations extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [{	
				title: 'CSS3 animation',
				hrefs: [
				'./_mobile/svg/3d-cube.html'
				]
			},{
				title: 'interactive',
				hrefs: [
				'./_mobile/svg/gooey_menu.html',
				'./_mobile/svg/stack.html',
				'./_mobile/svg/stack-both.html'
				]
			},{
				title: 'SVG',
				hrefs: [
				'./_mobile/svg/wave.html',
				'./_mobile/svg/sunset.html',
				'./_mobile/svg/countdown.html'
				]
			},{
				title: 'parallax animation',
				hrefs: [
				'./_mobile/svg/parallax-clouds.html',
				'./_mobile/svg/parallax.html'
				]
			},{
				title: 'button animation',
				hrefs: [
				'./_mobile/svg/button-blobs.html',
				'./_mobile/svg/button-red.html',
				'./_mobile/svg/button-ripple.html'
				]
			},{
				title: 'stroke animation',
				hrefs: [
				'./_mobile/svg/stroke-arsenal.html',
				'./_mobile/svg/stroke-square.html',
				'./_mobile/svg/stroke-circle.html',
				'./_mobile/svg/stroke-gameboy.html',
				'./_mobile/svg/stroke-jar.html',
				'./_mobile/svg/stroke-qq.html'
				]
			},{
				title: 'morphing',
				hrefs: [
				'./_mobile/svg/morphing-phones.html'
				]
			},{
				title: 'canvas',
				hrefs: [
				'./_mobile/canvas/rain.html',
				'./_mobile/canvas/snowfall.html',
				'./_mobile/canvas/fire.html'
				]
			},{
				title: 'h5',
				hrefs: [
				'./_mobile/h5/star_wars/index.html',
				'./_mobile/h5/olympics/index.html',
				'./_mobile/h5/olympics/result.html',
				'./_mobile/h5/carnival/index.html',
				'./_mobile/h5/school/index.html',
				'./_mobile/h5/feast/feast.html',
				'./_mobile/h5/live/live.html',
				'./_mobile/h5/project/index.html',
				'./_mobile/vue/index.html#/preloader',
				'./_mobile/vue/index.html#/svg-qq-container',
				'./_mobile/vue/index.html#/swiper-container',
				]
			}]
		};
	}
	render() {
		return (
			<div className="ANIMATIONS">
			<div className="panel">
			{this.state.list.map((a,i)=>{
				return (
					<div>
					<div className="panel-header">
					{a.title}
					</div>
					<div className={i===this.state.list.length-1?'panel-section last':'panel-section'}>
					{a.hrefs.map(b=>{
						return (
							<span><a href={b}>{b}</a><br/></span>
							)
					})}
					</div>
					</div>
					)
			})}
			</div>
			</div>
			);
	}
}

export {Animations};