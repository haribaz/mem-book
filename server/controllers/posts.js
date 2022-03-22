const mongoose = require('mongoose')
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
    try {
        const newPost = new Post(post)

        await newPost.save()

        res.status(201).json(newPost)
    } catch {
        res.status(500).json({ error: 'Server error' })
    }
}

const editPost = async (req, res) => {
    console.log(req.params)
    const _id = req.params.id
    console.log(_id)
    const post = req.body
    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).json({ message: 'Post not found' })
        }
        console.log('Hi')
        const updatedPost = await Post.findByIdAndUpdate(_id, { ...post, _id }, { new: true })
        console.log('Bye')
        return res.status(200).json(updatedPost)
    } catch (e) {
        //console.log(e)
        return res.status(500).json({ error: 'Server error' })
    }
}

module.exports = {
    getPosts,
    createPost,
    editPost
}
