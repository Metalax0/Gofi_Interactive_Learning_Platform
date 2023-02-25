const User = require("../Schema/userSchema");
const ObjectId = require("mongodb").ObjectId;

exports.userData = (request, response) => {
    const { userID } = request.query;
    // check if user ID  exists
    User.findById(userID)
        .then((user) => {
            if (!user)
                return response.status(404).send({ message: "User Not Found" });

            response.status(200).send({
                message: "User Found, ID match successful",
                userData: user,
            });
        })
        .catch((e) => {
            response.status(500).send({
                message: "Server Error: Occured while searching for user ",
                e,
            });
        });
};
