const mongoose = require("mongoose");
const HtmlTutorial = require("../Schema/htmlTutorialSchema");

exports.getAllData = async (req, res) => {
    try {
        const data = await HtmlTutorial.find();
        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.addChapter = async (req, res) => {
    const { title, body } = req.body;

    const newChapter = {
        _id: mongoose.Types.ObjectId(),
        title,
        body,
    };

    try {
        let tutorial = await HtmlTutorial.findOne();
        if (!tutorial) {
            tutorial = new HtmlTutorial({ chapters: [] });
        }
        tutorial.chapters.push(newChapter);
        await tutorial.save();
        console.log("SUCCESS: HTML Chapter Added");
        return true;
    } catch (error) {
        console.log("ERROR: Adding HTML Chapter Failed", error);
        return false;
    }
};

exports.deleteChapter = async (req, res) => {
    const { chapterId } = req.params;

    try {
        const deletedChapter = await HtmlTutorial.findOneAndDelete(
            { "chapters._id": chapterId },
            { "chapters.$": 1 }
        );
        if (!deletedChapter) {
            return res.status(404).json({ message: "Chapter not found" });
        }
        res.status(200).json({ chapter: deletedChapter.chapters[0] });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateContent = async (req, res) => {
    const { chapterId, contentId } = req.params;
    const { content, type, width, output } = req.body;

    try {
        const updatedChapter = await HtmlTutorial.findOneAndUpdate(
            { "chapters._id": chapterId, "chapters.body._id": contentId },
            {
                $set: {
                    "chapters.$[chapter].body.$[content].content": content,
                    "chapters.$[chapter].body.$[content].type": type,
                    "chapters.$[chapter].body.$[content].width": width,
                    "chapters.$[chapter].body.$[content].output": output,
                },
            },
            {
                arrayFilters: [
                    { "chapter._id": chapterId },
                    { "content._id": contentId },
                ],
                new: true,
                projection: { "chapters.$": 1 },
            }
        );
        if (!updatedChapter) {
            return res
                .status(404)
                .json({ message: "Chapter or content not found" });
        }
        res.status(200).json({ chapter: updatedChapter.chapters[0] });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
