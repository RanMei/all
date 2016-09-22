class Home extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	list: [
	        	{	
	        		title: 'CSS3 animation',
	        		hrefs: [
	        			'./_mobile/svg/3d-cube.html'
	        		]
	        	},
	        	{
	        		title: 'interactive',
	        		hrefs: [
	        			'./_mobile/svg/gooey_menu.html',
	        			'./_mobile/svg/stack.html'
	        		]
	        	},
	        	{
	        		title: 'SVG',
	        		hrefs: [
	        			'./_mobile/svg/wave.html',
	        			'./_mobile/svg/sunset.html',
	        			'./_mobile/svg/countdown.html'
	        		]
	        	},
	        ]
	    };
    }
	render() {
		return (
			<div className="HOME">
				<div className="panel">
					{this.state.list.map((a)=>{
						return (
							<div>
								<div className="panel-header">
									{a.title}
								</div>
								<div className="panel-body">
									{a.hrefs.map(b=>{
										return (
											<span><a href={b}>{b}</a><br/></span>
										)
									})}
								</div>
							</div>
						)
					})}
					parallax animation<br/>
					<a href="./_mobile/svg/parallax-clouds.html">./_mobile/svg/parallax-clouds.html</a><br/>
					<a href="./_mobile/svg/parallax.html">./_mobile/svg/parallax.html</a><br/>
					button animation<br/>
					<a href="./_mobile/svg/button-blobs.html">./_mobile/svg/button-blobs.html</a><br/>
					<a href="./_mobile/svg/button-red.html">./_mobile/svg/button-red.html</a><br/>
					stroke animation<br/>
					<a href="./_mobile/svg/stroke-arsenal.html">./_mobile/svg/stroke-arsenal.html</a><br/>
					<a href="./_mobile/svg/stroke-square.html">./_mobile/svg/stroke-square.html</a><br/>
					<a href="./_mobile/svg/stroke-circle.html">./_mobile/svg/stroke-circle.html</a><br/>
					<a href="./_mobile/svg/stroke-jar.html">./_mobile/svg/stroke-jar.html</a><br/>
					<a href="./_mobile/svg/stroke-gameboy.html">./_mobile/svg/stroke-gameboy.html</a><br/>
					<a href="./_mobile/svg/stroke-qq.html">./_mobile/svg/stroke-qq.html</a><br/>
					morphing<br/>
					<a href="./_mobile/svg/morphing-phones.html">./_mobile/svg/morphing-phones.html</a><br/>
					canvas<br/>
					<a href="./_mobile/canvas/rain.html">./_mobile/canvas/rain.html</a><br/>
					<a href="./_mobile/canvas/snowfall.html">./_mobile/canvas/snowfall.html</a><br/>
					<a href="./_mobile/canvas/fire.html">./_mobile/canvas/fire.html</a><br/>
					h5<br/>
					<a href="./_mobile/h5/star_wars/index.html">./_mobile/h5/star_wars/index.html</a><br/>
					<a href="./_mobile/h5/olympics/index.html">./_mobile/h5/olympics/index.html</a><br/>
					<a href="./_mobile/h5/olympics/result.html">./_mobile/h5/olympics/result.html</a><br/>
					<a href="./_mobile/h5/carnival/index.html">./_mobile/h5/carnival/index.html</a><br/>
					<a href="./_mobile/h5/school/index.html">./_mobile/h5/school/index.html</a><br/>
					<a href="./_mobile/h5/feast/feast.html">./_mobile/h5/feast/feast.html</a><br/>
					<a href="./_mobile/h5/project/index.html">./_mobile/h5/project/index.html</a><br/>
				</div>
			</div>
		);
	}
}

export {Home};