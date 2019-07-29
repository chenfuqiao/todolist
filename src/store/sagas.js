import {takeEvery, put} from 'redux-saga/effects'
import {GET_INIT_LIST} from './actionTypes';
import axios from 'axios';
import {initListAction} from './actionCreators';


function* getInitList() {
    try {
        const res = yield axios.get('https://easy-mock.com/mock/5d079802f758fa79fe16e8c9/api/todolist');
        const action = initListAction(res.data);
        yield put(action);
    } catch (e) {
        alert('error');
    }
}

function* todoSagas() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default todoSagas;