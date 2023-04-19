import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "./style.css";

const cookies = new Cookies();

const TutorialProblemSolving2 = ({ state, setState }) => {
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
            <div className="problem-solving-2">
                <div className="problem-solving-2-left">
                    <h1>Problem solving 2</h1>
                    <p>
                        Welcome to problem solving 2. Here we will learn a
                        concept called divide and conquer. What this means is
                        that you do not approach a problem as a whole but, break
                        it down into smaller parts.
                    </p>
                </div>
                <div className="problem-solving-2-right">
                    <h1>Problem solving 2</h1>
                    <p> Welcome to problem solving 2</p>
                </div>
            </div>
        </div>
    );
};

export default TutorialProblemSolving2;
