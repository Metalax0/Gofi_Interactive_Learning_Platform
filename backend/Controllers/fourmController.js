const forum = require("../Schema/forumSchema");

// Create a new forum post
exports.createPost = async (request, response) => {
    const { title, body, authorName, tag, userID } = request.body;

    try {
        const post = new forum({
            title: title,
            body: body,
            author: {
                user_id: userID,
                fullName: authorName,
            },
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

// Get a single forum post by ID
exports.getPostById = async (request, response) => {
    const { id } = request.params;

    try {
        const post = await forum
            .findById(id)
            .populate("author.user_id comments.author likes", "-password");

        if (!post) {
            return response.status(404).json({ message: "Post not found" });
        }

        response.json(post);
    } catch (err) {
        console.error(err);
        response.status(500).json({ message: "Server Error" });
    }
};

// Update a forum post by ID
exports.updatePostById = async (request, response) => {
    const { id } = request.params;
    const { title, body, tag } = request.body;

    try {
        const post = await forum.findById(id);

        if (!post) {
            return response.status(404).json({ message: "Post not found" });
        }

        post.title = title || post.title;
        post.body = body || post.body;
        post.tag = tag || post.tag;

        await post.save();

        response.json(post);
    } catch (err) {
        console.error(err);
        response.status(500).json({ message: "Server Error" });
    }
};

// Delete a forum post by ID
exports.deletePostById = async (request, response) => {
    const { id } = request.params;

    try {
        const post = await forum.findById(id);

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
