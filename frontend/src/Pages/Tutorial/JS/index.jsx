import React, { useState, useEffect } from "react";
import { jsTutorialData } from "../../../Data/jsTutorialData";
import TutorialTemplate from "../TutorialTemplate";
import { Modal } from "antd";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();

const TutorialJS = () => {
    const [activeChapter, setactiveChapter] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const userType = cookies.get("USERTYPE");

    useEffect(() => {
        if (userType === "guest") {
            setIsModalOpen(true);

            if (document.querySelector(".tutorial-js"))
                document.querySelector(".tutorial-js").style.filter =
                    "blur(10px)";
        }
    });

    return (
        <div className="tutorial-js">
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
            <TutorialTemplate
                state={activeChapter}
                setState={setactiveChapter}
                data={jsTutorialData[activeChapter - 1]}
                tutorial="js"
            />
        </div>
    );
};

export default TutorialJS;
