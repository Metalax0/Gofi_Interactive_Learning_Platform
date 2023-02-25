import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
import NavigationbarOne from "./NavigationBarOne";
import NavigationbarTwo from "./NavigationBarTwo";
import "./style.css";

const cookies = new Cookies();

const NavigationBar = () => {
    // sub to store to trigger re-render.
    const isLoggedIn = useSelector((state) => state.global.isLoggedIn);
    const token = cookies.get("TOKEN");

    return (
        <div className="navigation-bar">
            {!token ? <NavigationbarOne /> : <NavigationbarTwo />}
        </div>
    );
};

export default NavigationBar;
