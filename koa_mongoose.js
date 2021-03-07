const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/koa')

var UserSchema = mongoose.Schema({
  username: String,
  age: Number,
  status: Number
})

var User = mongoose.model('User', UserSchema, 'users')
//查找数据
// User.find({}, (err, doc) => {
//   if (err) {
//     console.log(err);
//     return
//   }
//   console.log(doc);
// })
//新增数据
// var u = new User({
//   username: 'wangwu',
//   age: 21,
//   status: 1
// })
// u.save((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('成功');
//   }
// })
//更新数据
// let one = {
//   username: '王五',
//   age: 21,
//   status: 1
// }
// User.updateOne({ username: 'wangwu' }, one, (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// })
//删除数据
// User.deleteOne({ username: '王五' }, (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }

// })