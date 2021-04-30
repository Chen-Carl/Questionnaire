import React, { Component } from 'react'
import { Button } from 'antd'
import { NavLink } from 'react-router-dom';
import "./index.css"

export default class Title extends Component {
    render() {
        return (
            <div className="titleWrapper">
                <div className="title">营销管理问卷</div>
                <div className="content">
                    您好，请仔细回顾您之前的抽卡结果，并填写如下问卷。
                    我们会将问卷与后台数据进行匹配以验证问卷有效性，并根据抽卡界面的积分组成折算出您的积分值。
                    如果您愿意参与积分排名赢礼品活动，请在最后留下您的电话。
                    我们将在调查结束后，联系积分值最高的同学，送出礼物。
                </div>
                <Button type="primary" size="large" className="btn"><NavLink to="/main">开始填写</NavLink></Button>
            </div>
        )
    }
}
