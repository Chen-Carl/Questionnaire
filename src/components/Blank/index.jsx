import React, { Component } from 'react';
import { Input, Divider } from 'antd';
import PubSub from 'pubsub-js'
import './index.css'

export default class Blank extends Component {
    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            PubSub.publish("datas", { index: this.props.index, data: this.ipt.input.value });
        }
    }

    render() {
        const { problem } = this.props;

        return (
            <div>
                <Divider />
                <div className="problem">{problem}</div>
                <Input ref={c => this.ipt = c} onKeyUp={this.handleKeyUp} placeholder="phone number <press Enter to confirm>" />
            </div>
        )
    }
}
