import axios from "axios";

export const handleAddComment = async (config) => {
    let isCommentAdded = await axios(config)
        .then((result) => {
            console.log("SUCCESS: Comment Added", result);
            return true;
        })
        .catch((error) => {
            console.log("ERROR: Failed to add comment", error);
            return false;
        });
    return isCommentAdded;
};
