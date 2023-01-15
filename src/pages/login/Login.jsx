import React from 'react'
import { useNavigate } from 'react-router-dom'
import './login.scss'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import logo from './images/logo.png'
import { login } from '../../api/begin'

export default function Login() {
  // 测试登陆
  const navigate = useNavigate()
  const onFinish = async (values) => {
    console.log('Received values of form: ', values)
    const res = await login(values)
    let result = res.data
    console.log('aa', result);
    if (result.status === 0) {
      message.success('登录成功咯！')
      navigate('/admin')
    } else {
      message.error(result.message)
    }
  }
  return (
    <div className='login'>
      <header className='login-header'>
        <img src={logo} alt="logo" />
        <h1>React尚硅谷后台管理项目</h1>
      </header>
      <section className='login-content'>
        <h2>用户登录</h2>
        <div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: '请输入用户名!' },
                { min: 4, message: '用户名至少4位!' },
                { max: 12, message: '用户名最多12位!' },
                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是数字，字母下划线组成！' }
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                (a) => ({
                  validator(_, values) {
                    if (!values) {
                      return Promise.reject('密码不能为空！')
                    } else if (values.length < 4) {
                      return Promise.reject('密码少于4位！')
                    }
                    return Promise.resolve()
                  }
                })
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    </div>
  )
}
