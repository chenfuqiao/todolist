import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Todoitem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.deleteItem(this.props.index);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.content !== this.props.content;
    }

    render() {
        return (
            <Fragment>
                <li
                    onClick={this.handleClick}>
                    {this.props.content}
                </li>
            </Fragment>
        );
    }
}

Todoitem.propTypes = {
    content: PropTypes.string.isRequired,   //父组件必须向子组件传
    deleteItem: PropTypes.func.isRequired,
    index: PropTypes.number,
    test: PropTypes.string.isRequired,
};

Todoitem.defaultProps = {
    test: '帅帅', //默认值，所以父组件不传给子组件test也没关系
};

export default Todoitem;    //导出组件
