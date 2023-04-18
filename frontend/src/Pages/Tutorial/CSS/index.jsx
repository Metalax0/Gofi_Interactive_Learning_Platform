import React, { useEffect, useState } from "react";
import { cssTutorialData } from "../../../Data/cssTutorialData";
import TutorialTemplate from "../TutorialTemplate";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const TutorialCSS = () => {
    const [activeChapter, setactiveChapter] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const userType = cookies.get("USERTYPE");

    useEffect(() => {
        if (userType === "guest") {
            setIsModalOpen(true);

            if (document.querySelector(".tutorial-css"))
                document.querySelector(".tutorial-css").style.filter =
                    "blur(10px)";
        }
    });

    return (
        <div className="tutorial-css">
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
                data={cssTutorialData[activeChapter - 1]}
                tutorial="css"
                totalChapters={cssTutorialData.length}
            />
        </div>
    );
};

export default TutorialCSS;
