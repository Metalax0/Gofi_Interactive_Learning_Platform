import React, { useEffect, useState } from "react";
import { htmlTutorialData } from "../../../Data/htmlTutorialData";
import TutorialTemplate from "../TutorialTemplate";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";

const cookies = new Cookies();

const TutorialHTML = () => {
    const [activeChapter, setactiveChapter] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const userType = cookies.get("USERTYPE");

    useEffect(() => {
        if (userType === "guest" && activeChapter >= 4) {
            setIsModalOpen(true);

            if (document.querySelector(".tutorial-html"))
                document.querySelector(".tutorial-html").style.filter =
                    "blur(10px)";
        }
    });

    return (
        <div className="tutorial-html">
            <Modal
                title="Further Chapters Locked For Guest Account"
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
                    HTML Tutorial chapter 3 onwards are locked for guest
                    account. To access this, either login from your gofi account
                    or create new account.
                </p>
            </Modal>
            <TutorialTemplate
                state={activeChapter}
                setState={setactiveChapter}
                data={htmlTutorialData[activeChapter - 1]}
                tutorial="html"
                totalChapters={htmlTutorialData.length}
            />
        </div>
    );
};

export default TutorialHTML;
