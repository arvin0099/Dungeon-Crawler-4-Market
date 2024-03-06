const mongoose = require('mongoose')
const Schema = mongoose.Schema


//sources for default: internet, was just searching on how to have a default value
const userSchema = Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    gold: {type: Number, default: 3000},
    superUser: {type: Boolean, default: false},
    inventory: [{
        itemName: {type: String},
        itemCount :{type: Number}
    }]
})

const User = mongoose.model('User', userSchema)

module.exports = User