const mongoose = require('mongoose')
require('dotenv').config()

const URI = process.env.MONGO_URI

const connectDB = async () => {
    const conn = await mongoose.connect(URI,
        {
            useUnifiedTopology: true
        });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB