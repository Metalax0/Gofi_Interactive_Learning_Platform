import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
import NavigationbarAdmin from "./NavigationBarAdmin";
import NavigationbarOne from "./NavigationBarOne";
import NavigationbarTwo from "./NavigationBarTwo";
import "./style.css";

const cookies = new Cookies();

const NavigationBar = () => {
    // sub to store to trigger re-render.
    const isLoggedIn = useSelector((state) => state.global.isLoggedIn);
    console.log("IS LOGGED IN", isLoggedIn);
    const token = cookies.get("TOKEN");
    const userType = cookies.get("USERTYPE");
    // const activeUserStorage = localStorage.getItem("activeUser");

    return (
        <div id="navigation-bar">
            {!token ? (
                <NavigationbarOne />
            ) : userType === "admin" ? (
                <NavigationbarAdmin />
            ) : (
                <NavigationbarTwo />
            )}
        </div>
    );
};

export default NavigationBar;
