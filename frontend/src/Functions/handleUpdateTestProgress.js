import axios from "axios";

export const handleUpdateTestProgress = async (config) => {
    let isUpdated = await axios(config)
        .then((result) => {
            console.log("SUCCESS: test progress updated", result);
            return true;
        })
        .catch((error) => {
            console.log("ERROR: test progress was not updated", error);
            return false;
        });
    return isUpdated;
};
