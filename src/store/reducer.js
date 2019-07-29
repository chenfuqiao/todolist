import { CHENGE_INPUT_VALUE, ADD_TODOITEM, DELETE_TODOITEM, INIT_LIST } from './actionTypes'

const defaultState = {
    inputValue: '',
    list: [],
};

export default (state = defaultState, action) => {
    if(action.type === CHENGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.inputValue;
        return newState;
    }
    if(action.type === ADD_TODOITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DELETE_TODOITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    if(action.type === INIT_LIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.init_data;
        return newState;
    }
    return state;
}