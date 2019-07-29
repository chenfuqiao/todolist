import React, { Component } from 'react';
import TodolistUI from './TodolistUI'
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodolist } from './store/actionCreators'

class Todolist extends Component {

    constructor(props) {
        super(props);   //继承父类
        this.state = store.getState();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleOnclick = this.handleOnclick.bind(this);
        this.handleDel = this.handleDel.bind(this);
        store.subscribe(this.handleStoreChange);    //订阅store，store的内容发生改变就会去触发handleStoreChange这个回调函数
    }

    // 重新获取一遍store里的数据
    handleStoreChange() {
        this.setState(store.getState());
    }

    handleInputChange(e) {
        const value = e.target.value;
        const action = getInputChangeAction(value);
        store.dispatch(action);
    }

    handleOnclick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleDel(index) {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }

    componentDidMount() {
        const action = getTodolist();
        store.dispatch(action);
    }

    render() {
        return (
            <TodolistUI
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleOnclick={this.handleOnclick}
                list={this.state.list}
                handleDel={this.handleDel}
            />
        );
    }
}

export default Todolist;    //导出组件
