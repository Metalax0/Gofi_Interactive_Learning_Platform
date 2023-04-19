import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "./style.css";

const cookies = new Cookies();

const TutorialProblemSolving1 = ({ state, setState }) => {
    const [activeChapter, setactiveChapter] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errorModalOpen, isErrorModalOpen] = useState(false);
    const [commingSoomModal, setCommingSoonModal] = useState(false);

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

    const generateGrid = () => {
        const grid = [];
        for (let i = 0; i < 25; i++) {
            grid.push(<div key={i} className={`grid-cell grid-${i}`}></div>);
        }
        return grid;
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

            <Modal
                title="Incorrect Answer"
                open={errorModalOpen}
                onOk={() => navigate("home")}
                onCancel={() => navigate("/tutorial")}
                okText="Home"
                cancelText="tutorial"
                closeIcon={<></>}
                maskClosable={false}
                maskStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}
                centereds
            >
                <p>
                    Your answer was incorrect, Try again next time. Remember to
                    break down the problem into several steps
                </p>
            </Modal>

            <Modal
                title="Correct Answer"
                open={commingSoomModal}
                onOk={() => navigate("home")}
                onCancel={() => navigate("/tutorial")}
                okText="Home"
                cancelText="tutorial"
                closeIcon={<></>}
                maskClosable={false}
                maskStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}
                centereds
            >
                <p>
                    In present, this is it for problem solving module. Stay
                    tuned for the future updates
                </p>
            </Modal>

            <div className="problem-solving-1">
                <div className="problem-solving-1-left">
                    <h1>Problem solving 1</h1>
                    <p>
                        Welcome to problem solving 1. Here we will learn a
                        concept called divide and conquer. What this means is
                        that you do not approach a problem as a whole but, break
                        it down into smaller parts.
                    </p>
                    <p>
                        We will be learning and exercing this with the help of a
                        maze game. Since a maze requires a series of steps in
                        order to be completed, you will be practicing doing
                        exactly that. You will think of a way to exit the maze
                        by analysing each steps.
                    </p>

                    <p>
                        Now try to cross this maze. Your goal is to move the
                        purple block to the green block, following the orange
                        path. Now remember, this is a multi step process so
                        think step by step, which culd be the right answer.
                    </p>
                    <div className="problem-solving-options">
                        <button
                            onClick={() => {
                                isErrorModalOpen(true);
                            }}
                        >
                            Up Left Left Riht Right
                        </button>
                        <button
                            onClick={() => {
                                setCommingSoonModal(true);
                            }}
                        >
                            Up Right Right Up Up Up
                        </button>
                        <button
                            onClick={() => {
                                isErrorModalOpen(true);
                            }}
                        >
                            Right Right Right Up Up Up
                        </button>
                        <button
                            onClick={() => {
                                isErrorModalOpen(true);
                            }}
                        >
                            Right Up Right Right Right
                        </button>
                    </div>
                </div>
                <div className="problem-solving-1-right">
                    <div className="grid-container">{generateGrid()}</div>
                </div>
            </div>
        </div>
    );
};

export default TutorialProblemSolving1;
