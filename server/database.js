const mongoose = require('mongoose')

const DATABASE_URL =
    'mongodb://localhost:27017/membook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'

mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))
