import {CHENGE_INPUT_VALUE, ADD_TODOITEM, DELETE_TODOITEM, INIT_LIST} from './actionTypes';
import axios from 'axios';

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

// redux-thunk使得action可以是一个函数，所以这里直接返回一个函数
// 这个函数可以接收到 dispatch 方法
export const getTodolist = () => {
    return (dispatch) => {
        axios.get(' https://easy-mock.com/mock/5d079802f758fa79fe16e8c9/api/todolist')
            .then((res) => {
                const data = res.data;
                const action = initListAction(data);
                dispatch(action);
            })
            .catch(() => {
                alert('error')
            })
    }
};

