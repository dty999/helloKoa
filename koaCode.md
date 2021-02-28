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
