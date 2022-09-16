const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userQueriesSchema = Schema({
    userName: {
        type: String,
        required: true,
        unique: false
    },
    userEmail: {
        type: String,
        required: true,
        unique: false
    },
    userQuery: {
        type: String,
        required: true,
        unique: false
    },
    queryDate: {
        type: String,
        required: true,
        unique: false
    }
})

const UserQuery = mongoose.model("users_queries", userQueriesSchema)

module.exports = UserQuery