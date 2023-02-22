const mongoose = require("mongoose");

// This code will create a table/collection if table with that name does not exist
const FourmPostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        username: { type: String, required: true },
    },
    comments: [
        {
            author: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true,
            },
            body: { type: String, required: true },
            datePublished: { type: Date, default: Date.now },
            likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        },
    ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    created_at: { type: Date, default: Date.now },
});

module.exports =
    mongoose.model.FourmPost || mongoose.model("FourmPost", FourmPostSchema);
