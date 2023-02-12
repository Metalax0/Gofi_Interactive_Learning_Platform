//mongodb+srv://Metalax:VJbgkRTCD6CzP3sS@gofi-cluster.qxrgocw.mongodb.net/?retryWrites=true&w=majority

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const dbConnect = require("./functions/databaseConnect");
const User = require("./database/userModel");
const auth = require("./auth");

const app = express();
const PORT = process.env.PORT || 8000;

// Bodyparser Middleware
app.use(bodyParser.json());
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// execute database connection
dbConnect();

// register endpoint
app.post("/register", (request, response) => {
    // hash the password
    bcrypt
        .hash(request.body.password, 10)
        .then((hashedPassword) => {
            // create a new user instance and collect the data
            const user = new User({
                fullName: request.body.fullName,
                email: request.body.email,
                password: hashedPassword,
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
});

// login endpoint
app.post("/login", (request, response) => {
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
                        email: user.email,
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
});

// free endpoint
app.get("/free-endpoint", (request, response) => {
    response.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
app.get("/auth-endpoint", auth, (request, response) => {
    response.json({ message: "You are authorized to access me" });
});
