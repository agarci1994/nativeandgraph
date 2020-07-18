const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log("DB conectada")
    } catch (error) {
        console.log("hubo un error")
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB