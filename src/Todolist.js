import React from 'react';
import { connect } from 'react-redux';

// 无状态组件，成为UI组件
const Todolist = (props) => {
    const { inputValue, list, changeInputValue, handleClick, handleDel } = props;
    return (
        <div>
            <input value={inputValue} onChange={changeInputValue}/>
            <button onClick={handleClick}>提交</button>
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index} onClick={() => handleDel(index)}>{item}</li>
                    })
                }
            </ul>
        </div>
    );
};

// connect连接的规则：把store的数据映射成该组件的props，参数state就是指store里的数据
const mapStatetoProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list,
    };
};

// connect连接的规则：把store.dispatch映射该组件的props
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                inputValue: e.target.value,
            };
            dispatch(action);
        },
        handleClick() {
            const action = {
                type: 'add_item',
            };
            dispatch(action);
        },
        handleDel(index) {
            const action = {
                type: 'del_item',
                index: index,
            };
            dispatch(action);
        },
    };
};

// 让Todolist和store做连接
// connect返回的是容器组件
export default connect(mapStatetoProps, mapDispatchToProps)(Todolist);