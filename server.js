const express = require('express')
const app = express()
require('dotenv').config() // Helps to use `dotenv` package

// Get all env Variables
const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000

// Importing routes
const userRoute = require('./routes/userRoute')

// Seting up template engine
app.set('view engine', 'ejs')

// Serving static files
app.use(express.static('./public'))

// Mongo db
const mongoose = require('mongoose')

// To use json
app.use(express.json())

// Routes
app.use('/', userRoute)




mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, ()=>{
      console.log('mongo db connected')
    })
  })
  .catch(() => {
    console.log('Db connection failed')
  })