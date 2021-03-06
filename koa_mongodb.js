const mgClient = require('mongodb').MongoClient
const configInfo = {
  dbUrl: 'mongodb://localhost:27017/',
  dbName: 'koa'
}

class Db {
  static selfInfo = '---------操作mongodb数据库的类-----------'



  static getInstance() {
    // console.log(Db.selfInfo);

    if (Db.instance) {
      return Db.instance
    } else {
      Db.instance = new Db()
      return Db.instance
    }
  }
  constructor(configInfo) {
    this.db = null
    this.configInfo = configInfo
    this.connect().then(db => this.db = db).catch(err => this.db = err)
  }
  connect() {
    return new Promise((resolve, reject) => {

      mgClient.connect(this.configInfo.dbUrl, (err, client) => {
        if (err) {
          reject(err)
        } else {
          var db = client.db(this.configInfo.dbName)
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
    if (this.db instanceof Error) {
      //连接数据库错误
    } else if (this.db === null) {
      //正在连接数据库还没返回
      this.connect()
    } else {
      //可以进行查询

    }
  }
  update() { }
  insert() {

  }
}


let myDb1 = new Db(configInfo)



