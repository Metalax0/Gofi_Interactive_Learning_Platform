import { HighlightOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useSelector } from "react-redux";
import ForumSidebar from "../../../Components/ForumSidebar";
import { handleCreatePost } from "../../../Functions/handleCreatePost";
import "./style.css";

export default function CreatePost() {
    const createPostURL = useSelector((state) => state.global.createPostURL);

    const handleSubmit = async (value) => {
        const { title, body, tag, category } = value;
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
                category,
            },
        };

        handleCreatePost(createPostConfig);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="create-post">
            <div className="forum-sidebar-container-create">
                <ForumSidebar activeSidebar={0} />
            </div>
            <div className="create-post__container">
                <h2>Create Post</h2>
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
                            maxLength={300}
                            style={{
                                height: 120,
                                resize: "none",
                            }}
                            placeholder="Write something"
                        />
                    </Form.Item>

                    <Form.Item
                        style={{ width: "100%" }}
                        name="tag"
                        rules={[
                            {
                                required: true,
                                message: "Please input a Tag!",
                            },
                        ]}
                    >
                        <Input
                            size="large"
                            placeholder="tag"
                            prefix="#"
                            style={{ width: "100%" }}
                        />
                    </Form.Item>
                    <Form.Item
                        style={{ width: "100%" }}
                        name="category"
                        rules={[
                            {
                                required: true,
                                message: "Please select a Category!",
                            },
                        ]}
                    >
                        <Select
                            placeholder="Choose Category"
                            size="large"
                            style={{ width: "100%" }}
                            options={[
                                { value: "General", label: "General" },
                                { value: "HTML", label: "HTML" },
                                { value: "CSS", label: "CSS" },
                                { value: "JavaScript", label: "JavaScript" },
                            ]}
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
                                Publish
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    );
}
