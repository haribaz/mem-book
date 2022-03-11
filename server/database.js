const mongoose = require('mongoose')

const DATABASE_URL =
    'mongodb+srv://harirahul:abcd1234@cluster0.xukm0.mongodb.net/membook?retryWrites=true&w=majority'

mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))
