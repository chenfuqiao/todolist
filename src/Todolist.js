import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'

class Todolist extends Component {

    constructor(props) {
        super(props);   //继承父类
        this.state = store.getState();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleOnclick = this.handleOnclick.bind(this);
        // this.handleDel = this.handleDel.bind(this);
        store.subscribe(this.handleStoreChange);    //订阅store，store的内容发生改变就会去触发handleStoreChange这个回调函数
    }

    // componentDidMount() {
    //     axios.get('https://easy-mock.com/mock/5d079802f758fa79fe16e8c9/api/todolist')
    //         .then((res) => {
    //             this.setState(() => ({
    //                 list: [...res.data],
    //             }))
    //         })
    //         .catch(() => {
    //             alert('error')
    //         })
    // }
    //
    // 重新获取一遍store里的数据
    handleStoreChange() {
        this.setState(store.getState());
    }

    handleInputChange(e) {
        const value = e.target.value;
        const action = getInputChangeAction(value);
        store.dispatch(action);
    }
    //
    //
    handleOnclick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }
    //
    handleDel(index) {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
    //
    // getTodoiterm() {
    //     return this.state.list.map((item, index) => {
    //         return (
    //             <Todoitem
    //                 key={index}
    //                 content={item}
    //                 index={index}
    //                 deleteItem={this.handleDel}
    //             />
    //         )
    //     })
    // }

    render() {
        return (
            <div style={{marginTop: 10, marginLeft: 10}}>
                <Input
                    placeholder='todo info'
                    style={{width: 300, marginRight: 10}}
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />
                <Button
                    type='primary'
                    onClick={this.handleOnclick}
                >
                    提交
                </Button>
                <List
                    style={{ width: 300, marginTop: 10 }}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => <List.Item onClick={this.handleDel.bind(this, index)}>{item}</List.Item>}
                />
            </div>
        );
    }
}

export default Todolist;    //导出组件
