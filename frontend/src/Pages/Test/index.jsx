import React, { useEffect, useState } from "react";
import { testCardData } from "../../Data/cardData";
import "./style.css";
import TestCard from "../../Components/TestCard";
import { htmlTestData } from "../../Data/htmlTestData";
import { cssTestData } from "../../Data/cssTestData";
import { jsTestData } from "../../Data/jsTestData";
import Cookies from "universal-cookie";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();

export default function Test() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const userType = cookies.get("USERTYPE");

    useEffect(() => {
        if (userType === "guest") {
            setIsModalOpen(true);

            if (document.querySelector(".test-page"))
                document.querySelector(".test-page").style.filter =
                    "blur(10px)";
        }
    });

    return (
        <div className="test-page">
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
            <section className="test-section">
                <TestCard
                    headerText={testCardData.html.headerText}
                    bodyTitle={testCardData.html.bodyTitle}
                    bodyText={testCardData.html.bodyText}
                    testCount={htmlTestData.length}
                    reward={testCardData.html.reward}
                    headerColor={testCardData.html.headerColor}
                    navigateTo={testCardData.html.navigateTo}
                    test="html"
                />
            </section>
            <section className="test-section">
                <TestCard
                    headerText={testCardData.css.headerText}
                    bodyTitle={testCardData.css.bodyTitle}
                    bodyText={testCardData.css.bodyText}
                    testCount={cssTestData.length}
                    reward={testCardData.css.reward}
                    headerColor={testCardData.css.headerColor}
                    navigateTo={testCardData.css.navigateTo}
                    test="css"
                />
            </section>
            <section className="test-section">
                <TestCard
                    headerText={testCardData.js.headerText}
                    bodyTitle={testCardData.js.bodyTitle}
                    bodyText={testCardData.js.bodyText}
                    testCount={jsTestData.length}
                    reward={testCardData.js.reward}
                    headerColor={testCardData.js.headerColor}
                    navigateTo={testCardData.js.navigateTo}
                    test="js"
                />
            </section>
        </div>
    );
}
