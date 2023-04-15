import { NavLink, useNavigate } from "react-router-dom";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import Cookies from "universal-cookie";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { setisLoggedIn } from "../../../StateManagement/Slices/GlobalSlice";

const cookies = new Cookies();

export default function NavigationbarTwo() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const activeUser = useSelector((state) => state.user.fullName);
    const activeUserLocalStorage = JSON.parse(
        localStorage.getItem("activeUser")
    );
    if (
        typeof activeUserLocalStorage === "object" &&
        activeUserLocalStorage !== null &&
        JSON.stringify(activeUserLocalStorage) === "{}"
    ) {
        // This happens when user continues as guest but acc does not exist.
        // It will create acc and log in as guest
        // But will cause error due to localstorage now being set
        // This block will handle that one specific case
        const guest = {
            fullName: "Guest",
            userID: "000000000000000000000000",
            userType: "guest",
        };
        localStorage.setItem("activeUser", JSON.stringify(guest));
    }

    const handleLogout = () => {
        // Resetting all user data and logged in status
        dispatch(setisLoggedIn("LOGGED OUT"));
        localStorage.removeItem("activeUser");
        cookies.remove("TOKEN");
        cookies.remove("USERID");
        cookies.remove("USERTYPE");
        navigate("/login");
    };

    const activeStyle = {
        borderBottom: "3px solid black",
    };

    return (
        <>
            <NavLink to="/">
                <img
                    className="navigation-bar__logo"
                    src="/images/logo/logo.png"
                    alt="Logo"
                />
            </NavLink>
            <div className="navigation-bar__links">
                <NavLink
                    to="/home"
                    className=" navigation-bar--item"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/tutorial"
                    className="navigation-bar--item"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Tutorial
                </NavLink>
                <NavLink
                    to="/test"
                    className="navigation-bar--item"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Test
                </NavLink>
                <NavLink
                    to="/forum"
                    className="navigation-bar--item"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Forum
                </NavLink>
                <div className="navigation-bar--vertical-line"> | </div>
                <NavLink
                    to="/profile"
                    className="navigation-bar--item"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    <UserOutlined />
                    {console.log(
                        "NAV - activeUser",
                        activeUser,
                        activeUserLocalStorage
                    )}
                    <label>
                        {
                            (activeUser
                                ? activeUser
                                : activeUserLocalStorage
                                ? activeUserLocalStorage.fullName
                                : "NULL"
                            ).split(" ")[0]
                        }
                    </label>
                </NavLink>
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
