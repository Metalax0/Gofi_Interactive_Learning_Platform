const User = require("../Schema/userSchema");

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

// Get user statistics by of a user by their ID
exports.getUserStatistics = async (req, res) => {
    const { userID } = req.query;

    try {
        const user = await User.findById(userID);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        const userStatistics = user.statistics;
        return res.json(userStatistics);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

// Get all user data
exports.getUsers = (req, res) => {
    User.find()
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                message: "Failed to get all users data",
            });
        });
};

// Delete User By ID
exports.deleteUserById = async (req, res) => {
    const { userID } = req.body;

    User.findById(userID)
        .then((user) => {
            user.remove()
                .then(() => {
                    res.status(200).json({
                        message: "User deleted successfully!",
                    });
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).json({
                        message:
                            "SERVER ERROR : User found but could not be deleted.",
                    });
                });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: "User Not Found" });
        });
};
