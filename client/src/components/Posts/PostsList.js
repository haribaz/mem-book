import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
import useStyles from './styles.js'

const PostsList = () => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles()

    console.log(posts)
    return (
        <Fragment>
            <Post />
            <Post />
        </Fragment>
    )
}

export default PostsList
