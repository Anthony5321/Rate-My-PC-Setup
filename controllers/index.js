const Post = require('../models/post');
const Pc = require('../models/pc');

const createPost = async (req, res) => {
    console.log(req.body)
    try {
        const post = await new Post(req.body)
        await post.save()
        return res.status(201).json({
            post,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        return res.status(200).json({ posts })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllPcs = async (req, res) => {
    try {
        const pcs = await Pc.find()
        return res.status(200).json({ pcs })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id)
        if (post) {
            return res.status(200).json({ post });
        }
        return res.status(404).send('Post with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getPostByPcId = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.find({pcId: id})
        if (post) {
            return res.status(200).json({ post });
        }
        return res.status(404).send('Post with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getPcById = async (req, res) => {
    try {
        const { id } = req.params;
        const pc = await Pc.findById(id)
        if (pc) {
            return res.status(200).json({ pc });
        }
        return res.status(404).send('Pc with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.status(200).json(post)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Post.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Post deleted");
        }
        throw new Error("Post not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createPost,
    getPostById,
    updatePost,
    deletePost,
    getAllPosts,
    getAllPcs,
    getPcById,
    getPostByPcId
}