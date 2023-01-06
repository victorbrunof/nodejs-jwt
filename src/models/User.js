const mongoose = require('mongoose')

const User = mongoose.model('User', {
    name: String,
    email: String,
    telefone: String,
    cpf: String,
    // name: String,
    // email: String,
    // password: String
})

module.exports = User