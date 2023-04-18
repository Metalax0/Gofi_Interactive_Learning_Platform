import axios from "axios";

export const handleGetAllUserComments = async (config) => {
    const allPostData = await axios(config)
        .then((result) => {
            console.log("SUCCESS", result);
            return result;
        })
        .catch((error) => {
            console.log("ERROR: Failed to fetch all user comments", error);
            throw error;
        });
    return allPostData;
};
