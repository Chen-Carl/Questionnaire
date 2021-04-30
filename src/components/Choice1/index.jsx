import React, { Component } from 'react'
import { Radio, Divider } from 'antd';
import PubSub from 'pubsub-js'
import './index.css'

export default class Choice extends Component {
    state = {value: 1};

    onChange = e => {
        this.setState({value: e.target.value});
    };

    render() {
        const {value} = this.state;
        const {problem, choices} = this.props;
        PubSub.publish("datas", {index: this.props.index, data: value});
        return (
            <div>
                <Divider />
                <div className="problem">{problem}</div>
                <Radio.Group onChange={this.onChange} value={value}>
                {
                    choices.map((choice, index) => {
                        return <div key={index}><Radio value={index + 1} className="choices">{choices[index]}</Radio></div>
                    })
                }
                </Radio.Group>
            </div>
        )
    }
}
