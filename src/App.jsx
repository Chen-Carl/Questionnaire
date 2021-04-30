import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { NavLink, Route, Redirect } from 'react-router-dom';
import Main from './components/pages/Main';
import Title from './components/pages/Title';

const { Header, Content, Footer } = Layout;

export default class App extends Component {
	render() {
		return (
			<div>
				<Layout className="layout">
					<Header>
						<div className="logo" />
						<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
							<Menu.Item key="1"><NavLink to="/home">首页</NavLink></Menu.Item>
							<Menu.Item key="2"><NavLink to="/main">问卷</NavLink></Menu.Item>
						</Menu>
					</Header>

					<Content style={{ padding: '10px 50px' }}>
						<Route path="/home" component={Title} />
						<Route path="/main" component={Main} />
						<Redirect to="/home" />
					</Content>

					<Footer style={{ textAlign: 'center' }}>FDU Design ©2021 Created by FDU</Footer>
				</Layout>
			</div>
		)
	}
}
