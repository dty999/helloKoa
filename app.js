const Koa = require('koa');
const router = require('./router.js')
const views = require('koa-views')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')

const app = new Koa();

app.use(static(__dirname + '/static'))

app.use(views('views', { extension: 'ejs' }))

app.use(bodyParser())

app.use(async (ctx, next) => {
  // console.log('yi');
  await next()
  if (ctx.status === 404) {
    ctx.status = 404
    ctx.body = '页面找不到'
  } else {
    console.log(ctx.url);
  }
})


app.use(router.routes())
  .use(router.allowedMethods())


app.listen(3000);