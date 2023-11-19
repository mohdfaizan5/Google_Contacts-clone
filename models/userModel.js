const mongoose = require('mongoose')

const userModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This is the message will be shown"]
    },
    phone: {
      type: Number,
      required: true
    },
    email: String
  },
  // We can also create a timestamp
  {
    timestamps:true
  }
)

// We are creating model
const User = mongoose.model('contacts', userModel)

module.exports = User;