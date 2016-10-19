require('./Projects.less');

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [[
				'./fytpy/index.html',
				'./fytpy/react/index.html',
				'./caredaily/index.html',
				'./desktop/_wolf/index.html',
				'./desktop/presentation/index.html'
			],[
				'./_mobile/farm/index.html',
				'./_mobile/h5/star_wars/index.html',
				'./_mobile/h5/olympics/index.html',
				'./_mobile/h5/olympics/result.html',
				'./_mobile/h5/carnival/index.html',
				'./_mobile/h5/school/index.html',
				'./_mobile/h5/feast/feast.html',
				'./_mobile/h5/live/live.html',
				'./_mobile/h5/project/index.html'
			],[
				'./_canvas/Heart.html',
				'./_canvas/NeonHexagons/index.html',
				'./_canvas/DriftingBalls/index.html',
				'./_canvas/lion/index.html',
				'./_canvas/cube/canvas_geometry_cube.html'
			],[
				'./_mobile/vue/index.html#/preloader',
				'./_mobile/vue/index.html#/svg-qq-container',
				'./_mobile/vue/index.html#/swiper-container',
				'./_mobile/vue/index.html#/3d',
				'./_mobile/vue/index.html#/orientation',
				'./_mobile/vue/index.html#/3d-cube'
			]]
		};
	}
	render() {
		return (
			<div className="PROJECTS">
				<div className="log">
					Ah, you finally got here! These are the projects I am maintaining currently.
				</div>
				{this.state.list.map((a,i)=>{
					return (
						<div className="panel col-70">
							<div className="panel-footer">
							{a.map(b=>{
								return (
									<span><a href={b} target="_blank">{b}</a><br/></span>
								)
							})}
							</div>
						</div>
					)
				})}
			</div>
		);
	}
}

export {Projects};