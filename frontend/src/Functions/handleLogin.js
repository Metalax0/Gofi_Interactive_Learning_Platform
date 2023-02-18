import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const handleLogin = async (config) => {
    let isLoginSuccessful = await axios(config)
        .then((result) => {
            console.log("SUCCESS: Login success", result);
            cookies.set("TOKEN", result.data.token, {
                path: "/",
            });
            // This might be possible cause for page refresh
            window.location.href = "/home";
            return true;
        })
        .catch((error) => {
            console.log("ERROR: Login Failed, no details available atm", error);
            return false;
        });
    return isLoginSuccessful;
};
