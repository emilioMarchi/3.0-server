const express = require('express')
require('dotenv').config()
const cors = require('cors')
const connectDB = require('./db')
const UserQuery = require('./mongoose-models/userQueries')
const nodemailer = require('nodemailer')
var smtpTransport = require('nodemailer-smtp-transport');
const { setMaxListeners } = require('./mongoose-models/userQueries')




//
const app = express()
const corsOptions = {
    origin: ['http://34.226.121.56/','http://ec2-34-226-121-56.compute-1.amazonaws.com/'],
    preflightContinue:false,
}  
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//


//
app.get('/', async (req,res) => {
    try{
        await connectDB()
        await UserQuery.find({}, (err, data) => {
            res.send(data)
        })
    }   
    catch{console.log('no response')}     
})
app.post('/', async (req,res) => {
    try{
        
        await connectDB()
        const {userName, userEmail, userQuery} = req.body
        const newQuery = new UserQuery({
            userName,
            userEmail,
            userQuery,
            queryDate: new Date()
        })
        await UserQuery.create(newQuery)
   
        res.json({state:'staisfactory', msj:'Su consulta fue enviada con éxito'})
    }
    catch{
        console.log('error')
        res.json({state:'negative', msj:'Hubo un error, vuelva a intentarlo'})
    }
})

//
app.set('port', process.env.PORT || 8080)

app.listen(app.get('port'), () => {
    console.log('server in port ' + app.get('port') )
})