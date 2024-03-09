const mongoose = require('mongoose')
const Schema = mongoose.Schema


const reviewSchema = Schema({
    text: String,
    item: String,
    poster: String,
})

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
    review: [reviewSchema],
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)
const Review = mongoose.model('Review', reviewSchema)

module.exports = {User, Review}