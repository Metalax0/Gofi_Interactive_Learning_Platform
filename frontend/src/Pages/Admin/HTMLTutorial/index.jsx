import { HighlightOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { handleAddHtmlChapter } from "../../../Functions/handleAddHtmlChapter";

import "./style.css";

const cookies = new Cookies();

export default function AdminHTMLTutorial() {
    const APIURL = useSelector((state) => state.global.addhtmlchapter);

    const handleSubmit = async (value) => {
        const dummyData = {
            title: "New Chapter Title",
            body: [
                {
                    content: "New chapter content",
                    type: "paragraph",
                },
            ],
        };

        const config = {
            method: "post",
            url: APIURL,
            data: dummyData,
        };

        handleAddHtmlChapter(config);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="admin-html-tutorial">
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
                <Form.Item name="title">
                    <Input
                        size="large"
                        placeholder="Title"
                        prefix={<HighlightOutlined />}
                    />
                </Form.Item>

                <Form.Item name="body">
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
