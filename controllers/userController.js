// Importing product module
const UserModel = require('../models/userModel')


const getAllContacts = async(request, response) => {

  const allContacts = await UserModel.find()
  console.log(allContacts)

  response.render('index')

}

const addContact = async(req, res)=>{
  
  try{

    const data = await UserModel.create(req.body)
    res.status(200).json(data)
  }
  catch(error){
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
}

module.exports = {getAllContacts, addContact}