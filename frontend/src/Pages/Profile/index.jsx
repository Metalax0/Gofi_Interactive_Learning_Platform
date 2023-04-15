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
import HTMLFlipBook from "react-pageflip";

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
                    <HTMLFlipBook
                        id="profile-page-flipbook"
                        width={1000}
                        height={1000}
                        size="stretch"
                    >
                        <div className="profile-page-book-page">
                            <div className="book-page-container">
                                <div className="profile-page-book-top">
                                    <label className="profile-page-book-heading">
                                        USER PROFILE
                                    </label>
                                    <label className="profile-page-book-subheading">
                                        (book)
                                    </label>
                                </div>
                                <div className="profile-page-book-bottom">
                                    <hr />
                                    <small>page 1</small>
                                </div>
                            </div>
                        </div>
                        <div className="profile-page-book-page">
                            <div className="book-page-container">
                                <div className="profile-page-book-top">
                                    <p className="profile-page-book-paragraph">
                                        Your user profile information is
                                        represented by this book. Click on the
                                        edge of the pages to turn to the
                                        next/previous page. The book has total
                                        of 5 pages.
                                    </p>
                                </div>
                                <div className="profile-page-book-bottom">
                                    <hr />
                                    <small>page 2</small>
                                </div>
                            </div>
                        </div>
                        <div className="profile-page-book-page">
                            <div className="book-page-container">
                                <div className="profile-page-book-top">
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
                                    <p className="profile-page-book-paragraph">
                                        This here is your identification card.
                                        Look familiar? Well, you probabily have
                                        seen this while creating your account
                                        (signup). It contains your user avatar,
                                        full name, email associated with
                                        account, date joined
                                    </p>
                                </div>
                                <div className="profile-page-book-bottom">
                                    <hr />
                                    <small>page 3</small>
                                </div>
                            </div>
                        </div>
                        <div className="profile-page-book-page">
                            <div className="book-page-container">
                                <div className="profile-page-book-top">
                                    <div className="profile-page-badges">
                                        <BadgeSquare
                                            src={badgeCountImg}
                                            title={
                                                userData.statistics.badges
                                                    .length
                                            }
                                            size={80}
                                        />
                                        <BadgeSquare
                                            src={totalPointsImg}
                                            title={
                                                userData.statistics
                                                    .communityStats
                                                    .communityPoints
                                            }
                                            size={80}
                                        />
                                        <BadgeSquare
                                            src={totalCommentsImg}
                                            title={
                                                userData.statistics
                                                    .communityStats
                                                    .totalComments
                                            }
                                            size={80}
                                        />
                                        <BadgeSquare
                                            src={totalPostsImg}
                                            title={
                                                userData.statistics
                                                    .communityStats.totalPosts
                                            }
                                            size={80}
                                        />
                                    </div>
                                    <p className="profile-page-book-paragraph">
                                        These are your overall statistics at
                                        gofi. This contains your badge count,
                                        which will increase based on achieving
                                        certain goals, total points which would
                                        be your overall score, and the last two
                                        are self explainatory.
                                    </p>
                                </div>
                                <div className="profile-page-book-bottom">
                                    <hr />
                                    <small>page 4</small>
                                </div>
                            </div>
                        </div>
                        <div className="profile-page-book-page">
                            <div className="book-page-container">
                                <div className="profile-page-book-top">
                                    <h1>The End</h1>
                                </div>
                            </div>
                        </div>
                        <div className="profile-page-book-page">
                            <div className="book-page-container">
                                <div className="profile-page-book-top"></div>
                            </div>
                        </div>
                    </HTMLFlipBook>
                </div>
            </div>
        );
}
