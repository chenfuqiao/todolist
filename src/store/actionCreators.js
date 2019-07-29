import { CHENGE_INPUT_VALUE, ADD_TODOITEM, DELETE_TODOITEM } from './actionTypes';

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