export default {
	state: {
    name: 'baidu', 
    url: 'http://www.baidu.com'
	},
	actions: {
		toExample(ctx,example){
			ctx.commit('TO_EXAMPLE',example);
			if( example.url!=='' ){
        // this.$router.go('/example');
        location.href = '#/example';
      };
		}
	},
	mutations: {
		TO_EXAMPLE(state,example){
			state.name = example.name;
      state.url = example.url;
    },
	}
}