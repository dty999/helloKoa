const router = require('koa-router')()

router.get('/', async (ctx) => {
  // ctx.body = 'hahha'
  await ctx.render('index')
})
  .get('/new', async ctx => {
    ctx.body = '新闻页'
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