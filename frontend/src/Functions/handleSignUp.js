import axios from "axios";

export const handleSignup = async (config) => {
    let isRegisterSuccessful = await axios(config)
        .then((result) => {
            console.log("SUCCESS: Registration success", result);
            return true;
        })
        .catch((error) => {
            console.log("ERROR: Registration Failed", error);
            return false;
        });
    return isRegisterSuccessful;
};
