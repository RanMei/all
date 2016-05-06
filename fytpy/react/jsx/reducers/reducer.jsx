import {combineReducers} from 'redux';

import {counter} from './counter.jsx';
import {app} from './app.jsx';

var $$reducer = combineReducers({app,counter});

export {$$reducer};