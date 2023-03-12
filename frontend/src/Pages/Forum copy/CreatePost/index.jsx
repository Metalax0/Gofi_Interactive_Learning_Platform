import { HighlightOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useSelector } from "react-redux";
import { handleCreatePost } from "../../../Functions/handleCreatePost";
import "./style.css";

export default function CreatePost() {
    const createPostURL = useSelector((state) => state.global.createPostURL);

    const handleSubmit = async (value) => {
        const { title, body, tag } = value;
        const authorName = JSON.parse(
            localStorage.getItem("activeUser")
        ).fullName;
        const userID = JSON.parse(localStorage.getItem("activeUser")).userID;

        const createPostConfig = {
            method: "post",
            url: createPostURL,
            data: {
                title,
                body,
                tag,
                authorName,
                userID,
            },
        };

        handleCreatePost(createPostConfig);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="create-post">
            <Form
                id="signup-form"
                name="createpost"
                wrapperCol={{
                    span: 24,
                }}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "80%",
                    maxWidth: 800,
                    minWidth: 300,
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
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: "Please input title!",
                        },
                    ]}
                >
                    <Input
                        size="large"
                        placeholder="Title"
                        prefix={<HighlightOutlined />}
                    />
                </Form.Item>

                <Form.Item
                    name="body"
                    rules={[
                        {
                            required: true,
                            message: "Please input the content!",
                        },
                    ]}
                >
                    <TextArea
                        showCount
                        maxLength={100}
                        style={{
                            height: 120,
                            resize: "none",
                        }}
                        placeholder="Write something"
                    />
                </Form.Item>

                <Form.Item
                    name="tag"
                    rules={[
                        {
                            required: true,
                            message: "Please input a Tag!",
                        },
                    ]}
                >
                    <Input size="large" placeholder="tag" prefix="#" />
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
                            Publish
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
}
