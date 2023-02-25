import axios from "axios";

export const handleGetAllPost = async (config) => {
    const allPostData = await axios(config)
        .then((result) => {
            console.log("SUCCESS", result);
            return result;
        })
        .catch((error) => {
            console.log("ERROR: Failed to fetch post data", error);
            throw error;
        });
    return allPostData;
};
