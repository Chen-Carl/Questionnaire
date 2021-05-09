import React, { Component } from 'react'
import { Button } from 'antd'
import PubSub from 'pubsub-js'
import axios from 'axios'
import Choice1 from '../../Choice1'
import IntegerStep from '../../IntegerStep';
import Blank from '../../Blank';
import './index.css'

export default class Main extends Component {
    p1 = '1. 您多大程度上认可自己是一位氪金玩家？[输入0(非常不认可)到10(非常认可)的数字]';
    p2 = '2. 您在刚才的抽卡页面大约氪了多少单？[单选题]';
    p3 = '3. 刚才的抽卡中，您大概抽出了多少张SSR从者？';
    p4 = '4. 刚才的抽卡中，您大概抽出了多少张SSR礼装？[输入0到100的数字]';
    p5 = '5. 您多大程度上认为抽卡时自己的欧气爆满？[输入1(运气非常差)到10(运气非常好)的数字]';
    p6 = '6. 根据抽奖结果，您多大程度上认为十连抽卡会比单次抽卡拥有更高出货率？[输入0(非常不认可)到10(非常认可)的数字]';
    p7 = '7. 在考虑了在抽卡时支付的金钱后，您多大程度上满意这一轮的抽卡结果？[输入0(非常不满意)到10(非常满意)的数字]';
    p8 = '8. 您多大程度上认可这次抽卡是快乐的？[输入0(非常不认可)到10(非常认可)的数字]';
    p9 = '9. 您抽卡时，页面是否显示了“十连保底有一张SR卡牌哦！”的刺激性语句？[单选题]';
    p10 = '10. 您抽卡时，出货界面是否显示了您的出货率？[单选题] ';
    p11 = '11. 如果可以，请留下您的电话（回车以确认）[填空题]';

    problems = [this.p1, this.p2, this.p3, this.p4, this.p5, this.p6, this.p7, this.p8, this.p9, this.p10, this.p11];

    choice1 = ['是', '否'];
    choice2 = ['1-10单', '10-50单', '50-100单', '100单以上'];

    datas = [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0];

    componentDidMount() {
        this.token = PubSub.subscribe("datas", (_msg, stateObj) => {
            this.datas[stateObj.index] = stateObj.data;
            console.log(this.datas);
        });
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }

    handleClick = () => {
        axios.get(`http://localhost:3000/submit?q=${this.datas}`).then(
            response => { console.log("submit: ", response); },
            error => { alert(error); }
        );
    }

    render() {
        return (
            <div className="site-layout-content main">
                <IntegerStep problem={this.problems[0]} maxValue={10} index={0} />
                <Choice1 problem={this.problems[1]} choices={this.choice2} index={1} />
                <IntegerStep problem={this.problems[2]} maxValue={10} index={2} />
                <IntegerStep problem={this.problems[3]} maxValue={100} index={3} />
                <IntegerStep problem={this.problems[4]} maxValue={10} index={4} />
                <IntegerStep problem={this.problems[5]} maxValue={10} index={5} />
                <IntegerStep problem={this.problems[6]} maxValue={10} index={6} />
                <IntegerStep problem={this.problems[7]} maxValue={10} index={7} />
                <Choice1 problem={this.problems[8]} choices={this.choice1} index={8} />
                <Choice1 problem={this.problems[9]} choices={this.choice1} index={9} />
                <Blank problem={this.problems[10]} index={10} />
                <div className="btnWrapper">
                    <Button type="primary" size="large" className="btn" onClick={this.handleClick}>提交</Button>
                </div>
            </div>
        )
    }
}
