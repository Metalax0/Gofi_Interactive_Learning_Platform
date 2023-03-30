import axios from "axios";

export const handleGetUserStatistics = async (config) => {
    const allPostData = await axios(config)
        .then((result) => {
            // console.log("SUCCESS", result);
            return result;
        })
        .catch((error) => {
            console.log("ERROR: Failed to fetch user statistics data", error);
            throw error;
        });
    return allPostData;
};
