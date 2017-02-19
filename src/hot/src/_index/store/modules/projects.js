const state = [];

const actions = {
  fetchProjects(ctx){
    var projects = require('../../api/projects.js').default;
    ctx.commit('FETCH_PROJECTS',projects);
  }
};

const mutations = {
	FETCH_PROJECTS(state,arr){
		state.push(...arr);
	}
}

export default {state,actions,mutations};