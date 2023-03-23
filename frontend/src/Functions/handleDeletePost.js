import axios from "axios";

export const handleDeletePost = async (config) => {
    let isPostDeleted = await axios(config)
        .then((result) => {
            console.log("SUCCESS: Post Deleted", result);
            return true;
        })
        .catch((error) => {
            console.log("ERROR: Failed to delete post)", error);
            return false;
        });
    return isPostDeleted;
};
