import React, { Fragment } from 'react'

import Post from './Post/Post'
import useStyles from './styles.js'

const PostsList = () => {
    const classes = useStyles()
    return (
        <Fragment>
            <Post />
            <Post />
        </Fragment>
    )
}

export default PostsList
