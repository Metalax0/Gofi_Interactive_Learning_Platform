const bcrypt = require("bcrypt");
const User = require("../Schema/userSchema");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { sendEmail } = require("../Functions/sendEmail");

exports.login = (request, response) => {
    //
    // Check if email exists, guest@gofi.com. If it does not exist create it and log in as guest, if not log in as guest
    //

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
            // If user is trying to log in as guest account and acc does not exist, create acc
            if (request.body.email === "guest@gofi.com") {
                const guest = {
                    fullName: "Guest",
                    email: "guest@gofi.com",
                    password: "guest",
                    dateRegistered: Date.now(),
                    profileImgBase64: "",
                    userType: "guest",
                    statistics: {},
                };
                this.signup({ body: guest }, response);
            } else
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
            let user = null;
            // create a new user instance and collect the data
            if (request.body.fullName === "Guest")
                user = new User({
                    _id: "000000000000000000000000",
                    fullName: request.body.fullName,
                    email: request.body.email,
                    password: hashedPassword,
                    dateRegistered: request.body.dateRegistered,
                    profileImg:
                        "data:image/png;base64,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",
                    userType: request.body.userType,
                    statistics: {},
                });
            else
                user = new User({
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
                    // Email notifying user that account has been created
                    sendEmail(
                        request.body.fullName.split(" ")[0],
                        request.body.email
                    );
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
        const { userID, tutorial, chaptersCompleted } = req.body;
        // Find the user by ID
        const user = await User.findById(userID);
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

exports.updateUserTestProgress = async (req, res) => {
    try {
        const { userID, test, score } = req.body;
        // Find the user by ID
        const user = await User.findById(userID);

        // Get the index of the test in the arra
        const testIndex = user.statistics.testProgress.findIndex(
            (item) => item.test === test
        );

        // Update Attempts
        if (score === 1)
            user.statistics.testProgress[testIndex].attempts =
                user.statistics.testProgress[testIndex].attempts + 1;

        // Updating High Score
        if (score > user.statistics.testProgress[testIndex].highScore)
            user.statistics.testProgress[testIndex].highScore = score;

        // Update Score
        user.statistics.testProgress[testIndex].score = score;

        // Update Date
        user.statistics.testProgress[testIndex].dateTaken = Date.now();

        // Save the updated user statistics to the database
        await user.save();

        // Return the updated user object
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
};
