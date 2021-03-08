var mongoose = require('./db.js')
var UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  // 默认参数
  status: {
    type: Number,
    default: 0

  }
})

var UserModel = mongoose.model('User', UserSchema, 'users')

module.exports = UserModel