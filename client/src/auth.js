import React from 'react';
import {Button, Icon, Form, Checkbox, Input} from 'antd';
import axios from 'axios';

import 'antd/lib/icon/style';
import 'antd/lib/button/style';
import 'antd/lib/checkbox/style';
import 'antd/lib/input/style';

export default class Auth extends React.Component {
	constructor(props) {
		super(props);
	}

	handleGoogleAuth = () => {
		window.location = 'http://localhost:4000/auth/google/login';
		// axios.get('/auth/google/login')
		// .then((responce) => {
		// 	console.log(responce);
		// });
	}

	render() {
		
		return (
			<div className="auth-block">
				<Form onSubmit={this.handleSubmit} className="login-form">
					<Form.Item>
						<Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
					</Form.Item>
					<Form.Item>
						<Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
					</Form.Item>
					<Form.Item>
						<Checkbox>Remember me</Checkbox>
						<a className="login-form-forgot" href="">Forgot password</a>
						<Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
						or <a href="">register now!</a>
					</Form.Item>
				</Form>

				<div className="divider"><span>or</span></div>

				<button className="facebook">
					<Icon type="facebook" />
					Facebook
				</button>
				<button className="google" onClick={this.handleGoogleAuth}>
					<Icon type="google" />
					Google
				</button>
			</div>
		);
	}
}
