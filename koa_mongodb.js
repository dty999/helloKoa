
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
  constructor() {
    this.connect()
  }
  connect() {
    console.log('连接数据库');
  }
  find() {
    console.log('查找数据');
  }
}


let myDb1 = Db.getInstance()
let myDb2 = Db.getInstance()
