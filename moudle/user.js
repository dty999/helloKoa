var mongoose = require('./db.js')
var UserSchema = mongoose.Schema({
  name: String,
  age: {
    type: Number,
    set(params) {
      if (!params) {
        return -1
      } else if (params > 120) {
        return 120
      }
    }
  },
  // 默认参数
  status: {
    type: Number,
    default: 0

  }
})

var UserModel = mongoose.model('User', UserSchema, 'users')

module.exports = UserModel