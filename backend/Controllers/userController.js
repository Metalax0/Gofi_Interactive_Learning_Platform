const bcrypt = require("bcrypt");
const User = require("../Schema/userSchema");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

exports.login = (request, response) => {
    // check if email exists
    User.findOne({ email: request.body.email })

        // if email exists
        .then((user) => {
            // compare the password entered and the hashed password found
            bcrypt
                .compare(request.body.password, user.password)

                // if the passwords match
                .then((passwordCheck) => {
                    // check if password matches
                    if (!passwordCheck) {
                        return response.status(400).send({
                            message: "Passwords does not match",
                            error,
                        });
                    }

                    //   create JWT token
                    const token = jwt.sign(
                        {
                            userId: user._id,
                            userEmail: user.email,
                        },
                        "RANDOM-TOKEN",
                        { expiresIn: "24h" }
                    );

                    //   return success response
                    response.status(200).send({
                        message: "Login Successful",
                        fullName: user.fullName,
                        userID: user._id,
                        userType: user.userType,
                        token,
                    });
                })
                // catch error if password does not match
                .catch((error) => {
                    response.status(400).send({
                        message: "Passwords does not match",
                        error,
                    });
                });
        })
        // catch error if email does not exist
        .catch((e) => {
            response.status(404).send({
                message: "Email not found",
                e,
            });
        });
};

exports.signup = (request, response) => {
    // hash the password
    bcrypt
        .hash(request.body.password, 10)
        .then((hashedPassword) => {
            // create a new user instance and collect the data
            const user = new User({
                fullName: request.body.fullName,
                email: request.body.email,
                password: hashedPassword,
                dateRegistered: request.body.dateRegistered,
                profileImg: request.body.profileImgBase64,
                userType: request.body.userType,
                statistics: {},
            });

            user.save()
                // Success Case : New user added to database
                .then((result) => {
                    response.status(201).send({
                        message: "User Created Successfully",
                        result,
                    });
                })
                // Failure Case : New user not added to database
                .catch((error) => {
                    response.status(500).send({
                        message: "Error creating user",
                        error,
                    });
                });
        })
        // Failure Case : Pass hashing not successful
        .catch((e) => {
            response.status(500).send({
                message: "Password was not hashed successfully",
                e,
            });
        });
};

exports.updateUserTutorialProgress = async (req, res) => {
    try {
        const { userID, tutorial, chaptersCompleted } = req.body; // Get the input values from request body
        console.log(req.body);
        const user = await User.findById(userID); // Find the user by ID
        // Update the tutorial progress
        const tutorialIndex = user.statistics.tutorialProgress.findIndex(
            (item) => item.tutorial === tutorial
        ); // Get the index of the tutorial in the array
        user.statistics.tutorialProgress[tutorialIndex].chaptersCompleted =
            chaptersCompleted;

        // Save the updated user statistics to the database
        await user.save();

        // Return the updated user object
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
};
