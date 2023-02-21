import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavigationbarOne from "./NavigationBarOne";
import NavigationbarTwo from "./NavigationBarTwo";
import "./style.css";

const NavigationBar = () => {
    // sub to store, check if logged in or not, logged in
    const isLoggedIn = useSelector((state) => state.global.isLoggedIn);
    console.log(isLoggedIn);

    return (
        <div className="navigation-bar">
            {!isLoggedIn ? <NavigationbarOne /> : <NavigationbarTwo />}
        </div>
    );
};

export default NavigationBar;
