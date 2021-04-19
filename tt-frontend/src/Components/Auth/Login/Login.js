import React from 'react'
import { Form, Input, Button, Row, Col, Divider } from 'antd'

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
}

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
}


const Login = () => {
    const onFinish = (values) => {
        console.log("Calling api with values: ", values);
    };

    const onFinishFailed = (err) => {
        console.log("error: ", err)
    }

    return (
        <div className="login-component">
            <Divider orientation="center">Please Login</Divider>
                <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                    <Row>
                        <Col span={12} offset={4}>
                            <Form.Item
                            label="email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email'
                                }
                            ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={12} offset={4}>
                            <Form.Item
                            label="password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password",
                                },
                            ]}
                            >
                                <Input.Password />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row >
                        <Col span={12} offset={4}>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
        </div>
        
    )
}

export default Login;