const mgClient = require('mongodb').MongoClient


class Db {
  static selfInfo = '---------操作mongodb数据库的类-----------'
  static configInfo = {
    dbUrl: 'mongodb://localhost:27017/',
    dbName: 'koa'
  }


  static getInstance() {
    // console.log(Db.selfInfo);

    if (Db.instance) {
      return Db.instance
    } else {
      Db.instance = new Db()
      return Db.instance
    }
  }
  constructor() {
    this.db = null
    this.connect()
  }
  connect() {
    return new Promise((resolve, reject) => {
      mgClient.connect(Db.configInfo.dbUrl, (err, client) => {
        if (err) {
          reject(err)
        } else {
          var db = client.db(Db.dbName)
          this.db = db
          resolve(db)
        }
      })
    })

    // mgClient.connect(Db.configInfo.dbUrl, (err, client) => {
    //   if (err) {
    //     console.log('数据库连接失败'+err)
    //   } else {
    //     var db = client.db(Db.dbName)
    //     this.db = db
    //   }
    // })
  }
  find() {
    console.log('查找数据');
  }
  update() { }
  insert() {

  }
}


let myDb1 = Db.getInstance()
let myDb2 = Db.getInstance()
