import {combineReducers} from 'redux';

import {counter} from './counter.jsx';
import {user} from './app.jsx';

var $$reducer = combineReducers({user,counter});

export {$$reducer};