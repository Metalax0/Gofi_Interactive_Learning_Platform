import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
import NavigationbarOne from "./NavigationBarOne";
import NavigationbarTwo from "./NavigationBarTwo";
import "./style.css";

const cookies = new Cookies();

const NavigationBar = () => {
    // sub to store to trigger re-render.
    const isLoggedIn = useSelector((state) => state.global.isLoggedIn);
    console.log("IS LOGGED IN", isLoggedIn);
    const token = cookies.get("TOKEN");

    console.log("NAVIGATION BAR RENDERED");
    useEffect(() => {
        // const navDOM = document.getElementById("navigation-bar");
        // let prevScrollpos = window.pageYOffset;
        // window.onload = () => (navDOM.style.top = "-50px");
        // window.onscroll = () => {
        //     const currentScrollPos = window.pageYOffset;
        //     if (prevScrollpos > currentScrollPos) {
        //         navDOM.style.top = "0";
        //     } else {
        //         navDOM.style.top = "-50px";
        //     }
        //     prevScrollpos = currentScrollPos;
        // };
    }, []);

    return (
        <div id="navigation-bar">
            {!token ? <NavigationbarOne /> : <NavigationbarTwo />}
        </div>
    );
};

export default NavigationBar;
