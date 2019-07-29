import React from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';

const TodolistUI = (props) => {
    return (
        <div style={{marginTop: 10, marginLeft: 10}}>
            <Input
                placeholder='todo info'
                style={{width: 300, marginRight: 10}}
                value={props.inputValue}
                onChange={props.handleInputChange}
            />
            <Button
                type='primary'
                onClick={props.handleOnclick}
            >
                提交
            </Button>
            <List
                style={{width: 300, marginTop: 10}}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => <List.Item onClick={() => props.handleDel(index)}>{item}</List.Item>}
            />
        </div>
    );
};

// class TodolistUI extends Component {
//
//     render() {
//         return (
//             <div style={{marginTop: 10, marginLeft: 10}}>
//                 <Input
//                     placeholder='todo info'
//                     style={{width: 300, marginRight: 10}}
//                     value={this.props.inputValue}
//                     onChange={this.props.handleInputChange}
//                 />
//                 <Button
//                     type='primary'
//                     onClick={this.props.handleOnclick}
//                 >
//                     提交
//                 </Button>
//                 <List
//                     style={{width: 300, marginTop: 10}}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => <List.Item
//                         onClick={() => this.props.handleDel(index)}>{item}</List.Item>}
//                 />
//             </div>
//         );
//     }
// }

export default TodolistUI;    //导出组件
