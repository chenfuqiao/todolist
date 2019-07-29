import { CHENGE_INPUT_VALUE, ADD_TODOITEM, DELETE_TODOITEM, INIT_LIST, GET_INIT_LIST } from './actionTypes';

export const getInputChangeAction = (value) => ({
    type: CHENGE_INPUT_VALUE,
    inputValue: value,
});

export const getAddItemAction = () => ({
    type: ADD_TODOITEM,
});

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODOITEM,
    index: index,
});

export const initListAction = (data) => ({
    type: INIT_LIST,
    init_data: data,
});

export const getInitListAction = () => ({
    type: GET_INIT_LIST,
});