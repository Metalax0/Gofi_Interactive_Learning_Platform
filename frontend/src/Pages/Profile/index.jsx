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
                <div className="profile-page__user-details">
                    <div className="profile-page__user-details__top">
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
                    </div>
                    <div className="profile-page__user-details__stats">
                        <BadgeSquare
                            className="profile-page__user-details__stats__badge-1"
                            src={badgeCountImg}
                            title={userData.statistics.badges.length}
                            size={80}
                        />
                        <BadgeSquare
                            className="profile-page__user-details__stats__badge-2"
                            src={totalPointsImg}
                            title={
                                userData.statistics.communityStats
                                    .communityPoints
                            }
                            size={80}
                        />
                        <BadgeSquare
                            className="profile-page__user-details__stats__badge-3"
                            src={totalCommentsImg}
                            title={
                                userData.statistics.communityStats.totalComments
                            }
                            size={80}
                        />
                        <BadgeSquare
                            className="profile-page__user-details__stats__badge-4"
                            src={totalPostsImg}
                            title={
                                userData.statistics.communityStats.totalPosts
                            }
                            size={80}
                        />
                    </div>
                    <div className="profile-page__user-details__bio">
                        {/* <Skeleton active width="100" /> */}
                        <p>
                            Hi, I'm Joe! I'm a creative and adventurous person
                            who loves exploring new cultures and ideas. have a
                            natural curiosity for the world around me and love
                            learning new things.
                        </p>
                    </div>
                    <small>Joined on {dateJoined}</small>
                </div>

                <div className="profile-page__user-activities">
                    <div className="profile-page__user-activities__badges">
                        <label>Badges Collected</label>
                        <br></br>
                        <div className="profile-page__user-activities__badges-list">
                            {userData.statistics.badges.map((badge, i) => {
                                return (
                                    <BadgeCircle
                                        key={i}
                                        className="profile-page__user-details__badge"
                                        src={badge.badgeImage}
                                        title={badge.title}
                                        description={badge.description}
                                        size={80}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <hr />
                    <div className="profile-page__user-activities__progress">
                        <label>Tutorial Progress</label>
                    </div>
                    <hr />

                    <div className="profile-page__user-activities__community">
                        <label>Community Activity</label>
                    </div>
                </div>
            </div>
        );
}
