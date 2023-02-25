import axios from "axios";

export const handleCreatePost = async (config) => {
    let isCreatePostSuccessful = await axios(config)
        .then((result) => {
            console.log("SUCCESS: Post Create", result);
            return true;
        })
        .catch((error) => {
            console.log("ERROR: Post Creation Failed", error);
            return false;
        });
    return isCreatePostSuccessful;
};
