import { Link, useNavigate } from "react-router-dom";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import Cookies from "universal-cookie";
import "./style.css";
import { useDispatch } from "react-redux";
import { setisLoggedIn } from "../../../StateManagement/Slices/GlobalSlice";

const cookies = new Cookies();

export default function NavigationbarTwo() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        // Resetting all user data and logged in status
        dispatch(setisLoggedIn(false));
        localStorage.removeItem("activeUser");
        cookies.remove("TOKEN");
        navigate("/landing");
    };
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
                <Link
                    to="/home"
                    className=" navigation-bar--item navigation-bar--active"
                >
                    Home
                </Link>
                <Link to="/tutorial" className="navigation-bar--item">
                    Tutorial
                </Link>
                <Link to="/test" className="navigation-bar--item">
                    Test
                </Link>
                <Link to="/forum" className="navigation-bar--item">
                    Forum
                </Link>
                <div className="navigation-bar--vertical-line"> | </div>
                <Link to="/profile" className="navigation-bar--item">
                    <UserOutlined />
                    Username
                </Link>
                <button
                    className="navigation-bar--item navigation-bar--logout"
                    onClick={handleLogout}
                >
                    <LogoutOutlined />
                </button>
            </div>
        </>
    );
}
