import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Form, Inpu, Input } from "antd";
import {
    UserOutlined,
    KeyOutlined,
    MailOutlined,
    ClockCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { handleSignup } from "../../Functions/handleSignUp";
import "./style.css";
import { NotificationContext } from "../../App";

const SignUp = () => {
    const [fullName, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const { openNotification } = useContext(NotificationContext);
    const signupURL = useSelector((state) => state.global.signupURL);
    let drag = false;

    useEffect(() => {
        const canvas = document.getElementById("userProfileCanvas");

        const ctx = canvas.getContext("2d");
        ctx.imageSmoothingEnabled = false;
        canvas.addEventListener("mousemove", (e) => drawPixel(e, ctx, canvas));
        canvas.addEventListener("mousedown", () => (drag = true));
        canvas.addEventListener("mouseup", () => (drag = false));

        return () => {
            canvas.removeEventListener("mousemove", (e) =>
                drawPixel(e, ctx, canvas)
            );
            canvas.removeEventListener("mousedown", () => (drag = true));
            canvas.removeEventListener("mouseup", () => (drag = false));
        };

        //
    }, []);

    const drawPixel = (e, ctx, canvas) => {
        ctx.imageSmoothingEnabled = false;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ctx.fillStyle = "black";

        if (drag) ctx.fillRect(x, y, 4, 4);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const handleSubmit = async (value) => {
        const { fullName, email, password } = value;
        const dateRegistered = new Date().toISOString().slice(0, 10);
        const profileImgBase64 = document
            .getElementById("userProfileCanvas")
            .toDataURL();

        const userType = "member";
        // set configurations
        const registerConfig = {
            method: "post",
            url: signupURL,
            data: {
                fullName,
                email,
                password,
                dateRegistered,
                profileImgBase64,
                userType,
            },
        };

        const signupStatus = await handleSignup(registerConfig);

        if (signupStatus) {
            openNotification(
                "Signup Successful",
                "Successfully created new account.",
                "success"
            );
            document.getElementById("signup-error").innerHTML =
                "Registered Successfully";
        } else {
            openNotification(
                "Signup Failed",
                "Your account was not created",
                "error"
            );
            document.getElementById("signup-error").innerHTML =
                "ERROR: Failed to signup";
        }
    };

    return (
        <div className="register-container">
            <div className="register-container-outer">
                <div className="register-container-inner">
                    <div className="register-container-float">
                        <div className="register-container-float__image">
                            <canvas
                                id="userProfileCanvas"
                                width="100"
                                height="100"
                            >
                                canvas
                            </canvas>
                        </div>
                        <div className="register-container-float__details">
                            <Input
                                className="register-identity-input"
                                size="medium"
                                placeholder="john doe"
                                prefix={<UserOutlined />}
                                value={fullName}
                                disabled
                            />

                            <Input
                                className="register-identity-input"
                                size="medium"
                                placeholder="johndoe@mymail.com"
                                prefix={<MailOutlined />}
                                value={email}
                                disabled
                            />

                            <Input
                                className="register-identity-input"
                                size="medium"
                                prefix={<ClockCircleOutlined />}
                                value={new Date().toISOString().slice(0, 10)}
                                disabled
                            />
                        </div>
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
                                    onChange={(e) =>
                                        setFullname(e.target.value)
                                    }
                                />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input valid Email!",
                                        type: "email",
                                    },
                                ]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Email"
                                    prefix={<MailOutlined />}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    <p
                                        id="signup-error"
                                        className="message-error"
                                    ></p>
                                </label>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
