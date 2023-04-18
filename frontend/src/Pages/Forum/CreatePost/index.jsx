import { HighlightOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ForumSidebar from "../../../Components/ForumSidebar";
import { handleCreatePost } from "../../../Functions/handleCreatePost";
import "./style.css";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { NotificationContext } from "../../../App";
import { badgeData } from "../../../Data/badgeData";

const cookies = new Cookies();

export default function CreatePost() {
    const createPostURL = useSelector((state) => state.global.createPostURL);
    const updateBadgeURL = useSelector((state) => state.global.updateBadgeURL);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const { openNotification } = useContext(NotificationContext);
    const userType = cookies.get("USERTYPE");
    const userID = JSON.parse(localStorage.getItem("activeUser")).userID;

    useEffect(() => {
        if (userType === "guest") {
            setIsModalOpen(true);

            if (document.querySelector(".create-post"))
                document.querySelector(".create-post").style.filter =
                    "blur(10px)";
        }
    });

    const handleSubmit = async (value) => {
        const { title, body, tag, category } = value;
        const authorName = JSON.parse(
            localStorage.getItem("activeUser")
        ).fullName;

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

        const isPostCreated = await handleCreatePost(createPostConfig);

        if (isPostCreated) {
            openNotification(
                "Post created",
                "Your post has been created.",
                "success"
            );

            // BADGE EARNED - FIRST POST
            const updateBadgeConfig = {
                method: "post",
                url: updateBadgeURL,
                data: {
                    userID: userID,
                    title: badgeData.post.title,
                    description: badgeData.post.description,
                    icon: badgeData.post.icon,
                },
            };
            await handleCreatePost(updateBadgeConfig);
        } else
            openNotification(
                "Failed to create post",
                "Your post could not be created.",
                "error"
            );
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="create-post">
            <Modal
                title="Feature Unavailable For Guest Account"
                open={isModalOpen}
                onOk={() => navigate("signup")}
                onCancel={() => navigate("/login")}
                okText="Sign Up"
                cancelText="Login"
                closeIcon={<></>}
                maskClosable={false}
                maskStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}
                centered
            >
                <p>
                    This feature is not available for Guest Accounts. To access
                    this, either login from your gofi account or create new
                    account.
                </p>
            </Modal>
            <div className="forum-sidebar-container-create">
                <ForumSidebar activeSidebar={0} />
            </div>
            <div className="create-post__container">
                <h2>Create Post</h2>
                <Form
                    id="create-post-form"
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
