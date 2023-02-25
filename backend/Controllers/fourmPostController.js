const forumPost = require("../Schema/fourmPostSchema");

// Create a new forum post
exports.createPost = async (request, response) => {
    const { title, body, authorName, tag, userID } = request.body;
    const author = {
        user_id: userID,
        fullName: authorName,
    };

    try {
        const post = new forumPost({
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
        const posts = await forumPost
            .find()
            .populate("author.user_id comments.author likes", "-password");
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
        const post = await forumPost
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
        const post = await forumPost.findById(id);

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
        const post = await forumPost.findById(id);

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
