import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
import useStyles from './styles.js'
import { Grid, CircularProgress } from '@material-ui/core'

const PostsList = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles()

    return (
        <Fragment>
            {!posts.length && <CircularProgress />}
            {posts.length > 0 && (
                <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                    {posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6} md={6}>
                            <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Fragment>
    )
}

export default PostsList
