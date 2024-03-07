const mongoose = require('mongoose')
const Schema = mongoose.Schema


//sources for default: internet, was just searching on how to have a default value
const userSchema = Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    gold: {type: Number, default: 3000},
    superUser: {type: Boolean, default: false},
    inventory: {
        type : [{
            itemName: {type: String},
            itemCount :{type: Number}
        }],
    //    default: [{ itemName: 'Sword', itemCount: 1}] 
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User