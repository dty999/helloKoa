const Koa = require('koa');
const router = require('./router.js')
const views = require('koa-views')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const session = require('koa-session')

const app = new Koa();
app.keys = ['some secret hurr'];
// 配置seesion
const CONFIG = {
  key: 'koa.sess',
  maxAge: 100000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: true, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};

app.use(session(CONFIG, app));


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