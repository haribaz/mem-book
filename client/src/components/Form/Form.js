import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Paper, TextField, Button, Typography } from '@material-ui/core'
import FileBase from 'react-file-base64'

import { createPost } from '../../actions/posts'

import useStyles from './styles.js'
const Form = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [postData, setPostData] = useState({
        title: '',
        content: '',
        creator: '',
        tags: [],
        selectedFile: ''
    })

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createPost(postData))
    }

    const clearHandler = () => {}

    const stateChangeHandler = (property, value) => {
        setPostData((prevData) => {
            return {
                ...prevData,
                [property]: value
            }
        })
    }
    return (
        <Paper className={classes.paper}>
            <form
                className={`${classes.root} ${classes.form}`}
                noValidate
                onSubmit={submitHandler}
                autoComplete="off"
            >
                <Typography variant="h6">Post your memory</Typography>
                <TextField
                    name="creator"
                    label="Creator"
                    variant="outlined"
                    fullWidth
                    value={postData.creator}
                    onChange={(event) => stateChangeHandler('creator', event.target.value)}
                />
                <TextField
                    name="title"
                    label="Title"
                    variant="outlined"
                    fullWidth
                    value={postData.title}
                    onChange={(event) => stateChangeHandler('title', event.target.value)}
                />
                <TextField
                    name="content"
                    label="Content"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={postData.content}
                    onChange={(event) => stateChangeHandler('content', event.target.value)}
                />
                <TextField
                    name="tags"
                    label="Tags"
                    variant="outlined"
                    fullWidth
                    value={postData.tags}
                    onChange={(event) => stateChangeHandler('tags', event.target.value)}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={(file) => stateChangeHandler('selectedFile', file.base64)}
                    />
                </div>
                <Button
                    fullWidth
                    className={classes.buttonSubmit}
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                >
                    Submit
                </Button>
                <Button
                    fullWidth
                    className={classes.buttonSubmit}
                    onClick={clearHandler}
                    variant="contained"
                    color="secondary"
                    size="large"
                >
                    Clear
                </Button>
            </form>
        </Paper>
    )
}

export default Form
