var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;

class Topbar extends React.Component {
	render(){
		return(
			<div className="topbar">
				<Link to="/signin">signin</Link>
				<div>{this.props.userID}</div>
			</div>
		)
	}
}
class Navbar extends React.Component {

	render(){
		return(
			<div className="navbar">
				<ul className="container">
					<li><Link to="/home">Home</Link></li>
					<li><Link to="/comment_box">CommentBox</Link></li>
					<li><Link to="/shopping_cart">ShoppingCart</Link></li>
					<li><Link to="/counter">Counter</Link></li>
					<SearchBox/>
				</ul>
			</div>
		)
	}
}
class List extends React.Component {
	render(){
		return (
			<ul>
				{this.props.list.map(function(item){
					return (
						<li>{item}</li>
					)
				})}
			</ul>
		)
	}
}
class SearchBox extends React.Component {
	render(){
		return(
			<div className="searchbox">
				<input type="text"/>
				<a>search</a>
			</div>
		)
	}
}

class Footer extends React.Component {
	render(){
		return(
			<div className="footer">
				<div className="container">
				copyright
				</div>
			</div>
		)
	}
}

export {Topbar,Navbar,List,SearchBox,Footer};