import axios from "axios";

export const handleAddHtmlChapter = async (config) => {
    let isSuccessfullyAdded = await axios(config)
        .then((result) => {
            console.log("SUCCESS: HTML Chapter Added", result);
            return true;
        })
        .catch((error) => {
            console.log("ERROR: Adding HTML Chapter Failed", error);
            return false;
        });
    return isSuccessfullyAdded;
};
