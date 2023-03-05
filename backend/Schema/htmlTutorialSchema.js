const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
    content: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    type: {
        type: String,
        enum: ["paragraph", "list", "task"],
        required: true,
    },
    width: {
        type: String,
        default: "100%",
    },
    output: {
        type: String,
        default: "",
    },
    _id: false, // don't generate _id field for content items
});

const chapterSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // generate _id field for chapters
    title: {
        type: String,
        required: true,
    },
    body: [contentSchema],
});

const htmlTutorialSchema = new mongoose.Schema({
    chapters: [chapterSchema],
});

module.exports = mongoose.model("htmlTutorial", htmlTutorialSchema);
