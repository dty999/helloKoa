const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/koa')

var UserSchema = mongoose.Schema({
  username: String,
  age: Number,
  status: Number
})

var User = mongoose.model('User', UserSchema, 'users')

User.find({}, (err, doc) => {
  if (err) {
    console.log(err);
    return
  }
  console.log(doc);
})
