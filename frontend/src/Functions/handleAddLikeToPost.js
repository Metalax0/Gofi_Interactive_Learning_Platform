import axios from "axios";

export const handleAddLikeToPost = async (config) => {
    let isPostLiked = await axios(config)
        .then((result) => {
            // console.log("SUCCESS: Post LIKED/Unliked", result);
            return result.data.liked;
        })
        .catch((error) => {
            console.log(
                "ERROR: Failed to Interract with post (like/unlike failed)",
                error
            );
            return false;
        });
    return isPostLiked;
};
