import React, {Component, Fragment} from 'react';
import Todoitem from './Todoitem';

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
            <Fragment>
                <label htmlFor='inputArea'>输入内容：</label>
                <input
                    id='inputArea'
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />
                <button
                    onClick={this.handleOnclick}
                >
                    提交
                </button>
                <ul>{this.getTodoiterm()}</ul>
            </Fragment>
        );
    }
}

export default Todolist;    //导出组件
