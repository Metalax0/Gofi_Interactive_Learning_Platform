import React, { useEffect, useState } from "react";
import { cssTutorialData } from "../../../Data/cssTutorialData";
import TutorialTemplate from "../TutorialTemplate";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "./style.css";
import TutorialProblemSolving1 from "./ProblemSolving1";
import TutorialProblemSolving2 from "./ProblemSolving2";

const cookies = new Cookies();

const TutorialProblemSolving = () => {
    const [activeChapter, setactiveChapter] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const userType = cookies.get("USERTYPE");

    useEffect(() => {
        if (userType === "guest") {
            setIsModalOpen(true);

            if (document.querySelector(".problem-solving"))
                document.querySelector(".problem-solving").style.filter =
                    "blur(10px)";
        }
    });

    const getTutorial = () => {
        switch (activeChapter) {
            case 1:
                return (
                    <TutorialProblemSolving1
                        state={activeChapter}
                        setState={setactiveChapter}
                    />
                );

            case 2:
                return (
                    <TutorialProblemSolving2
                        state={activeChapter}
                        setState={setactiveChapter}
                    />
                );

            default:
                break;
        }
    };

    return (
        <div className="problem-solving">
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
                centereds
            >
                <p>
                    This feature is not available for Guest Accounts. To access
                    this, either login from your gofi account or create new
                    account.
                </p>
            </Modal>
            {getTutorial()}
        </div>
    );
};

export default TutorialProblemSolving;
