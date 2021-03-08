var mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/koa', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.log(err);
    return
  }
  console.log('连接数据库成功');
})

module.exports = mongoose