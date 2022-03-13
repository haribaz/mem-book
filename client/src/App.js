import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import Form from './components/Form/Form'
import PostsList from './components/Posts/PostsList'
import image from './images/image.jpg'

import useStyles from './styles.js'

import { getPosts } from './actions/posts'

const App = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">
                    Mem Book
                </Typography>
                <img
                    className={classes.image}
                    src={image}
                    alt="membook"
                    width="60"
                    height="60"
                ></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <PostsList />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
