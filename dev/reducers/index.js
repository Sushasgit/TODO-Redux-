import { combineReducers } from 'redux';

import todos from './todo';
import filter from './filter';

const reducer = combineReducers({
    todos,
    filter,
});

export default reducer;
