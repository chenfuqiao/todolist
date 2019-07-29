import React, { Component } from 'react';
import Todoitem from './Todoitem';
import axios from 'axios'
import 'antd/dist/antd.css';
import { Input, Button } from 'antd';

class Todolist extends Component {

    constructor(props) {
        super(props);   //继承父类
        this.state = {
            inputValue: '',
            list: [],
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOnclick = this.handleOnclick.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }

    componentDidMount() {
        axios.get('https://easy-mock.com/mock/5d079802f758fa79fe16e8c9/api/todolist')
            .then((res) => {
                this.setState(() => ({
                    list: [...res.data],
                }))
            })
            .catch(() => {
                alert('error')
            })
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value,
        }));
    }


    handleOnclick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: '',
        }));
    }

    handleDel(index) {
        this.setState((prevState) => {
            const copyList = [...prevState.list];
            copyList.splice(index, 1);
            return {
                list: copyList,
            };
        });
    }

    getTodoiterm() {
        return this.state.list.map((item, index) => {
            return (
                <Todoitem
                    key={index}
                    content={item}
                    index={index}
                    deleteItem={this.handleDel}
                />
            )
        })
    }

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
                <ul>{this.getTodoiterm()}</ul>
            </div>
        );
    }
}

export default Todolist;    //导出组件
