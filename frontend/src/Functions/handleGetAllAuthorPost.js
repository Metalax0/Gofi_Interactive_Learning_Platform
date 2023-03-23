import axios from "axios";

export const handleGetAllAuthorPost = async (config) => {
    const allPostData = await axios(config)
        .then((result) => {
            console.log("SUCCESS", result);
            return result;
        })
        .catch((error) => {
            console.log("ERROR: Failed to fetch all author post data", error);
            throw error;
        });
    return allPostData;
};
