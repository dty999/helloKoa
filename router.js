const router = require('koa-router')()

router.get('/', async (ctx) => {
  // ctx.body = 'hahha'
  ctx.cookies.set('username', '1111', {
    maxAge: 60 * 60 * 1000
  })
  await ctx.render('index')
})
  .get('/new', async ctx => {
    let username = ctx.cookies.get('username')
    ctx.body = '新闻页' + username
    let req = ctx.request
  })
  .get('/newitem/:aid/:cid', async ctx => {
    ctx.body = ctx.params.aid + '/' + ctx.params.cid
  })

router.post('/doAdd', async (ctx) => {
  console.log(ctx.request.body);
  ctx.body = ctx.request.body
})


module.exports = router