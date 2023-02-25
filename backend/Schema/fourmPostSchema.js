const mongoose = require("mongoose");

// This code will create a table/collection if table with that name does not exist
const forumPostSchema = new mongoose.Schema({
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
    comments: [
        {
            author: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Users",
                required: true,
            },
            body: { type: String, required: true },
            datePublished: { type: Date, default: Date.now },
            likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
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

module.exports =
    mongoose.model.forumPost || mongoose.model("forumPost", forumPostSchema);
