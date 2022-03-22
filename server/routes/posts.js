const express = require('express')

const { getPosts, createPost, editPost } = require('../controllers/posts')

const router = express.Router()

router.get('/', getPosts)
router.post('/', createPost)
router.put('/:id', editPost)

module.exports = router
