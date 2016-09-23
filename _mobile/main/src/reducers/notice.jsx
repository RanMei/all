import {$$rootDir,$$phpDir} from '../common.jsx';

function notice (state={tick:0,text:''},action){
	switch (action.type) {
		case 'ALERT':
			var newState = {
				tick: state.tick+1,
				text: action.text
			}
			return newState;				
		default:
			return state;
	}
}

export {notice};