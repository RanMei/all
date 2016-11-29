require('./Footer.less');

class Footer extends React.Component {
	constructor(){
		super();
	}
	render(){
		return (
			<div className="FOOTER">
				Copyright &#169;2016 SoapTech
			</div>
		)
	}
}

export {Footer};