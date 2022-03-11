const Post = require('../models/post')

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()

        res.status(200).json(posts)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const createPost = async (req, res) => {
    const post = req.body
    console.log(post)
    try {
        const newPost = new Post(post)

        await newPost.save()

        res.status(201).json(newPost)
    } catch {
        res.status(500).json({ error: 'Server error' })
    }
}

module.exports = {
    getPosts,
    createPost
}
