const express = require('express')
const route = express.Router()
const app = express()


// Importing Controllers
const {addContact, getAllContacts} = require('../controllers/userController')

// Seting up template engine
app.set('view engine', 'ejs')


// get all contacts
route.get("/", getAllContacts)

// Add new contact
route.post('/add', addContact)

// Update existing contact

module.exports = route