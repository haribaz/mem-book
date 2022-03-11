const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json({ limit: '20mb', extended: true }))
app.use(express.urlencoded({ limit: '20mb', extended: true }))
app.use(cors())

const postsRouter = require('./routes/posts.js')

app.use('/posts', postsRouter)

require('./database.js')

app.listen(process.env.PORT || 5000, () =>
    console.log(`Server started on port ${process.env.PORT || 5000}`)
)
