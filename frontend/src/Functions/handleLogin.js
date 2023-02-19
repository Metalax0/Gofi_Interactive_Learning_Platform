import axios from "axios";
import Cookies from "universal-cookie";
import { setActiveUser } from "../StateManagement/Slices/UserSlice";
const cookies = new Cookies();

export const handleLogin = async (config, dispatch) => {
    let isLoginSuccessful = await axios(config)
        .then((result) => {
            console.log("SUCCESS: Login success", result);
            cookies.set("TOKEN", result.data.token, {
                path: "/",
            });
            dispatch(setActiveUser(result.data));
            // This might be possible cause for page refresh
            // window.location.href = "/home";
            return true;
        })
        .catch((error) => {
            console.log("ERROR: Login Failed, no details available atm", error);
            return false;
        });
    return isLoginSuccessful;
};
