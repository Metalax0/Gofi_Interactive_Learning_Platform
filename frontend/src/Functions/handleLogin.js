import axios from "axios";
import Cookies from "universal-cookie";
import { setActiveUser } from "../StateManagement/Slices/UserSlice";

const cookies = new Cookies();

export const handleLogin = async (config, dispatch, navigate) => {
    let isLoginSuccessful = await axios(config)
        .then((result) => {
            console.log("SUCCESS: Login success", result);
            cookies.set("TOKEN", result.data.token, {
                path: "/",
            });
            cookies.set("USERID", result.data.userID, {
                path: "/",
            });
            cookies.set("USERTYPE", result.data.userType, {
                path: "/",
            });
            // Setting active user
            dispatch(setActiveUser(result.data));
            const localStorageData = {
                fullName: result.data.fullName,
                userID: result.data.userID,
                userType: result.data.userType,
            };
            localStorage.setItem(
                "activeUser",
                JSON.stringify(localStorageData)
            );
            navigate("/home");
            return true;
        })
        .catch((error) => {
            console.log("ERROR: Login Failed, no details available atm", error);
            return false;
        });
    return isLoginSuccessful;
};
