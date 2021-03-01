const router = require('koa-router')()

router.get('/', async (ctx) => {
  // ctx.body = 'hahha'
  ctx.cookies.set('username', '1111', {
    maxAge: 60 * 60 * 1000
  })
  console.log(ctx.session.userinfo);
  console.log(ctx.session);

  await ctx.render('index')
})
  .get('/new', async ctx => {
    let username = ctx.cookies.get('username')
    console.log(ctx.session.userinfo);

    ctx.body = '新闻页' + username
    let req = ctx.request
  })
  .get('/newitem/:aid/:cid', async ctx => {
    ctx.body = ctx.params.aid + '/' + ctx.params.cid
  })
  .get('/login', async (ctx) => {
    ctx.session.userinfo = '张三'
    ctx.body = '登陆成功'
  })

router.post('/doAdd', async (ctx) => {
  console.log(ctx.request.body);
  ctx.body = ctx.request.body
})


module.exports = router