// import Vue from 'vue'
// import Counter from './Counter.vue'
// import store from './store/store.js';

// new Vue({
//   el: '#app',
//   store,
//   render: h => h(Counter)
// })
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render(){
		return (
			<div id="#app">
				<p>apppppp</p>
			</div>
		)
	}
}

ReactDOM.render(
	(
		<App></App>
	),
	document.getElementById('app')
);