import React, { useContext } from "react";
import { handleLogin } from "../../Functions/handleLogin";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NotificationContext } from "../../App";
import { setisLoggedIn } from "../../StateManagement/Slices/GlobalSlice";

export default function Guest() {
    const loginURL = useSelector((state) => state.global.loginURL);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { openNotification } = useContext(NotificationContext);

    const handleContinueClick = async () => {
        const loginConfig = {
            method: "post",
            url: loginURL,
            data: {
                email: "guest@gofi.com",
                password: "guest",
            },
        };

        const loginStatus = await handleLogin(loginConfig, dispatch, navigate);
        if (loginStatus) {
            openNotification(
                "Login Successful",
                "Logged in as Guest",
                "success"
            );
            dispatch(setisLoggedIn("true"));
        } else {
            openNotification(
                "Login Failed",
                "Failed to log in as guest",
                "error"
            );
        }
    };

    return (
        <div className="guest-page">
            <div className="guest-container">
                <h1>NOTICE</h1>
                <p className="guest-notice">
                    Dear user, we would like to inform you that as a guest
                    account holder, you will have certain limitations on our
                    website. While you will have access to the first three
                    chapters of our HTML tutorial, the rest of our tutorials are
                    exclusively available to members only. Additionally, as a
                    guest, you will be able to view our community forum, but you
                    will not be able to interact with other members or create
                    posts. Finally, please note that you will not be able to
                    access your personalized profile page until you become a
                    member. We encourage you to become a member to take
                    advantage of all the benefits our website has to offer.
                    Click on continue to proceed.
                </p>
                <br />
                <button
                    className="guest-continue"
                    onClick={handleContinueClick}
                >
                    CONTINUE
                </button>
                <br />
            </div>
        </div>
    );
}
