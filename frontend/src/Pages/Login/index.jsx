import { KeyOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleLogin } from "../../Functions/handleLogin";
import { setisLoggedIn } from "../../StateManagement/Slices/GlobalSlice";
import "./style.css";

const Login = () => {
    const loginURL = useSelector((state) => state.global.loginURL);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (value) => {
        const { email, password } = value;
        // set configurations
        const loginConfig = {
            method: "post",
            url: loginURL,
            data: {
                email,
                password,
            },
        };

        const loginStatus = await handleLogin(loginConfig, dispatch, navigate);
        if (loginStatus) dispatch(setisLoggedIn(true));
        else
            document.getElementById("login-error").innerHTML =
                "ERROR: Failed to Login";
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="login-page">
            <div className="login-container-inner">
                <div className="login-container--left">
                    <h1> Welcome Back</h1>
                    <p> You can log in with an existing account</p>
                </div>
                <div className="login-container--right">
                    <Form
                        id="login-form"
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
                                    Log In
                                </Button>
                            </Form.Item>
                            <label id="subit-button-register-message">
                                Or <Link to="/signup">sign up </Link>for a new
                                account!
                            </label>
                            <label>
                                <p
                                    id="login-error"
                                    className="message-error"
                                ></p>
                            </label>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;
