const mongoose = require("mongoose");

const TutorialSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    chapters: [
        {
            title: { type: String, required: true },
            description: { type: String },
        },
    ],
});

module.exports = mongoose.model("Tutorial", TutorialSchema);
