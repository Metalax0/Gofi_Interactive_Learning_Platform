const mongoose = require("mongoose");

const userStatisticsSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: false,
        default: "novice",
    },
    badges: {
        type: [
            {
                title: { type: String, required: true },
                description: { type: String, required: true },
                icon: { type: String, required: true },
            },
        ],
        default: [
            {
                title: "Welcome to Gofi",
                description:
                    "This badge was provided on becomming a gofi member.",
                icon: "signin",
            },
        ],
    },
    tutorialProgress: {
        type: [
            {
                tutorial: {
                    type: String,
                    enum: ["html", "css", "js"],
                    required: true,
                },
                chaptersCompleted: { type: Number, required: true, default: 0 },
            },
        ],
        default: [
            {
                tutorial: "html",
                chaptersCompleted: 0,
            },
            {
                tutorial: "css",
                chaptersCompleted: 0,
            },
            {
                tutorial: "js",
                chaptersCompleted: 0,
            },
        ],
    },
    testProgress: {
        type: [
            {
                test: {
                    type: String,
                    enum: ["html", "css", "js"],
                    required: true,
                },
                attempts: { type: Number, required: true, default: 0 },
                score: { type: Number, required: true, default: 0 },
                highScore: { type: Number, required: true, default: 0 },
                dateTaken: { type: Date, required: true, default: Date.now },
            },
        ],
        default: [
            { test: "html", attempts: 0, score: 0, dateTaken: new Date() },
            { test: "css", attempts: 0, score: 0, dateTaken: new Date() },
            { test: "js", attempts: 0, score: 0, dateTaken: new Date() },
        ],
    },
});

// UserSchema
const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Please provide a Full Name!"],
        unique: false,
    },

    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },

    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    },

    dateRegistered: {
        type: Date,
        default: Date.now,
        unique: false,
    },

    lastLoginDate: {
        type: Date,
        default: Date.now,
        unique: false,
    },

    isAccountDisabled: {
        type: Boolean,
        default: false,
        unique: false,
    },

    profileImg: {
        type: String,
        required: false,
        unique: false,
    },

    userType: {
        type: String,
        enum: ["admin", "member", "guest"],
        default: "member",
        unique: false,
    },

    statistics: {
        type: userStatisticsSchema,
    },
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
