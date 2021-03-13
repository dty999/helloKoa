# app.js

```js
const Koa = require("koa");
const router = require("./router.js");

const app = new Koa();

app.use(async (ctx, next) => {
  console.log(new Date());
  await next();
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
```

## router.js

```js
const router = require("koa-router")();

router
  .get("/", async (ctx) => {
    ctx.body = "hahha";
  })
  .get("/new", async (ctx) => {
    ctx.body = "新闻页";
    // let query = ctx.query
    // console.log(query);
    let req = ctx.request;
    // console.log(req);
  })
  .get("/newitem/:aid/:cid", async (ctx) => {
    // console.log(ctx.params);
    ctx.body = ctx.params.aid + "/" + ctx.params.cid;
  });

module.exports = router;
```

# 处理 404

```js
app.use(async (ctx, next) => {
  await next();
  if (ctx.status === 404) {
    ctx.status = 404;
    ctx.body = "页面找不到";
  } else {
    console.log(ctx.url);
  }
});
```

# 使用模板引擎

1. npm install --save koa-views

2. npm install --save ejs

```js
const views = require("koa-views");

app.use(views("views", { extension: "ejs" }));

await ctx.render("index");
```

# 获取 post 数据

- npm install --save koa-bodyparser

- 引入

- app.use(bodyParser())

- ctx.request.body

# 静态资源服务

```js
const static = require("koa-static");
app.use(static(__dirname + "/static"));
//可以配置多个
```

# 设置 session

- 安装引入

```js
app.keys = ["some secret hurr"];
// 配置seesion
const CONFIG = {
  key: "koa.sess",
  maxAge: 10000,
  overwrite: true /** (boolean) can overwrite or not (default true) */,
  httpOnly: true /** (boolean) httpOnly or not (default true) */,
  signed: true /** (boolean) signed or not (default true) */,
  rolling: false /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */,
  renew: true /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/,
};

app.use(session(CONFIG, app));

ctx.session.userinfo = "张三";
console.log(ctx.session.userinfo);
```

# 启动 MongoDB 数据库

- mongod --dbpath G:\data

# 使用 mongoose

```js
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://127.0.0.1:27017/koa",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("连接数据库成功");
  }
);

var UserSchema = mongoose.Schema({
  username: String,
  // age: Number,
  age: {
    type: Number,
    set(params) {
      if (!params) {
        return -1;
      } else if (params > 120) {
        return 120;
      }
    },
  },
  // 默认参数
  status: {
    type: Number,
    default: 0,
  },
});

var User = mongoose.model("User", UserSchema, "users");
//查找数据
User.find({}, (err, doc) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(doc);
});
//新增数据
var u = new User({
  username: "wangwu",
  age: 21,
  status: 1,
});
u.save((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("成功");
  }
});
//更新数据
let one = {
  username: "王五",
  age: 21,
  status: 1,
};
User.updateOne({ username: "wangwu" }, one, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
//删除数据
User.deleteOne({ username: "王五" }, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
```

# 模块化

- 创建 moudle 文件夹并 db.js 和 user.js

## db.js 连接数据库

```js
var mongoose = require("mongoose");

mongoose.connect(
  "mongodb://127.0.0.1:27017/数据库名称",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("连接数据库成功");
  }
);

module.exports = mongoose;
```

## user.js 连接数据库表,需要操作多个表请创建多个对应的 js 文件

```js
var mongoose = require("./db.js");
var UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  // 默认参数
  status: {
    type: Number,
    default: 0,
  },
});

var UserModel = mongoose.model("User", UserSchema, "users");

module.exports = UserModel;
//将model导出
```

# 聚合管道
