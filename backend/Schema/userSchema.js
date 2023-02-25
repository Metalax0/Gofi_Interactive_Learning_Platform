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
                title: { type: String, required: true, default: "" },
                description: { type: String, required: true, default: "" },
                badgeImage: { type: String, required: true, default: "" },
            },
        ],
        default: [],
    },
    tutorialProgress: {
        type: [
            {
                tutorial: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Tutorial",
                    required: true,
                },
                chaptersCompleted: { type: Number, required: true, default: 0 },
            },
        ],
        default: [],
    },
    testDetails: {
        type: [
            {
                test: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Test",
                    required: true,
                },
                attempts: { type: Number, required: true, default: 0 },
                score: { type: Number, required: true, default: 0 },
                dateTaken: { type: Date, required: true, default: Date.now },
            },
        ],
        default: [],
    },
    communityStats: {
        communityPoints: { type: Number, default: 0 },
        totalPosts: { type: Number, default: 0 },
        totalComments: { type: Number, default: 0 },
    },
});

// This code will create a table/collection if table with that name does not exist
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
        default: {
            badges: [],
            tutorialProgress: [],
            testDetails: [],
            communityStats: {
                communityPoints: 0,
                totalPosts: 0,
                totalComments: 0,
            },
        },
    },
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
