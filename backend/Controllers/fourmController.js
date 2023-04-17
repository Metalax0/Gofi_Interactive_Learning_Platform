const forum = require("../Schema/forumSchema");
const user = require("../Schema/userSchema");

// Create a new forum post
exports.createPost = async (request, response) => {
    const { title, body, authorName, tag, category, userID } = request.body;

    try {
        const post = new forum({
            title: title,
            body: body,
            author: {
                user_id: userID,
                fullName: authorName,
            },
            category: category,
            tag: tag,
        });

        await post.save();

        response.status(201).json(post);
    } catch (err) {
        console.error(err);
        response.status(500).json({ message: "Server Error" });
    }
};

// Get all forum posts
exports.getAllPosts = async (request, response) => {
    try {
        const posts = await forum
            .find()
            .populate("author.user_id comments.author_id likes", "-password");
        response.json(posts);
    } catch (err) {
        console.error(err);
        response.status(500).json({ message: "Server Error" });
    }
};

// Get all post by the author
exports.getAllAuthorPost = async (req, res) => {
    const { authorID } = req.query;
    try {
        const posts = await forum
            .find({ "author.user_id": authorID })
            .populate("author.user_id comments.author_id likes", "-password");
        res.status(200).json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

// Delete a forum post by ID
exports.deletePostById = async (request, response) => {
    const { postID } = request.body;

    try {
        const post = await forum.findById(postID);

        if (!post) {
            return response.status(404).json({ message: "Post not found" });
        }

        await post.remove();

        response.json({ message: "Post removed" });
    } catch (err) {
        console.error(err);
        response.status(500).json({ message: "Server Error" });
    }
};

// Delete a forum comment by index
exports.deleteCommentByIndex = async (request, response) => {
    const { postID, commentIndex } = request.body;

    try {
        const post = await forum.findById(postID);

        if (!post) {
            return response.status(404).json({ message: "Post was not found" });
        }

        post.comments.splice(-commentIndex, 1);
        await post.save();
    } catch (err) {
        console.error(err);
        response.status(500).json({ message: "Server Error" });
    }
};

// Delete a forum comment based on userID
exports.deletePostAndComments = async (req, res) => {
    const { userID } = req.body;

    try {
        // Delete all comments made by user
        const posts = await forum.find({ "comments.author_id": userID });

        posts.forEach(async (post) => {
            const commentsToDelete = post.comments.filter(
                (comment) => comment.author_id.toString() === userID
            );
            commentsToDelete.forEach(async (comment) => {
                const index = post.comments.findIndex(
                    (i) => i._id.toString() === comment._id.toString()
                );
                post.comments.splice(index, 1);
                await post.save();
            });
        });

        // Delete all forum posts created by the user
        await forum.deleteMany({ "author.user_id": userID });
        res.status(200).send("All posts and comments deleted successfully.");
    } catch (error) {
        res.status(500).send("Error deleting posts and comments.");
    }
};

exports.addCommentToPost = async (request, response) => {
    const { postID, authorID, authorName, commentInput } = request.body;

    try {
        const post = await forum
            .findByIdAndUpdate(
                postID,
                {
                    $push: {
                        comments: {
                            author_id: authorID,
                            authorName: authorName,
                            body: commentInput,
                        },
                    },
                },
                { new: true }
            )
            .populate("author.user_id comments.author_id likes", "-password");

        if (!post) {
            return response.status(404).json({ message: "Post not found" });
        }

        response.json(post);
    } catch (err) {
        console.error(err);
        response.status(500).json({ message: "Server Error" });
    }
};

exports.likePost = async (req, res) => {
    const { postID, userID } = req.body;

    try {
        const post = await forum.findById(postID);

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        const alreadyLiked = post.likes.includes(userID);

        if (alreadyLiked) {
            post.likes = post.likes.filter((id) => {
                return id.toString() !== userID;
            });
        } else {
            post.likes.push(userID);
        }

        await post.save();

        res.status(200).json({ liked: !alreadyLiked });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};
