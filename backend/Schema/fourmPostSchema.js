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
            user_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true,
            },
            username: { type: String, required: true },
            body: { type: String, required: true },
            created_at: { type: Date, default: Date.now },
        },
    ],
    likes: [
        {
            user_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true,
            },
            username: { type: String, required: true },
        },
    ],
    created_at: { type: Date, default: Date.now },
});

module.exports =
    mongoose.model.FourmPost || mongoose.model("FourmPost", FourmPostSchema);
