const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema ({
  id: Number,
  name: String,
  class: String,
  img: String,
  price: Number,
  power: Number,
})

const Items = mongoose.model('Items', itemSchema)

module.exports = Items