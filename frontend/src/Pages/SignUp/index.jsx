import { useState } from "react";
import axios from "axios";
import Navigationbar from "../../Components/NavigationBar";
import { useSelector } from "react-redux";
import "./style.css";
import { Button, Checkbox, Form, Input, Space } from "antd";
import { UserOutlined, KeyOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [isRegistered, setisRegistered] = useState(false);
    const globalSelector = useSelector((state) => state.global);

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const handleSubmit = (value) => {
        console.log(value);
        const { fullName, email, password } = value;
        console.log(value.fullName);
        // set configurations
        const configuration = {
            method: "post",
            url: globalSelector.signupURL,
            data: {
                fullName,
                email,
                password,
            },
        };
        axios(configuration)
            .then((result) => {
                console.log("SUCCESS: Registration success", result);
                setisRegistered(true);
            })
            .catch((error) => {
                setisRegistered(false);
                console.log(
                    "ERROR: Registration Failed, most likeky because user exists",
                    error
                );
            });
    };

    return (
        <div className="register-container">
            <div className="register-container-inner">
                <div className="register-container-float">
                    <h1> ID Card </h1>
                </div>

                <div className="register-container-right">
                    <div className="register-container-right-desc">
                        <h3> Get Started</h3>
                        <p> Sign up to access the product, its free !</p>
                    </div>

                    <Form
                        id="signup-form"
                        name="basic"
                        labelCol={{
                            span: 23,
                        }}
                        wrapperCol={{
                            span: 23,
                        }}
                        style={{
                            maxWidth: 700,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={handleSubmit}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        layout="vertical"
                    >
                        <Form.Item
                            prefix={<UserOutlined />}
                            name="fullName"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Full Name!",
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                placeholder="Full Name"
                                prefix={<UserOutlined />}
                            />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Email!",
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                placeholder="Email"
                                prefix={<MailOutlined />}
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                        >
                            <Input.Password
                                size="large"
                                placeholder="Password"
                                prefix={<KeyOutlined />}
                            />
                        </Form.Item>
                        <div>
                            <Form.Item>
                                <Button
                                    id="submit-button-register"
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    block
                                >
                                    Sign Up
                                </Button>
                            </Form.Item>
                            <label id="subit-button-register-message">
                                Or <Link to="/login">login </Link>with an
                                existing account!
                            </label>
                            <label>
                                {!isRegistered ? (
                                    <p className="message-error">
                                        Register Failed: likely user already
                                        exists
                                    </p>
                                ) : null}
                            </label>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
