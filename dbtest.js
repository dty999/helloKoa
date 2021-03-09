var UserModel = require('./moudle/user.js')
var NewModel = require('./moudle/new.js')
// UserModel.find({}, (err, res) => {
//   console.log(res);
// })
var u = new UserModel({ name: 'ding', age: 130, status: 1 })
u.save(() => {
  console.log('保存成功');
  UserModel.find({}, (err, res) => {
    console.log(res);
  })
})



// var query = NewModel.find({ title: /^美/ }, (err, res) => {
//   if (err) {
//     console.log(err);
//     return
//   }
//   console.log(res);

// })

// var n = new NewModel({ title: '美国航母全部沉没' })
// n.save(() => {
//   console.log('保存成功');
//   NewModel.find({}, (err, res) => {
//     console.log(res);
//   })
// })
