const mongoose = require("mongoose");

const validCategories = ["General", "HTML", "CSS", "JavaScript"];

// This code will create a table/collection if table with that name does not exist
const forumSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
            required: true,
        },
        fullName: { type: String, required: true },
    },
    tag: { type: String, required: true },
    category: {
        type: String,
        enum: validCategories,
        required: true,
        default: "General",
    },
    comments: [
        {
            author_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Users",
                required: true,
            },
            authorName: { type: String, required: true },
            body: { type: String, required: true },
            datePublished: { type: Date, default: Date.now },
        },
    ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
        },
    ],
    datePosted: { type: Date, default: Date.now },
});

module.exports = mongoose.model.forum || mongoose.model("forum", forumSchema);
