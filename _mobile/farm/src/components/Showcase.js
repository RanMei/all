import './Showcase.less';

class Showcase extends React.Component {
	render(){
		return (
			<div className="Showcase">
				{this.props.items.map(function(a){
					return (
						<a className="item-2" href={'#/item?id='+a.id}>
							<img src={DIR.img+'/items/'+a.id+'/t.jpg'}/>
							<div className="tag">
								<p className="name">
									{a.name}
								</p>
								<p className="price">
									￥{a.price.toFixed(2)}
								</p>
							</div>
						</a>
					)
				})}
			</div>
		)	
	}
}

Showcase.defaultProps = {
	items: []
}

export {Showcase};