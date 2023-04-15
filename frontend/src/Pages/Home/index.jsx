import React, { useEffect } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import "./style.css";

const cookies = new Cookies();

export default function Home() {
    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem("activeUser")).fullName;

    useEffect(() => {
        const nav = document.getElementById("navigation-bar");
        console.log(nav.style.backgroundColor);
        if (nav) {
            nav.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        }
    });

    return (
        <div className="home-page">
            <section className="home-page-container">
                <div className="home-page-top">
                    <label className="home-page-title">
                        <b>WELCOME</b>,
                    </label>
                    <label className="home-page-user">{userName}</label>
                    <label className="home-page-text">
                        What do you want to do today
                    </label>
                </div>
                <div className="home-page-bottom">
                    <div
                        className="home-page-card home-page-card-1"
                        onClick={() => navigate("/tutorial")}
                    >
                        Tutorial
                    </div>
                    <div
                        className="home-page-card home-page-card-2"
                        onClick={() => navigate("/test")}
                    >
                        Test
                    </div>
                    <div
                        className="home-page-card home-page-card-3"
                        onClick={() => navigate("/forum")}
                    >
                        Forum
                    </div>
                </div>
            </section>
        </div>
    );
}
