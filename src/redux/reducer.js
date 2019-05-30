import { RECEIVE_METHODS } from './action';
import { combineReducers } from 'redux';

const initialState = {
  isFetching: false,
  data: [],
};

export function items(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_METHODS:
            return {...state,
                data: state.data.concat(action.data)
            }
        default:
            return state;
    }
}

export default combineReducers({
    items
});