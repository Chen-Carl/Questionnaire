import React, { Component } from 'react';
import { Checkbox, Divider } from 'antd';
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['A', 'B', 'C'];
const defaultCheckedList = [];

export default class Choice extends Component {
    state = {
        checkedList: defaultCheckedList,
        indeterminate: true,
        checkAll: false
    };

    onChange = list => {
        this.setState({
            checkedList: list,
            indeterminate: !!list.length && list.length < plainOptions.length,
            checkAll: list.length === plainOptions.length
        });
    };

    onCheckAllChange = e => {
        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked
        });
    };

    render() {
        const { checkedList, indeterminate, checkAll } = this.state;
        return (
            <div>
                <CheckboxGroup options={plainOptions} value={checkedList} onChange={this.onChange} />
                <Divider />
                <Checkbox indeterminate={indeterminate} onChange={this.onCheckAllChange} checked={checkAll}>
                    Check all
            </Checkbox>
            </div>
        )
    }
}
