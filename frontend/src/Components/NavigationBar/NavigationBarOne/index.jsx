import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function NavigationbarOne() {
    return (
        <>
            <Link to="/">
                <img
                    className="navigation-bar__logo"
                    src="/images/logo/logo.png"
                    alt="Logo"
                />
            </Link>
            <div className="navigation-bar__links">
                <Link to="/login" className="btn btn--secondary">
                    <b>Login</b> &#10140;
                </Link>
                <Link to="/signup" className="btn btn--primary">
                    Sign Up
                </Link>
                <Link to="/login" className="btn btn--secondary">
                    <b>Continue As Guest</b>
                </Link>
            </div>
        </>
    );
}
