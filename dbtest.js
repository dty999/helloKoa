var UserModel = require('./moudle/user.js')
var NewModel = require('./moudle/new.js')
UserModel.find({}, (err, res) => {
  console.log(res);
})
NewModel.find({}, (err, res) => {
  console.log(res);

})
var n = new NewModel({ title: '美国航母全部沉没' })
n.save(() => {
  console.log('保存成功');
  NewModel.find({}, (err, res) => {
    console.log(res);
  })
})
