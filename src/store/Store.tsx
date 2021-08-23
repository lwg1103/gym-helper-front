import { createStore } from 'redux';
import { ACTION_SET_TOKEN, ACTION_CLEAR_TOKEN } from './Actions';

const rootReducer = (state: any, action: any) => {
    if (!state) {
        state = {
            token: '',
            isAuthenticated: false
        };
    }

    state = Object.assign({}, state);

    if (action.type === ACTION_SET_TOKEN) {
        state.token = action.data;
        state.isAuthenticated = true;
    }

    if (action.type === ACTION_CLEAR_TOKEN) {
        state.token = '';
        state.isAuthenticated = false;
    }

    return state;
};

const store = createStore(rootReducer);

export default store;