var mongoose = require('./db.js')
var NewSchema = mongoose.Schema({
  title: String
})

var NewModel = mongoose.model('New', NewSchema, 'news')

module.exports = NewModel