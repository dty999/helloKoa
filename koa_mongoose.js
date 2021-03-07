var mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/koa', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.log(err);
    return
  }
  console.log('连接数据库成功');
})
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

UserModel.find({}, (err, res) => {
  console.log(res);
})

var user = new UserModel({
  name: 'String',
  age: 333,
  // status: 1
})
user.save()