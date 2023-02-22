const mongoose = require("mongoose");

//
const userStatisticsSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    badges: [
        {
            title: { type: String, required: true },
            description: { type: String, required: true },
            badgeImage: { type: String, required: true },
        },
    ],
    tutorialProgress: [
        {
            tutorial: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Tutorial",
                required: true,
            },
            chaptersCompleted: { type: Number, required: true },
        },
    ],
    testDetails: [
        {
            test: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Test",
                required: true,
            },
            attempts: { type: Number, required: true },
            score: { type: Number, required: true },
            dateTaken: { type: Date, required: true },
        },
    ],
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
        userType: {
            type: String,
            enum: ["admin", "member", "guest"],
            default: "member",
        },
        unique: false,
    },
    statistics: { type: userStatisticsSchema, default: {} },
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
