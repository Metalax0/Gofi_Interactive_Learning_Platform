import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Modal } from "antd";
import { useSelector } from "react-redux";
import { handleUpdateTestProgress } from "../../../Functions/handleUpdateTestProgress";
import Cookies from "universal-cookie";
import { handleCreatePost } from "../../../Functions/handleCreatePost";
import { badgeData } from "../../../Data/badgeData";

const cookies = new Cookies();

export default function TestTemplate({
    state,
    setState,
    data,
    test,
    testCount,
}) {
    const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
    const [isIncorrectModalOpen, setIsIncorrectModalOpen] = useState(false);
    const [isEndModalOpen, setIsEndModalOpen] = useState(false);
    const updateTestProgressURL = useSelector(
        (state) => state.global.updateTestProgressURL
    );
    const updateBadgeURL = useSelector((state) => state.global.updateBadgeURL);
    const navigate = useNavigate();
    const userType = cookies.get("USERTYPE");

    useEffect(() => {
        if (userType === "guest") {
            setIsGuestModalOpen(true);

            if (document.querySelector(".test-template"))
                document.querySelector(".test-template").style.filter =
                    "blur(10px)";
        }
    });

    const handleClick = (option) => {
        if (option === data.answer) {
            const userID = JSON.parse(
                localStorage.getItem("activeUser")
            ).userID;
            const score = state;
            const config = {
                method: "post",
                url: updateTestProgressURL,
                data: {
                    userID,
                    test,
                    score,
                },
            };
            handleUpdateTestProgress(config);

            if (state + 1 <= testCount) setState(state + 1);
            else {
                setIsEndModalOpen(true);
                if (document.querySelector(".test-template"))
                    document.querySelector(".test-template").style.filter =
                        "blur(10px)";
                // BADGE EARNED - FIRST LIKE
                const updateBadgeConfig = {
                    method: "post",
                    url: updateBadgeURL,
                    data: {
                        userID: userID,
                        title: badgeData.test.title,
                        description: badgeData.test.description,
                        icon: badgeData.test.icon,
                    },
                };
                handleCreatePost(updateBadgeConfig);
                //
            }
        } else {
            setIsIncorrectModalOpen(true);
            if (document.querySelector(".test-template"))
                document.querySelector(".test-template").style.filter =
                    "blur(10px)";
        }
    };

    return (
        <div className="test-template">
            <Modal
                title="Feature Unavailable For Guest Account"
                open={isGuestModalOpen}
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
            <Modal
                title="Incorrect Answer"
                open={isIncorrectModalOpen}
                onOk={() => navigate("/test")}
                onCancel={() => navigate("/home")}
                okText="Go to test page"
                cancelText="Go to home page"
                closeIcon={<></>}
                maskClosable={false}
                maskStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}
                centered
            >
                <p>
                    Your answer to question number <b>{state}</b> was incorrect.
                    You cannot proceed further in this attempt. Please try this
                    test again later. You have successfully answered{" "}
                    <b>{state - 1}</b> questions out of <b>{testCount}</b>{" "}
                    correctly.
                </p>
            </Modal>
            <Modal
                title="You have reached the end of test"
                open={isEndModalOpen}
                onOk={() => navigate("/test")}
                onCancel={() => navigate("/home")}
                okText="Go to test page"
                cancelText="Go to home page"
                closeIcon={<></>}
                maskClosable={false}
                maskStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}
                centered
            >
                <p>
                    You have reached the end of <b>{test}</b> test and have
                    successfully answered <b>{state}</b> questions out of{" "}
                    <b>{testCount}</b> questions correctly in this attempt.
                </p>
            </Modal>
            <div className="test-template-container">
                <h2>{test.toUpperCase()}</h2>
                <div className="test-template-question">
                    <div className="test-template-question__icon">
                        <b>
                            {state}/{testCount}
                        </b>
                    </div>
                    <div className="test-template-question__text">
                        {data.question}
                    </div>
                </div>
                <div className="test-template-answers">
                    <div className="test-template-options">
                        <div className="test-template-options-group">
                            <div
                                className="test-template-option"
                                onClick={() => handleClick("A")}
                            >
                                <div className="test-template-option--label">
                                    A
                                </div>
                                <div className="test-template-option--text">
                                    {data.optionA}
                                </div>
                            </div>
                            <div
                                className="test-template-option"
                                onClick={() => handleClick("B")}
                            >
                                <div className="test-template-option--label">
                                    B
                                </div>
                                <div className="test-template-option--text">
                                    {data.optionB}
                                </div>
                            </div>
                        </div>
                        <div className="test-template-options-group">
                            <div
                                className="test-template-option"
                                onClick={() => handleClick("C")}
                            >
                                <div className="test-template-option--label">
                                    C
                                </div>
                                <div className="test-template-option--text">
                                    {data.optionC}
                                </div>
                            </div>
                            <div
                                className="test-template-option"
                                onClick={() => handleClick("D")}
                            >
                                <div className="test-template-option--label">
                                    D
                                </div>
                                <div className="test-template-option--text">
                                    {data.optionD}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
