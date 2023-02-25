import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { handleUserDataFetch } from "../../Functions/handleUserDataFetch";
import "./style.css";

const cookies = new Cookies();

export default function Profile() {
    const [userData, setuserData] = useState(null);
    const userDataURL = useSelector((state) => state.global.userDataURL);
    const userID = cookies.get("USERID");

    const userDataConfig = {
        method: "get",
        url: userDataURL,
        params: { userID: userID },
    };

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

    console.log("USER DATA IS", userData);

    if (!userData) return null;
    else
        return (
            <div className="profile-page">
                <div className="profile-page__user-details">
                    <div className="profile-page__user-details__image">
                        <img
                            src={userData.profileImg}
                            alt="user profile img"
                        ></img>
                    </div>
                    <div className="profile-page__user-details__title"></div>
                    <div className="profile-page__user-details__stats"></div>
                    <div className="profile-page__user-details__bio"></div>
                </div>
                <div className="profile-page__user-activities"></div>
            </div>
        );
}
