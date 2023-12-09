// Importing product module
const UserModel = require('../models/userModel')


const getAllContacts = async(req, res) => {

  const allContacts = await UserModel.find()

  res.status(200).json(allContacts)

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