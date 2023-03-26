import axios from "axios";

export const handleUpdateTutorialProgress = async (config) => {
    let isUpdated = await axios(config)
        .then((result) => {
            console.log("SUCCESS: tutorial progress updated", result);
            return true;
        })
        .catch((error) => {
            console.log("ERROR: tutorial progress was not updated", error);
            return false;
        });
    return isUpdated;
};
