import React from 'react';
import { Slider, InputNumber, Row, Col, Divider } from 'antd';
import PubSub from 'pubsub-js'
import './index.css';

export default class IntegerStep extends React.Component {
    state = {
        inputValue: 0,
    };

    onChange = value => {
        this.setState({
            inputValue: value,
        });
    };

    render() {
        const { inputValue } = this.state;
        const { problem, maxValue } = this.props;
        PubSub.publish("datas", {index: this.props.index, data: inputValue});
        return (
            <div>
                <Divider />
                <div className="problem">{problem}</div>
                <Row>
                    <Col span={12}>
                        <Slider
                            min={0}
                            max={maxValue}
                            onChange={this.onChange}
                            value={typeof inputValue === 'number' ? inputValue : 0}
                        />
                    </Col>
                    <Col span={4}>
                        <InputNumber
                            min={0}
                            max={maxValue}
                            style={{ margin: '0 16px' }}
                            value={inputValue}
                            onChange={this.onChange}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}
