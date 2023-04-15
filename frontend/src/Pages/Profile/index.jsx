import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import BadgeSquare from "../../Components/Badge/BadgeSquare";
import { handleUserDataFetch } from "../../Functions/handleUserDataFetch";
import "./style.css";
import badgeCountImg from "../../Assets/badgeCount.png";
import totalPointsImg from "../../Assets/totalPoints.png";
import totalCommentsImg from "../../Assets/totalComments.png";
import totalPostsImg from "../../Assets/totalPosts.png";
import { Modal, Skeleton } from "antd";
import BadgeCircle from "../../Components/Badge/BadgeCircle";
import { useNavigate } from "react-router-dom";
import {
    ClockCircleOutlined,
    MailOutlined,
    UserOutlined,
} from "@ant-design/icons";
const cookies = new Cookies();

export default function Profile() {
    const [userData, setuserData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const userDataURL = useSelector((state) => state.global.userDataURL);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userID = cookies.get("USERID");
    const userType = cookies.get("USERTYPE");

    const userDataConfig = {
        method: "get",
        url: userDataURL,
        params: { userID: userID },
    };

    const dateObj = userData ? new Date(userData.dateRegistered) : null;
    const dateJoined = userData ? dateObj.toISOString().substring(0, 10) : null;

    useEffect(() => {
        async function fetchUserData() {
            setuserData(
                await (
                    await handleUserDataFetch(userDataConfig)
                ).data.userData
            );
        }
        fetchUserData();
    }, []);

    console.log(userData);

    useEffect(() => {
        if (userType === "guest") {
            setIsModalOpen(true);

            if (document.querySelector(".profile-page"))
                document.querySelector(".profile-page").style.filter =
                    "blur(10px)";
        }
    });

    if (!userData) return null;
    else
        return (
            <div className="profile-page">
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
                        This feature is not available for Guest Accounts. To
                        access this, either login from your gofi account or
                        create new account.
                    </p>
                </Modal>
                <div className="profile-page-container">
                    {/* <div className="profile-page__user-details__top">
                        <img
                            className="profile-page__user-details__image"
                            src={userData.profileImg}
                            alt="user profile img"
                        ></img>
                        <label className="profile-page__user-details__fullName">
                            {userData.fullName}
                        </label>
                        <small className="profile-page__user-details__title">
                            {userData.statistics.title}
                        </small>
                    </div> */}
                    <div className="profile-page-card">
                        <img
                            className="profile-page__image"
                            src={userData.profileImg}
                            alt="user profile img"
                        ></img>
                        <div className="profile-page-card__details">
                            <label className="profile-page-card__details-item">
                                <UserOutlined />
                                {userData.fullName}
                            </label>
                            <label className="profile-page-card__details-item">
                                <MailOutlined />
                                {userData.email}
                            </label>
                            <label className="profile-page-card__details-item">
                                <ClockCircleOutlined />
                                {dateJoined}
                            </label>
                        </div>
                    </div>
                    <hr />
                    <div className="profile-page-badges">
                        <BadgeSquare
                            src={badgeCountImg}
                            title={userData.statistics.badges.length}
                            size={80}
                        />
                        <BadgeSquare
                            src={totalPointsImg}
                            title={
                                userData.statistics.communityStats
                                    .communityPoints
                            }
                            size={80}
                        />
                        <BadgeSquare
                            src={totalCommentsImg}
                            title={
                                userData.statistics.communityStats.totalComments
                            }
                            size={80}
                        />
                        <BadgeSquare
                            src={totalPostsImg}
                            title={
                                userData.statistics.communityStats.totalPosts
                            }
                            size={80}
                        />
                    </div>
                    <hr />
                    <div className="profile-page-badges">Tutorial</div>
                    <hr />
                    <div className="profile-page-badges">Test</div>
                    <hr />
                    <div className="profile-page-badges">Forum</div>
                    <hr />
                    <small>Joined on {dateJoined}</small>
                </div>
            </div>
        );
}
