webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(2);
	//require('./blog.less');

	var PropTypes = React.PropTypes;

	var posts = [{
		title: 'one post',
		time: '2016-10-3',
		body: ['huh?', 'what the hell?']
	}, {
		title: 'one post dkajglkjaldgad',
		time: '2016-10-4',
		body: ['huh?adsgadga', 'what the hell?dfadfafa', 'dgfdgsfdhfdhfsdh']
	}];

	var Post = function (_React$Component) {
		_inherits(Post, _React$Component);

		function Post() {
			_classCallCheck(this, Post);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Post).call(this));

			_this.state = {
				post: {
					title: '--',
					body: []
				}
			};
			return _this;
		}

		_createClass(Post, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var newPost;
				var time = location.search.match(/time=[\d|-]+/)[0].replace(/time=/, '');
				posts.forEach(function (a) {
					if (a.time === time) {
						newPost = a;
					}
				});
				this.setState({
					post: newPost
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					{ className: 'POST' },
					React.createElement(
						'div',
						{ className: 'post-title' },
						this.state.post.title
					),
					React.createElement(
						'div',
						{ className: 'post-body' },
						this.state.post.body.map(function (a) {
							return React.createElement(
								'p',
								null,
								a
							);
						})
					)
				);
			}
		}]);

		return Post;
	}(React.Component);

	// The router.


	ReactDOM.render(React.createElement(Post, null), document.getElementById('root'));

/***/ }
]);