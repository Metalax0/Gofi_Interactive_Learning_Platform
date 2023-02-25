import axios from "axios";

export const handleUserDataFetch = async (config) => {
    const userData = await axios(config)
        .then((result) => {
            console.log("SUCCESS", result);
            return result;
        })
        .catch((error) => {
            console.log("ERROR: Failed to fetch user data", error);
            throw error;
        });
    return userData;
};
