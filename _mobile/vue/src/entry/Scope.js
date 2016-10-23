var Scope = require('../canvas/Scope.vue');
console.log(Scope)

Vue.component( 'scope',Scope )

new Vue({
	el: '#root',
	template: `
		<scope></scope>
	` 
});