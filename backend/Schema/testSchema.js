const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    tutorial: { type: mongoose.Schema.Types.ObjectId, ref: "Tutorial" },
    attempts: [
        {
            member: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            score: { type: Number },
            dateTaken: { type: Date, default: Date.now },
        },
    ],
});

module.exports = mongoose.model("Test", TestSchema);
