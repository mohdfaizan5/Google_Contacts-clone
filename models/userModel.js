const mongoose = require('mongoose')

const userModel = mongoose.Schema(
  {
    name: {
      first: String,
      last: String
    },
    phone: {
      type: String,
      required: true
    },
    // email: String
  },
  // We can also create a timestamp
  {
    timestamps: true
  }
)

// We are creating model
const User = mongoose.model('contacts', userModel)

module.exports = User;