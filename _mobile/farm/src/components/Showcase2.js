import './Showcase2.less';

class Showcase2 extends React.Component {
	render(){
		return (
			<div className="Showcase2">
				{this.props.items.map(function(item,i){
					var href = '#/item?id='+item.id;
					var src = DIR.img+'/items/'+item.id+'/t.jpg';
					var style = {
						float: i%2===0?'left':'right'
					};
					return (
						<div className="item">
							<a href={href}>
								<img className="thumbnail" src={src}/>
								<p className="name">{item.name}</p>
								<p className="price">￥{item.price.toFixed(2)}</p>
							</a>
						</div>
					)
				})}
			</div>
		)	
	}
}

Showcase2.defaultProps = {
	items: []
}

export {Showcase2};